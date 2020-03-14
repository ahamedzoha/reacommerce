import ReactGa from "react-ga"

export const init_google_analytics = () => {
  console.log("Google Analytics Initialized")
  ReactGa.initialize("UA-41008872-5")
}

export const log_page_view = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGa.set({ page: window.location.pathname })
  ReactGa.pageview(window.location.pathname)
}
