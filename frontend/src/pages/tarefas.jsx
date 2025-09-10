import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Cabecalho from '../components/cabecalho/cabecalho';
import TarefaAberta from '../components/Tarefa/tarefaAberta';

import './tarefas.scss';

export default function Tarefas(){
    const [filtro, setFiltro] = useState("andamento")

    return(
        <main className="tarefas">

            <Cabecalho/>

            <section className='sessao-tarefas tarefas-cabecalho'>
                <h1 className='tarefas-titulo'>Tarefas</h1>

                <Form.Group className="tarefas-filtro">
                    <Form.Label className='tarefas-filtro-titulo'>Filtros</Form.Label>
                    <Form.Select 
                        aria-label="Filtro..."
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)} >
                        <option value='andamento'>Em andamento</option>
                        <option value='analise'>Em análise</option>
                        <option value='pagamento'>Aguardando Pagamento</option>
                        <option value='finalizado'>Finalizado</option>
                    </Form.Select>
                </Form.Group>
            </section>

            <section className='sessao-tarefas tarefas-bloco'>
                <TarefaAberta linkTarefa='/tarefa' filtro={filtro} filtroTarefa={'andamento'} statusBool={true}/>
            </section>

        </main>
    )
}