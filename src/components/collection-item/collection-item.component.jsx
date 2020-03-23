import React from "react"
import "./collection-item.styles.scss"
import { CustomButton } from "../custom-button/custom-button.component"

export const CollectionItem = ({ id, price, name, imageUrl }) => (
  <div key={id} className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
)
