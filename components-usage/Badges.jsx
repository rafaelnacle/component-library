import React from "react"
import Badge from "../components/Badges/Badge"

export default function Badges () {
    return (
        <section>
            <h2>Squared Badges</h2>
            <div className="badge__container">
                <Badge type="square" color="grey">Square</Badge>
                <Badge type="square" color="red">Square</Badge>
                <Badge type="square" color="yellow">Square</Badge>
                <Badge type="square" color="green">Square</Badge>
                <Badge type="square" color="blue">Square</Badge>
                <Badge type="square" color="indigo">Square</Badge>
                <Badge type="square" color="purple">Square</Badge>
                <Badge type="square" color="pink">Square</Badge>
            </div>
            <h2>Pill Badges</h2>
            <div className="badge__container">
                <Badge type="pill" color="grey">Pill</Badge>
                <Badge type="pill" color="red">Pill</Badge>
                <Badge type="pill" color="yellow">Pill</Badge>
                <Badge type="pill" color="green">Pill</Badge>
                <Badge type="pill" color="blue">Pill</Badge>
                <Badge type="pill" color="indigo">Pill</Badge>
                <Badge type="pill" color="purple">Pill</Badge>
                <Badge type="pill" color="pink">Pill</Badge>
            </div>
        </section>
    )}