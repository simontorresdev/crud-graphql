import { ApolloClient, InMemoryCache } from '@apollo/client'
require('dotenv').config()

const link = `https://${process.env.REACT_APP_URL}/gql/`
const token = process.env.REACT_APP_TOKEN

// Creamos el cliente para envolver la app y consumir los datos del api

export const client = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Token ${token}`
  }
})
