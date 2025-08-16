import { useMask } from '@react-input/mask';
import Form from 'react-bootstrap/Form';

import InputDados from '../../components/inputDados';

function CEtapaEmpresa({ enviaDados, dados }){

    const inputCNPJ = useMask({
        mask: '__.___.___/____-__',
        replacement: { _: /\d/ },
    });

   return (
        <>
            <Form.Group className="mb-3" controlId="cepUsuario">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control ref={inputCNPJ} type="text" placeholder='00.000.000/0000-00'
                onChange={e => {
                    const value = e.target.value;
                    enviaDados({ cnpj: value });
                }}
                value={dados.cnpj}
                required/>
            </Form.Group>

            <InputDados
                idForm="razaoSocialEmpresa"
                labelForm="Razão Social"
                placeholderInput=""
                funcDados={e => enviaDados({empresaRazao: e.target.value})}
                value={dados.empresaRazao}
            />

            <InputDados
                idForm="fantasiaEmpresa"
                labelForm="Nome Fantasia"
                placeholderInput=""
                funcDados={e => enviaDados({empresaNome: e.target.value})}
                value={dados.empresaNome}
            />

            <InputDados
                idForm="areaEmpresa"
                labelForm="Área de Atuação"
                placeholderInput="Concerto de Carros"
                funcDados={e => enviaDados({empresaArea: e.target.value})}
                value={dados.empresaArea}
            />

            <Form.Group className='mb-3' controlId='sobreEmpresa'>
                <Form.Label>Descreva sua Empresa</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
        </>
   )

}

export default CEtapaEmpresa;