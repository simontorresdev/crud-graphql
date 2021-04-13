import React from 'react'
import { ContainerLoader } from './styles'

export const Loader = (props) => {
  return (
    <ContainerLoader {...props}>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </ContainerLoader>
  )
};
