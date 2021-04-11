import styled from 'styled-components'

export const StylesControlsTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  & section {
    display: flex;
    margin-right: 10px;
    align-items: center;
  }
  & section ul{
    display: flex;
    margin-left: 20px;
    align-items: center;
  }
  & section ul li{
    margin: 0 5px;
    padding: 7px 10px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid #5b2ad0;
    color: #5b2ad0;
    cursor: pointer;
    transition: .3s;
  }
  & section ul li.active{
    background: #5b2ad0;
    color: #fff;
  }
`
