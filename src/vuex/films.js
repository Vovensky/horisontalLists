import { createStore } from 'vuex'
import axios from 'axios'


const loadFilms = async(params) => {
    return await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', 
    {
        method: 'get',
        headers: {
        accept: 'application/json',
        "x-api-key": "8286df1f-6967-4b61-b9ee-adf4d1475a81"
        },
        params: {
            genres: params.mask,
            page: 1,
            type: 'FILM',
            ratingFrom: 7,
            ratingTo: 10,
        }
    })
    .then( (response) => {
        return response.data
    })
}

export default createStore({
    state: {
    },
    getters: {
        getFilmsInfo(state) {
            return state
        }
    },
    mutations: {
        SET_FILMSINFO(state, payload) {
            let key = payload.key
            state[key] = payload.filmsInfo
        }
    },
    actions: {
        async loadFilmsInfo({commit}, payload) {
            try {
                const filmsInfo = await loadFilms(payload);
                console.log(filmsInfo)
                let obj = {
                    filmsInfo: filmsInfo,
                    key: payload.genre
                }
                commit('SET_FILMSINFO', obj)
            } catch(error) {
                console.error(error)
            }
        }
    }
})