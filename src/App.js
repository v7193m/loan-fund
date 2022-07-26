import {useState} from 'react'

import Users from './components/Users/Users'
import Lottery from './components/Lottery/Lottery'

import './App.css'

function App() {
  const [userState, setUserState] = useState({
    users: [
      {name:'علی', count:2},
      {name:'امیر', count:2},
      {name:'سارا', count:1},
      {name:'زهرا', count:2},
      {name:'سروش', count:1},
      {name:'رضا', count:1},
      {name:'احمد', count:2},
      {name:'فاطمه', count:3},
    ]
})

const submitHandler = (event) => {
  event.preventDefault();
  const prevUserState = userState.users
  if(event.target[0].value === "" || event.target[1].value === ""){
    alert('نام و تعداد سهام را مشخص کنید')
    return
  } else {
    prevUserState.push({name: event.target[0].value, count: event.target[1].value})
    setUserState({users: prevUserState})
    event.target[0].value = ""
    count: event.target[1].value = ""
  }
}

const removeHandler = (event) => {
  let users = userState.users
  const newUsers = users.filter(user => user.name !== event.target.name)
  setUserState({users: newUsers})
}

  return (
    <div className="App">
      <Users users={userState.users}
             submit={submitHandler}
             remove={removeHandler} />
      <Lottery users={userState.users} />
    </div>
  );
}

export default App;
