import { checarVazio, checarTamanho, passarErros } from "./validacoes.js";

export const validacaoTipo = (dados) => {
    const erros = {}; //Armazena erros da verificação

    const tipoErro = checarVazio(dados.tipo, "O tipo"); //Checa se o campo tipo está vazio.
    if (tipoErro) erros.tipo = tipoErro; //Se sim retorna o erro

    return erros; //Retorna todos os erros
}

export const validacaoEstudante = (dados) => {
    const erros = {};

    const camposObrigatorios = { //Seta os campos que são obrigatórios
        matricula: "Matrícula",
        cpf: "CPF"
    }

    passarErros(erros, camposObrigatorios, dados); //Passa pela lista

    if(!erros.cpf){ //Verifica se o cpf tem o tamanho adequeado.
        const valCPF = checarTamanho(dados.cpf, "CPF", 13)
        if(valCPF) erros.cpf = valCPF;
    }

    return erros; //Retorna todos os erros
}

export const validacaoEmpresa = (dados) => {
    const erros = {};
    
    const camposObrigatorios = {
        cnpj: "CNPJ",
        empresaRazao: "Razão Social",
        empresaNome: "Nome Fantasia",
        empresaArea: "Área de Atuação",
        empresaSobre: "Sobre a Empresa"
    };

    passarErros(erros, camposObrigatorios, dados);

    if(!erros.cnpj){
        const valCNPJ = checarTamanho(dados.cnpj, "CNPJ", 18);
        if(valCNPJ) erros.cnpj = valCNPJ;
    }

    return erros;
}