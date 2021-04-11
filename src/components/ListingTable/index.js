import React from 'react'

export const ListingTable = ({ client }) => {
  const { firstName, lastName, cellphone, cedula, city } = client
  return (
    <tr>
      <td>{firstName} {lastName}</td>
      <td>{cellphone}</td>
      <td>{cedula}</td>
      <td>{city}</td>
      <td>
        <button type='button' onClick={() => console.log('edit')}>Editar</button>
      </td>
    </tr>
  )
}
