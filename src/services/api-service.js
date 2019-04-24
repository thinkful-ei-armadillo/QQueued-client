import config from '../config';
import TokenService from './token-service';

const ApiService = {
  getQueue() {
    return fetch(`${config.API_ENDPOINT}/queue`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )  
  }
} 

export default ApiService;