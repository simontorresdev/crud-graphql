import React from 'react'
import { ListingTable } from '../ListingTable'
import { StyledTableClients } from './styles'

export const TableClients = ({ data, refetch }) => {
  const { results } = data
  return (
    <StyledTableClients>
      <table>
        <thead>
          <tr>
            <th>Nombre y apellido</th>
            <th>Teléfono</th>
            <th>Cédula</th>
            <th>Ciudad</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {results.map(client => (
            <ListingTable key={client.id} client={client} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </StyledTableClients>
  )
}
