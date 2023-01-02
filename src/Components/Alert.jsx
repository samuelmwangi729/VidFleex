import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Alert = () => {
    const MySwal = withReactContent(Swal)
  return (
    MySwal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'This is Work In Progress',
        footer: '<a href="/">Back to Home</a>'
      })
  )
}

export default Alert