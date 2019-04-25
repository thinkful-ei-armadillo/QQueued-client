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
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      ) 
  },

  addStudent(description) {
    console.log(description)
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
  }
} 

export default ApiService;