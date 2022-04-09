import { HTMLInputTypeAttribute, RefObject } from 'react'
import './styles.scss'

interface IProps {
  labelName: string,
  logoUse: string,
  required?: boolean,
  type?: HTMLInputTypeAttribute,
  inputRef?:RefObject<HTMLInputElement>
}

function FormInputs (props: IProps) {
  return (
    <div className='container-input'>
      <div className='input-log'><img src={props.logoUse} alt="User svg" /></div>
      <label> {props.labelName}</label>
      <input required={props?.required} name={props.labelName.toLocaleLowerCase()} type={props?.type || 'text'} className='body-forms-input' ref={props?.inputRef} />
    </div>

  )
}

export default FormInputs
