import React from 'react'
import { Link } from 'react-router-dom'

export const Page = () => {
  return (
    <div>
      <h1>This is another link</h1>
      <Link to="/">Go back home</Link>
    </div>
  )
}

export default Page;