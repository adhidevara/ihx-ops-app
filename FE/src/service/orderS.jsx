import axios from 'axios'
import { config } from '../config/config'

const orderS = {

    newOrder: (data) => {
        //http://localhost:3230/api/order
        const result = axios.post(config.apiUrl + '/orderpost', data)
            .then(respon => {
                return {
                    success: respon.data.success,
                    result: respon.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    error: error
                }
            })
        return result
    },

    getDash:()=>{
        const result = axios.get(config.apiUrl+'/getTransDash')
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },

    getDashOne:(idx)=>{
        const result = axios.get(config.apiUrl+'/getTransDash/'+idx)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },


    getOrdPro:(id)=>{
        const result = axios.get(config.apiUrl+'/getTransPro?id='+id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },


    getOrdPro_count:(id)=>{
        const result = axios.get(config.apiUrl+'/getTransPro_count?id='+id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },



    DelOrdItem:(id)=>{
        const result = axios.put(config.apiUrl+'/delOrdItem?id='+id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },




    Checkout:(id)=>{
        const result = axios.put(config.apiUrl+'/OrderCheckout',id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },



    DeleteOrd:(id)=>{
        const result = axios.put(config.apiUrl+'/OrderDelete',id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },

    
    DeleteOrdItemAll:(id)=>{
        const result = axios.put(config.apiUrl+'/OrderDelete_ordd',id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },


    getCheckout:()=>{
        const result = axios.get(config.apiUrl+'/getCheckout')
        .then(respon =>{
            return{
                success: respon.data.success,
                result: respon.data.result
            }
        })
        .catch(error=>{
            return{
                success:false,
                result:error
            }
        })
        return result
    },






}
export default orderS
