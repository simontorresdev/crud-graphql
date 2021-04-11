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
      }
    }
  }
`
