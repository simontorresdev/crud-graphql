import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://543-task-logistics-technical-abstraction.dev.elenas.la/gql/',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiKzU3MzA1NzE5OTk5NSIsImlhdCI6MTYxODA2NTU2MH0.Tjk82iTgqop3RiuNQ_6gkRPi_enuFMknWDyoZna7jww'
  }
})
