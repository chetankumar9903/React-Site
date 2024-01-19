import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
   <>
    <footer className='bg-light text-center w-100'>
    <p>All Right Reserved &copy; {year} | Terms and Conditons </p>
         
    </footer>
   </>
  )
}

export default Footer
