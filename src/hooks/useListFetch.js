import axios from 'axios';

// const baseURL = 'http://localhost:3000/';
const baseURL = 'https://api-reactburger.amandita.me/';

export async function listFetch(endpoint) {
    const response = await axios.get(`${baseURL}` + endpoint);
    return response.status === 200 ? response.data : response.error;
}

export async function createFetch(endpoint, data) {
    const response = await axios.post(`${baseURL}` + endpoint, data);
    return response.status;
}
