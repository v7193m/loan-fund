import React from 'react'

import classes from './AddUser.module.css'

const AddUser = (props) => {
  return (
      <form className={classes.Form} onSubmit={props.submit} >
          <input className={classes.Input} type='text' placeholder="  عضو جدید را وارد کنید"></input>
          <label className={classes.Count} htmlFor="count">تعداد سهم:</label>
          <input className={classes.CountNum} type="number" id="count" name="quantity" min="1" max="20" />
          <button className={classes.Submit} type="submit">تایید</button>
      </form>
  )
}

export default AddUser 