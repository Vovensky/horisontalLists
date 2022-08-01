import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
    method: 'get',
    headers: {
        accept: 'application/json',
        "x-api-key": "8286df1f-6967-4b61-b9ee-adf4d1475a81"
    }
})

export default instance;