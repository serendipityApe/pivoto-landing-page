import cls from "classnames";
import React, { memo, useEffect, useRef } from "react";

import {
  corsTranslate,
  getFaviconUrl,
  getLastActiveTimeString,
  processDomain,
} from "../utils";
import { CHROME_GROUP_COLORS } from "../constants";
import type { Action } from "../types";

type ItemProps = {
  isActive: boolean;
  onClick: () => void;
  style?: any;
  isTagMode?: boolean;
  enterText: React.ReactNode;
  [key: string]: any;
} & Action;

const Item = memo(
  ({
    isActive,
    isTagMode = false,
    title,
    desc,
    url,
    lastActiveTime,
    lastVisitTime,
    domain,
    discarded,
    onClick,
    style,
    groupTitle,
    groupColor,
    enterText,
    CustomIcon,
    favIconUrl,
    action,
  }: ItemProps) => {
    const lastText = getLastActiveTimeString(lastActiveTime || lastVisitTime);
    domain = domain || (processDomain(url) as any);
    let tmpDesc = corsTranslate(desc);
    if ((!desc || desc === "Chrome tab" || desc === "Bookmark") && domain) {
      tmpDesc = domain;
    }
    const itemRef = useRef(null);
    useEffect(() => {
      if (!isActive || !itemRef?.current) return;
    }, [isActive]);

    const isDisplayTypeTag =
      !isTagMode && (action === "history" || action === "bookmark");
    const finallyDesc = [groupTitle, tmpDesc, lastText].filter(Boolean);
    return (
      <>
        <div
          style={style}
          onClick={onClick}
          ref={itemRef}
          className={cls(
            "h-16 w-full flex items-center cursor-pointer hover:bg-preSelect hover:dark:bg-preSelectDark",
            {
              "bg-select dark:bg-selectDark relative before:h-full before:absolute before:block before:w-1 before:bg-purple-500 dark:before:bg-purple-600":
                isActive,
            }
          )}
          data-type="tab"
        >
          <span className="flex ml-6 items-center justify-center w-12 h-12 bg-bgFavicon dark:bg-bgFaviconDark rounded-lg shrink-0">
            <span
              className={cls({
                "relative w-7 h-7 rounded-full bg-center bg-cover flex justify-center items-center opacity-70":
                  discarded,
                "before:absolute before:top-0 before:bottom-0 before:left-0 before:right-1/2 before:border-2 before:border-solid before:border-discarded before:dark:border-gray-800 before:rounded-tl-[80px] before:rounded-bl-[80px] before:border-r-0":
                  discarded,
                "after:absolute after:top-0 after:bottom-0 after:right-0 after:left-1/2 after:border-2 after:border-dashed after:border-discarded after:dark:border-gray-800 after:rounded-tr-[80px] after:rounded-br-[80px] after:border-l-0":
                  discarded,
              })}
            >
              {CustomIcon ? (
                CustomIcon
              ) : (
                <img
                  src={favIconUrl}
                  alt="favicon"
                  className={cls("w-5 h-5", {
                    "w-3 h-3 rounded-full overflow-hidden": discarded,
                  })}
                />
              )}
            </span>
          </span>
          <div className="ml-4 h-12 text-left flex-1 flex flex-col justify-between">
            <div className="text-text2 dark:text-text2Dark  text-base font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[450px]">
              {title}
            </div>
            <div className="text-text3 dark:text-text3Dark  text-sm whitespace-nowrap overflow-hidden overflow-ellipsis flex items-center gap-2 max-w-[450px]">
              {isDisplayTypeTag && (
                <span className="font-medium text-sky-600">
                  {action.charAt(0).toUpperCase() + action.slice(1)}
                  <span className="font-normal"> • </span>
                </span>
              )}
              {groupColor && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor:
                      CHROME_GROUP_COLORS[
                        groupColor as keyof typeof CHROME_GROUP_COLORS
                      ] || groupColor,
                  }}
                ></span>
              )}
              <span>{finallyDesc.join(" • ")}</span>
            </div>
          </div>
          <div
            className={cls(
              "text-text3 dark:text-text3Dark  text-sm font-medium gap-2 items-center mr-4 shrink-0",
              {
                block: isActive,
                "opacity-0": !isActive,
              }
            )}
          >
            {enterText}
          </div>
        </div>
      </>
    );
  }
);

Item.displayName = "Item";

export default Item;
