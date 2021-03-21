import {Div, P, Button, Input} from '../components/styles'
import { MainLayout } from '../components/MainLayout'
import Router from 'next/router'
import React from 'react'

export default function Index(){
    const [inputValue,setInputValue] = React.useState("")
    const [operatorFree,setOperatorFree] = React.useState(true)
    const [operatorError,setOperatorError] = React.useState("Введите название оператора")
    const [buttonValid,setButtonValid] = React.useState(false)

    React.useEffect(()=>{
        operatorError ? setButtonValid(false) : setButtonValid(true);
    },[operatorError])

    const operatorHandler = (e) => {
        setInputValue(e.target.value)
        const operatorTest = /[А-Яа-яA-Za-z]/
        !operatorTest.test(e.target.value) ? setOperatorError("Название оператора введено неверно"): setOperatorError("");
    }

    const blurHandler = (e) => {
        switch (e.target.value) {
            case 'operator_name':
                setOperatorFree(false)
                break
        }
    }

    const toFormPage = (operator: string) => {
        Router.push(`/formPage/${operator}`)
    }
    
    return (
    <MainLayout title='Home Page'>
        <P className='layout'>Выберите оператора:</P>
        <Div className="buttons">
            <Button className="operator" onClick = {() => toFormPage("МТС")}>МТС</Button>
            <Button className="operator" onClick = {() => toFormPage("Мегафон")}>Мегафон</Button>
            <Button className="operator" onClick = {() => toFormPage("Билайн")}>Билайн</Button>
        </Div>
        <P className='another'>Или введите название другого оператора:</P>
        <Input className = "index"
                value = {inputValue}
                onChange = {(e) => operatorHandler(e)}
                onBlur = {(e) => blurHandler(e)}
                name = "operator_name"
                type="text" 
                placeholder = "Название оператора"/>
            {(operatorFree && operatorError) && <Div className="error">{operatorError}</Div>}
        <Button className="main" onClick = {() => toFormPage(inputValue)} disabled={!buttonValid}>Перейти на страницу оплаты</Button>
    </MainLayout>
    )
}