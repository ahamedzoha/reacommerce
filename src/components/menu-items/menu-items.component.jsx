import React from 'react'
import './menu-items.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItems = ({ title, id, imageUrl, size, history }) => (

    <div className={`${size} menu-item`} onClick={ () => history.push(`/${title}`)}>

        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image" />

        <div className="content">

            <h1 key={id} className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>

        </div>

    </div>

)

export default withRouter(MenuItems)