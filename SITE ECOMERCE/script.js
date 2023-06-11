function validar(event) {
    event.preventDefault();
    var nome = cadastro.cNome.value;
    var email = cadastro.cEmail.value;
    var fone = cadastro.cFone.value;
    var assunto = cadastro.cAssunto.value;
    var mensagem = cadastro.cMsg.value;
    var elemento = document.getElementById('menu-opcoes')
    var valorSelecionado = elemento.options[elemento.selectedIndex].value;
    
    if (nome == "" || nome == null) {
        document.getElementById('erro-nome').innerHTML = 'Preencha o campo Nome!'
        cadastro.cNome.style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('erro-nome').innerHTML = ''
        cadastro.cNome.style.borderColor = 'green';
    }
    if (email == "" || email == null) {
        document.getElementById('erro-email').innerHTML = 'Preencha o campo Email!'
        cadastro.cEmail.style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('erro-email').innerHTML = ''
        cadastro.cEmail.style.borderColor = 'green';
    }
    if (fone == "" || fone == null) {
        document.getElementById('erro-fone').innerHTML = 'Preencha o campo Telefone!'
        cadastro.cFone.style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('erro-fone').innerHTML = ''
        cadastro.cFone.style.borderColor = 'green';
    }
    if (valorSelecionado == '0') {
        document.getElementById('erro-menu').innerHTML = 'Selecione a Categoria!'       
        return false;
    } else {
        document.getElementById('erro-menu').innerHTML = ''
    }
    if (assunto == "" || assunto == null) {
        document.getElementById('erro-assunto').innerHTML = 'Preencha o campo Assunto!'
        cadastro.cAssunto.style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('erro-assunto').innerHTML = ''
        cadastro.cAssunto.style.borderColor = 'green';
    }
    if (mensagem == "" || mensagem == null) {
        document.getElementById('erro-mensagem').innerHTML = 'Preencha o campo Mensagem!'
        cadastro.cMsg.style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('erro-mensagem').innerHTML = ''
        cadastro.cMsg.style.borderColor = 'green';
    }
    if (cadastro = true) {
        alert('Cadastro enviado com sucesso!')
        location.assign('processadores.html')
    }
}