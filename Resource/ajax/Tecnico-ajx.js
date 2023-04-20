function CarregarMeusDados() {

    let dadosAPI = GetTnkValue();
    let id_user = dadosAPI.funcionario_id;

    let dados = {
        endpoint: "DetalharMeusDados",
        id_user: id_user
    }
    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("tecnico_api"),
        data: JSON.stringify(dados),
        headers: {
            'Authorization' : 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        },
        success: function (dados_ret) {
            var resultado = dados_ret["result"];
        

            $("#nome").val(resultado.nome);
            $("#empresa").val(resultado.empresa_tecnico);
            $("#email").val(resultado.login);
            $("#telefone").val(resultado.telefone);
            $("#cep").val(resultado.cep);
            $("#bairro").val(resultado.bairro);
            $("#rua").val(resultado.rua);
            $("#cidade").val(resultado.cidade);
            $("#sigla").val(resultado.sigla_estado);

        }


    })

    return false;


}


function AlterarMeusDados(id_form) {
    if (NotificarCamposGenerico(id_form)) {
        var dadosAPI = GetTnkValue();
        var id_user = dadosAPI.funcionario_id;
        let dados = {
            endpoint: "AlterarTecnico",
            nome_usuario: $("#nome").val(),
            empresa: $("#empresa").val(),
            login: $("#email").val(),
            telefone: $("#telefone").val(),
            cep: $("#cep").val(),
            rua: $("#rua").val(),
            bairro: $("#bairro").val(),
            cidade: $("#cidade").val(),
            sigla_est: $("#estado").val(),
            id_endereco: $("#id_end").val(),
            tipo: "3",
            id_user: id_user
        }
        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            }, success: function (dados_ret) {
                let resultado = dados_ret['result'];
                if (resultado == '1') {
                    MensagemSucesso();
                } else {
                    MensagemErro();
                }
            }
        })
    }
    return false;
}



function FiltrarChamados() {

    let dados = {
        endpoint: "FiltrarChamados",
        situacao: $("#situacao").val()
    }

    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("tecnico_api"),
        data: JSON.stringify(dados),
        headers: {
            'Authorization' : 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        },
        success: function (dados_ret) {

            let chamados = dados_ret["result"];




            if (chamados != "") {
                let table_start = '';
                let table_end = '';
                let table_data = '';
                let table_head = '';

                table_start = '<table class="table table-hover" id="tableResult"><thead>';
                table_head += '<tr>';
                table_head += '<th><th>';
                ; table_head += '<th>Data Abertura</th><th>Funcionário</th>';
                table_head += '<th>Equipamento</th><th>Problema</th></tr></thead><tbody>';

                $(chamados).each(function () {
                    table_data += '<tr>';
                    table_data += '<td>';
                    table_data += '<td>';
                    if (this.data_atendimento != null) {
                        table_data += '<button type="button" data-toggle="modal" data-target="#modal-vermais" class="btn btn-warning btn-xs" onclick="Carregarvermais('+ "'"+ this.data_atendimento + "'" + ',' + "'" + (Avaliarinformacao(this.data_encerramento)) + "'"  + ',' +"'" + (Avaliarinformacao(this.nome_tec_atendimento)) + "'" + ',' +"'" + (Avaliarinformacao(this.nome_tec_encerramento)) + "'" + ',' + "'" + (this.laudo_tecnico) + "'" +')">Ver Mais</button>';
                        //se a data de atendimento for igual vazio.
                    }

                    if (this.data_atendimento == null) {
                        table_data += '<button type="button" class="btn btn-danger btn-xs" onclick="CarregarAtendimentoModal(' + this.id + ', ' + "'" + this.identificacao + ' / Modelo : ' + this.nome + ' / ' + this.nomeequip + "'" + ')" data-toggle="modal" data-target="#modal-atender">Atender</button>';
                        //se esta data for diferente de vazio e data de encerramento for vazio.
                    } else if (this.data_atendimento != null && this.data_encerramento == null) {
                        table_data += '<button type="button"  class="btn btn-success btn-xs" onclick="CarregarModalEncerramento(' + this.id + ', ' + "'" + this.identificacao + ' / Modelo : ' + this.nome + ' / ' + this.nomeequip + "'" + ',' + this.alocar_id + ' )" data-toggle="modal" data-target="#modal-encerrar">Finalizar</button>';
                    }
                    table_data += '</td>';//, ' + "'" + this.identificacao + ' / Modelo : ' + this.nome + ' / ' + this.nomeequip + "'" + ',' + this.alocar_id + '
                    table_data += '<td>' + this.data_abertura + '</td>';
                    table_data += '<td>' + this.nome_funcionario + '</td>';
                    table_data += '<td>' + this.identificacao + '  Modelo: ' + this.nome + ' /Equip: ' + this.nomeequip + '</td>';
                    table_data += '<td>' + this.descriçao_problema + '</td>';
                    table_data += '</tr>';

                })

                table_end = '</tbody></table>';

                var vaso = table_start + table_head + table_data + table_end;

                $("#tableResult").html(vaso);
                $("#divResult").show();
            } else {
                MensagemRegistronaoencontrado();
                $("#divResult").hide();
            }

        }
    })

}

function AtenderChamado() {
    var dadosAPI = GetTnkValue();
    var id_user = dadosAPI.funcionario_id;

    let dados = {
        endpoint: "AtenderChamadoAPI",
        
        id_tec: id_user,
        id_chamado: $("#id_chamado").val()
    }
    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("tecnico_api"),
        data: JSON.stringify(dados),
        headers: {
            'Authorization' : 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        },
        success: function (dados_ret) {

            let resultado = dados_ret["result"];

            if(resultado == '1'){

            MensagemSucesso();
            FiltrarChamados();

            $("#modal-atender").modal("hide");

            } else {

                MensagemErro();
            
            } 
        }  
        
    })


}


function EncerrarChamados(form_id){

    if(NotificarCamposGenerico (form_id)){
        var dadosAPI = GetTnkValue();
        var id_user = dadosAPI.funcionario_id;
        var dados = {
            endpoint: 'EncerrarChamado',
            id_alocar: $('#id_alocar_tec').val(),
            tec_encerr: id_user,
            laudo_tec: $('#laudo_tec').val().trim(),
            id_chamado: $('#id_chamado_enc').val(),
        }
    $.ajax({

        type:  'post',
        url: BASE_URL_AJAX("tecnico_api"),
        data: JSON.stringify(dados),
        headers:{
            'Authorization': 'Bearer ' + GetTnk(),
            'Content-Type' : 'application/json'
        },
        success: function (dados_ret) {
           // console.log(dados_ret);

            let resultado = dados_ret["result"];

            if(resultado == '1'){

            MensagemSucesso();
            FiltrarChamados();

            $("#modal-encerrar").modal("hide");

            } else {

                MensagemErro();
            
            } 
        }

    })
}

}



function ValidarAcesso(id_form) {
    if(NotificarCamposGenerico(id_form)){

    
        var dados = {
            login: $("#login").val(),
            senha: $("#senha").val(),
            endpoint: 'Autenticar'
        }
        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                
                var dados = resultado['result'];
            
                if(dados == -3){
                    MensagemGenerica("Usuário não autorizado")
                } else{
                   AddTnk(dados);
                    location = "consultarchamado.php";
                }
            }
        })
        
    }
    return false;
}

function VerificarSenhaAtual(id_form) {
    if (NotificarCamposGenerico(id_form)) {

        var dados = GetTnkValue();
        var id_user = dados.funcionario_id;

        var dados = {
            endpoint: "VerificarSenhaAtual",
            senha: $("#senha").val().trim(),
            id:id_user
        }
        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                var ret = resultado["result"];

                if (ret == -1) {
                    MensagemGenerica("Senha Atual não confere");
                } else if (ret == 1) {
                    $("#divSenhatecAtual").hide();
                    $("#divMudartecSenha").show();
                } else if (ret == -1000) {
                    ClearTnk();
                    RedirectToPage("login");
                }
            }
        })

    }
    return false;
}


function AtualizarSenhaf(id_form) {
    if (NotificarCamposGenerico(id_form)) {
        var dados = {
            endpoint: "AtualizarSenha",
            senha: $("#senhanova").val().trim(),
            repetir_senha: $("#senhanova1").val().trim(),
            id: 6 //Fixo por enquanto
        }
        $.ajax({
            type: "POST",
            url: 'http://localhost/ControleOS/src/Resource/api/tecnico_api.php',
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                var ret = resultado["result"];

                if (ret == -1) {
                    MensagemErro();
                }
                if (ret == -2) {
                    MensagemGenerica("A senha deverá conter no mínimo 6 caracteres");
                } else if (ret == -3) {
                    MensagemGenerica("O campo SENHA e REPETIR SENHA não conferem");
                } else if (ret == 1) {
                    MensagemSucesso();
                    LimparCamposGenerico();
                } 
            }
        })

    }
    return false;
}


function AtualizarSenha(id_form) {
    if (NotificarCamposGenerico(id_form)) {

        var dados = GetTnkValue();
        var id_user = dados.funcionario_id;

        var dados = {
            endpoint: "AtualizarSenha",
            senha: $("#senhanova").val().trim(),
            repetir_senha: $("#senhanova1").val().trim(),
            id: id_user
        }
        $.ajax({
            type: "POST",
            url: BASE_URL_AJAX("funcionario_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization' : 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function (resultado) {
                var ret = resultado["result"];

                if (ret == -1) {
                    MensagemErro();
                }
                else if (ret == -2) {
                    MensagemGenerica("A senha deverá conter no mínimo 6 caracteres");
                }
                else if (ret == -3) {
                    MensagemGenerica("O campo SENHA e REPETIR SENHA não conferem");
                }
                else if (ret == 1) {
                    MensagemSucesso();

                }
            }
        })

    }
    return false;
}

