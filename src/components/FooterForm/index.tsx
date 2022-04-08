import Button from '../Button'
import './styles.scss'

function FooterForm () {
  return (
        <div className="container-forms-footer">
            <a href='#'> I fogot my password . Click here to reset </a>
            <Button nameButton='Register New Account' classAbtract='inverse' />
        </div>
  )
}

export default FooterForm
