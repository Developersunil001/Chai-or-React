import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const { userid } = useParams()
     return (
          <div className='bg-slate-500 text-white p-3 text-2xl font-medium font-style:gilroy rounded-xl'> User:{userid}</div>
     )
}

export default User
