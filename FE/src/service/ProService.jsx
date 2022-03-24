import axios from 'axios'
import {config} from '../config/config'

const ProService = {
    getData:(filter)=>{
        //http://localhost:3230/api/product
        const result = axios.post(config.apiUrl + '/product', filter)
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
            console.log(filter)
        return result
    },

    countData: (filter) => {
        const result = axios.post(config.apiUrl + '/product_count', filter)
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

    addData:(data)=>{
        const result = axios.post(config.apiUrl+'/addproduct',data)
        .then(respon =>{
            return{
                success:respon.data.success,
                result:'Data'+data.name_pro+'has been saved'
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

    getAllData:()=>{
        const result = axios.get(config.apiUrl+'/getallproduct')
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



    getDataById:(id)=>{
        const result = axios.get(config.apiUrl+'/product/'+id)
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
        const result = axios.put(config.apiUrl+'/updateproduct?id='+data.id,data)
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


    DelPerm:(id)=>{
        const result = axios.delete(config.apiUrl+'/deletepermpro?id='+id)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: 'Permanently delete'
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
        const result = axios.put(config.apiUrl+'/deleteproduct',data)
        .then(respon =>{
            return{
                success: respon.data.success,
                result: 'Update '+data.name_pro+' success set to false'
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

export default ProService