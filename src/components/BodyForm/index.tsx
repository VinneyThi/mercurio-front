import { FormEvent, useRef, useContext } from 'react'
import FormInputs from '../FormInputs'
import Button from '../Button'
import LogoUserInput from '../../assets/userInput.svg'
import LogoPasswordInput from '../../assets/passwordInput.svg'
import { FormLoginContex } from '../FormLogin'
import './styles.scss'

function BodyForm () {
  const { setLoginCredentials } = { ...useContext(FormLoginContex) }
  const userUsernameRef = useRef<HTMLInputElement>(null)
  const userPasswordRef = useRef<HTMLInputElement>(null)

  function handle (event : FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (userUsernameRef.current && userPasswordRef.current && setLoginCredentials) {
      const objCredentials = { username: userUsernameRef.current.value, password: userPasswordRef.current.value }
      setLoginCredentials(JSON.stringify(objCredentials))
    }
  }

  return (
        <div className='body-forms-container'>
            <form className='container-form' onSubmit={handle} >
            <FormInputs labelName='Username' logoUse={LogoUserInput} inputRef={userUsernameRef}/>
            <FormInputs labelName='Password' logoUse={LogoPasswordInput} inputRef={userPasswordRef} type='password'/>
            <Button nameButton='Login' type='submit'/>
            </form>
        </div>
  )
}

export default BodyForm
