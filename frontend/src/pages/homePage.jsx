import "bootstrap-icons/font/bootstrap-icons.css";

import Cabecalho from '../components/cabecalho/cabecalho';
import Interessado from '../components/Tarefa/Interessados.jsx'

import './homePage.scss'

export default function HomePage(){

    

    return(
        <main>
            <Cabecalho/>

            <h1 className="home_titulo">Oportunidades</h1>

            <section className="home_tarefas">
                <Interessado/>
            </section>
        </main>
    )
}