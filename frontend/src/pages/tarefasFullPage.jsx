import { useLocation } from "react-router-dom";

import { empresaTeste, empresaTeste2, tarefaTeste, tarefaTeste2, tarefaAbertaTeste } from "../utils/testConsts";

import Tarefa from "../components/tarefa";

export default function TarefasFullPage(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tarefaID = queryParams.get('id');

    return (
        <div>
            {tarefaID == 1 && <Tarefa empresaInfo={empresaTeste} tarefaInfo={tarefaTeste}/>}
            {tarefaID == 2 && <Tarefa empresaInfo={empresaTeste} tarefaInfo={tarefaTeste2}/>}
            {tarefaID == 3 && <Tarefa empresaInfo={empresaTeste2} tarefaInfo={tarefaAbertaTeste} filtro="analise"/>}
        </div>
    )
}