import axios from 'axios'
import { config } from '../config/config'

const bankService = {
    
    getAll: () => {
        //http://localhost:8000/api/category
        const result = axios.get(config.apiUrl + '/allData')
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return {
                success : false,
                result : error
            }
        })
        return result
    },

    getById: (id) => {
        const result =  axios.get(config.apiUrl + '/bankById/' + id)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result[0]
            }
        })
        .catch(error => {
            return{
                success : false,
                result : error
            }
        })
        return result
    },

    addData: (data) => {
        const result =  axios.post(config.apiUrl + '/addBank', data)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return{
                success : false,
                result : error
            }
        })
        return result
    },

    updateBank: (data) => {
        const result = axios.put(config.apiUrl + '/updateBank/' + data.id, data)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return{
                success : false,
                result : error
            }
        })
        return result
    },

    deleteData: (data) => {
        const result = axios.put(config.apiUrl + '/deleteBank/' + data.id, data)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return{
                success : false,
                result : error
            }
        })
        return result
    },
    
    getAllSearch: (filter) => {
        console.log(filter)
        const result = axios.post(config.apiUrl + '/getBank', filter)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return {
                success : false,
                result : error
            }
        })
        return result
    },
    
    countBank: (filter) => {
        const result = axios.post(config.apiUrl + '/countBank', filter)
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return {
                success : false,
                result : error
            }
        })
        return result
    },

    getDataCheck: () => {
        const result = axios.get(config.apiUrl + '/getDataCheck')
        .then(respon => {
            return {
                success : respon.data.success,
                result : respon.data.result
            }
        })
        .catch(error => {
            return {
                success : false,
                result : error
            }
        })
        return result
    }
}

export default bankService