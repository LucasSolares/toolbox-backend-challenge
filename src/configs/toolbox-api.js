import Axios from 'axios'

const toolboxApi = Axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret',
  headers: {
    Authorization: 'Bearer aSuperSecretKey',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default toolboxApi
