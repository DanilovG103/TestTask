import React,{useState,useEffect} from "react"
import {Form,Req,FormP,Error,InputF,BTNmain} from '../../components/styles'
import {useRouter} from "next/router"
import { MainLayout } from "../../components/MainLayout"
import InputMask from 'react-input-mask'

export default function Operator(){
    const router = useRouter()
    const [money,setMoney] = useState('')
    const [moneyFree,setMoneyFree] = useState(true)
    const [moneyError,setMoneyError] = useState("Заполните это поле")
    const [number,setNumber] = useState('')
    const [numberFree,setNumberFree] = useState(true)
    const [numberError,setNumberError] = useState("Заполните это поле")
    const [formValid,setFormValid] = useState(false)

    useEffect(() =>{
        (moneyError || numberError) ? setFormValid(false) : setFormValid(true);
    },[moneyError,numberError])

    const moneyHandler = (e) => {
        setMoney(e.target.value)
        const moneyTest_RE = /^\$?\d+((,\d{3})+)?(\.\d+)?$/;
        !moneyTest_RE.test(e.target.value) ? setMoneyError("Введена некорректная сумма") : setMoneyError(" ");
        !(+e.target.value > 0 && +e.target.value <=1000 || e.target.value == ' ') ? setMoneyError('Введена некорректная сумма') : setMoneyError("")
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
        const numberTest_RE = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,12}$/
        !numberTest_RE.test(e.target.value) ? setNumberError("Неверно введен номер"): setNumberError("");
    }

    const blurHandler = (e) => {
        switch (e.target.value) {
            case 'money':
                setMoneyFree(false)
                break
            case 'phoneNumber':
                setNumberFree(false)
                break
        }
    }

    const randomSumbit = (e) => {
        e.preventDefault()
        if (Math.random()> 0.50) {
            alert('Успешно!')
            router.push('/')
        }else{
            alert('Попробуйте ещё раз')
        }
    }

    return (
        <MainLayout title="Страница оплаты">
        <button id="btn4" style={{background:"#fff"}} onClick = {() => router.push("/")}>Вернуться на главную страницу</button>
        <Form onSubmit={(e) => randomSumbit(e)}>
        <FormP>Выбран оператор: {router.query.operator} </FormP>
            <FormP>Введите необходимую сумму и номер телефона:</FormP>
            <InputF name = 'money' 
                type="text" 
                value = {money} 
                onChange = {moneyHandler} 
                onBlur = {blurHandler}
                maxLength={4} 
                placeholder='*Введите сумму от 1 до 1000 рублей' 
                id="money"/>
            {(moneyFree && moneyError) && <Error>{moneyError}</Error>}
            <InputMask name = "phoneNumber"
                mask = "+7 (***) *** ** **"
                value = {number}
                onChange = {numberHandler}
                onBlur = {blurHandler}>
            {() => <InputF id="phone" type="text" placeholder={"+7 (___) ___-__-__"} />}
            </InputMask>
            {(numberFree && numberError) && <Error>{numberError}</Error>}
            <BTNmain
                id="pay"
                disabled = {!formValid}>
                Подтвердить оплату
            </BTNmain>
            <Req>*Обязательные поля</Req>
        </Form>
        </MainLayout>
    )
}