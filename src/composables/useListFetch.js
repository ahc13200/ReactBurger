import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export async function listFetch(endpoint) {
	const response = await axios.get(`${baseURL}` + endpoint);

	let result = response.status === 200 ? response.data : response.error;

	return result;
}
