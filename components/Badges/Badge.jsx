import React from "react"

export default function Badge({children = "Badge", color = "green", type = "square"}) {
  const badgeStyle = `badge ${type} ${color}`

  return (
    <div className={badgeStyle}>{children}</div>
  )
}