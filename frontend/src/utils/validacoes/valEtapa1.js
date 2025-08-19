import { checarVazio } from "./validacoes.js";

export const validacaoTipo = (dados) => {
    const erros = {};

    const tipoErro = checarVazio(dados.tipo, "O tipo");
    if (tipoErro) erros.tipo = tipoErro;

    return erros;
}

function passarErros(erros, camposObrigatorios, dados) {
    Object.entries(camposObrigatorios).forEach(([campo, nomeBonito]) => {
        const erro = checarVazio(dados[campo], nomeBonito);
        if (erro) erros[campo] = erro;
    });
}

export const validacaoEstudante = (dados) => {
    const erros = {};

    const camposObrigatorios = {
        matricula: "Matrícula",
        cpf: "CPF"
    }

    passarErros(erros, camposObrigatorios, dados)

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

    passarErros(erros, camposObrigatorios, dados)

    return erros;
}