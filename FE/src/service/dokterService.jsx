import axios from 'axios'
import { config } from '../config/config'

const dokterService = {
    bioDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/bioDokter/' + doctor_id)
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
    
    dokterSpesialisasiBio: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/dokterSpesialisasiBio/' + doctor_id)
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


    dokterinstitutionEdu: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/dokterinstitutionEdu/' + doctor_id)
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

    dokterTindakan: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/dokterTindakan/' + doctor_id)
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

    dokterRiwayat: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/dokterRiwayatRS/' + doctor_id)
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

    dokterEduAll: () => {
        const result =  axios.get(config.apiUrl + '/dokterEduAll/')
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
    
    rsDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/rsDokter/' + doctor_id)
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

    jadwalDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/jadwalDokter/' + doctor_id)
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

    janjiDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/janjiDokter/' + doctor_id)
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

    chatDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/chatDokter/' + doctor_id)
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

    pengalamanDokter: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/pengalamanDokter/' + doctor_id)
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

    start_from: (doctor_id) => {
        const result =  axios.get(config.apiUrl + '/start_from/' + doctor_id)
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

    testJadwalDokter: (data) => {
        const result =  axios.post(config.apiUrl + '/testJadwalDokter', data)
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
}
export default dokterService
