import Form from 'react-bootstrap/Form';

function InputDados({idForm, labelForm, typeInput="text", placeholderInput, funcDados, isRequired=true, value="", erros}){
    return (
        <Form.Group className="mb-3" controlId={idForm}>
            <Form.Label>{labelForm}</Form.Label>
            <Form.Control type={typeInput} placeholder={placeholderInput} onChange={funcDados} required={isRequired} value={value} isInvalid={!!erros}/>
            <Form.Control.Feedback type="invalid" className='mb-3'>
                {erros}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default InputDados;