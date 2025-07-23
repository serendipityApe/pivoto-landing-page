import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Powerful Browser Navigation & Tab Management
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Experience <strong>seamless tab management</strong> and{" "}
            <strong>enhanced productivity</strong> with Pivoto&apos;s intuitive
            features designed for modern browsing. Our{" "}
            <strong>Chrome extension</strong> revolutionizes how you navigate
            between tabs, search your browsing history, and manage multiple
            browser windows with
            <strong>lightning-fast keyboard shortcuts</strong>.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">
                ⚡ Lightning Fast
              </h3>
              <p className="text-sm text-white/70">
                Instant tab switching with Cmd+Q
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">🔍 Smart Search</h3>
              <p className="text-sm text-white/70">
                @ commands for history & bookmarks
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">🪟 Cross-Window</h3>
              <p className="text-sm text-white/70">
                Navigate across browser windows
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">⌨️ Shortcuts</h3>
              <p className="text-sm text-white/70">
                Customizable keyboard commands
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div> */}
      </div>
    </div>
  );
};
