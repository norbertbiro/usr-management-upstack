import React from 'react'
import { PureComponent } from 'react'
import { Box, Form, Button } from 'react-bulma-components'

import styles from '../styles/productlist.module.scss'
const { Field, Control, Label, Input } = Form

class ProductForm extends PureComponent {
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

  render() {
    const { name, cost } = this.state
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
              <Button renderAs={'button'} type={'submit'}>
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
