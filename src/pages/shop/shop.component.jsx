import React from 'react'
import SHOP_DATA from './shop.data.js'


export default class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {

        return (
            <div>
                <h1>SHOP PAGE</h1>
            </div>
        )
    }
}
