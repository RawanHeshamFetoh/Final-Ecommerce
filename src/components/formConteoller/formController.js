import React from 'react'
import Input from '../inputComponent/InputComponent'
import Select from '../SelectComponent/Select'
import TextArea from '../textAreaComponent/TextArea'

const FormController = (props) => {
    const {control , ...rest}=props
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        default: return null
    }
}

export default FormController
