import React,{useState,useEffect, useCallback, useLayoutEffect, useRef} from 'react';
import {Form,Formik,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import {Cookies} from 'react-cookie';
import "../../assets/css/login.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

/*
const ValidationSchema=yup.object({
    emailRef:yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 아닙니다."),

    pwRef:yup
    .string()
    .required('영문, 숫자포함 4자리 이상을 입력해주세요.')
    .min(4,"최소 4자 이상 가능합니다.")
    .max(15,"최대 15자 까지만 가능합니다.")
    
})*/



export default function Login(){
    const cookies = new Cookies();
    //const token=cookies.get("uuid");

    
    const emailRef=useRef<HTMLInputElement>(null);
    const pwRef=useRef<HTMLInputElement>(null);

    //const navigate = useNavigate();
    const api_login=async()=>{
        
        await axios
            .post(`${process.env.REACT_APP_SERVER_HOST}/api/v1/account/login`, {
              //email: "test@test.com",
              //password: "test",
              email:emailRef.current?.value,
              password:pwRef.current?.value
            })
            .then((res)=>{
                cookies.set('uuid',res.data.uuid);
                console.log(res.data.uuid);
                document.location.assign('/main')
            }).catch((error) => {
                console.log(error.response.data.code);
                console.log(error.response.data.message)
                window.alert(error.response.data.message)
                //document.location.assign('/')
            })
    }

    
    /*
    useLayoutEffect(() => {
        const get = async () => {
          await axios
            .post("http://34.200.36.214/api/v1/account/login", {
              email: "1234",
              password: "1234",
            })
            .then((res) => {
              console.log(res);
              
            })
            .catch((err) => {
              console.log(err.response.data.code);
            });
        };
        get();
    }, []);*/


    const signUpClick=()=>{
        document.location.assign('/signup')
    }
    
    
    const handleSubmit=(values:any)=>{
        console.log(values);
    };
   

    return(
        <div className='main'>
            <div className='login-wrapper'>
                <div className='login-header'>
                    <h2>로그인</h2>
                </div>
           <Formik
            initialValues={{userEmail:'',userPw:''}}
            //validationSchema={ValidationSchema}
            onSubmit={handleSubmit}>
                <Form >
                    
                    <input ref={emailRef} placeholder="이메일을 입력해주세요."></input>
                    
                    
                    <input ref={pwRef} placeholder="비밀번호를 입력해주세요."></input>
                    
                    <button className="inputbutton" type='submit' onClick={api_login}>로그인</button>

                    <div className='to-signup' onClick={signUpClick}>
                        <h4>sign up</h4>
                    </div>
                </Form>
            </Formik>
          
            
           </div>
        </div>
         
    )

};