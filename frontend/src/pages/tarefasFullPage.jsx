import { useLocation } from "react-router-dom";

import Tarefa from "../components/tarefa";

export default function TarefasFullPage(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tarefaID = queryParams.get('id');

    const empresaTeste = {
        fotoUser: 'src/storage/logoEmpresaRandom.webp',
        quantEstrelas: 4,
        nome: "WebCom LTDA",
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. ",

    }

    const tarefaTesteHabilidades = ["Design Gráfico", "Desenvolvimento Web", "Programação Web"]
    const tarefaTesteHabilidades2 = ["Excel", "Logística", "Gestão"]

    const tarefaTeste = {
        titulo: "Reestruturar do site",
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. ",
        habilidades: tarefaTesteHabilidades,
        prazoInicio: "xx/05/2025",
        prazoFim: "xx/06/2025",
        remunerado: true,
        quantidade: 100.00,
        pagamento: "PIX",
        entrega: "através da plataforma"
    }

    const tarefaTeste2 = {
        titulo: "Organizar planilhas de Entrega",
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. ",
        habilidades: tarefaTesteHabilidades2,
        prazoInicio: "xx/05/2025",
        prazoFim: "xx/06/2025",
        remunerado: false,
        entrega: "através da plataforma"
    }

    console.log(tarefaID);

    return (
        <div>
            {tarefaID == 1 && <Tarefa empresaInfo={empresaTeste} tarefaInfo={tarefaTeste}/>}
            {tarefaID == 2 && <Tarefa empresaInfo={empresaTeste} tarefaInfo={tarefaTeste2}/>}
        </div>
    )
}