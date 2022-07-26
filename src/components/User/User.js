import React from 'react'

import classes from './User.module.css';

const User= (props) =>  (
    <div className={classes.User}>
        <span className={classes.Name}>{props.name}:</span>
        <span className={classes.Count}>{props.count} سهم</span>
        <button className={classes.Remove} onClick={props.remove} name={props.name}>حذف</button>
    </div>
)

export default User