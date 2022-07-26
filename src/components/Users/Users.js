import React from 'react'

import classes from './Users.module.css'
import User from '../User/User'
import AddUsser from '../AddUser/AddUser'
// import classes from './User.module.css';

const Users= (props) => (
    <div className={classes.Container}>
        <AddUsser submit={props.submit} />
        <h1 className={classes.Title} >اعضای صندوق</h1>
        <div className={classes.Grid} >
            {
                props.users.map((user, index) => {
                    return (
                        <User name={user.name}
                              count={user.count}
                              key={user.name + index}
                              remove={props.remove}
                              />
                    )
                })
            }
        </div>
    </div>
)

export default Users