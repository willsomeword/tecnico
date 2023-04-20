<?php 
 require_once dirname(__DIR__, 2) .'/vendor/autoload.php';
 ?>
<!DOCTYPE html>
<html>

<head>
  <?php 
  include_once PATH_URL . '/Template/_includes/_head.php';
  ?>
</head>

<body class="hold-transition sidebar-mini">
  <!-- Site wrapper -->
  <div class="wrapper">
  <?php 
  include_once PATH_URL . '/Template/_includes/_topo.php';
  include_once PATH_URL . '/Template/_includes/_menu.php';
     ?>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-10">
            <div class="col-sm-60">
              <h1>Gerenciar setores</h1>
            </div>
            <div class="col-sm-12">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Administrador</a></li>
                <li class="breadcrumb-item active">Gerenciar setores</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
          <h3><p class="text-success">Atender Chamado</p></h3>
          <h6>faça os atendimentos aqui</h6>
        </div>
          <div>
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                title="Collapse">
                  
            </div>
          </div>
          
        <div class="card-body">
            <form role="form">
                <div class="row">
                  <div class="col-sm-6"> 
                    <div class="form-group">
                      <label>Data</label>
                      <input class="form-control" id="nome" name="nome" placeholder="digite aqui...">
                    </div>
                  </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                         <label>Funcionario</label>
                         <input class="form-control" id="nome" name="nome" placeholder="digite aqui...">
                      </div>
                    </div>
                    <div class="col-sm-6"> 
                     <div class="form-group">
                        <label>Setor</label>
                        <input class="form-control" id="nome" name="nome" placeholder="digite aqui...">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                         <label>Equipamento</label>
                         <input class="form-control" id="nome" name="nome" placeholder="digite aqui...">
                      </div>
                    </div>
                </div>
                <div class="form-group">
                        <label>Descrição do problema</label>
                        <textarea class="form-control" rows="3" placeholder="Digite aqui ..."></textarea>
                      </div>
                      <div class="form-group">
                        <label>Laudo</label>
                        <textarea class="form-control" rows="3" placeholder="Digite aqui ..."></textarea>
                      </div>
                
                <td>
                      <button class="btn bg-gradient-success">Finalizar</button>
                    </td>
                    
              </div>
          
          
         
        </div>
        <!-- /.card -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <?php
    include_once PATH_URL . '/Template/_includes/_footer.php';
     ?>

  
  </div>
  <!-- ./wrapper -->

  <?php
    include_once PATH_URL . '/Template/_includes/_scripts.php'
  ?>
</body>

</html>