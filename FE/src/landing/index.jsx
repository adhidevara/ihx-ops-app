import React from 'react'

export default class Landing_Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Email: ' + this.state.value);
    event.preventDefault();
  }

    render(){
        return (
          <div class="hold-transition login-page">
            <div class="login-box">
              <div class="login-logo">
                <a href="../../index2.html"><b>IHX-OPS </b>Login</a>
              </div>
              <div class="card">
                <div class="card-body login-card-body">
                  <p class="login-box-msg">Selamat Datang di Dashboard IHX-Ops</p>

                  <form onSubmit={this.handleSubmit}>
                    <div class="input-group mb-3">
                      <input type="email" class="form-control" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <span class="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <input type="password" class="form-control" placeholder="Password" />
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <span class="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <p class="mb-1 text-right">
                      <a href="/forgot-password" class="">Lupa Password</a>
                    </p>
                    <div class="row">
                      <div class="col-12">
                        <input type="submit" value="Masuk" class="btn btn-primary btn-block"/>
                      </div>
                    </div>
                  </form>

                  <div class="social-auth-links text-center mb-3">
                    <p>- ATAU -</p>
                    <a href="#" class="btn btn-block btn-danger">
                      <i class="fab fa-google-plus mr-2"></i> Masuk dengan Google+
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
    }
}