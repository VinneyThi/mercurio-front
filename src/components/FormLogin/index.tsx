
import { createContext, useState, useEffect, SetStateAction, Dispatch } from 'react'
import HeaderForm from '../HeaderForm'
import BodyForm from '../BodyForm'
import FooterForm from '../FooterForm'
import { chypherClient } from '../../services/chypherClient'
import './styles.scss'

interface ILoginCredentials{
  loginCredentials:string,
  setLoginCredentials: Dispatch<SetStateAction<string>>
}

export const FormLoginContex = createContext<ILoginCredentials | {}>({})

function FormLogin () {
  const [loginCredentials, setLoginCredentials] = useState('')

  useEffect(() => {
    const chyperpayload = chypherClient.chypher(loginCredentials)
    console.log('Cryp', chyperpayload)
    console.log('DecRYP', chypherClient.dechypher(chyperpayload))
  }, [loginCredentials])

  return (
        <div className="container">
            <div className="body">
                <div className="body-ground">
                </div>
                <FormLoginContex.Provider value={{ loginCredentials, setLoginCredentials }}>
                  <HeaderForm />
                  <BodyForm />
                  <FooterForm />
                </FormLoginContex.Provider>

            </div>
        </div>
  )
}

export default FormLogin
