import React from 'react';





class Sidebar extends React.Component{


    render(){
        return(
            <div>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
<a href="index3.html" class="brand-link">
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
                  <p>Categories</p>
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

export default Sidebar