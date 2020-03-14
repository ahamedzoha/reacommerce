import React from "react"
import SHOP_DATA from "./shop.data.js"
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component"
import { init_google_analytics, log_page_view } from "../../utils/_analytics"

export default class ShopPage extends React.Component {
  constructor() {
    super()

    this.state = {
      collections: SHOP_DATA
    }
  }

  componentDidMount() {
    init_google_analytics()
    log_page_view()
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
