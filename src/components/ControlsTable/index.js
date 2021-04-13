import React, { useState } from 'react'
import { StylesControlsTable } from './styles'
import { PopUp } from '../PopUp'
import { CreateOrEdit } from '../CreateOrEdit'

export const ControlsTable = ({ pages, setPage, refetch, currentPage }) => {
  const pagination = []
  const [open, setOpen] = useState(false)

  for (let i = 0; i < pages; i++) {
    pagination.push(<li onClick={() => handlePaginacion(i)} key={i} className={currentPage === i ? 'active' : ''}>{i + 1}</li>)
  }

  const handlePaginacion = (numberPage) => {
    setPage(numberPage)
    refetch()
  }

  const closeModal = () => setOpen(false)

  return (
    <StylesControlsTable>
      {console.log(pages, 'pages')}
      <section>
        Páginas
        <ul>
          {pagination}
        </ul>
      </section>
      <button type='button' onClick={() => setOpen(true)}>Crear nuevo cliente</button>
      <PopUp open={open} onClose={closeModal} closeOnDocumentClick>
        <CreateOrEdit refetch={refetch} setOpen={setOpen} />
      </PopUp>
    </StylesControlsTable>
  )
}
