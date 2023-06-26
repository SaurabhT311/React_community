import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelector, editContact } from './ContactSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

const EditContact = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const contact = useSelector(contactSelector)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  let existingUser = contact.contacts.filter((contact) => contact.id === id)
  existingUser = existingUser.values()
  for (let val of existingUser) {
    existingUser = val
  }


  useEffect(() => {
    if (existingUser != null) {
      setName(existingUser.name)
      setPhone(existingUser.phone)
      setEmail(existingUser.email)
    }
  }, [existingUser])

  const onUpdateContact = (e) => {
    e.preventDefault()
    const edit_contact = {
      id: id,
      name: name,
      phone: phone,
      email: email,
    }
    dispatch(editContact(edit_contact))
    navigate('/')
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div
            className="form-group"
            style={{
              marginBottom: '1em',
            }}
          >
            <Input
              type={'text'}
              className={'b_input'}
              placeholder={'Enter Your Name'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="form-group"
            style={{
              marginBottom: '1em',
            }}
          >
            <Input
              type={'text'}
              className={'b_input'}
              placeholder={'Enter Your Phone Number'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div
            className="form-group"
            style={{
              marginBottom: '1em',
            }}
          >
            <Input
              type={'text'}
              className={'b_input'}
              placeholder={'Enter Your E-mail Address'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            className={'c_button'}
            type="submit"
            text={'Update Contact'}
          />
        </form>
      </div>
    </div>
  )
}

export default EditContact
