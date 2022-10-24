import React from 'react'
import './Button.css'
function Button({type,disabled,onClick,title}) {
  return (
    <button className= {`btn ${

      (type === "add" && "add") ||
      (type === "remove" && "remove") ||
      (type === "checkout" && "checkout")       
      
      }`} 
      
      disabled={disabled}

      onClick={onClick}
      title={title}
      
      >

      {title}
    
    </button>
  )
}

export default Button