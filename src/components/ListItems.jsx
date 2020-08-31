import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListItems() {
  const [users, setUsers] = useState(null)

  const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page'

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL)
      setUsers(response.users)
    }

    console.log(fetchData())
  }, [])

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
