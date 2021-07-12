import React from 'react'
import { Helmet } from 'react-helmet'
import WatchListCell from 'src/components/WatchListCell'

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swing Trade Alerts</title>
      </Helmet>
      <div className="page-content">
        <WatchListCell />
      </div>
    </React.Fragment>
  )
}

export default HomePage
