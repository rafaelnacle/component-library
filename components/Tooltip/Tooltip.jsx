import React from "react"
import { FaRegCommentDots, FaTimes } from "react-icons/fa";

export default function Tooltip({ variant, color, icon = <FaRegCommentDots />, title = "Notes", info = "Omnis veniam sequi, soluta repellat rem optio modi nam ipsam" }) {
  let bgColor = "#262626";
  let titleColor = "#FFFFFF";
  let infoColor = "#C7C7C7";

  if (variant === "bold") {
      switch (color) {
          case "blue": 
              bgColor = "#1E40AF";
              titleColor = "#FFFFFF";
              infoColor = "#E8EDFF";
              break;
          case "pink":
              bgColor = "#A9229B";
              titleColor = "#FFFFFF";
              infoColor = "#FFE9FD";
              break;
          case "green":
              bgColor = "#47AA5D";
              titleColor = "#FFFFFF";
              infoColor = "#E3FFE9";
              break;
      }
  } else if (variant === "light") {
      bgColor = "#FFFFFF";
      titleColor = "#111827";
      infoColor = "#6B7280";
      
      switch (color) {
          case "blue":
              bgColor = "#E0E7FF";
              titleColor = "#1E40AF";
              infoColor = "#1C51B9";
              break;
          case "pink":
              bgColor = "#FFF3FC";
              titleColor = "#A9229B";
              infoColor = "#C7369E";
              break;
          case "green":
              bgColor = "#E7FFF3";
              titleColor = "#137A2A";
              infoColor = "#3C8C4E";
              break;
      }
  }
  
  const [visible, setVisible] = React.useState(true);
  
  return (
      <div className="tooltip" style={{ opacity: !visible && "0", backgroundColor: bgColor }}>
          <div className="tooltip__icon" style={{ color: infoColor }}>
              {icon}
          </div>
          <div className="tooltip__content">
              <h3 className="tooltip__content-title" style={{ color: titleColor }}>{title}</h3>
              <p className="tooltip__content-description" style={{ color: infoColor }}>{info}</p>
          </div>
          <FaTimes onClick={() => setVisible(false)} className="tooltip__icon-x" style={{ color: infoColor }} />
      </div>
  );
}