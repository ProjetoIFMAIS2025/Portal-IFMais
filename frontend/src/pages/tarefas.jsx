import { useLocation } from "react-router-dom";
import { empresaTeste, tarefaTeste, tarefaTeste2, AlunoTeste, AlunoTeste2, tarefaAbertaTeste} from "../utils/testConsts"
import TarefasFullPage from "../components/tarefaFullPage/tarefaFullPage";

export default function tarefas(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tarefaID = queryParams.get('id');

    return (
        <div>
            {tarefaID == 1 && <TarefasFullPage empresaInfo={empresaTeste} tarefaInfo={tarefaTeste} userInfo={AlunoTeste} arquivo={null} filtro="andamento"/>}
            {tarefaID == 2 && <TarefasFullPage empresaInfo={empresaTeste} tarefaInfo={tarefaTeste2} userInfo={AlunoTeste2} arquivo="Controle_Estoque.xlsx" filtro="analise"/>}
            {tarefaID == 3 && <TarefasFullPage empresaInfo={empresaTeste} tarefaInfo={tarefaAbertaTeste} userInfo={null} arquivo={null} filtro="candidato"/>}
        </div>
    )
}