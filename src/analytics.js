import ReactGA from "react-ga4";

// Replace with your real GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-SN0HZPJTR9";

ReactGA.initialize(GA_MEASUREMENT_ID);

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
