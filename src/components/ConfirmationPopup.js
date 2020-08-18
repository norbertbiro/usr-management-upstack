import React from 'react'
import { Box, Button, Heading } from 'react-bulma-components'
import styles from '../styles/productlist.module.scss'

const ConfirmationPopup = ({ close, deleteProduct, userId, productId }) => (
  <div className={styles.confirmation_popup}>
    <Box>
      <Heading size={3}>Are you sure you want to remove the product?</Heading>
      <div className={styles.confirmation_popup__btn_wrapper}>
        <Button
          renderAs={'button'}
          onClick={close}
          color={'info'}
          className={styles.confirmation_popup__button}>
          Nope, made up my mind
        </Button>{' '}
        <Button
          renderAs={'button'}
          color={'danger'}
          onClick={() => {
            deleteProduct({
              id: userId,
              productId,
            })
            close()
          }}
          className={styles.confirmation_popup__button}>
          Yes, I'm sure
        </Button>
      </div>
    </Box>
  </div>
)

export default ConfirmationPopup
