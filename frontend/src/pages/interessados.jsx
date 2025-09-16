import { Link } from 'react-router-dom';

import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Cabecalho from '../components/cabecalho/cabecalho';
import InteressadoAberto from '../components/Interessados/Interessados';

import { AlunoTeste, AlunoTeste2, tarefaTeste, tarefaTeste2, tarefaAbertaTeste } from '../utils/testConsts';
import './interessados.scss';

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
                        <option value='candidato'>Aguardando Candidato</option>
                        <option value='andamento'>Em andamento</option>
                        <option value='analise'>Aguardando análise</option>
                        <option value='pagamento'>Aguardando Pagamento</option>
                        <option value='finalizado'>Finalizado</option>
                    </Form.Select>
                </Form.Group>
            </section>

            <section className='sessao-tarefas tarefas-bloco'>
                <InteressadoAberto linkAluno='/tarefa?id=1' filtro={filtro} filtroTarefa={'andamento'} dadosAluno={AlunoTeste} dadosTarefa={tarefaTeste} statusBool={true}/>
                <InteressadoAberto linkAluno='/tarefa?id=2' filtro={filtro} filtroTarefa={'analise'} dadosAluno={AlunoTeste2} dadosTarefa={tarefaTeste2} statusBool={true}/>
                <InteressadoAberto linkAluno='/tarefa?id=3' filtro={filtro} filtroTarefa={'candidato'} dadosAluno={null} dadosTarefa={tarefaAbertaTeste} statusBool={true}/>
            </section>

            <Link to="/criar-tarefa" className='btn btn-primary fs-2 fw-bold btn-tarefa'>Criar Tarefa</Link>
        </main>
    )
}