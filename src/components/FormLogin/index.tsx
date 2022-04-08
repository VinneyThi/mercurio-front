import HeaderForm from '../HeaderForm'
import BodyForm from '../BodyForm'
import FooterForm from '../FooterForm'
import './styles.scss'

function FormLogin () {
  return (
        <div className="container">
            <div className="body">
                <div className="body-ground">
                </div>
                <HeaderForm />
                <BodyForm />
                <FooterForm />
            </div>
        </div>
  )
}

export default FormLogin
