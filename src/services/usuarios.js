import axios from 'axios';
const baseUrl = 'https://cool-rain-6866.fly.dev/api/';

export const loginService = async credenciales => {
    const { data } = await axios.post(`${baseUrl}auth/signin`, credenciales);
    return data;
}

export const GetUsuarios = async matricula => {
    const { data } = await axios.get(`${baseUrl}users/${matricula}`);
    return data;
};