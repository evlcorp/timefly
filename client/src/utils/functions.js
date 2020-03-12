import axios from 'axios'

const baseUrl = 'http://localhost:5000/api/v1/' 
// const baseUrl = 'http://172.20.10.2:5000/api/v1/'

export const getItems= (token, type, success) => {
  const url = `${baseUrl}user/${type}` 
  const headers = {
    authorization: 'Bearer ' + token
  }
  axios
    .get(url, {headers})
    .then(res => success(res))
    .catch(err => success(err))
}

export const create = (type, data, token, success) => {
  const url = baseUrl + 'user/'+ type

  const headers = {
    authorization: 'Bearer ' + token
  }

  axios
    .post(url, data, {headers})
    .then(res => success(res.data))
    .catch(err => success(err))
}

export const edit = (type, id, data, success) => {
  const url = baseUrl + type

  axios
    .put(url, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}