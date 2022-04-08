import FormInputs from '../FormInputs'
import Button from '../Button'
import LogoUserInput from '../../assets/userInput.svg'
import LogoPasswordInput from '../../assets/passwordInput.svg'
import './styles.scss'

function BodyForm () {
  return (
        <div className='body-forms-container'>
            <form className='container-form'>
            <FormInputs labelName='Username' logoUse={LogoUserInput} />
            <FormInputs labelName='Password' logoUse={LogoPasswordInput} type='password'/>
            <Button nameButton='Login' type='submit'/>
            </form>
        </div>
  )
}

export default BodyForm
