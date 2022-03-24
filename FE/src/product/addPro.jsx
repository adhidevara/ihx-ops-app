import react from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'

export default class addPro extends react.Component{
    constructor(){
        super()
        this.state={
            selectedOption:[]
        }
    }

    render(){
        const {changeHandler,checkHandler,saveDat,ProModel,show, HandlerClose,mode,DelTemp,valHandler,errors,DelPerm
        ,selectHandler,cat
        } = this.props
        // const show = 
        let options = cat.map(function(item){
            console.log('loop')
            return {value:item.cat_id,label:item.cat_name}
        })

        return(
            <div>
          <Modal show={show} onHide={HandlerClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Category Data</Modal.Title>
                </Modal.Header>
                {mode === 'delete' ?
                        <Modal.Body>
                            <div className='modal-body'>
                            {JSON.stringify(ProModel)}
                                <p>Are You Sure delete {ProModel.name_pro}?</p>
                            </div>
                        </Modal.Body>
                        :
                        <Modal.Body>
                               {JSON.stringify(this.state.selectedOption)}
                        <label for="cat_name">Product Name:</label><br/>
                        <input type="text" id="name_pro" required name="name_pro" value={ProModel.name_pro} onChange={changeHandler('name_pro')} class='form-control'></input>
                        <span style={{color: "red"}}>{errors["name_pro"]}</span><br/>
                        <label for="cat_desc">Description :</label><br/>
                        <textarea name='desc_pro' id='desc_pro'  
                        onChange={changeHandler('desc_pro')} class='form-control' value= {ProModel.desc_pro}>
                        </textarea>
                        <span style={{color: "red"}}>{errors["desc_pro"]}</span><br/>
                        <br/>

                        <label for="cat_name">Price:</label><br/>
                        <input type="number" id="price" required name="price" value={ProModel.price} onChange={changeHandler('price')} 
                        class='form-control' placeholder='Rp.'></input><br></br>
                         <span style={{color: "red"}}>{errors["price"]}</span><br/>

                        <label for="cat_name">Stock:</label><br/>
                        <input type="number" id="stock" required name="stock" value={ProModel.stock} onChange={changeHandler('stock')} 
                        class='form-control' placeholder='Rp.'></input><br></br>
                         <span style={{color: "red"}}>{errors["stock"]}</span><br/>

                        <label for="cat_name">Categories:</label><br/>
                        <Select name="cat_id" value={mode!='edit' ? this.state.selectedOption : {label: ProModel.cat_name, value:ProModel.cat_id}}
                        onChange={selectHandler}
                        options={options}
                        > 

                        </Select>
                        <span style={{color: "red"}}>{errors["cat_id"]}</span><br/>
                        
                        <label for='active'>Active : </label> <input type='checkbox' name='active' id='active' onChange={checkHandler('active')} checked={ProModel.active}></input>
                        <br/>
                        <br/>
                        
                        </Modal.Body>
                    }
                    {mode == 'delete' ?
                        < Modal.Footer >
                            <Button variant="warning" onClick={()=>DelTemp(ProModel)}>Delete</Button>
                            <Button variant="danger" onClick={()=>DelPerm(ProModel)}>Permanent Delete</Button>
                            <Button variant="secondary" onClick={HandlerClose}>close</Button>
                        </Modal.Footer>
                        :
                        <Modal.Footer>
                            <Button variant="primary" onClick={saveDat}>Save Changes</Button>
                            <Button variant="secondary" onClick={HandlerClose}>Close</Button>
                        </Modal.Footer>
                    }
              </Modal>
            </div>
        )
    }


}