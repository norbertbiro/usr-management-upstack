import React from 'react'
import { Button, Box } from 'react-bulma-components'

import styles from '../styles/productlist.module.scss'

const ProductList = ({ products }) => (
  <div className={styles.products}>
    {products.map((product) => (
      <Box>
        <div className={styles.products__product}>
          <span className={styles.products__name}>Product Name</span>
          <span className={styles.products__price}>123.43</span>
          <div className={`${styles.products__actions} is-flex`}>
            <Button renderAs={'button'} className={styles.products__button}>
              Edit
            </Button>
            <Button renderAs={'button'} className={styles.products__button}>
              Remove
            </Button>
          </div>
        </div>
      </Box>
    ))}
  </div>
)

export default ProductList
