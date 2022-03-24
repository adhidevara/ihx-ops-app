import react from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './order.css'

export default class orderList extends react.Component{
    
   
    

    render(){
        const {listPro,show,HandlerClose,selectPro,MModals,Pro,InputQty,buyHandler,orderPost
        
            ,DetModals,Detail,DetItem,DetItem_lenght,DelOrdItem,OrdNext, OrderCheckout,DeleteOrder,
            ordList
        } = this.props
    
         var c= 'block'
        if(DetItem_lenght==1)
            c='none';
        
        return(
            <div>
          <Modal show={show} onHide={()=>HandlerClose('ITM')} dialogClassName="my-modal">
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                    <h3>Transaction Code</h3>
                    <input type='text' disabled class='form-control'></input>
                    {JSON.stringify(ordList)}
                        <table class="table table-striped table_id">
                     <thead>
                     <tr>
                         <th>Choose</th>
                         <th>Item</th>
                         <th>Qty</th>
                         <th>Price</th>
                         <th>Category</th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                         listPro.map(data=>{
                             return(
                                 <tr key={data.id}>
                                     <td><input type='checkbox' class='form-control' onChange={()=>selectPro(data)}></input></td>
                                     <td>{data.name_pro}</td>
                                     <td>{data.stock}</td>
                                     <td>{data.price}</td>
                                     <td>{data.cat_name}</td>
                                     <td>
                                     </td>
                                 </tr>
                             )
                         })
                    }
                    </tbody>
                 </table>
                 
                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={orderPost}>Purchase</Button>
                        </Modal.Footer>
              </Modal>


              <Modal show={MModals} onHide={()=>HandlerClose('MM')} backdrop="static" style={{opacity:1}} >
                <Modal.Header closeButton>
                  <Modal.Title>Jumlah Beli</Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                            <p>Stock : {Pro.stock}</p>
                            <p>Price : {Pro.price}</p>
                            <input type="number" id='qty' name="quantity" class='form-control' onChange={InputQty('quantity')} min='1' max={Pro.stock}></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={buyHandler} >Submit</Button>
                        </Modal.Footer>
              </Modal>


             
              <Modal show={DetModals} onHide={()=>HandlerClose('DET')}  backdrop="static" dialogClassName='my-modal'>
                <Modal.Header closeButton>
                  <Modal.Title>Jumlah Beli</Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                            
                        <div class="invoice p-3 mb-3">
              <div class="row">
                <div class="col-12">
                  <h4>
                    <i class="fas fa-globe"></i> AdminLTE, Inc.
                    <small class="float-right">Date: 2/10/2014</small>
                  </h4>
                </div>
           
              </div>
           
              <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                  From
                  <address>
                    <strong>Admin, Inc.</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (804) 123-5432<br/>
                    Email: info@almasaeedstudio.com
                  </address>
                </div>
             
                <div class="col-sm-4 invoice-col">
                  To
                  <address>
                    <strong>John Doe</strong><br/>
                    795 Folsom Ave, Suite 600<br/>
                    San Francisco, CA 94107<br/>
                    Phone: (555) 539-1037<br/>
                    Email: john.doe@example.com
                  </address>
                </div>
            
                <div class="col-sm-4 invoice-col">
                  <b>Invoice {Detail.code_trans}</b><br/>
                  <br/>
                  <b>Item Count :</b> {Detail.total_item}<br/>
                  <b>Payment :</b> {Detail.amount}<br/>
                </div>
              
              </div>
        
              <div class="row">
                <div class="col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                    <tr>
                      <th>No</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th  style={{display:c}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                         DetItem.map((data,idx)=>{
                             return(
                                 <tr key={data.ordd_id}>
                                     <td>{idx+1}</td>
                                     <td>{data.name_pro}</td>
                                     <td>{data.price}</td>
                                     <td>{data.quantity}</td>
                                     <td>{data.amount}</td>
                                     <td><button class='btn btn-danger' onClick={()=>DelOrdItem(data.ordd_id)} style={{display:c}}><i class="far fa-trash-alt"></i></button></td>
                                 </tr>
                             )
                         })
                    }
                    <tr>
                        <td colSpan='3'><b>TOTAL</b></td>
                        <td>{Detail.total_item}</td>
                        <td>{Detail.amount}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
                        </Modal.Body>
                        <Modal.Footer>
                           
                        </Modal.Footer>
              </Modal>
                





              <Modal show={OrdNext} onHide={()=>HandlerClose('ORD')} backdrop="static" style={{opacity:1}}>
                <Modal.Header closeButton>
                  <Modal.Title>Jumlah Beli</Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                        <h3>{Detail.code_trans}</h3>
                            <p>Item  : {Detail.total_item}</p>
                            <p>Total : {Detail.amount}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={()=>OrderCheckout(Detail.ord_id)}>Check Out</Button>
                            <Button variant="danger" onClick={()=>DeleteOrder(Detail.ord_id)}>Delete This</Button>
                        </Modal.Footer>
              </Modal>




             

            </div>
        )
    }


}