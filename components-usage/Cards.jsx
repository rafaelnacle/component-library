import React from "react"
import Card from "../components/Card/Card"
import { FaCloudDownloadAlt, FaComments, FaHome } from "react-icons/fa";

export default function Cards () { 
    return (
        <section>
        <div className="cards__container">
            <Card />
            <Card icon={<FaHome />} bg="#34D399">
            <h5>Home Rental</h5>
            <p>Rent your dream house!</p>
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </Card>
            <Card onClick={() => console.log("Downloading!")} icon={<FaCloudDownloadAlt />} bg="#FBBF24">
            <h1>Download</h1>
            </Card>
            <Card icon={<FaComments />} bg="#F87171" />
        </div>
        </section>
    )}