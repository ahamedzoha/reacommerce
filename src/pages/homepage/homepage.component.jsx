import React from 'react'
import './homepage.styles.scss'
//import { Link } from 'react-router-dom'

import { Directory } from '../../components/directory/directory.component'



export const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)