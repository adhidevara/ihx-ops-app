import React from 'react';
import Product from '../service/ProService'
import Cat from '../service/categoriesService'
import AddPro from './addPro'
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

export default class IndexPro extends React.Component{
    ProModel = {
        id:0,
        name_pro:'',
        desc_pro:'',
        price:0,
        stock:0,
        cat_id:28,
        active:false,
    }

    constructor(){
        super()
        this.state={
            listPro:[],
            ProModel: this.ProModel,
            mode: '',
            SModals: false,
            errors: {},
            cat:[],
            filter:{
                search:"",
                order:"ASC",
                page:"1",
                pagesize:"5"
            },
            ttlData:10,
        }
    }

    //starter get data
    componentDidMount(){
        this.loadData()
        this.loadSelect()
    }
    
    loadSelect = async()=>{
        const respon = await Cat.getData();
        if(respon.success){
            this.setState({
                cat:respon.result
            })
        }
    }

    loadData = async() =>{
        const {filter} = this.state
        const respon = await Product.getData(filter);
        const cntData = await Product.countData(filter);
        let count = 0
        console.log(respon)
        if (respon.success && cntData.success) {
            count = cntData.result[0].count
            this.setState({
                listPro: respon.result,
                ttlData: Math.ceil(count / filter.pagesize)
            })
        }
    }
    //end starter get data

 
    //Modul Show and Hide

    HandlerClose=()=>{
        this.setState({
            SModals:false,
            mode:'',
            ProModel: this.ProModel
         })
    }

    HandlerOpen=()=>{
        this.setState({
            SModals:true
         })
    }

    //EndModul Show and Hide



    //Form Body Handler

    changeHandler = name => ({target: {value} })=>{

        this.setState({
            ProModel:{
                ...this.state.ProModel,
                [name]:value
            }
        })
    }

    checkHandler = name => ({target: {checked} })=>{
        this.setState({
            ProModel:{
                ...this.state.ProModel,
                [name]:checked
            }
        })
    }

    
    HandlerDel=async(id)=>{
        const respon = await Product.getDataById(id)
        if(respon.success){
            this.setState({
                mode:'delete',
                SModals:true,
                ProModel:respon.result
            })
        }
    }


    selectHandler=(Ops)=>{
        this.setState({
            ProModel:{
                ...this.state.ProModel,
                cat_id: Ops.value,
                cat_name:Ops.label,
            }
        })
    }





    //End Form Body Handler


    //Error Handler

    valHandler=()=>{
        const ProModel=this.state.ProModel
        let errors = {};
        let formIsValid = true;

        if(!ProModel["name_pro"]){
           formIsValid = false;
           errors["name_pro"] = "Cannot be empty";
        }
  
        if(!ProModel["desc_pro"]){
            formIsValid = false;
            errors["desc_pro"] = "Cannot be empty";
         }

         if(ProModel["price"]<=0){
            formIsValid = false;
            errors["price"] = "Must more then 0";
         }

         if(ProModel["stock"]<0){
            formIsValid = false;
            errors["stock"] = "Stock cant be less then 0";
         }

         if(ProModel["cat_id"]==0){
            formIsValid = false;
            errors["cat_id"] = "Categories must input";
         }



       this.setState({errors: errors});
       return formIsValid;
   }

    //End Error Handler


    //SAVING AND UPDATE DATA
    saveDat = async()=>{
        if(this.valHandler()){
            const {mode} = this.state
            const{ProModel} = this.state
            if(mode=='edit'){
                const respon = await Product.UpdateData(ProModel)
            if(respon.success){
                alert('Success : '+respon.result)
                this.loadData()
                this.setState({
                    SModals:false,
                    ProModel:this.ProModel,
                    mode:''
                 })
            }
            else{
                alert('Error : '+respon.result)
            }  
            }
            else{
                const respon = await Product.addData(ProModel)
                console.log(respon)
                if(respon.success){
                    alert('Success : '+respon.result)
                    this.loadData()
                    this.setState({
                        SModals:false,
                        ProModel:this.ProModel,
                        mode:''
                     })
                }
                else{
                    alert('Error : '+respon.result)
                }  
            }  
        }
        }
        //END SAVING AND UPDATE DATA


        //EDIT GET DATA
        editData = async(id)=>{
            const respon = await Product.getDataById(id)
            if(respon.success){
                this.setState({
                   ProModel: respon.result,
                   mode:'edit',
                   SModals:true
                })
            }
        }

        //END EDIT GET DATA

        

        //Delete Data

        DelTemp = async(data)=>{
            const respon = await Product.DelTemp(data)
            if(respon.success){
                alert('Success : '+respon.result)
                this.loadData()
            }
            else{
                alert('Error : '+respon.result)
            } 
            this.HandlerClose()
        }
    
    
        DelPerm = async(data)=>{
            const respon = await Product.DelPerm(data.id)
            if(respon.success){
                alert('Success : '+respon.result)
                this.loadData()
            }
            else{
                alert('Error : '+respon.result)
            } 
            this.HandlerClose()
        }

        //End DelTa



        //SORTING HANDLER
        sortingHandler = () => {
            const { filter } = this.state
            let sort = ''
            sort = filter.order == '' ? 'ASC' : 'DESC'
            sort = filter.order == 'DESC' ? 'ASC' : 'DESC'
    
            this.setState({
                filter: {
                    ...this.state.filter,
                    ["order"]: sort
                },
            }, () => this.loadData())
        }
    
        // end sorting handler






        //PAGAGING PUSING GUE

        onChangePage = (number) => {
            const { filter } = this.state
            this.setState({
                filter: {
                    ...this.state.filter,
                    ["page"]: number
                },
            }, () => this.loadData(filter)
            )
            console.log(filter)
        }   
    

        renderPagination() {
            let item = []
            const { filter, ttlData } = this.state
            for (let number = 1; number <= ttlData; number++) {
                item.push(
                    <PaginationItem key={number} active={number === filter.page}>
                        <PaginationLink onClick={() => this.onChangePage(number)}>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                )
            }
            return (
                <Pagination>{item}</Pagination>
            )
        }
    



        
        filterHandler = name => ({ target: { value } }) => {
            console.log(value)
            this.setState({
                filter: {
                    ...this.state.filter,
                    [name]: value
                }
            })
        }
        
        pageSizeHandler = (size) => {     
                this.setState({
                    filter: {
                        ...this.state.filter,
                        ["pagesize"]: size
                    },
                }, () => this.loadData())
            
        }


        //END PAGAGING















    render(){
        const {listPro,filter,ttlData} = this.state
        
        return(
            <div>
                {JSON.stringify(this.state.ProModel)}
                <div class='col-12 row'>
                    <div class='col-6'>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#add_data" onClick={this.HandlerOpen} >Add Product</button>
                    </div>
                    <div class='col-6'>
                        <div class="input-group input-group-sm">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={this.filterHandler("search")}/>
                        <div class="input-group-append">
                        <button class="btn btn-navbar"  onClick={this.loadData}>
                            <i class="fas fa-search"></i>
                        </button>
                        <button class='btn btn-primary' onClick={this.sortingHandler} style={{marginRight:"10px"}}>
                            <i class='fas fa-sort'></i>
                        </button>
                        <div class="btn-group">
                                        <button type="button" class="btn btn-secondary dropdown-toggle"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <button class="dropdown-item" type="button" a href="" onClick={() => this.pageSizeHandler('5')}>5</button>
                                            <button class="dropdown-item" type="button" a href="" onClick={() => this.pageSizeHandler('10')}>10</button>
                                            <button class="dropdown-item" type="button" a href="" onClick={() => this.pageSizeHandler('20')}>20</button>
                                            <button class="dropdown-item" type="button" a href="" onClick={() => this.pageSizeHandler('30')}>30</button>
                                        </div>
                                    </div>
                        
                        </div>
                        </div>
                    </div>
               

                </div>
               
                 <AddPro HandlerClose={this.HandlerClose} show={this.state.SModals} ProModel={this.state.ProModel} 
                 mode={this.state.mode} changeHandler={this.changeHandler} checkHandler={this.checkHandler}
                 saveDat={this.saveDat} DelPerm={this.DelPerm} selectHandler={this.selectHandler}
                 errors={this.state.errors} DelTemp={this.DelTemp} cat={this.state.cat}
                 />   
            <table class="table table-striped">
                     <thead>
                     <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>desc</th>
                         <th>price</th>
                         <th>stock</th>
                         <th>Cat</th>
                         <th>status</th>
                         <th>action</th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                         listPro.map(data=>{
                             return(
                                 <tr key={data.id}>
                                     <td>{data.id}</td>
                                     <td>{data.name_pro}</td>
                                     <td>{data.desc_pro}</td>
                                     <td>{data.price}</td>
                                     <td>{data.stock}</td>
                                     <td>{data.cat_name}</td>
                                     <td>{data.active.toString()}</td>
                                     <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#add_data" onClick={()=>this.editData(data.id)} >Edit</button>
                                        <button class='btn btn-danger' onClick={()=>this.HandlerDel(data.id)} >delete</button>
                                     </td>
                                 </tr>
                             )
                         })
                    }
                    </tbody>
                 </table>
                    {this.renderPagination()}
            </div>
           
        )
    }
}