import React from 'react'
import Table from 'react-bootstrap/Table'
import bankService from '../service/bankService'
import FormInput from './formInput'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

export default class Index extends React.Component {


    BankModel = {
        id: 0,
        name: '',
        va_code: '',
        is_delete: false
    }

    constructor() {
        super()
        this.state = {
            ListBank: [],
            BankModel: this.BankModel,
            showModal: false,
            modalSukses: false,
            modalEdit: false,
            modalDelete: false,
            mode: '',
            formIsValid: true,
            errors: {},
            filter: {
                search: '',
                order: '',
                page: '1',
                pageSize: '5'
            },
            totalData: 1,
            cekData: {
                name: '',
                va_code: ''
            },
            id_user: 0
        }
    }

    componentDidMount() {
        const { filter } = this.state
        this.loadList(filter)
        this.getDataCheck()
    }

    loadList = async () => {
        const { filter } = this.state
        const respon = await bankService.getAllSearch(filter)
        const countData = await bankService.countBank(filter)
        let count = 0
        if (respon.success && countData.success) {
            count = countData.result[0].total_bank
            this.setState({
                ListBank: respon.result,
                totalData: Math.ceil(count / filter.pageSize)
            })
        }
    }

    filterHandler = name => ({ target: { value } }) => {
        this.setState({
            filter: {
                ...this.state.filter,
                [name]: value
            }
        })
    }

    handleSearch = () => {
        const { filter } = this.state
    }

    handleClose = async () => {
        this.setState({
            showModal: false,
            modalSukses: false,
            modalEdit: false,
            modalDelete: false
        })
    }

    funcCreateHandler = async () => {
        this.setState({
            BankModel: this.BankModel,
            mode: 'create',
            showModal: true
        })
    }

    funcChangeHandler = name => ({ target: { value } }) => {
        this.setState({
            BankModel: {
                ... this.state.BankModel,
                [name]: value
            }
        })
    }

    funcSaveHandler = async () => {
        const { BankModel, mode } = this.state
        if (mode === 'edit') {
            if (this.funcValidationDuplicateVA()) {
                const { id_user } = this.state
                id_user = id
                localStorage.setItem('id', 1)
                const id = localStorage.getItem('id')
                
                const respon = await bankService.updateBank(BankModel, id_user)

                if (respon.success) {
                    this.setState({
                        modalEdit: true
                    })
                    this.loadList()
                } else {
                    alert('Error ' + respon.result)
                }
            }
        } else {
            if (this.funcValidationType() && this.funcValidationDuplicate()) {
                const respon = await bankService.addData(BankModel)

                if (respon.success) {
                    this.loadList()
                    this.setState({
                        BankModel: this.BankModel,
                        showModal: false,
                        modalSukses: true
                    })
                } else {
                    alert('Error' + respon.result)
                }
            }
        }
    }

    funcUpdateFalse = async (data) => {
        const respon = await bankService.deleteData(data)

        if (respon.success) {
            this.setState({
                modalDelete: true
            })
            this.loadList()
        } else {
            alert('Error ' + respon.result)
        }

        this.setState({
            BankModel: this.BankModel,
            mode: '',
            showModal: false
        })
    }

    funcEditHandler = async (id) => {
        const respon = await bankService.getById(id)
        console.log(respon)
        if (respon.success) {
            this.setState({
                BankModel: respon.result,
                mode: 'edit',
                showModal: true
            })
        }
    }

    funcDelHandler = (data) => {
        this.setState({
            mode: 'delete',
            showModal: true,
            BankModel: data
        })
    }

    getDataCheck = async () => {
        const respon = await bankService.getDataCheck()

        console.log(respon)
        if (respon.success) {
            this.setState({
                cekData: respon.result
            })
        }

    }

    // VALIDATION
    funcHandleValidation = () => {
        let fields = this.state.BankModel

        let errors = {}
        let formIsValid = true

        if (!fields["name"]) {
            formIsValid = false
            errors["name"] = "This Fields is Required"
        }

        if (!fields["va_code"]) {
            formIsValid = false
            errors["va_code"] = "This Fields is Required"
        }

        if (typeof fields["va_code"] !== "undefined") {
            if (fields["va_code"].length > 10) {
                formIsValid = false
                errors["va_code"] = "VA Code only 10 Digits or Less"
            }
        }

        this.setState({ errors: errors })
        return formIsValid
    }

    funcValidationType = () => {
        if (this.funcHandleValidation()) {
            let fields = this.state.BankModel

            let errors = {}
            let formIsValid = true

            if (typeof fields["va_code"] !== "undefined") {
                if (!fields["va_code"].match(/^[0-9\b]+$/)) {
                    formIsValid = false;
                    errors["va_code"] = "VA Code Only Numbers";
                }
            }
            this.setState({ errors: errors })
            return formIsValid
        }
    }


    funcValidationDuplicate = () => {
        const { BankModel, cekData } = this.state
        let errors = {}
        let formIsValid = true

        for (let i = 0; i < cekData.length; i++) {
            if (BankModel['name'] == cekData[i].name) {
                formIsValid = false
                errors["name"] = "Bank Name is Register"
                console.log("name register")
            }

            if (BankModel['va_code'] == cekData[i].va_code) {
                formIsValid = false
                errors["va_code"] = "VA Code is Register"
                console.log("va register")
            }
        }

        this.setState({ errors: errors })
        return formIsValid
    }

    funcValidationDuplicateVA = () => {
        const { BankModel, cekData } = this.state
        let errors = {}
        let formIsValid = true

        for (let i = 0; i < cekData.length; i++) {
            if (BankModel['va_code'] == cekData[i].va_code) {
                formIsValid = false
                errors["va_code"] = "VA Code is Register"
                console.log("va register")
            }
        }

        this.setState({ errors: errors })
        return formIsValid
    }

    //end validation

    onChangePage = (number) => {
        const { filter } = this.state
        this.setState({
            filter: {
                ...this.state.filter,
                ["page"]: number
            }
        }, () => this.loadList())
    }

    pageSizeHandler = (val) => {
        const { filter } = this.state
        let page = 1
        if (filter.page != 1) {
            this.setState({
                filter: {
                    ...this.state.filter,
                    ["pageSize"]: val,
                    ["page"]: 1
                }
            }, () => this.loadList())
        }
        else {
            this.setState({
                filter: {
                    ...this.state.filter,
                    ["pageSize"]: val
                }
            }, () => this.loadList())
        }
    }

    handlerSorting = () => {
        let order = ""
        const { filter } = this.state

        if (filter.order === "") {
            order = "DESC"
        }

        this.setState({
            filter: {
                ...this.state.filter,
                ["order"]: order
            }
        }, () => this.loadList())
    }

    renderPagination() {
        let items = []
        const { filter, totalData } = this.state

        for (let number = 1; number <= totalData; number++) {
            items.push(
                <PaginationItem key={number} active={number === filter.page}>
                    <PaginationLink onClick={() => this.onChangePage(number)}>
                        {number}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return (
            <Pagination>{items}</Pagination>
        )
    }



    render() {
        const { ListBank, BankModel, showModal, modalSukses, modalEdit, modalDelete, mode, errors } = this.state
        return (
            <div>
                {/* {JSON.stringify(this.state.filter)} */}
                <div class="row">
                    <div class="col-8">
                        <button type="button" class="btn btn-info btn-lg" onClick={this.funcCreateHandler}>Add Bank</button>
                    </div>
                    <div class="col">
                        <input class="form-control" type="input" id="search" placeholder="Search..." aria-label="Search" onChange={this.filterHandler("search")}></input>
                    </div>
                    <div class="col">
                        <div class="form-inline">
                            <div class="btn-froup">
                                <button class="btn btn-navbar" type="button" onClick={this.loadList}>
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="btn btn-navbar" type="submit" onClick={this.handlerSorting}>
                                    <i class="fas fa-sort"></i>
                                </button>
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Size
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#" onClick={() => this.pageSizeHandler('5')}>5</a>
                                    <a class="dropdown-item" href="#" onClick={() => this.pageSizeHandler('10')}>10</a>
                                    <a class="dropdown-item" href="#" onClick={() => this.pageSizeHandler('20')}>20</a>
                                    <a class="dropdown-item" href="#" onClick={() => this.pageSizeHandler('20')}>30</a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <FormInput
                    handleClose={this.handleClose}
                    funcSaveHandler={this.funcSaveHandler}
                    funcChangeHandler={this.funcChangeHandler}
                    funcUpdateFalse={this.funcUpdateFalse}
                    BankModel={BankModel}
                    showModal={showModal}
                    modalSukses={modalSukses}
                    modalEdit={modalEdit}
                    modalDelete={modalDelete}
                    mode={mode}
                    errors={errors}
                />

                <br></br>
                <br></br>
                <Table>
                    <thead class="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>VA Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ListBank.map(data => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.va_code}</td>
                                        <td>
                                            <button class="btn btn-success" onClick={() => this.funcEditHandler(data.id)}>Edit</button> &nbsp;&nbsp;
                                            <button class="btn btn-danger" onClick={() => this.funcDelHandler(data)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div class="row">
                    <div class="col-10">
                    </div>
                    <div class="col-2">
                        <div class="float-right">
                            {this.renderPagination()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}