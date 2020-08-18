import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import { Container, Columns } from "react-bulma-components";
import SearchBar from "../../components/SearchBar";
import UserList from "../../components/UserList";
import PageTitle from "../../components/PageTitle";

import styles from "../../styles/home.module.scss";

const Home = props => (
  <section className={styles.home}>
    <Container>
      <Columns>
        <Columns.Column>
          <PageTitle tag={'h2'} className={'title'}>
            Home - User List
          </PageTitle>
        </Columns.Column>
        <Columns.Column size={'two-fifths'} className={'is-pulled-right'}>
          <SearchBar />
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column>
            <UserList />
        </Columns.Column>
      </Columns>

      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </button>
      </p>

      <p>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </button>
      </p>
    </Container>
  </section>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
