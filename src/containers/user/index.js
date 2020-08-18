import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProduct, deleteProduct, editProduct } from '../../modules/users'

import {
  Container,
  Button,
  Columns,
  Level,
  Hero,
  Modal,
} from 'react-bulma-components'
import styles from '../../styles/user.module.scss'
import PageHeader from '../../components/PageHeader'
import Anchor from '../../components/Anchor'
import ProductList from '../../components/ProductList'
import ProductForm from '../../components/ProductForm'
import ConfirmationPopup from '../../components/ConfirmationPopup'
import { ArrowLeft } from '../../assets/icons'

const User = (props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  let history = useHistory()

  const closeHandler = () => setShow(false)

  const closeHandlerConfirmation = () => setShowConfirmation(false)

  const getUser = () => {
    const clonedUsers = [...props.users]
    setUser(
      clonedUsers.filter(
        (user) => Number(user.id) === Number(props.match.params.id)
      )[0]
    )
  }

  const getProductCount = () => {
    if (!user.products) return 0
    return user.products.length
  }

  const getUserCost = () => {
    let userCost = 0
    if (user.products) {
      user.products.forEach((product) => (userCost += Number(product.cost)))
    }
    return userCost
  }

  const getProduct = (id) => {
    user.products.map(
      (product) =>
        Number(product.id) === Number(id) && setSelectedProduct(product)
    )
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [user])

  return loading ? (
    'Please wait a moment'
  ) : (
    <section className={styles.user}>
      <Container>
        <Columns>
          <Columns.Column>
            <PageHeader
              searchbar={false}
              subtitle={`${user.first_name} ${user.last_name}`}>
              <Level.Side align="left">
                <Level.Item>
                  <Button
                    renderAs={Anchor}
                    href={'#'}
                    onClick={() => history.goBack()}
                    color="light">
                    <ArrowLeft /> Go Back
                  </Button>
                </Level.Item>
              </Level.Side>
            </PageHeader>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column>
            <Hero className="hero" color="light">
              <Hero.Body className={styles.hero}>
                <div
                  className={`${styles.hero__body_section} ${styles.hero__body_section__is_column}`}>
                  <span className="is-block is-size-5">{user.email}</span>
                  <span className="is-block is-size-5">{user.cc_number}</span>
                  <span className="is-block is-size-5">{user.cc_type}</span>
                </div>
                {/*Wasn't able to use the BEM standard completely since it has the conflict with the "-" but there's a
              workaround with a webpack module, i wouldn't spend to much time on that now.*/}
                <div
                  className={`${styles.hero__body_section} ${styles.hero__body_section__align_center} ${styles.hero__body_section__is_column}`}>
                  <span className="is-block is-size-2">{getUserCost()}</span>
                  <span className="is-block is-size-5">{user.currency}</span>
                </div>
              </Hero.Body>
            </Hero>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column>
            <PageHeader searchbar={false} subtitle={'Products'} inverted={true}>
              <Level.Side align="right">
                <Level.Item>
                  <Button
                    renderAs={'button'}
                    color="info"
                    onClick={() => {
                      setShow(true)
                      setSelectedProduct({})
                    }}>
                    ADD
                  </Button>
                </Level.Item>
              </Level.Side>
            </PageHeader>

            <ProductList
              products={(user.products && user.products) || []}
              openModal={(id) => {
                setShow(true)
              }}
              confirmRemove={() => setShowConfirmation(true)}
              getProduct={getProduct}
            />
          </Columns.Column>
        </Columns>
      </Container>

      <Modal show={show} onClose={closeHandler}>
        <ProductForm
          addProduct={props.addProduct}
          editProduct={props.editProduct}
          userId={user.id}
          close={closeHandler}
          productId={getProductCount()}
          existingProduct={selectedProduct}
        />
      </Modal>

      <Modal show={showConfirmation} onClose={closeHandlerConfirmation}>
        <ConfirmationPopup
          deleteProduct={props.deleteProduct}
          close={closeHandlerConfirmation}
          userId={user.id}
          productId={selectedProduct.id}
        />
      </Modal>
    </section>
  )
}

const mapStateToProps = ({ users }) => ({
  users: users.users,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProduct,
      editProduct,
      deleteProduct,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(User)
