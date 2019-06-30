import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-54-224-52-176.compute-1.amazonaws.com:3001'
});