//Checar se campo está vazio
export const checarVazio = (campo, string) => {
    if(!campo) return string + " é obrigatório!"; //Checa se o campo está vazio e retorna uma mensagem obrigatória
    return null; //Retorna nada se estiver tudo certo
}

//Checar se o campo tem o tamanho desejado
export const checarTamanho = (campo, string, tamanho) => {
    if(campo.lenght < tamanho) return string + " deve ter um tamanho mínimo de: " + tamanho; //Checa o tamanho e retorna uma string de aviso
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