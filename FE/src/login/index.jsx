import React, { useState } from 'react'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = () =>{
    props.history.push('/dashboard-solver')
  }
  
  return (
    <div class="hold-transition login-page">
      <div class="login-box">
        <div class="login-logo">
          <a href="../../index2.html"><b>IHX-OPS </b>Login</a>
        </div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Selamat Datang di Dashboard IHX-Ops</p>
            <p class="login-box-msg text-danger"><small>{error}</small></p>

            <form>
              <div class="input-group mb-3">
                <input 
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  value = {username}
                  onChange = {e => setUsername(e.target.value)}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
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
                  <input 
                    type="submit"
                    value={loading ? "Loading..." : "Masuk"}
                    disabled={loading}
                    class="btn btn-primary btn-block"
                    onClick={handleLogin}
                  />
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

export default Login;