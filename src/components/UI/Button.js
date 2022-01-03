import classes from './Button.module.css'

const Button = props => {
  return (
    <button 
    className={classes.button} 
    type={props.type || 'button'} // if props.type is undefined, default to the 'button' value for the built-in button
    onClick={props.onClick}>
    </button>
  )
}

export default Button