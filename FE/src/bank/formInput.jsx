import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default class FormInput extends React.Component {
    render() {
        const { showModal, modalSukses, modalEdit, modalDelete, mode, errors, handleClose, BankModel,
                funcSaveHandler, funcChangeHandler, funcUpdateFalse
                } = this.props
        return (
            <div>
                {/* {JSON.stringify(BankModel)} */}
                <Modal
                    show={showModal}
                    style={{ opacity: 1 }}
                    onHide={handleClose}
                >   
                    <Modal.Header closeButton>
                        <Modal.Title>Bank</Modal.Title>
                    </Modal.Header>
                    {mode === 'delete' ?
                        <Modal.Body>
                            <p>Are you {BankModel.name} sure for delete  ?</p>
                        </Modal.Body>

                        : //else

                        <Modal.Body>
                            <div class="form-group">
                                <label for="name">Name :</label> 
                                <input type="text" class="form-control" id="name" name="name" value={BankModel.name} onChange={funcChangeHandler("name")}></input>
                                <span style={{ color: "red" }}>{errors["name"]}</span>
                            </div>
                            <div class="form-group">
                                <label for="description">VA Number :</label> 
                                <input type="text" class="form-control" id="va_code" name="va_code" value={BankModel.va_code} onChange={funcChangeHandler("va_code")}></input>
                                <span style={{ color: "red" }}>{errors["va_code"]}</span>
                            </div>
                        </Modal.Body>
                    }
                    <Modal.Footer>
                        {mode === 'delete' ?
                            <button class="btn btn-primary" onClick={() => funcUpdateFalse(BankModel)}>Sure</button>

                            : //else

                            <button class="btn btn-primary" onClick={funcSaveHandler}>Submit</button>
                        }
                        <button class="btn btn-danger" onClick={handleClose}>Close</button>
                    </Modal.Footer>
                </Modal>
                <Modal show={modalSukses} onHide={handleClose} backdrop='static'>
                    <Modal.Header style={{ backgroundColor: '#b8e2f2' }} closeButton>
                        <Modal.Title><h2>Sukses</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bank Telah tersimpan</p>
                    </Modal.Body>
                </Modal>
                <Modal show={modalEdit} onHide={handleClose} backdrop='static'>
                    <Modal.Header style={{ backgroundColor: '#b8e2f2' }} closeButton>
                        <Modal.Title><h2>Sukses</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Data Bank Telah Terupdate</p>
                    </Modal.Body>
                </Modal>
                <Modal show={modalDelete} onHide={handleClose} backdrop='static'>
                    <Modal.Header style={{ backgroundColor: '#b8e2f2' }} closeButton>
                        <Modal.Title><h2>Sukses</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bank Telah Terhapus</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
