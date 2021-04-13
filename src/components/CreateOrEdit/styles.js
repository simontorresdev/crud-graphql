import styled from 'styled-components'

export const StylesCreateOrEdit = styled.div`
  max-width: 500px;
  width: 100%;
  position: relative;
  & form .twoCol{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 20px;
  }
  & label{
    display: flex;
    flex-direction: column;
    min-height: 72px;
  }
  & input{
    background: #ededed;
    color: #525252;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    border: 0;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance:textfield;
  }
  & button{
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & select {
    background: #ededed;
    border: none;
    font-size: 14px;
    height: 30px;
    padding: 5px;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 5px;
  }
`

export const ContainerErrors = styled.ul`
  color: rgb(169, 68, 66);
  background-color: rgb(242, 222, 222);
  border-color: rgb(235, 204, 209);
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 20px;
  & li {
    list-style: none;
    line-height: 20px;
  }
`
