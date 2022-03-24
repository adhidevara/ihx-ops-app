import React from 'react';
import {config} from '../config/config'




class Header2 extends React.Component{


    render(){
        return(
            <div>
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                </ul>
                
            <div class='col'>
                <div class="input-group input-group-sm">
                <input class="form-control" type="search" placeholder="Cari Dokter & Faskes" aria-label="Search" style={{width:'100%'}}></input>
                <div class="input-group-append">
                <button class="btn btn-primary" type="submit">
                    <i class="fas fa-search"></i>
                </button>
                </div>
                </div>
            </div>
            <div class="user-panel mt-3 pb-3 d-flex">
            <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
            </div>
            <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
            </div>
        </div>
            
            </nav>
            <aside class="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:'#b8e2f2'}}>
<a href="index3.html" class="brand-link mt-3">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
        />
      <span class="brand-text font-weight-bold">MED.ID</span>
    </a>
    <div class="sidebar" style={{marginTop:'50px'}}>
   
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li class="nav-item has-treeview menu-open">
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/categories" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Pesanan</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/product" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Product</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./order" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Order</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./constumer" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Constumer</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    
    </div>
</aside>

    

            </div>
        )
    }
}

export default Header2