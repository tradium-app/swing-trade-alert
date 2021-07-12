import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import Intro from '../Intro/Index'
// import PollCard from '../../components/Poll/PollCard'

export const Loading = () => <div>Loading...</div>

export const Success = ({ getWatchList, authUser }) => {
  return (
    <Container>
      <Row>
        <Col xl="12">{!authUser && <Intro />}</Col>
        <Col xl="12">
          {getWatchList.map((stock, index) => (
            <div key={index}>some some</div>
          ))}
        </Col>
      </Row>
    </Container>
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
