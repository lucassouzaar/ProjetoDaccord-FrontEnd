function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    

    if(login === "admin" && senha === "admin"){
        alert('Logado com sucesso')
    }
    else{
        alert('Usuário ou senha incorretos')
    }    
}

function esqueceuSenha() {
        window.location.href = "https://www.daccord.com.br/account/reset/";
  }
  
  function criarConta() {
        window.location.href = "https://www.daccord.com.br/account/register/";
  }

