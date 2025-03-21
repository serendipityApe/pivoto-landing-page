export function getLastActiveTimeString(lastActiveTime: number): string | null {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }
  if (lastActiveTime) {
    const millisecondsAgo = Date.now() - lastActiveTime;
    const secondsAgo = Math.floor(millisecondsAgo / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (secondsAgo < 60) {
      return secondsAgo + (secondsAgo === 1 ? " second ago" : " seconds ago");
    } else if (minutesAgo < 60) {
      return minutesAgo + (minutesAgo === 1 ? " minute ago" : " minutes ago");
    } else if (hoursAgo < 24) {
      return hoursAgo + (hoursAgo === 1 ? " hour ago" : " hours ago");
    } else if (daysAgo === 1) {
      return "1 day ago";
    } else if (daysAgo > 1) {
      const date = new Date(lastActiveTime);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // getMonth returns 0-11
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedDate = `${year}-${padTo2Digits(month)}-${padTo2Digits(
        day
      )} ${padTo2Digits(hour)}:${padTo2Digits(minute)}`;
      return formattedDate;
    }
  }
  return null;
}

export function corsTranslate(text: string | undefined): string | undefined {
  return text?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function getFaviconUrl(url: string): string {
  if (process.env.PLASMO_BROWSER === "firefox") {
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
      url
    )}&size=32`;
  }
  return `chrome-extension://xxx/_favicon/?pageUrl=${encodeURIComponent(
    url
  )}&size=32`;
}

export function processDomain(url: string): string | null {
  return url ? new URL(url).hostname : null;
}

export function processDomains(
  actions: {
    [key: string]: string;
    domain: string;
    url: string;
  }[]
): string[] {
  const uniqueDomains = new Set<string>();
  const processed: string[] = [];

  actions.forEach((action) => {
    let domain = action?.domain;
    if (!domain && action?.url) {
      domain = processDomain(action.url) as string;
    }

    if (domain?.startsWith("www.")) {
      const nonWwwDomain = domain.substring(4);
      uniqueDomains.add(domain);
      uniqueDomains.add(nonWwwDomain);
    } else {
      uniqueDomains.add(domain || action?.url || "");
    }
  });

  uniqueDomains.forEach((domain) => processed.push(domain));

  return processed;
}

export function promisify<T>(
  fn: (...args: any[]) => void
): (...args: any[]) => Promise<T> {
  return function (...args: any[]): Promise<T> {
    return new Promise<T>((resolve) => {
      fn(...args, (result: T) => {
        resolve(result);
      });
    });
  };
}
