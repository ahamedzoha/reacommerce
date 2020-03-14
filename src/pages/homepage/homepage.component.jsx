import React from "react"
import "./homepage.styles.scss"
//import { Link } from 'react-router-dom'

import { Directory } from "../../components/directory/directory.component"

export const HomePage = () => {
  //   useEffect(() => {
  //     ReactGa.initialize("UA-41008872-4")

  //     // For Pageview
  //     ReactGa.pageview(window.location.pathname + window.location.search)
  //   }, [])

  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}
