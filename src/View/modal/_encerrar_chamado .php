<div class="modal fade" id="modal-encerrar">
    <div class="modal-dialog">
        <div class="modal-content bg-default">
            <div class="modal-header">
                <h4 class="modal-title">Encerrar Chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <input type="hidden" id="id_chamado_enc">
                    <input type="hidden" id="id_alocar_tec">


                    <div class="form-group col-md-12">
                        <label>Equipamento </label>
                        <input id="equipamento" readonly class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                        <label>Laudo</label>
                        <textarea id="laudo_tec" class="form-control"></textarea>
                        
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-success" data-dismiss="modal">Sair</button>
                <button onclick="return EncerrarChamados('form_encerrar')" class="btn btn-outline-success" data-dismiss="modal">Encerrar</button>

            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog-->
</div>