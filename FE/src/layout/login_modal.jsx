import react from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modal.css'
export default class Login_modal extends react.Component{
    
   
    

    render(){
        const {LMod,LMClose,loginModal,LoginHandler} = this.props
        return(
            <div>
               
              <Modal show={LMod} onHide={LMClose} backdrop="static" style={{opacity:1}}>
                <Modal.Header closeButton>
                  <Modal.Title>
                      <div class='col'>
                        <h3>LOGIN  {JSON.stringify(loginModal)}</h3>
                      </div>
                  </Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                        <form onSubmit={LMClose} class='mt-5'>
                        <input class='form-control' placeholder='Enter your email' type='email' name='email' onChange={LoginHandler('email')}></input>
                        <input type='password' class='form-control mt-3' placeholder='Enter your correct password' onChange={LoginHandler('password')}></input>
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger">Delete This</Button>
                        </Modal.Footer>
              </Modal>




             

            </div>
        )
    }


}