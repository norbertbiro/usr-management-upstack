import React from 'react'

import styles from "../../styles/user.module.scss";
import {Container} from "react-bulma-components";
import {Button, Columns} from "react-bulma-components";
import PageTitle from "../../components/PageTitle";

const User = () => (
  <section className={styles.user}>
    <Container>
      <Columns>
        <Columns.Column size={2}>
          <Button text={true}>
            {'<- Go Back'}
          </Button>
        </Columns.Column>
        <Columns.Column>
          <PageTitle className={'title is-size-3'}>
            First Name - Last Name
          </PageTitle>
        </Columns.Column>
      </Columns>
      <h1>Users page</h1>
      <p>Hello User</p>
    </Container>
  </section>
)

export default User
