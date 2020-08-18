import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
const { Control, Input, Field } = Form

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const onChange = (evt) => {
    return setSearchQuery(evt.target.value)
  }

  return (
    <Field kind="addons">
      <Control>
        <Input
          type={'number'}
          onChange={onChange}
          value={searchQuery}
          placeholder={'Search...'}
        />
      </Control>
      <Control>
        <Button renderAs="button">Search</Button>
      </Control>
    </Field>
  )
}

export default SearchBar
