import "bootstrap-icons/font/bootstrap-icons.css";

import { empresaTeste, empresaTeste2, tarefaTeste, tarefaTeste2, tarefaAbertaTeste } from "../utils/testConsts.js";

import Cabecalho from '../components/cabecalho/cabecalho';
import Tarefa from '../components/Tarefa/tarefaAberta.jsx'

import './homePage.scss'

export default function HomePage(){

    return(
        <main>
            <Cabecalho/>

            <h1 className="home_titulo">Oportunidades</h1>

            <section className="home_tarefas">
                <Tarefa linkTarefa="/tarefa?id=1" empresaInfo={empresaTeste} tarefaInfo={tarefaTeste}/>
                <Tarefa linkTarefa="/tarefa?id=2" empresaInfo={empresaTeste} tarefaInfo={tarefaTeste2}/>
            </section>
        </main>
    )
}