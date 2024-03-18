import React from "react"

const Creator = ({creator}) => {
    return <div className="flex gap-4">
        <img src={creator.img} alt="icon" />
        <p> <strong>{creator.name}</strong> </p>
    </div>
}

export default Creator;