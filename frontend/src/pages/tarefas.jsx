import Form from 'react-bootstrap/Form';
import Cabecalho from '../components/cabecalho/cabecalho';

import './tarefas.scss';

export default function Tarefas(){
    return(
        <main className="tarefas">

            <Cabecalho/>

            <h1 className='tarefas-titulo'>Tarefas</h1>

            <Form.Group className="tarefas-btns">
                <Form.Label>Filtros</Form.Label>
                <Form.Select aria-label="Filtro...">
                    <option value='andamento'>Em andamento</option>
                    <option value='analise'>Em análise</option>
                    <option value='pagamento'>Aguardando Pagamento</option>
                    <option value='finalizado'>Finalizado</option>
                </Form.Select>
            </Form.Group>
        </main>
    )
}