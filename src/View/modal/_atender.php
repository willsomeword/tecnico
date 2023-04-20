<div class="modal fade" id="modal-atender">
    <div class="modal-dialog">
        <div class="modal-content bg-sucess">
            <div class="modal-header">
                <h4 class="modal-title">Mudar Status</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input id="id_chamado" type="hidden">
                    <label>Deseja atender o chamado</label> <span id="equipamento_atender"></span>

                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                <button class="btn btn-outline-dark" name="btnMudarStatus" onclick="return AtenderChamado()" >Sim</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog-->
</div>