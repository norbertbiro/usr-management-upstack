import React from 'react';
import {Box} from "react-bulma-components";
import {Button} from "react-bulma-components";
import CustomLink from "./CustomLink";
import styles from '../styles/userlist.module.scss'

const users = [1, 2, 3, 4, 5, 6, 7]

const UserList = (props) => (
  <div className={styles.users}>
    {users.map(user =>
      <Box className={'user is-marginless'}>
        <span className="is-size-3 is-block">
          First Name
        </span>
        <span className="is-size-4 is-block">Last Name</span>
        <span className={`${styles.user__email} is-size-5 is-block`}>email</span>

        <div className={styles.user__cc}>
          <span className="is-size-5 is-block">cc_number</span>
          <span className="is-size-5 is-block">cc_type</span>
        </div>

        <div className={styles.user__btn_wrapper}>
          <Button renderAs={CustomLink} target={`/user/${user}`} color={'primary'} className={`user__custom-cta-for-analytics`}>DETAILS</Button>
        </div>
      </Box>
    )}
  </div>
);

export default UserList;
