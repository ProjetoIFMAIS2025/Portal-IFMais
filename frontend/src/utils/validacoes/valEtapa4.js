import { checarTamanho, passarErros } from "./validacoes.js";

export const validarCEP = (dados) => {
    const erros = {};

    const camposObrigatorios = { //Seta campos obrigatórios
        cep: "CEP",
        UF: "Estado",
        cidade: "Cidade",
        bairro: "Bairro",
        rua: "Rua",
        numeroCasa: "Número da Casa"
    };

    passarErros(erros, camposObrigatorios, dados); //passa por todos eles para verificar se estão vazios

    if(!erros.cep){ //Verifica se o usuário inseriu todos os valores de um cep válido
        const checarCEP = checarTamanho(dados.cep, "CEP", 9);
        if(checarCEP){
            erros.cep = checarCEP;
        }
    }

    return erros; //Retorna todos os erros
}