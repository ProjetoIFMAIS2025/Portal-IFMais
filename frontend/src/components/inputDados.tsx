import Form from 'react-bootstrap/Form';

function InputDados({idForm, labelForm, typeInput="text", placeholderInput, funcDados, isRequired=true}){
    return (
        <Form.Group className="mb-3" controlId={idForm}>
            <Form.Label>{labelForm}</Form.Label>
            <Form.Control type={typeInput} placeholder={placeholderInput} onChange={funcDados} required={isRequired}/>
        </Form.Group>
    )
}

export default InputDados;