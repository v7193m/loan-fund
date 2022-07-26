import { render } from '@testing-library/react'
import React, {Component} from 'react'

import classes from './Lottery.module.css'

class Lottery extends Component  {

    state = {
        winnerExistance : false
    }

    LotteryHandler = () => {
      this.setState({
        winnerExistance : true
      })
    }

  render() {
    let winner = null
    if(this.state.winnerExistance) {
        const users = this.props.users
        let newUsers = []
        users.forEach(user => {
            for(let i = 1 ; i <= Number(user.count); i++) {
                newUsers.push(user.name)
            }
        })  
        console.log(newUsers)  
        const winnerNumber = Math.floor((Math.random() * newUsers.length) + 0)
        winner = (
            <div className={classes.Winner}>
                {newUsers[winnerNumber]}
            </div>
        )
    }
    return(
        <div className={classes.Container} >
            <h1>قرعه کشی</h1>
            <button className={classes.Btn} onClick={this.LotteryHandler} type="button">کلیک کنید</button>
            {winner}
  
        </div>
    )
  }
}

export default Lottery