import { checarTamanho, passarErros } from "./validacoes.js";

export const validarCEP = (dados) => {
    const erros = {};

    const camposObrigatorios = {
        cep: "CEP",
        UF: "Estado",
        cidade: "Cidade",
        bairro: "Bairro",
        rua: "Rua",
        numeroCasa: "Número da Casa"
    };

    passarErros(erros, camposObrigatorios, dados);

    if(!erros.cep){
        const checarCEP = checarTamanho(dados.cep, "CEP", 9);
        if(checarCEP){
            erros.cep = checarCEP;
        }
    }

    return erros;
}