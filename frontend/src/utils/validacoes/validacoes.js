//Checar se campo está vazio
export const checarVazio = (campo, string) => {
    if(!campo) return string + " é obrigatório(a)!"; //Checa se o campo está vazio e retorna uma mensagem obrigatória
    return null; //Retorna nada se estiver tudo certo
}

//Checar se o campo tem o tamanho desejado
export const checarTamanho = (campo, string, tamanho) => {
    if(campo.length < tamanho) return string + " inválido!"; //Checa o tamanho e retorna uma string de aviso
    return null; //Retorna nada se estiver tudo certo
}

export const checarEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email)) return "E-mail inválido";
    return null;
}

export const checarTelefone = (telefone) => {
    // Só números, espaço, parênteses e traço
    const regex = /^[0-9()\-\s]+$/;
    if (!regex.test(telefone)) return "Telefone inválido";

    // Mínimo de dígitos (ex: 10)
    const numeros = telefone.replace(/\D/g, "");
    if (numeros.length < 10) return "Telefone inválido";

    return null;
}

//Checa todos os campos e verifica se estão vazios
export function passarErros(erros, camposObrigatorios, dados) {
    Object.entries(camposObrigatorios).forEach(([campo, nomeBonito]) => { //Passa pela lista de campos
        const erro = checarVazio(dados[campo], nomeBonito); //Checa a lista selecionada
        if (erro) erros[campo] = erro; //Retorna um erro caso tenha
    });
}

