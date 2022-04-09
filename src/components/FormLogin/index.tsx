
import { createContext, useState, useEffect } from 'react'
import HeaderForm from '../HeaderForm'
import BodyForm from '../BodyForm'
import FooterForm from '../FooterForm'
import { chypherClient } from '../../services/chypherClient'
import './styles.scss'

interface ILoginCredentials{
  loginCredentials:string,
  chypher : (input:string)=> void
}

export const FormLoginContex = createContext<ILoginCredentials | {}>({})

function FormLogin () {
  const [loginCredentials, setLoginCredentials] = useState('')

  function chypher (input: string) {
    if (input !== '') {
      const chyperpayload = chypherClient.chypher(input)
      setLoginCredentials(chyperpayload)
    }
  }
  useEffect(() => {
    console.log(loginCredentials)
    console.log(chypherClient.dechypher(loginCredentials))
  }, [loginCredentials])

  return (
        <div className="container">
            <div className="body">
                <div className="body-ground">
                </div>
                <FormLoginContex.Provider value={{ loginCredentials, chypher }}>
                  <HeaderForm />
                  <BodyForm />
                  <FooterForm />
                </FormLoginContex.Provider>

            </div>
        </div>
  )
}

export default FormLogin
