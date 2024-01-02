import React from "react"
import { FaBolt } from "react-icons/fa";

const defaultContent = (
  <>
    <h3>Card Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </>
)

export default function Card (
    {
      icon = <FaBolt />, 
      backgound = "#3f75FE", 
      onClick = () => { }, 
      children = defaultContent}) 
      {
    return (
      <div onClick={onClick} className="card">
        <div className="card__icon" style={{background: backgound}}>
          {icon}
        </div>
        <div className="card__content">
          {children}
        </div>
      </div>
    )
}