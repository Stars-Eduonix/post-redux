import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from './actionTypes' 
import axios from 'axios'

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}



// special action cretor which returns a function instead of an action
export function fetchPosts(){
     return  function(dispatch){
        dispatch(fetchPostsRequest())
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(res => dispatch(fetchPostsSuccess(res.data)))
        .catch(err => dispatch(fetchPostsFailure(err.message)))
    }
}
    
