import React from "react"
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial (
  {
    image, 
    quote = "...forgive your enemies, but don't forget their names", 
    name, 
    jobTitle}
  ) {
    let quoteText = quote
    
    if (quote.length > 300) {
      quoteText = `${quote.slice(0,300)}...`
    }

    return (
      <div className="testimonial">
        {image && <div style={{"backgroundImage": `url(${image})`}} className="testimonial__img"></div>}
        <div className="testimonial__content">
          <FaQuoteLeft className="testimonal__icon"/>
          <p className="testimonial__quote">{quoteText}</p>
          {name || jobTitle ? 
          <div className="testimonial__tag">
           {name && <h4 className="testimonial__name">{name}</h4>}
           {jobTitle && <h5 className="testimonial__job-title">{jobTitle}</h5>}
          </div> : null}
        </div>
      </div>
    )
}