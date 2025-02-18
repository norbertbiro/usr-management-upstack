import React from 'react'
import { Box } from 'react-bulma-components'
import { Button } from 'react-bulma-components'
import CustomLink from './CustomLink'
import styles from '../styles/userlist.module.scss'

const UserList = ({ users, filter }) => (
  <div className={styles.users}>
    {users
      .filter((user) => user.cc_number.includes(filter, 0))
      .map((user) => {
        let {
          id,
          first_name,
          last_name,
          email,
          cc_number,
          cc_type,
          currency,
        } = user

        return (
          <Box className={'user is-marginless'} key={id}>
            <span className="is-size-3 is-block">{first_name}</span>
            <span className="is-size-4 is-block">{last_name}</span>
            <span className={`${styles.user__email} is-size-5 is-block`}>
              {email}
            </span>

            <div className={styles.user__cc}>
              <span className="is-size-5 is-block">{cc_number}</span>
              <span className="is-size-5 is-block">{cc_type}</span>
            </div>

            <div className={styles.user__btn_wrapper}>
              <Button
                renderAs={CustomLink}
                target={`/user/${id}`}
                color={'primary'}
                className={`user__custom-cta-for-analytics`}
                sharedState={user}>
                DETAILS
              </Button>
            </div>
          </Box>
        )
      })}
  </div>
)

export default UserList
