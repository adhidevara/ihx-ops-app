import react from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export default class Order_out extends react.Component{
    
    render(){
        const {Checkout_list} = this.props
        return(
            <div>
                <hr></hr>
            <h1>Checkout</h1>
            <div class="row" style={{marginTop:"80px"}}>
        {
                         Checkout_list.map((data,idx)=>{
                             return(
                                <div class="col-lg-3 col-6" key={data.code_trans}>
                                <div class='small-box bg-info'>
                                  <div class="inner">
                                    <h3>{data.code_trans}</h3>
                 
                                    <p>Total Price : {data.sum}</p>
                                    <p>Total Item  : {data.count}</p>
                                  </div>
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                </div>
                                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-down"></i></a>
                                </div>
                              </div>
                             )
                         })
                    }       
                   
        </div>
            </div>
        )
    }


}