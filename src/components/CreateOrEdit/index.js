import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { StylesCreateOrEdit, ContainerErrors } from './styles'
import { GET_STATES } from '../../graphql/querys'
import { client } from '../../graphql/client'
import { useMutation } from '@apollo/client'
import { CREATE_CLIENT, UPDATE_CLIENT } from '../../graphql/mutations'
import { Loader } from '../Loader'
import { ModalSuccess } from '../ModalSuccess'

export const CreateOrEdit = (props) => {
  const {
    type = 'create',
    id = '',
    firstname = '',
    lastName = '',
    cedula = '',
    cellphone = '',
    address = '',
    state = 2,
    city = '',
    refetch,
    setOpen
  } = props

  const [states, setStates] = useState(null)
  const [cities, setCities] = useState(null)
  const [activeCity, setActiveCity] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [createClient] = useMutation(CREATE_CLIENT)
  const [updateClient] = useMutation(UPDATE_CLIENT)

  useEffect(() => {
    client
      .query({
        query: GET_STATES
      })
      .then(result => setStates(result.data.states))
  }, [])

  const handleDepartment = (event) => {
    handleCities(event.target.value)
  }

  const handleCities = (valueActiveState) => {
    const activeCities = states.filter(state => state.id === parseInt(valueActiveState))
    const activeCity = activeCities[0].cities.filter(town => town.displayName === city)

    console.log(activeCities, 'active')
    console.log(activeCity, 'active city')

    setCities(activeCities[0].cities)
    if (activeCity[0] !== undefined) {
      setActiveCity(activeCity[0].id)
    }
  }

  useEffect(() => {
    if (states !== null) {
      handleCities(state)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states])

  const onSubmit = data => {
    if (type === 'create') {
      submitCreateClient(data)
    } else {
      submitUpdateClient(data)
    }
  }

  const submitCreateClient = async data => {
    setLoading(true)
    const response = await createClient(
      {
        variables: {
          firstName: data.firstName,
          lastName: data.lastName,
          cedula: data.cedula,
          cellphone: data.cellphone,
          streetAddress: data.address,
          cityId: parseInt(data.city),
          stateId: parseInt(data.state)
        }
      })
    console.log(data, 'FORMULARIO')
    console.log(response, 'response')
    if (response.data.createClient.__typename === 'Client') {
      refetch()
      ModalSuccess('Cliente creado con éxito')
      setOpen(false)
    } else {
      setError(response.data.createClient.errors[0].message)
    }
    setLoading(false)
  }

  const submitUpdateClient = async data => {
    setLoading(true)
    const response = await updateClient(
      {
        variables: {
          id: id,
          firstName: data.firstName,
          lastName: data.lastName,
          cedula: data.cedula,
          cellphone: data.cellphone,
          streetAddress: data.address,
          cityId: parseInt(data.city),
          stateId: parseInt(data.state)
        }
      })
    console.log(data, 'FORMULARIO')
    console.log(response, 'response')
    if (response.data.updateClient.__typename === 'Client') {
      refetch()
      ModalSuccess('Cliente actualizado con éxito')
      setOpen(false)
    } else {
      setError(response.data.updateClient.errors[0].message)
    }
    setLoading(false)
  }

  return (
    <StylesCreateOrEdit>
      <form onSubmit={handleSubmit(onSubmit)}>
        {console.log(states, 'states')}
        {console.log(cities, 'cities')}
        <div className='twoCol'>
          <label htmlFor='firstname'>
            Nombre
            <input {...register('firstName', { required: true })} placeholder='Nombre' id='firstname' defaultValue={firstname} />
          </label>
          <label htmlFor='lastName'>
            Apellido
            <input {...register('lastName', { required: true })} placeholder='Apellido' id='lastName' defaultValue={lastName} />
          </label>
        </div>
        <div className='twoCol'>
          <label htmlFor='cedula'>
            Cédula
            <input type='number' {...register('cedula', { required: true })} placeholder='Cédula' id='cedula' defaultValue={cedula} />
          </label>
          <label htmlFor='cellphone'>
            Número de télefono
            <input {...register('cellphone', { required: true })} placeholder='Télefono' id='cellphone' defaultValue={cellphone} />
          </label>
        </div>
        <div className='twoCol'>
          <label htmlFor='address'>
            Dirección
            <input {...register('address', { required: true })} placeholder='Dirección' id='address' defaultValue={address} />
          </label>
          <label htmlFor='state'>
            Departamento
            {states &&
              <select id='state' {...register('state')} defaultValue={state} onChange={handleDepartment}>
                {states.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>}
          </label>
        </div>

        <label htmlFor='city'>
          Ciudad
          {cities &&
            <select id='city' {...register('city')} defaultValue={activeCity}>
              {cities.map((town) => (
                <option key={town.id} value={town.id}>
                  {town.displayName}
                </option>
              ))}
            </select>}
        </label>

        {(Object.entries(errors).length !== 0 || error) &&
          <ContainerErrors>
            {errors.firstName && errors.firstName.type === 'required' && <li>El campo "Nombre" es requerido</li>}
            {errors.lastName && errors.lastName.type === 'required' && <li>El campo "Apellido" es requerido</li>}
            {errors.cedula && errors.cedula.type === 'required' && <li>El campo "Cédula" es requerido</li>}
            {errors.cellphone && errors.cellphone.type === 'required' && <li>El campo "Número de teléfono" es requerido</li>}
            {errors.address && errors.address.type === 'required' && <li>El campo "Dirección" es requerido</li>}
            {error && <li>{error}</li>}
          </ContainerErrors>}

        <button type='submit' disabled={loading}>
          {type === 'create' ? 'Crear cliente' : 'Editar cliente'}
          {loading && (
            <Loader />
          )}
        </button>
      </form>
    </StylesCreateOrEdit>
  )
}
