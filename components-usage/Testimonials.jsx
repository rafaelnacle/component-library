import React from "react"
import Testimonial from "../components/Testimonials/Testimonial"

export default function Testimonials () {
    return (
        <div className="testimonials__container">
            <Testimonial
            quote="Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."
            name="Jesus Christ"
            jobTitle="The word of God"
            />
            <Testimonial
            image="https://images.unsplash.com/photo-1586486942853-511cfe2c6313?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            quote="Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.."
            name="John 11:25-26"
            jobTitle="Disciple of Jesus"
            />
            <Testimonial name="Someone" jobTitle="Writer" />
        </div>
    )}