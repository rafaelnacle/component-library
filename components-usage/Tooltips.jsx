import React from "react"
import Tooltip from "../components/Tooltip/Tooltip"
import { FaRegMoon, FaRegClock, FaRegClone } from "react-icons/fa";

export default function Tooltips () {
    return (
        <section>
            <div className="tooltips__container">
                <Tooltip />
                <Tooltip variant="bold" color="blue" icon={<FaRegClone />} title="Copy Attributes" info="Copy to clipboard!" />
                <Tooltip variant="bold" color="pink" icon={<FaRegMoon />} title="Sleep Mode" info="Enable sleep mode" />
                <Tooltip variant="bold" color="green" icon={<FaRegClock />} title="Reminder" info="You have new notifications" />
            </div>
            <div className="tooltips__container">
                <Tooltip variant="light" />
                <Tooltip variant="light" color="blue" icon={<FaRegClone />} />
                <Tooltip variant="light" color="pink" icon={<FaRegMoon />} />
                <Tooltip variant="light" color="green" icon={<FaRegClock />} />
            </div>
        </section>
    )
}