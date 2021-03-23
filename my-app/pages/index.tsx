import {Layout,Another,BTNlist,Error,InputI,BTNmain,BTNop} from '../components/styles'
import { MainLayout } from '../components/MainLayout'
import Router from 'next/router'
import React,{useState,useEffect} from 'react'

export default function Index(){
    const [inputValue,setInputValue] = useState("")
    const [operatorFree,setOperatorFree] = useState(true)
    const [operatorError,setOperatorError] = useState(" ")
    const [buttonValid,setButtonValid] = useState(false)

    useEffect(()=>{
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
        <Layout>Выберите оператора:</Layout>
        <BTNlist>
            <BTNop onClick = {() => toFormPage("МТС")}>МТС</BTNop>
            <BTNop onClick = {() => toFormPage("Мегафон")}>Мегафон</BTNop>
            <BTNop onClick = {() => toFormPage("Билайн")}>Билайн</BTNop>
        </BTNlist>
        <Another>Или введите название другого оператора:</Another>
        <InputI value = {inputValue}
                onChange = {(e) => operatorHandler(e)}
                onBlur = {(e) => blurHandler(e)}
                name = "operator_name"
                type="text" 
                placeholder = "Название оператора"/>
            {(operatorFree && operatorError) && <Error>{operatorError}</Error>}
        <BTNmain onClick = {() => toFormPage(inputValue)} disabled={!buttonValid}>Перейти на страницу оплаты</BTNmain>
    </MainLayout>
  )
}