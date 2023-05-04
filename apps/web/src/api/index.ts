import axios from 'axios';

const url = process.env.REACT_APP_SERVER_BASE_URL;

const API = {
  getVoiceList: async () => {
    const res = await axios.get(`${url}/api/v1/voice`);
    return res.data;
  },
};
export default API;
