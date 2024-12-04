import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};