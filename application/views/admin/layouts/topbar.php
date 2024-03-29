<header class="main-header">
  <!-- Logo -->
  <a href="<?php echo base_url()?>dashboard" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini">E-CO</span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg">E- CONSERVATION</span>
  </a>
  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <a class="navbar-brand" href="<?php echo base_url();?>" target="_blank">HALAMAN AWAL</a>
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">  
        <!-- User Account: style can be found in dropdown.less -->
        <li class="dropdown user user-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image"> -->
            <span class="hidden-xs"><?php echo $this->data['users']->first_name?></span>
          </a>
          <ul class="dropdown-menu"> 
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="<?php echo base_url('profile')?>" class="btn btn-default btn-flat">Profile</a>
              </div>
              <div class="pull-right">
                <a href="<?php echo base_url('auth/logout')?>" class="btn btn-default btn-flat">Keluar</a>
              </div>
            </li>
          </ul>
        </li> 
      </ul>
    </div>
  </nav>
</header>