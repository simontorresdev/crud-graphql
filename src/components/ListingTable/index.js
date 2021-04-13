import React, { useState } from 'react'
import { PopUp } from '../PopUp'
import { CreateOrEdit } from '../CreateOrEdit'

export const ListingTable = ({ client, refetch }) => {
  const [open, setOpen] = useState(false)
  const { firstName, lastName, cellphone, cedula, city, id, address } = client

  const closeModal = () => setOpen(false)

  return (
    <tr>
      <td>{firstName} {lastName}</td>
      <td>{cellphone}</td>
      <td>{cedula}</td>
      <td>{city}</td>
      <td>
        <button type='button' onClick={() => setOpen(true)}>Editar</button>
      </td>
      <PopUp open={open} onClose={closeModal} closeOnDocumentClick>
        <CreateOrEdit
          refetch={refetch}
          setOpen={setOpen}
          type='edit'
          id={id}
          firstname={firstName}
          lastName={lastName}
          cedula={cedula}
          cellphone={cellphone}
          address={address}
          state={client.state.id}
          city={city}
        />
      </PopUp>
    </tr>
  )
}
