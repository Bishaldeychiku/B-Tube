import { LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL, LOGIN_OUT } from "../actionType";


const iState={
    accessToken:sessionStorage.getItem('ty-access-token')?sessionStorage.getItem('ty-access-token'):null,
    user:sessionStorage.getItem('ty-user')?sessionStorage.getItem('ty-user'):null,
    loading:false
}

export const authReducer=(previousSate=iState,action)=>{
const {type, payload}=action;
switch(type){
    case LOGIN_REQUEST: 
    return{
        ...previousSate,
        loading:true
    }
    case LOGIN_SUCCESS: return {
        ...previousSate,
        accessToken:payload,
        loading:false
    }
    case LOGIN_FAIL:return {
        ...previousSate,
        accessToken:null,
        loading:false,
        error:payload

    }
    case LOGIN_PROFILE: return{
      ...previousSate,
      user:payload
    }
    case LOGIN_OUT: return{
        ...previousSate,
        accessToken:null,
        user:null
    }

    default:return previousSate
}

}