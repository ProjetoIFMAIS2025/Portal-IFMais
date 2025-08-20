import { checarVazio } from "./validacoes.js";

export const validarPessoais = (dados) => {
  const erros = {};

  const checarNome = checarVazio(dados.nome, "Nome ou Nome Social"); //Checa se o nome está vazio
  const checarSocial = checarVazio(dados.nomeSocial, ""); //Checa se o nome social está vazio

  // Regra: pelo menos um dos dois deve estar preenchido
  if (checarNome && checarSocial) {
    erros.nome = checarNome;
  }

  const checarData = checarVazio(dados.dataNasc, "Data de nascimento") //checa se data de nascimento esta vazio
  if(checarData){
    erros.dataNasc = checarData;
  }

  return erros; // <-- garante que sempre retorna {}
};

