import React from 'react'
import './menu-items.styles.scss'

export const MenuItems = ({ title, id, imageUrl, size }) => (

    <div className={`${size} menu-item`}>

        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image" />
        
        <div className="content">

            <h1 key={id} className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>

        </div>

    </div>

)