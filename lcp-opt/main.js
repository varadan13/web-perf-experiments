export const isBrowser = typeof window !== "undefined";

export const pageview = () => {
  if (isBrowser) {
    window.fbq("track", "PageView");
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  if (isBrowser) {
    window.fbq("track", name, options);
  }
};
