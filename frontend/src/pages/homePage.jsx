import "bootstrap-icons/font/bootstrap-icons.css";

import { AlunoTeste, tarefaTeste, tarefaTeste2, tarefaAbertaTeste } from "../utils/testConsts.js";

import Cabecalho from '../components/cabecalho/cabecalho';
import Interessado from '../components/Interessados/Interessados.jsx'

import './homePage.scss'

export default function HomePage(){

    return(
        <main>
            <Cabecalho/>

            <h1 className="home_titulo">Oportunidades</h1>

            <section className="home_tarefas">
                <Interessado dadosAluno={AlunoTeste} dadosTarefa={tarefaAbertaTeste} linkAluno="/interessado?id=1"/>
            </section>
        </main>
    )
}