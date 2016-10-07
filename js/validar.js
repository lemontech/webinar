function validar() {
    var nome = $("#nome").val();
    var email = $("#email").val();

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        nome.focus();
        return false;
    }

    if (nome.length < 5) {
        alert('Digite seu nome completo');
        nome.focus();
        return false;
    }

    if (email == "") {
        alert('Preencha o campo com seu email');
        email.focus();
        return false;
    }

    var nomecomposto = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Ei ' + nome + ' já anota na sua agênda, porque os seus dados foram encaminhados com sucesso');
    }
    window.location="http:/lemontech.com.br";
}

