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

  async moveStudent(uuid) {
    return await fetch(`${config.API_ENDPOINT}/queue`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }, body: JSON.stringify({ uuid })
    });
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

  postNote(note, noteId) {
    return fetch(`${config.API_ENDPOINT}/data/note/${noteId}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ note })
    })
      // .then(res =>
      //   !res.ok
      //     ? res.json().then(e => Promise.reject(e))
      //     : res.json()
      // );
  },

  getNotes() {
    return fetch(`${config.API_ENDPOINT}/data/note`, {
      method: "GET",
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
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  removeStudentFromQueue(id) {
    return fetch(`${config.API_ENDPOINT}/queue/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    });
  },

  updateDescription(description, id) {
    return fetch(`${config.API_ENDPOINT}/student/edit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ description })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;
