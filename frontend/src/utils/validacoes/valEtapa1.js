import { checarVazio, checarTamanho, passarErros } from "./validacoes.js";

export const validacaoTipo = (dados) => {
    const erros = {};

    const tipoErro = checarVazio(dados.tipo, "O tipo");
    if (tipoErro) erros.tipo = tipoErro;

    return erros;
}

export const validacaoEstudante = (dados) => {
    const erros = {};

    const camposObrigatorios = {
        matricula: "Matrícula",
        cpf: "CPF"
    }

    passarErros(erros, camposObrigatorios, dados);

    if(!erros.cpf){
        const valCPF = checarTamanho(dados.cpf, "CPF", 13)
        if(valCPF) erros.cpf = valCPF;
    }


    return erros;
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