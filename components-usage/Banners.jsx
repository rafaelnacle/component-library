import React from "react"
import Banner from "../components/Banners/Banner"
  
export default function Banners () {
    return (
        <section>
            <h2 className="banner__desc">Multi Line</h2>
            <div className="banner__container">
                <Banner 
                status="success" 
                title="Congratulations!" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
                <Banner 
                status="warning" 
                title="Attention" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <Banner 
                status="error" 
                title="There is a problem with your application" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
                <Banner 
                status="neutral" 
                title="Update available" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
            </div>
            <h2 className="banner__desc">Single Line</h2>
            <div className="banner__container">
                <Banner 
                status="success" 
                title="Congratulations!" />
                <Banner 
                status="warning" 
                title="Attention" />
                <Banner 
                status="error" 
                title="There is a problem with your application" />
                <Banner 
                status="neutral" 
                title="Update available" />
            </div>
        </section>
    )}