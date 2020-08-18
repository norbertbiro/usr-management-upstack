import React from 'react'
import { Container, Button, Columns, Level } from 'react-bulma-components'
import PageTitle from '../../components/PageTitle'
import styles from '../../styles/user.module.scss'
import PageHeader from '../../components/PageHeader'
import Anchor from '../../components/Anchor'
import { ArrowLeft } from '../../assets/icons'

const User = () => (
  <section className={styles.user}>
    <Container>
      <Columns>
        <Columns.Column>
          <PageHeader searchbar={false} subtitle="First Name Last Name">
            <Level.Side align="left">
              <Level.Item>
                <Button
                  renderAs={Anchor}
                  href={'#'}
                  onClick={() => alert('go-back')}>
                  <ArrowLeft /> Go Back
                </Button>
              </Level.Item>
            </Level.Side>
          </PageHeader>
        </Columns.Column>
      </Columns>

    </Container>
  </section>
)

export default User
