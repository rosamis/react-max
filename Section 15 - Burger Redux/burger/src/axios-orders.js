import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-fcacd.firebaseio.com/',
});

export default instance;
