import { HTMLInputTypeAttribute } from 'react'
import './styles.scss'
interface IProps{
  labelName : string,
  logoUse : string,
  type? :HTMLInputTypeAttribute,
}
function FormInputs (props:IProps) {
  return (
    <div className= 'container-input'>
        <div className='input-log'><img src={props.logoUse} alt="User svg" />
</div>
        <label> {props.labelName}</label>
        <input type={props?.type || 'text'} className='body-forms-input'/>
    </div>

  )
}

export default FormInputs
