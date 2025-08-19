import Form from 'react-bootstrap/Form';

import CEtapaEstudante from './etapa1_estudante';

import InputDados from '../../components/inputDados';

function CEtapa4({ enviaDados, dados, erros }){

   return (
        <section>
            <h2 className='text-center fs-3 mb-3'>Sobre a Conta</h2>

            <Form.Group>
                <Form.Label>Desejo me cadastrar como...</Form.Label>
                <Form.Select aria-label='Desejo me cadastra como: ' className='mb-1' 
                isInvalid={!!erros.tipo}
                onChange={e => {
                    const value = e.target.value;

                    if (value == "empresa") enviaDados({tipo: "empresa", matricula: ""})
                    else if (value == "estudante") enviaDados({tipo: "estudante"})
                }} 
                value={dados.tipo}>
                    <option>Selecione...</option>
                    <option value="estudante">Estudante</option>
                    <option value="empresa">Empresa</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" className='mb-3'>
                    {erros.tipo}
                </Form.Control.Feedback>
            </Form.Group>

         
        </section>
   )

}

export default CEtapa4;