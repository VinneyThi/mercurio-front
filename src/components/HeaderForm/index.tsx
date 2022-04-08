import './styles.scss'
import logoLogin from '../../assets/logoLogin.png'

function HeaderForm () {
  return (
        <div className="header-forms-container">

            <img className="header-forms-Logo"src={logoLogin} />

            <div className="header-forms-Titule">
                <span> Login</span>
            </div>

            <div className="header-forms-Footer">
                <span> Sing in to your account</span>
            </div>

        </div>
  )
}

export default HeaderForm
