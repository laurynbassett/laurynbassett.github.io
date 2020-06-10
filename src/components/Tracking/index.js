import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID)
}

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}
