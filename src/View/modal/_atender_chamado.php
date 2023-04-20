<div class="modal fade" id="modal-vermais">
    <div class="modal-dialog">
        <div class="modal-content bg-default">
            <div class="modal-header">
                <h4 class="modal-title">Detalhes do chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Data do atendimento </label>
                        <input id="dt_atendimento" readonly class="form-control">
                    </div>
                    <div class="form-group col-md-6">
                        <label>Data do encerramento</label>
                        <input id="dt_encerramento" readonly class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                        <label>Tecnico que atendeu</label>
                        <input id="tec_atendimento" readonly class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                        <label>Tecnico que encerrou</label>
                        <input id="tec_encerramento" readonly class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                        <label>Laudo</label>
                        <textarea id="laudo" readonly class="form-control"></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Voltar</button>
            
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog-->
</div>