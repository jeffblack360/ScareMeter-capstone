import React from "react"

export const HorrorCard = ({ horrorItem }) => {
    return (
        <div className="horror-card">
            <div className="horror-card-content">
                <img src={horrorItem.img} alt="death stranding video game" className="horror-image"/>
                <button type="button" className="save-btn">Save</button>
                <img src="" alt="video game icon" className="horror-icon" />
            </div>
        </div>
    )
}