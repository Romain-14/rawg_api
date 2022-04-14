import axios from 'axios';

const API_KEY = "1f1aa52c76f24b7bbb4cd1a441812daa";

export const getList = async () => {
    const request = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)

    return request.data
}

export const getGameById = async (id) => {
    const request = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)

    return request.data
}