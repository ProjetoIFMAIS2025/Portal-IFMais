import { checarTamanho, checarEmail, checarTelefone, passarErros } from "./validacoes.js";

export const validarInfo = (dados) => {
  const erros = {};

  const camposObrigatorios = {
    telefone: "Telefone",
    email: "Email",
    senha: "Senha",
    confirmarSenha: "A confirmação da senha"
  }

  passarErros(erros, camposObrigatorios, dados);

  if(!erros.telefone){
    const valTel = checarTelefone(dados.telefone);
    const valTelTam = checarTamanho(dados.telefone, "Telefone", 10);

    if(valTel) erros.telefone = valTel;
    else if(valTelTam) erros.telefone = valTelTam;
  }

  if(!erros.email){
    const valEmail = checarEmail(dados.email);
    if(valEmail) erros.email = valEmail;
  }

  if(!erros.senha && !erros.confirmarSenha){
    if(dados.senha != dados.confirmarSenha){
        erros.senha = "As senhas devem ser identicas!"
        erros.confirmarSenha = "As senhas devem ser identicas!"
    }
  }

  return erros; // <-- garante que sempre retorna {}
};

