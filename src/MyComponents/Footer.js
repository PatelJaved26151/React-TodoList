import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "90vh"
  }
  return (
    <footer className='bg-dark text-light py-3 text-center' style={footerStyle}> 
       <p>Copyrights belong to me</p>
    </footer>
  )
}

export default Footer
