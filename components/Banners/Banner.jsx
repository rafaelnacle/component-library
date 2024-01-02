import React from "react"
import { FaInfoCircle, FaCheckCircle,FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Banner ({status = "danger", title = "Error", description}) {
  const bannerType = `banner ${status}`
  
  let icon

  if (status === "success") {
    icon = <FaCheckCircle className="banner__icon" style={{color:"#34D399"}} />
  } else if (status === "warning") {
    icon = <FaExclamationTriangle className="banner-icon" style={{color: "#FBBF24"}} />
  } else if (status === "error") {
    icon = <FaTimesCircle className="banner-icon" style={{color: "#F87171"}} />
  } else if (status === "neutral") {
    icon = <FaInfoCircle className="banner-icon" style={{color: "#60A5FA"}} />
  }

  return (
    <div className={bannerType}>
      {icon}
      <div className="banner__text">
        <span className="banner__title">{title}</span>
        {description && <span className="banner__description">{description}</span>}
      </div>
    </div>
  )
}
