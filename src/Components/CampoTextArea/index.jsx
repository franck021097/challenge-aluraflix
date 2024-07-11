import styled from "styled-components"

const CampoTextAreaContainer = styled.textarea`
    height: 220px!important;
    font-family: "Roboto", sans-serif;
    resize: none;
`


const CampoTextArea = ({validoInvalido, value, placeholder, nameProp, id, manejarCambio}) => {
    return <CampoTextAreaContainer 
    className="campos" 
    placeholder={placeholder} 
    name={nameProp} 
    id={id} 
    required
    minLength={5}
    value={value}
    onChange={(e) => { 
        manejarCambio(e.target.value)
        validoInvalido(() => {
            const valor = e.target.checkValidity() ? "valido" : "invalido"
            return valor})
    }}

    onBlur={(e) => { 
        validoInvalido(() => {
            const valor = e.target.checkValidity() ? "valido" : "invalido"
            return valor})
    }} 
    />
}

export default CampoTextArea