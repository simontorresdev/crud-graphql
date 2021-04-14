import { gql } from '@apollo/client'

export const CREATE_CLIENT = gql`
  mutation CreateClient (
    $firstName: String!, 
    $lastName: String!, 
    $cedula: String, 
    $cellphone: String, 
    $streetAddress: String!, 
    $cityId: Int, 
    $stateId: Int
    ){
    createClient(
      input: { 
        firstName: $firstName, 
        lastName: $lastName, 
        cedula: $cedula, 
        cellphone: $cellphone, 
        address: { 
          streetAddress: $streetAddress, 
          cityId: $cityId, 
          stateId: $stateId 
        } 
      })
    {
      __typename
        ... on Client{
          id 
          firstName 
          lastName
          cedula
          cellphone
          address
          city
          state{
            name
          }
        }
      __typename
      ... on ValidationErrors{
        message
        errors{
          message
          field
        }
      }
    }
  }
`

export const UPDATE_CLIENT = gql`
  mutation UpdateClient (
      $id: Int!,
      $firstName: String!, 
      $lastName: String!, 
      $cedula: String, 
      $cellphone: String, 
      $streetAddress: String!, 
      $cityId: Int, 
      $stateId: Int
    ){
    updateClient(
      id: $id,
      input: { 
        firstName: $firstName, 
      lastName: $lastName, 
        cedula: $cedula, 
        cellphone: $cellphone, 
        address: { 
          streetAddress: $streetAddress, 
          cityId: $cityId, 
          stateId: $stateId 
        } 
      })
    {
      __typename
        ... on Client{
          id 
          firstName 
          lastName
          cedula
          cellphone
          address
          city
          state{
            name
          }
        }
      __typename
      ... on ValidationErrors{
        message
        errors{
          message
          field
        }
      }
    }
  }
`
