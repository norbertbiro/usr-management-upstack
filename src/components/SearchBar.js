import React, { useEffect, useState } from 'react'
import { Form } from 'react-bulma-components'
const { Control, Input, Field } = Form

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const onChange = (evt) => {
    return setSearchQuery(evt.target.value)
  }

  useEffect(() => {
    props.filterMethod(searchQuery)
  }, [searchQuery])

  return (
    <Field kind="addons">
      <Control>
        <Input
          type={'number'}
          onChange={onChange}
          value={searchQuery}
          placeholder={'Type a number to search...'}
        />
      </Control>
    </Field>
  )
}

export default SearchBar
