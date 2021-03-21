import React from "react"
import {P,Div,Input,Button,Form, Global} from '../../components/styles'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from "next/router"
import Router from 'next/router'

export default function Operator(){
    const router = useRouter()
    const [money,setMoney] = React.useState('')
    const [moneyFree,setMoneyFree] = React.useState(true)
    const [moneyError,setMoneyError] = React.useState("Заполните это поле")
    const [number,setNumber] = React.useState('')
    const [numberFree,setNumberFree] = React.useState(true)
    const [numberError,setNumberError] = React.useState("Заполните это поле")
    const [formValid,setFormValid] = React.useState(false)

    React.useEffect(() =>{
        (moneyError || numberError) ? setFormValid(false) : setFormValid(true);
    },[moneyError,numberError])

    const moneyHandler = (e) => {
        setMoney(e.target.value)
        const moneyTest_RE = /^\$?\d+((,\d{3})+)?(\.\d+)?$/;
        !moneyTest_RE.test(e.target.value) ? setMoneyError("Введена некорректная сумма") : setMoneyError(" ");
        !(+e.target.value > 0 && +e.target.value <=1000 || e.target.value == '') ? setMoneyError('Введена некорректная сумма') : setMoneyError("")
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
            Router.push('/')
        }else{
            alert('Попробуйте ещё раз')
        }
    }

    return (
        <>
        <Head>
            <title>Страница оплаты</title>
            <meta charSet='utf-8'/>
        </Head>
        <Global/>
        <Form>
        <Link href='/'><button style={{background:"#fff"}}>Вернуться на главную страницу</button></Link>
        <P className="form">Выбран оператор: {router.query.operator} </P>
            <P className="form">Введите необходимую сумму и номер телефона:</P>
            <Input className = "formInput" 
                id="inputLabel"
                name = 'money' 
                type="text" 
                value = {money} 
                onChange = {e => moneyHandler(e)} 
                onBlur = {e => blurHandler(e)}
                maxLength={4} 
                placeholder='*Введите сумму от 1 до 1000 рублей' />
            {(moneyFree && moneyError) && <Div className="error">{moneyError}</Div>}
            <Input className = "formInput"
                id="inputLabel1"
                name = "phoneNumber"
                value = {number}
                type = "text"
                placeholder = "*+7 **** *** ** **"
                maxLength={12}
                onChange = {e => numberHandler(e)}
                onBlur = {e => blurHandler(e)}/>
            {(numberFree && numberError) && <Div className="error">{numberError}</Div>}
            <Button className = "main" 
                disabled = {!formValid}
                onClick = {(e) => randomSumbit(e)}>
                Подтвердить оплату
            </Button>
            <P className="required">*Обязательные поля</P>
        </Form>
        </>
    )
}