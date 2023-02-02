import axios from 'axios'

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:"AIzaSyDogq8yGJWl3dyfoGMMI7X8xVLD_J5QGfc"
    }
})
export default request