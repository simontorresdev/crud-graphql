import logo from './logo.svg'
import { useQuery, gql } from '@apollo/client'
import './App.css'

const GET_CLIENTS = gql`
  query{
    clientsSearch{
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

function App () {
  const { loading, error, data } = useQuery(GET_CLIENTS)

  return (
    <div className='App'>
      {console.log(data, 'data')}
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
