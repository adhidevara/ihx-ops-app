import axios from 'axios'
import { config } from '../config/config'

const ConsS = {
    getGender:()=>{
        const result = axios.get(config.apiUrl+'/getGenderslc')
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

    getIden:()=>{
        const result = axios.get(config.apiUrl+'/getIdenslc')
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

    getProvince:()=>{
        const result = axios.get(config.apiUrl+'/getProvinceslc')
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

    getCity:(idx)=>{
        const result = axios.get(config.apiUrl+'/getCityslc?prov='+idx)
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


    getDistrict:(idx)=>{
        const result = axios.get(config.apiUrl+'/getDistrictslc?city='+idx)
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


    getSubDistrict:(idx)=>{
        const result = axios.get(config.apiUrl+'/getSubDistslc?dist='+idx)
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


    GetCons:()=>{
        const result = axios.get(config.apiUrl+'/getCustomer')
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

    GetConsOne:(idx)=>{
        const result = axios.get(config.apiUrl+'/getCustomer/'+idx)
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

    InsertCons:(dat)=>{
        const result = axios.post(config.apiUrl+'/addcustomer',dat)
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


    UpdateCons:(dat)=>{
        const result = axios.put(config.apiUrl+'/updatecustomer',dat)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: 'Update success'
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
export default ConsS
