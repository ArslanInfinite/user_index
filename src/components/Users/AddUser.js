import { useState } from 'react'
import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  const agechangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input 
        id='username' 
        type='text' 
        value={enteredUsername} 
        onChange={usernameChangeHandler}>
        </input>
        <label htmlFor='age'>Age</label>
        <input 
        id='age' 
        type='number' 
        value={enteredAge} 
        onChange={agechangeHandler}>
        </input>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser