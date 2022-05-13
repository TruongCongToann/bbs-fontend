import {ADD_POST} from '../constant'

const addPost = (objPost) =>{
    return {
        type:ADD_POST,
        payload: objPost
    }
}
export default {addPost}