import cls from "classnames";
import {
  SetStateAction,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import TagInputField from "../Input";
import Item from "../Item";
import KeyTag from "../KeyTag";
import { ADDITIONAL_RESULTS_LENGTH, tagKeys, TagStartKey } from "../constants";
import type { Action } from "../types";
import { processDomains } from "../utils";

interface CommandPaletteProps {
  onAction: (action: Action, query: string) => void;
  onSearch: (query: string) => void;
  onGetActions: () => void;
  onSearchBookmarks: (query: string) => void;
  onSearchHistory: (query: string) => void;
  onAiCommand: (action: Action, query: string) => void;
  onRemoveAction: (action: Action) => void;
  isOpen: boolean;
  onClose: () => void;
  actions: Action[];
  shortcuts: Array<{ name: string; shortcut: string[] }>;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

function CommandPalette({
  onAction,
  onSearch,
  onGetActions,
  onSearchBookmarks,
  onSearchHistory,
  onAiCommand,
  onRemoveAction,
  isOpen,
  onClose,
  actions: originActions,
  shortcuts,
  setIsOpen,
}: CommandPaletteProps) {
  const isAltTimer = useRef(null);

  const [keyStates, setKeyStates] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [trieData, setTrieData] = useState([]);
  const [InputDisabled, setInputDisabled] = useState(false);
  const [filteredActions, setFilteredActions] = useState([]);

  const isTagMode = useMemo(() => tags.length > 0, [tags]);
  const canActiveActions = useMemo(
    () => !searchValue && !isTagMode && !InputDisabled,
    [searchValue, isTagMode, InputDisabled]
  );

  const navigateText = useMemo(() => {
    if (InputDisabled) {
      const shortcut = shortcuts.find((s) => s.name === "cycle-tab").shortcut;
      return (
        <div
          id="pivoto-arrows"
          className="text-text3 dark:text-text3Dark font-medium float-right"
        >
          Hold
          <KeyTag>{shortcut[0]}</KeyTag>
          and press
          <KeyTag>{shortcut[1]}</KeyTag> to navigate
        </div>
      );
    }
    return (
      <div
        id="pivoto-arrows"
        className="text-text3 dark:text-text3Dark font-medium float-right"
      >
        Use arrow keys <KeyTag>↑</KeyTag>
        <KeyTag>↓</KeyTag> to navigate
      </div>
    );
  }, [shortcuts, InputDisabled]);

  const enterText = useMemo(() => {
    if (InputDisabled) {
      const shortcut = shortcuts.find((s) => s.name === "cycle-tab").shortcut;
      return (
        <span>
          Release <KeyTag>{shortcut[0]}</KeyTag>
        </span>
      );
    }
    return (
      <span>
        Select <KeyTag>⏎</KeyTag>
      </span>
    );
  }, [shortcuts, InputDisabled]);

  function itemActiveUp() {
    setActiveIndex((pre) => (pre > 0 ? pre - 1 : filteredActions.length - 1));
  }

  function itemActiveDown() {
    setActiveIndex((pre) => (pre < filteredActions.length - 1 ? pre + 1 : 0));
  }

  function handleAction(index: number) {
    function clearRunTime() {
      clearTimeout(isAltTimer.current);
      isAltTimer.current = null;
      onClose();
      setSearchValue("");
    }

    const action = filteredActions[index];

    if (action.type === "ai") {
      onAiCommand(action, searchValue);
      clearRunTime();
      return;
    }

    clearRunTime();
    if (action.action === "bookmark" || action.action === "history") {
      window.open(action.url);
    } else {
      onAction(action, searchValue);
    }
  }

  const deferredIsTagMode = useDeferredValue(isTagMode);
  useEffect(() => {
    setTrieData([
      ...tagKeys.map((key) => TagStartKey + key),
      ...processDomains(filteredActions),
    ]);
  }, [filteredActions]);
  console.log("trieData", trieData);
  useEffect(() => {
    if (tags.includes("bookmark")) {
      onSearchBookmarks(searchValue);
    } else if (tags.includes("history")) {
      onSearchHistory(searchValue);
    } else if (tags.includes("ai")) {
      // Handle AI mode
    } else if (tags.includes("actions")) {
      onSearch(searchValue);
    } else if (deferredIsTagMode === true && !searchValue) {
      setActiveIndex(0);
      onGetActions();
    }
  }, [
    tags,
    searchValue,
    deferredIsTagMode,
    onSearch,
    onSearchBookmarks,
    onSearchHistory,
    onGetActions,
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key.toLowerCase());
      if (e.metaKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        !isOpen && setIsOpen(true);
        return;
      }
      if (
        isOpen &&
        ["ArrowUp", "ArrowDown", "Escape", "Enter", "Tab"].includes(e.key)
      ) {
        e.preventDefault();

        setKeyStates((prevKeyStates) => ({
          ...prevKeyStates,
          [e.key]: true,
        }));
      }
      switch (e.key) {
        case "ArrowUp":
          itemActiveUp();
          break;
        case "ArrowDown":
          itemActiveDown();
          break;
        case "Escape":
          if (isOpen) {
            onClose();
            isAltTimer.current = null;
          }
          break;
        case "Enter":
          if (isOpen) {
            handleAction(activeIndex);
          }
          break;
        case "Tab":
          if (isOpen && canActiveActions) {
            setTags(["actions"]);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      const newKeyStates = { ...keyStates, [e.key]: false };
      if (isOpen && ["Alt", "Shift"].includes(e.key)) {
        e.preventDefault();
        setKeyStates(newKeyStates);
      }

      if (!e.altKey && isAltTimer.current) {
        if (isOpen) {
          if (filteredActions.length) handleAction(activeIndex);
        }
        clearTimeout(isAltTimer.current);
        isAltTimer.current = null;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    keyStates,
    isOpen,
    filteredActions,
    activeIndex,
    canActiveActions,
    handleAction,
    itemActiveDown,
    itemActiveUp,
    onClose,
    setIsOpen,
  ]);

  useEffect(() => {
    const fetchFilteredActions = async () => {
      if (isTagMode) {
        setFilteredActions(originActions);
        return;
      }

      if (searchValue.length > 0) {
        const value = searchValue.toLowerCase();
        let _filteredActions = originActions.filter((action) => {
          if (!action) return false;
          return (
            action.url?.toLowerCase().includes(value) ||
            action.title?.toLowerCase().includes(value)
          );
        });

        if (_filteredActions.length < 3) {
          setFilteredActions(_filteredActions);
        } else {
          setFilteredActions(_filteredActions);
        }
      } else {
        setFilteredActions(originActions);
      }
    };

    fetchFilteredActions();
  }, [originActions, searchValue, isTagMode]);

  return (
    <>
      <div
        id="pivoto-extension"
        className={cls("block dark", {
          hidden: !isOpen,
        })}
      >
        <div
          id="pivoto-wrap"
          className="absolute w-window h-3/4 border border-transparent rounded-md mx-auto my-auto top-0 right-0 bottom-0 left-0 z-10 transition-all duration-200 pointer-events-auto"
        >
          <div
            id="pivoto"
            className="shadow-lg box-content absolute w-full bg-background dark:bg-backgroundDark border border-border dark:border-borderDark rounded-lg top-0 left-0 z-max transition-all duration-200 ease-custom block"
          >
            <div id="pivoto-search">
              <TagInputField
                tags={tags}
                setTags={setTags}
                trieData={trieData}
                ref={(e) => e?.focus()}
                disabled={InputDisabled}
                value={searchValue}
                onChange={(value) => {
                  setSearchValue(value);
                  setActiveIndex(0);
                }}
                showActionsSuggestion={canActiveActions}
              />
            </div>

            <div
              id="pivoto-list"
              className={cls(
                "w-full overflow-y-scroll h-full max-h-[400px] min-h-[400px] border-t-1 border-solid border-border dark:border-borderDark relative scrollbar scrollbar-track-white scrollbar-thumb-select dark:scrollbar-track-backgroundDark dark:scrollbar-thumb-preSelectDark scrollbar-track-border-0"
              )}
            >
              {filteredActions.map((action, index) => (
                <Item
                  enterText={enterText}
                  onClick={() => {
                    handleAction(index);
                  }}
                  isActive={activeIndex === index}
                  key={action.id || action.desc}
                  {...action}
                />
              ))}
            </div>
            <div
              id="pivoto-footer"
              className="h-12 text-sm leading-12 border-t border-border dark:border-borderDark w-full px-6 mr-auto flex items-center justify-between"
            >
              <div
                id="pivoto-results"
                className="text-text3 dark:text-text3Dark font-medium flex items-center gap-2"
              >
                {filteredActions.length} results
              </div>
              {navigateText}
            </div>
          </div>
        </div>
        <div
          id="pivoto-overlay"
          className="absolute top-0 left-0 bg-[#0003] backdrop-blur-[1px] w-full h-full"
          onClick={() => {
            onClose();
            if (isAltTimer.current) isAltTimer.current = null;
          }}
        ></div>
      </div>
    </>
  );
}

export default CommandPalette;
