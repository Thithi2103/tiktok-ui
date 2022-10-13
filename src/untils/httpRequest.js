import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL)

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}
export default request;