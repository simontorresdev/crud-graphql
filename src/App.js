import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CLIENTS } from './graphql/querys'
import { TableClients } from './components/TableClients'
import { Header } from './components/Header'
import { ControlsTable } from './components/ControlsTable'

function App () {
  const [page, setPage] = useState(0)
  const { loading, error, data, refetch } = useQuery(GET_CLIENTS, { variables: { page: page } })

  return (
    <>
      <Header />
      {loading &&
        <p>Cargando...</p>}
      {error &&
        <p>Error...</p>}
      {data &&
        <>
          <ControlsTable pages={data.clientsSearch.totalPages} setPage={setPage} refetch={refetch} currentPage={data.clientsSearch.currentPage} />
          <TableClients data={data.clientsSearch} refetch={refetch} />
        </>}
    </>
  )
}

export default App
