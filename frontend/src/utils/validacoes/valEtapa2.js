import { checarVazio } from "./validacoes.js";

export const validarPessoais = (dados) => {
  const erros = {};

  const checarNome = checarVazio(dados.nome, "Nome ou Nome Social");
  const checarSocial = checarVazio(dados.nomeSocial, "");

  // Regra: pelo menos um dos dois deve estar preenchido
  if (checarNome && checarSocial) {
    erros.nome = checarNome;
  }

  const checarData = checarVazio(dados.dataNasc, "Data de nascimento")
  if(checarData){
    erros.dataNasc = checarData;
  }

  return erros; // <-- garante que sempre retorna {}
};

