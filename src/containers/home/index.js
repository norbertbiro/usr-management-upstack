import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter'

import PageHeader from '../../components/PageHeader'
import { Container, Columns } from 'react-bulma-components'
import UserList from '../../components/UserList'

import styles from '../../styles/home.module.scss'

const Home = (props) => {
  const [userList, setUserList] = useState(props.users)
  const [filter, setFilter] = useState('')

  const filterUserList = (param) => {
    setFilter(param)
  }
  return (
    <section className={styles.home}>
      <Container>
        <Columns>
          <Columns.Column>
            <PageHeader subtitle={'Home'} filterMethod={filterUserList} />
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column>
            <UserList users={userList} filter={filter} />
          </Columns.Column>
        </Columns>
      </Container>
    </section>
  )
}

const mapStateToProps = ({ users }) => ({
  users: users.users,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
