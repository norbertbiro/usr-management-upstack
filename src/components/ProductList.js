import React from 'react'
import { Button, Box } from 'react-bulma-components'

import styles from '../styles/productlist.module.scss'

const ProductList = ({ products, openModal, getProduct, confirmRemove }) => (
  <div className={styles.products}>
    {products.map((product, index) => (
      <Box key={index}>
        <div className={styles.products__product}>
          <span className={styles.products__name}>{product.name}</span>
          <span className={styles.products__price}>{product.cost}</span>
          <div className={`${styles.products__actions} is-flex`}>
            <Button
              renderAs={'button'}
              className={styles.products__button}
              onClick={() => {
                openModal()
                getProduct(product.id)
              }}>
              Edit
            </Button>
            <Button
              renderAs={'button'}
              className={styles.products__button}
              onClick={() => {
                getProduct(product.id)
                confirmRemove()
              }}>
              Remove
            </Button>
          </div>
        </div>
      </Box>
    ))}
  </div>
)

export default ProductList
