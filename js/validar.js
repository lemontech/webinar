function validar() {
var nome = form1.nome.value;
var email = form1.email.value;

if (nome == "") {
alert('Preencha o campo com seu nome');
form1.nome.focus();
return false;
}

if (nome.length < 5) {
alert('Digite seu nome completo');
form1.nome.focus();
return false;
}

if (email == "") {
alert('Preencha o campo com seu email');
form1.email.focus();
return false;
}

var nome = document.getElementById("nomeid");
  if (nome.value != "") {
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  } 
}

