import styled from 'styled-components'

export const StyledTableClients = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 60px auto;
  & table{
    width: 100%;
    box-shadow: rgba(10, 75, 109, 0.08) 0px 3px 16px;
    border-radius: 4px;
    overflow: hidden;
}
  }
  & table thead{
    background: #5b2ad0;
    color: #fff;
  }
  & table thead th{
    padding: 15px;
    font-weight: 600;
  }
  & table thead th:nth-child(1),
  & table tbody td:nth-child(1){
    padding-left: 20px;
  }
  & table thead th:last-child,
  & table tbody td:last-child{
    padding-right: 20px;
  }
  & table th,
  & table td{
    text-align: left;
  }
  & table tbody td{
    padding: 15px;
  }
  & table tbody td:last-child{
    padding: 7px 20px 7px 15px;
  }
  & table tbody tr{
    border-bottom: 1px solid rgb(219,219,219);
  }
`
