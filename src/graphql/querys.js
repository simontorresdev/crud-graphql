import { gql } from '@apollo/client'

export const GET_CLIENTS = gql`
  query ClientSearch($page: Int){
    clientsSearch(page: $page){
      currentPage
      totalPages
      resultsPerPage
      results{
        id,
        firstName
        lastName
        cedula
        address
        city
        cellphone
        credit
        state{
          id
          name
          cities{
            id
            name
          }
        }
      }
    }
  }
`

export const GET_STATES = gql`
  query States{
    states{
      id
      name
      shortCode
      cities{
        displayName
        shortCode
        id
      }
    }
  }
`
