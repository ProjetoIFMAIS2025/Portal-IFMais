import Form from 'react-bootstrap/Form';
import { useMask } from '@react-input/mask';

import InputDados from '../../components/inputDados';

function CEtapaEstudante({ enviaDados, dados }){

    const inputCPF = useMask({
        mask: '___.___.___-__',
        replacement: { _: /\d/ },
      });

   return (
        <>
            <InputDados
                idForm="matriculaEstudante"
                labelForm="Insira seu número de Matrícula:"
                placeholderInput="2025TBOR00000000"
                funcDados={e => enviaDados({matricula: e.target.value})}
                value={dados.matricula}
            />

            <Form.Group className="mb-3" controlId="cpfUsuario">
                <Form.Label>CPF</Form.Label>
                <Form.Control ref={inputCPF} type="text" placeholder='123.456.789-10' onChange={e => enviaDados({cpf: e.target.value})} value={dados.cpf} required/>
            </Form.Group>
        </>
   )

}

export default CEtapaEstudante;