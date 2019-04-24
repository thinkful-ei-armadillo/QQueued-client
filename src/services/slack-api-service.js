import config from "../config";

const slackApiService = {
  openDm(user_id) {
    return fetch(`${config.SLACK_API_ENDPOINT}/im.open`, {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${config.SLACK_KEY}`
      },
      method: "POST",
      body: JSON.stringify({
        user: user_id
      })
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  sendMessage(channel_id, message) {
    return fetch(`${config.SLACK_API_ENDPOINT}/chat.postMessage`, {
      hears: {
        "content-type": "application/json",
        "Authorization": `Bearer ${config.SLACK_KEY}`
      },
      method: "POST",
      body: JSON.stringify({
        channel: channel_id,
        text: message
      })
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
};

export default slackApiService;
