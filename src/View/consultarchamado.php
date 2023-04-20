<?php
require_once dirname(__DIR__, 2) . '/vendor/autoload.php';
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
            <h3>
              <p class="text-success">Consultar Chamados</p>
            </h3>
            <h6>Consulte todos seus chamados e realize os atendimentos</h6>
          </div>
          <div class="card-body">

            <div class="form-group">
              <form action="consultarchamados" method="post" id="form_id">
                <label>Escolha a situação</label>
                <select class="form-control obg" name="situacao" id="situacao" style="width: 100%;">
                  <option value="<?= SITUACAO_TODOS ?>">Todos</option>
                  <option value="<?= SITUACAO_EM_ABERTO ?>">Em Aberto</option>
                  <option value="<?= SITUACAO_EM_ATENDIMENTO ?>">Em Atendimento</option>
                  <option value="<?= SITUACAO_ENCERRADO ?>">Encerrados</option>
                </select>
              </form>
              <div class="form-group">
              </div>

              <div>
                <button onclick="return FiltrarChamados(form_id)" class="btn bg-gradient-success">pesquisar</button>

              </div>

            </div>
            <div class="card-body" id="divResult" style="display:none;">
              <div class="row">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Resultado Encontrado</h3>
                  </div>

                  <div class="panel-body">
                    <div class="table-responsive">
                      <table class="table table-striped table-bordered table-hover" id="tableResult">

                      </table>
                    </div>
                    <?php
                    include_once 'modal/_atender_chamado.php';
                    include_once 'modal/_atender.php';
                    ?>
                    <form action="form_encerrar">
                      <?php
                      include_once 'modal/_encerrar_chamado .php';
                      ?>
                    </form>
                  </div>

                </div>

              </div>
            </div>
            <!-- /.card -->

      </section>
      <!-- /.content -->
    </div>
    <!-- /.evitar por modal dentro da table pelo fato do safari nao renderizar corretamente para o usuario. -->





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
  include_once PATH_URL . '/Template/_includes/_scripts.php';
  include_once PATH_URL . '/Template/_includes/_msg.php';
  ?>
</body>
<script src="../../Resource/ajax/Tecnico-ajx.js"></script>
<script>
  Verify();
</script>

</html>