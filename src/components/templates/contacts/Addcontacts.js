import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveContact } from './ContactSlice'
import shortid from 'shortid'
import { useNavigate } from 'react-router-dom'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

const AddContacts = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const createContact = (e) => {
    e.preventDefault()
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    }
    dispatch(saveContact(new_contact))
    navigate('/')
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div
            className="form-group "
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
            className={'b_button'}
            type="submit"
            text={'Create Contact'}
          />
        </form>
      </div>
    </div>
  )
}

export default AddContacts
