import React from 'react'
import Product from '../service/ProService'
import orderS from '../service/orderS'
import OrderList from './order_form'
import Order_out from './order_out'

export default class IndexOrd extends React.Component{

    orderModel = {
       
        code_trans:'',
        ord_id:0,
        total_item:0,
        amount:0
    }

    constructor(){
        super()
        this.state={
            listPro:[],
            orderModel:this.orderModel,
            mode: '',
            SModals: false,
            MModals:false,
            DetModals:false,
            ttlData:10,
            ordList:[],
            Proc:{},
            TransList:[],
            DetItem:[],
            DetItem_lenght:0,
            OrdNext:false,
            Checkout_list:[]
        }
    }

    componentDidMount(){
        this.loadData()
        this.ShowCheckOut()
    }

    loadData = async() =>{
        const respon = await Product.getAllData();
        const getdash = await orderS.getDash();

        console.log(respon)
        if (respon.success && getdash.success) {
            this.setState({
                listPro: respon.result,
                TransList: getdash.result
            })
        }
    }


    HandlerClose=(check)=>{
        if(check=='ITM'){
            this.setState({
                SModals:false,
                mode:'',
             })
        }
        else if(check=='MM'){
            this.setState({
                MModals:false,
                mode:'',
                Proc:{},
                ordList:[]
             })
        }
        else if(check=='DET'){
            this.setState({
                DetModals:false,
                orderModel:this.orderModel
             })
        }
        else if(check=='ORD'){
            this.setState({
                OrdNext:false,
                orderModel:this.orderModel
            })
        }

    }


    HandlerOpen=()=>{
        this.loadData()
        this.setState({
            SModals:true
         })
    }


    OrdNextOpen=(idx)=>{
        const {TransList}=this.state       
            this.setState({
                OrdNext:true,
                orderModel:{
                    ...this.state.orderModel,
                    code_trans:TransList[idx].code_trans,
                    ord_id:TransList[idx].ord_id,
                    
                    total_item:TransList[idx].count,
                    amount:TransList[idx].sum
                },
            })
    }

  


    //pagination

    
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



 

    //end of pagination 



    //input handler
    selectPro = (Pro)=>{
        const {ordList}=this.state;

        let  idx = ordList.findIndex(i=>i.id==Pro.id)
            console.log(idx)
        if(idx==-1){
           this.setState({
               Proc:{
                   id:Pro.id,price:Pro.price,name:Pro.name_pro,stock:Pro.stock
               },
               MModals:true
           })
           console.log(this.state.Proc)
        }
        else{
            ordList.splice(idx,1)
        }
        console.log(ordList)
        console.log(this.state.Proc)
    }
    

    InputQty=name=>({target:{value}})=>{
        this.setState({
            Proc:{
                ...this.state.Proc,
                [name]: value
            }
        })
    }


    buyHandler = ()=>{
        const {Proc,ordList}=this.state
        ordList.push(Proc)
        this.setState({
            MModals:false
        })
        console.log(ordList)
    }

    orderPost=async()=>{
        const send = {
            ordList: this.state.ordList
        }
        const respon = await orderS.newOrder(send)
        if (respon.success) {
            alert("success : " + respon.result)
            this.HandlerClose('ITM')
            this.loadData()
            this.setState({
                ordList:[]
            })
        }
        else {
            alert("error : " + respon.result)
        }

    }
    


    //
 
    loadDetModals=async(idx)=>{
        console.log(idx)
        const getdash = await orderS.getDashOne(idx);
        const respon = await orderS.getOrdPro(idx);
        const getcnt = await orderS.getOrdPro_count(idx);
        if (respon.success && getcnt.success && getdash.success) {
            this.setState({
                orderModel:{
                    ...this.state.orderModel,
                    code_trans:getdash.result.code_trans,
                    ord_id:getdash.result.ord_id,
                    
                    total_item:getdash.result.quantity,
                    amount:getdash.result.amount
                },
                DetItem:respon.result,
                DetItem_lenght:getcnt.result.count
            })
        }
    }

    DetModalsOpen=(idx)=>{
        const {TransList}=this.state  
        this.loadDetModals(TransList[idx].ord_id)     
            this.setState({
                DetModals:true
            })
    }

    DelOrdItem=async(idx)=>{
        const respon = await orderS.DelOrdItem(idx);
        if (respon.success) {
            this.loadDetModals(this.state.orderModel.ord_id)  
            this.loadData()
        }
    }
    //



    //CHECKOUT PHASE

    OrderCheckout=async(idx)=>{
        const id={
            ord_id:idx
        }
        const respon = await orderS.Checkout(id);
        if (respon.success) {
            this.setState({
                orderModel:this.orderModel,
                OrdNext:false
            })
            this.loadData()
            this.ShowCheckOut()
        }
    }



    ShowCheckOut=async()=>{
        const respon = await orderS.getCheckout();

        console.log(respon)
        if (respon.success) {
            this.setState({
                Checkout_list:respon.result
            })
        }
    }

   
    DeleteOrder=async(idx)=>{
        const id = {
            ord_id:idx
        }
        const respon1 = await orderS.DeleteOrdItemAll(id);
        const respon = await orderS.DeleteOrd(id);
        if (respon.success && respon1.success) {
            this.loadData()
            this.HandlerClose('ORD')
        }
    }


    //







    render(){
        const {listPro,SModals,TransList}=this.state
        return (
             <div>{JSON.stringify(this.state.OrdNext)}
                 <OrderList show={SModals} HandlerClose={this.HandlerClose} listPro={listPro}
                 onChangePage={this.onChangePage} filter={this.state.filter}
                 ttlData={this.state.ttlData} selectPro ={this.selectPro}
                 MModals = {this.state.MModals} Pro ={this.state.Proc}
                 InputQty={this.InputQty} buyHandler={this.buyHandler}
                 orderPost = {this.orderPost} DetModals={this.state.DetModals} 
                 Detail={this.state.orderModel} DetItem={this.state.DetItem} DetItem_lenght={this.state.DetItem_lenght}
                 loadDetModals={this.loadDetModals} DelOrdItem={this.DelOrdItem} OrdNext={this.state.OrdNext}
                 OrderCheckout={this.OrderCheckout}
                 DeleteOrder={this.DeleteOrder}
                 ordList={this.state.ordList}
                 ></OrderList>
              

      
                 <button class='btn btn-primary btn-lg' type="button" data-toggle="modal" data-target="#add_data" onClick={this.HandlerOpen} ><i class="fas fa-shopping-cart" onClick={this.HandlerOpen}></i><br/>Purchase Item</button>
        <div class="row" style={{marginTop:"80px"}}>
        {
                         TransList.map((data,idx)=>{
                             let par = ''
                             if(idx%2==0){
                                par += 'bg-info'
                             }
                             else
                                par += 'bg-success'
                             return(
                                <div class="col-lg-3 col-6" key={data.code_trans}>
                                <div className={"small-box "+par}>
                                  <div class="inner">
                                    <h3>{data.code_trans}</h3>
                 
                                    <p>Total Price : {data.sum}</p>
                                    <p>Total Item  : {data.count}</p>
                                  </div>
                                  <div class="icon" onClick={()=>this.OrdNextOpen(idx)}>
                                  <i class="fas fa-cart-arrow-down"></i>
                                </div>
                                  <a href="#" class="small-box-footer" onClick={()=>this.DetModalsOpen(idx)}>More info <i class="fas fa-arrow-circle-down"></i></a>
                                </div>
                              </div>
                             )
                         })
                    }       
                   
        </div>

        <Order_out Checkout_list={this.state.Checkout_list}
         />
             </div>
        )
    }




}