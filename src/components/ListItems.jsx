import React, { useEffect, useState } from 'react'
import API from '../services/http-routing'

export default function ListItems() {
  const defaultUsers = [{
    id: null,
    photo: '',
    position: 0,
    name: 'asd',
    email: '',
    phone: '',
  }]

  const [users, setUsers] = useState(defaultUsers)

  useEffect(() => {
    displayUsers()
  }, [])

  const displayUsers = () => {
    API
      .getUsers()
      .then(response => {
        setUsers(response.data.users)
      })
      .catch(event => console.log(event))
  }

  return (
    <ul className="list">
      {
        users && users.map(user => {
          return (
            <li className="item" key={ user.id }>
              <img className="item__photo" src={ user.photo } alt="user-1"/>

              <div className="item__name">
                <h3 className="subtitle">{user.name}</h3>
              </div>

              <div className="item__description">
                <h3 className="description">{user.position}</h3>
                <h3 className="description">{user.email}</h3>
                <h3 className="description">{user.phone}</h3>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
