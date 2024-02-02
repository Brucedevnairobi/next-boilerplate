import React from 'react'

const Layout = ({Children} : {Children: React.ReactNode}) => {
  return (
    <div>{Children}</div>
  )
}

export default Layout