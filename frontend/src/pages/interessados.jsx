import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Cabecalho from '../components/cabecalho/cabecalho';
import InteressadoAberto from '../components/Interessados/Interessados';

import { AlunoTeste, tarefaAbertaTeste } from '../utils/testConsts';
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
                        <option value='andamento'>Em andamento</option>
                        <option value='analise'>Aguardando análise</option>
                        <option value='pagamento'>Aguardando Pagamento</option>
                        <option value='finalizado'>Finalizado</option>
                    </Form.Select>
                </Form.Group>
            </section>

            <section className='sessao-tarefas tarefas-bloco'>
                <InteressadoAberto linkTarefa='/interessado?id=3' filtro={filtro} filtroTarefa={'analise'} userInfo={AlunoTeste} tarefaInfo={tarefaAbertaTeste} statusBool={true}/>
            </section>

        </main>
    )
}