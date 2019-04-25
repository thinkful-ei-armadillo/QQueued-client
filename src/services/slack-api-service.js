import config from "../config";

const slackApiService = {
  openDmAndMessage(user_id, message) {
    return fetch(`${config.API_ENDPOINT}/slack/message`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: user_id,
        text: message
      })
    })
    .then(res =>{
      if(!res.ok){
        throw new Error(res.message)
      }
      return res.json()
    })
  },
  
};

export default slackApiService;
