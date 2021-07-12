import React from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import { useQuery } from '@apollo/client'
// import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import Intro from '../Intro/Index'
import TopPolls from '../TopTrendingPolls/Index'
import TopHashtags from '../TopTrendingTags/Index'
// import PollCard from '../../components/Poll/PollCard'

export const Loading = () => <div>Loading...</div>

export const Success = ({ getWatchList, authUser }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swing Trade Alerts - lazy swing traders</title>
      </Helmet>
      <div className="page-content">
        <Container>
          <Row>
            <Col xl="8">
              {getWatchList.map((stock, index) => (
                <div key={index}>some some</div>
              ))}
            </Col>
            <Col xl="4">
              {!authUser && <Intro />}
              <TopPolls />
              <TopHashtags />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export const QUERY = gql`
  query getWatchList {
    getWatchList {
      _id
      symbol
      price
      changePercent
      marketCap
      peRatio
      week52High
      week52Low
      ytdChangePercent
    }
  }
`
