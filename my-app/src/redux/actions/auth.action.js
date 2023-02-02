

import { Verify, Provider } from '../../firebase'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { LOGIN_FAIL, LOGIN_OUT, LOGIN_PROFILE, LOGIN_SUCCESS } from '../actionType';



export const login = () => async dispatch => {

    try {
        dispatch({
            type: LOGIN_PROFILE
        })
        const GooglSingIn = signInWithPopup(Verify, Provider);
        const res = (await GooglSingIn).user;
        const credintial = res.accessToken;
        const prfile = {
            name: res.displayName,
            photo: res.photoURL
        }
        sessionStorage.setItem('ty-access-token', credintial);
        sessionStorage.setItem('ty-user', JSON.stringify(prfile))

        dispatch({
            type: LOGIN_SUCCESS,
            payload: credintial
        })
        dispatch({
            type: LOGIN_PROFILE,
            payload: prfile
        })
        return GooglSingIn

    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        })
    }

    // const GooglSingIn = signInWithPopup(Verify, Provider)
    //     .then((result) => {
    //         const name = result.user.displayName;
    //         const email = result.user.email;
    //         const profilePic = result.user.photoURL
    //         console.log(result);
    //         localStorage.setItem("name", name)
    //         localStorage.setItem("email", email)
    //         localStorage.setItem("profilePictures", profilePic)

    //     })
    //     .catch((error) => console.log(error))
    // return GooglSingIn
}


export const logOut = () => async dispatch => {

    const logoutuser=await getAuth().signOut()
    dispatch({
        type: LOGIN_OUT,
    })
    sessionStorage.removeItem('ty-access-token')
    sessionStorage.removeItem('ty-user')
return logoutuser
}