import config from '../config';
import TokenService from './token-service';

const ApiService = {
  getQueue() {
    return fetch(`${config.API_ENDPOINT}/queue`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )  
  },

  moveStudent() {
    return fetch(`${config.API_ENDPOINT}/queue`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
      return res.text()
      })
      // We are trying to use json parse HTML
      .then(text => console.log(text))
        /* (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json() */

  },

  addStudent(description) {
    return fetch(`${config.API_ENDPOINT}/queue`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ description })
    })
      .then(res =>
      !res.ok
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  },

  removeStudent(id) {
    return fetch(`${config.API_ENDPOINT}/queue/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ) 
  }
} 

export default ApiService;
