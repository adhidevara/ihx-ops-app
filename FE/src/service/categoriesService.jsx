import axios from 'axios'
import {config} from '../config/config'
import Cat from '../service/categoriesService'
const categoryService = {
    getData:()=>{
        const result = axios.get(config.apiUrl+'/categories')
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
    addData:(data)=>{
        const result = axios.post(config.apiUrl+'/addcategories',data)
        .then(respon =>{
            return{
                success:respon.data.success,
                result:'Data has been saved'
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

    getbyid:(id)=>{
        const result = axios.get(config.apiUrl+'/categories/'+id)
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

    UpdateData:(data)=>{
        const result = axios.put(config.apiUrl+'/updatecategories?id='+data.cat_id,data)
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


    DelData:(data)=>{
        const result = axios.delete(config.apiUrl+'/deletepermcat?id='+data.cat_id,data)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: data.cat_name+' Permanently delete'
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

    DelTemp:(data)=>{
        const result = axios.put(config.apiUrl+'/deletecategories',data)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: 'Update success set to false'
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

export default categoryService