import React from 'react'
import { PureComponent } from 'react'
import { Box, Form, Button } from 'react-bulma-components'

import styles from '../styles/productlist.module.scss'
const { Field, Control, Label, Input } = Form

class ProductForm extends PureComponent {
  constructor(props) {
    super(props)
    this.getPayload = this.getPayload.bind(this)
    this.enableSave = this.enableSave.bind(this)
  }
  state = {
    name: '',
    cost: '',
  }

  onChange = (evt) => {
    const value = evt.target.value
    this.setState({
      [evt.target.name]: value,
    })
  }

  getPayload = () => ({ ...this.state, id: this.props.productId })

  enableSave = () => this.state.name.length > 0 && this.state.cost.length > 0

  componentDidMount() {
    if (Object.keys(this.props.existingProduct).length > 0) {
      this.setState({
        name: this.props.existingProduct.name,
        cost: this.props.existingProduct.cost,
      })
    }
  }
  render() {
    const { name, cost } = this.state
    const { existingProduct } = this.props
    return (
      <div className={styles.product_form}>
        <Box>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="name"
                type="text"
                placeholder="Name"
                value={name}
              />
            </Control>
          </Field>
          <Field>
            <Label>Cost</Label>
            <Control>
              <Input
                onChange={this.onChange}
                name="cost"
                type="number"
                placeholder="Cost"
                value={cost}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Button
                renderAs={'button'}
                onClick={() => {
                  Object.keys(existingProduct).length > 0
                    ? this.props.editProduct({
                        product: { ...this.state, id: existingProduct.id },
                        id: this.props.userId,
                      })
                    : this.props.addProduct({
                        product: this.getPayload(),
                        id: this.props.userId,
                      })
                  this.props.close()
                }}
                disabled={!this.enableSave()}>
                SAVE
              </Button>
            </Control>
          </Field>
        </Box>
      </div>
    )
  }
}

export default ProductForm
