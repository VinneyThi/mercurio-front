import './styles.scss'
interface IPropsButton{
  nameButton : string,
  type? : 'button' | 'submit' | 'reset',
  classAbtract? : string,
}

function Button (props : IPropsButton) {
  return (
    <button className= {props?.classAbtract || 'default'} type={props?.type || 'button'}>{props.nameButton}</button>)
}

export default Button
