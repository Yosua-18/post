 <section class="content-header">
  <h1>
    <?php echo ucwords(str_replace("_"," ",$this->uri->segment(1)))?>
    <small></small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li class="active"><?php echo ucwords(str_replace("_"," ",$this->uri->segment(1)))?></li>
  </ol>
</section>

<section class="content"> 
  <div class="box box-default color-palette-box">
    <div class="box-header with-border">
     
      <div class="pull-right">
        <a href="<?php echo base_url()?>role/create" class="btn btn-sm btn-primary "><i class='fa fa-plus'></i> New Role</a>
      </div>
    <!-- </div> -->
    </div>
    <div class="box-body">
    <div class="box-header">
      
    </div>
      <div class="row">
        <div class="col-md-12"> 
            <div class="table-responsive">
            <?php if(!empty($this->session->flashdata('message'))){?>
            <div class="alert alert-info">
            <?php   
               print_r($this->session->flashdata('message'));
            ?>
            </div>
            <?php }?> 
             <?php if(!empty($this->session->flashdata('message_error'))){?>
            <div class="alert alert-info">
            <?php   
               print_r($this->session->flashdata('message_error'));
            ?>
            </div>
            <?php }?> 
            <table class="table table-striped" id="table"> 
              <thead>
                <th>No</th>
                <th>Name</th>
                <th>Description</th> 
                <th>Action</th>
              </thead>        
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <script data-main="<?php echo base_url()?>assets/js/main/main-role" src="<?php echo base_url()?>assets/js/require.js"></script>