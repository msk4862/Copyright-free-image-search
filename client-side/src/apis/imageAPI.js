import axios from 'axios'

export default axios.create({
    baseURL: 'http://nciserver-env.m2ecpqkmqs.ap-south-1.elasticbeanstalk.com/'
})

// export default axios.create({
//     baseURL: 'http://localhost:9000/'
// })