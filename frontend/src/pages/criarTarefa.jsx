import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './criarTarefa.scss'

export default function CriarTarefa() {

    const habilidades = [
        "Resolução de problemas",
        "Pensamento crítico",
        "Criatividade",
        "Capacidade analítica",
        "Tomada de decisão",
        "Aprendizado contínuo",
        "Gestão",
        "Logística",
        "Design Gráfico",
        "Desenvolvimento Web",
        "Programação"
    ]

    const navigate = useNavigate();

    return (
        <main>
            <header className='criarTarefa-cabecalho voltar'>
                <button onClick={() => navigate(-1)} className='criarTarefa-voltar-btn voltar-btn'><i className="bi bi-arrow-left-circle voltar-icon"></i></button>
                <h1 className='criarTarefa-titulo'>Criar Tarefa</h1>
            </header>

            <Form className='criarTarefa-form'>
                <Form.Group className="mb-3 tarefa-form-item" controlId="tarefaTitulo">
                    <Form.Label className='tarefa-form-titulo destaque'>Título da Tarefa</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

  
                <Form.Label className='tarefa-form-titulo destaque'>Descrição da Tarefa</Form.Label>
                <FloatingLabel className='mb-3 tarefa-form-item' controlId="tarefaDescricao" label="Descrição da Tarefa">
                    <Form.Control
                    as="textarea"
                    placeholder="Descrição da tarefa..."
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>


                <Form.Group className='mb-3' controlId='tarefaHabilidades'>
                    <Form.Label className='tarefa-form-titulo destaque'>Habilidades Necessárias</Form.Label>
                    <Form.Select aria-label="..." controlId="tarefaHabilidades">
                        <option>...</option>
                        {habilidades.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Label className='tarefa-form-titulo destaque'>Prazo da Tarefa</Form.Label>
                <div className='criarTarefa-prazo'>

                    <div className='criarTarefa-prazo-dia mb-2'>
                        <Form.Group className="criarTarefa-prazo-dia-input" controlId="tarefaPrazoInicio">
                            <Form.Control type="date"/>
                        </Form.Group>

                        <span className='tarefa-form-titulo'>Até</span>

                        <Form.Group className="criarTarefa-prazo-dia-input" controlId="tarefaPrazoFim">
                            <Form.Control type="date"/>
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3 criarTarefa-prazo-hora" controlId="tarefaPrazoHora">
                        <span className='tarefa-form-titulo'>Encerra ás: </span>
                        <Form.Control type="time" className='inputLado'/>
                    </Form.Group>
                </div>

                <Form.Label className='tarefa-form-titulo destaque'>Pagamento</Form.Label> <br />
                <Form.Group className='mb-3 inputLado' controlId='tarefaPagamentoBool'> 
                    <Form.Check type="radio" id="tarefaPagamentoBool" label="Sim" name="pagamentoBool" inline/>   
                    <Form.Check type="radio" id="tarefaPagamentoBool" label="Não" name="pagamentoBool" inline/>   
                </Form.Group>

                <Form.Group className='mb-3 inputLado' controlId='tarefaPagQuant'>
                    <Form.Label className='tarefa-form-titulo'>Quantidade (R$): </Form.Label>
                    <Form.Control type="number"/>        
                </Form.Group>

                 <Form.Group className='mb-3 inputLado' controlId='tarefaPagMetod'>
                    <Form.Label className='tarefa-form-titulo'>Método de Pagamento</Form.Label>
                    <Form.Select aria-label="..." controlId="tarefaHabilidades">
                        <option>...</option>                      
                        <option value="pix">Pix</option>                      
                        <option value="trans">Transação Bancária</option>                      
                        <option value="fisico">Dinheiro Físico</option>                      
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId='tarefaEntMetod'>
                    <Form.Label inline className='tarefa-form-titulo destaque'>Método de Entrega</Form.Label>
                    <Form.Select aria-label="..." controlId="tarefaHabilidades">
                        <option>...</option>                      
                        <option value="plataforma">Plataforma</option>                      
                        <option value="presencial">Presencial</option>                      
                        <option value="terceiro">Plataforma Externa</option>                      
                    </Form.Select>
                </Form.Group>                


                <Button className='btn btn-primary fs-2 fw-bold btn-tarefa' variant="primary" type="submit">
                    Criar Tarefa
                </Button>
            </Form>
        </main>
    )
}