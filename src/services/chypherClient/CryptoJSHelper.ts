import CryptoJS from 'crypto-js'
import { ICrprypto } from '../../interfaces'

class CryptoJSHelper implements ICrprypto {
  private saltGen :string

  constructor (salt : string) {
    this.saltGen = salt
  }

  chypher (input:string) : string {
    return CryptoJS.AES.encrypt(input, this.saltGen).toString()
  }

  dechypher (input:string) : string {
    const result = CryptoJS.AES.decrypt(input, this.saltGen)
    return result.toString(CryptoJS.enc.Utf8)
  }
}

export { CryptoJSHelper }
