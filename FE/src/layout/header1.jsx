import React from 'react';
import { config } from '../config/config'
import Login_modal from './login_modal'



class Header1 extends React.Component {

  loginModal = {
    email: '',
    password: '',
  }

  constructor() {
    super()
    this.state = {
      loginModal: this.loginModal,
      LMod: false
    }
  }

  LMOpen = () => {
    this.setState({
      LMod: true
    })
  }


  LMClose = () => {
    this.setState({
      LMod: false
    })
  }


  LoginHandler = name => ({ target: { value } }) => {
    this.setState({
      loginModal: {
        ...this.state.loginModal,
        [name]: value
      }
    })
  }



  render() {
    return (
      <div>
        <Login_modal LMod={this.state.LMod} LMClose={this.LMClose} loginModal={this.state.loginModal}
          LoginHandler={this.LoginHandler}

        ></Login_modal>
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          <div class='container'>
            <a href="#" class="navbar-brand">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
              />
              <span class="brand-text font-weight-bold" style={{ color: 'white' }}>Test</span>
            </a>
            <div class="col">
              <div class="input-group input-group-sm">
                <input class="form-control" type="search" placeholder="Cari Dokter & Faskes" aria-label="Search" style={{ width: '100%' }} />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#" class="btn btn-outline-secondary mr-3">Daftar</a>
              </li>
              <li class="nav-item">
                <a href="#" class="btn btn-outline-primary" onClick={() => this.LMOpen()}>Masuk</a>
              </li>

            </ul>

          </div>
        </nav>

      </div>
    )
  }
}

export default Header1