import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import DiscordIcon from "../assets/icons/discord.svg";
import FuzzyFooter from "./FuzzyFooter";

export const Footer = () => {
  return (
    <>
    <footer className="z-10 relative w-full py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <div className="text-center">
            {" "}
            2024 Pivoto All rights are reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            {/* <li>
              <a
                href="https://x.com/LeyuanW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
            </li> */}
            {/* <li>
              <LinkedInIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li> */}
            <li>
              <a
                href="https://discord.gg/QS7rty8d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div className="w-full relative z-0" style={{
      '--distortion-aspect': '5.7',
      '--padding-y': '16px',
      paddingBottom: 'calc((min(100vw, 1600px) + 2 * var(--padding-y)) / var(--distortion-aspect))',
    } as React.CSSProperties}>
      <FuzzyFooter  baseIntensity={0} fontSize={"clamp(8rem, 20vw, 25rem)"}>PIVOTO</FuzzyFooter>
    </div>
    </>
  );
};
