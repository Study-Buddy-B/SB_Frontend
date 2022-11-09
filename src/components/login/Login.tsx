import React,{useState} from 'react';
import {Form,Formik,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';

import "../../assets/css/login.css";

const ValidationSchema=yup.object({
    userEmail:yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 아닙니다."),

    userPw:yup
    .string()
    .required('영문, 숫자포함 8자리를 입력해주세요.')
    .min(8,"최소 8자 이상 가능합니다.")
    .max(15,"최대 15자 까지만 가능합니다.")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
    '영문 숫자포함 8자리를 입력해주세요.'),
})

interface LoginForm{
    userEmail:string;
    userPw:string;
    isLogin:boolean;
}

export default function login(){

    const handleSubmit=(values:LoginForm)=>{
        console.log(values);
    };
   
    return(
        <div className='main'>
            <div className='login-wrapper'>
                <div className='login-header'>
                    <h2>로그인</h2>
                </div>
           <Formik
            initialValues={{userEmail:'',userPw:'',isLogin:false}}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}>
                <Form >
                    <Field
                    name="userEmail"
                    type="userEmail"
                    placeholder="이메일을 입력해주세요."
                    form={''}>

                    </Field>
                    <div className='error'>
                        <ErrorMessage name="userEmail" component="div"></ErrorMessage>
                    </div>
                    
                    
                    <Field
                    name="userPw"
                    type="userPw"
                    placeholder="비밀번호를 입력해주세요."
                    form={''}>

                    </Field>
                    <div className='error'>
                        <ErrorMessage name="userPw" component="div"></ErrorMessage>
                    </div>
                    
                    <button className="inputbutton" type='submit'>로그인</button>

                    <div className='to-signup'>
                        <h4>sign up</h4>
                    </div>
                </Form>
            </Formik>
          
            
           </div>
        </div>
         
    )

};