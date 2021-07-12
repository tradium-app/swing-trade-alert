export const schema = gql`
  type User {
    _id: String!
    name: String!
    authProvider: String
    watchList: [Stock]
    fcmToken: String
    countryCode: String
    timeZone: String
    ipAddress: String
    createdDate: String
    modifiedDate: String
  }

  type Stock {
    _id: String!
    symbol: String!
    company: String
    price: Float
    changePercent: Float
    marketCap: Float
    peRatio: Float
    week52High: Float
    week52Low: Float
    ytdChangePercent: Float
    modifiedDate: String
  }

  type Query {
    getWatchList: [Stock]
  }
`
