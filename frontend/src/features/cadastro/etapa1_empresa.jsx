import { useMask } from '@react-input/mask';
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapaEmpresa({ enviaDados, dados, erros }){

    const inputCNPJ = useMask({
        mask: '__.___.___/____-__',
        replacement: { _: /\d/ },
    });

   return (
        <>
            <Form.Group className="mb-3" controlId="cnpjEmpresa">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control ref={inputCNPJ} type="text" placeholder='00.000.000/0000-00'
                isInvalid={!!erros.cnpj}
                onChange={e => { enviaDados({ cnpj: e.target.value });}}
                value={dados.cnpj}
                required/>
                <Form.Control.Feedback type="invalid" className='mb-3'>
                    {erros.cnpj}
                </Form.Control.Feedback>
            </Form.Group>

            <InputDados
                idForm="razaoSocialEmpresa"
                labelForm="Razão Social"
                placeholderInput=""
                funcDados={e => enviaDados({empresaRazao: e.target.value})}
                value={dados.empresaRazao}
                erros={erros.empresaRazao}
            />

            <InputDados
                idForm="fantasiaEmpresa"
                labelForm="Nome Fantasia"
                placeholderInput=""
                funcDados={e => enviaDados({empresaNome: e.target.value})}
                value={dados.empresaNome}
                erros={erros.empresaNome}
            />

            <InputDados
                idForm="areaEmpresa"
                labelForm="Área de Atuação"
                placeholderInput="Concerto de Carros"
                funcDados={e => enviaDados({empresaArea: e.target.value})}
                value={dados.empresaArea}
                erros={erros.empresaArea}
            />

            <Form.Group className='mb-3' controlId='empresaSobre'>
                <Form.Label>Descreva sua Empresa</Form.Label>
                <Form.Control as="textarea" rows={3} isInvalid={!!erros.empresaSobre}/>
                <Form.Control.Feedback type="invalid" className='mb-3'>
                    {erros.empresaSobre}
                </Form.Control.Feedback>
            </Form.Group>
        </>
   )

}

export default CEtapaEmpresa;