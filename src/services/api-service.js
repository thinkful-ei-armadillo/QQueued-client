import config from "../config";
import TokenService from "./token-service";

const ApiService = {
  getQueue() {
    return fetch(`${config.API_ENDPOINT}/queue`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  async moveStudent() {
    return await fetch(`${config.API_ENDPOINT}/queue`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    });
    //       .then(res => {
    //       return res.text()
    //       })
    //       // We are trying to use json parse HTML
    //       .then(text => console.log(text))
    //         /* (!res.ok)
    //           ? res.json().then(e => Promise.reject(e))
    //           : res.json() */
  },

  addStudent(description) {
    return fetch(`${config.API_ENDPOINT}/queue`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ description })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  removeStudent(id) {
    return fetch(`${config.API_ENDPOINT}/queue/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getAllData() {
    return fetch(`${config.API_ENDPOINT}/data`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
<<<<<<< HEAD
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
=======
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  removeStudentFromQueue(id){
    return fetch(`${config.API_ENDPOINT}/queue/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
>>>>>>> 7b2811a9b6a528f8e497d609026e4eec34cd04cb
  }
};

export default ApiService;
