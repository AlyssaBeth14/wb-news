import axios from 'axios'

let initialState = {
    loading: false,
    articles: []
}

const PENDING = 'PENDING'
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/hacker-news')
    .then(res => {
        console.log(res.data);
       return res.data})
    .catch((err) => {
        console.log(err);
    })
    dispatch({type: REQUEST_ARTICLES, payload: articles})
}

export default function hackerNewsReducer(state = initialState, action) {
    switch(action.type){
        case 'PENDING':
        return {...state, loading: true}
        case 'REQUEST_ARTICLES':
        return {loading: false, articles: action.payload}
        default:
        return state
    }
}