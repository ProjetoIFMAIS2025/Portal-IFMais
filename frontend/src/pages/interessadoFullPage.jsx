import { useLocation } from "react-router-dom";

import { AlunoTeste, AlunoTeste2, tarefaTeste, tarefaTeste2, tarefaAbertaTeste } from "../utils/testConsts";

import Interessado from "../components/interessado";

export default function TarefasFullPage(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const interessadoID = queryParams.get('id');

    return (
        <div>
            {interessadoID == 1 && <Interessado userInfo={AlunoTeste} tarefaInfo={tarefaTeste}/>}
            {interessadoID == 2 && <Interessado userInfo={AlunoTeste2} tarefaInfo={tarefaTeste2}/>}
            {/*interessadoID == 3 && <Interessado empresaInfo={empresaTeste2} tarefaInfo={tarefaAbertaTeste} filtro="analise"/>*/}
        </div>
    )
}