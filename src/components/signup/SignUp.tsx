import React,{useRef, useState} from 'react';
import {Form,Formik,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';

import "../../assets/css/signup.css";
import axios from 'axios';



const ValidationSchema=yup.object({
    email:yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 아닙니다."),
  
    pw:yup
    .string()
    .required('영문, 숫자포함 4자리 이상을 입력해주세요.')
    .min(3,"최소 4자 이상 가능합니다.")
    .max(15,"최대 15자 까지만 가능합니다.")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,15}$/,
    '영문 숫자포함 4자리 이상을 입력해주세요.'),
  
    mick:yup
    .string()
    .required("닉네임을 입력해주세요.")
    .min(2,"닉네임은 2자리 이상 가능합니다.")
    .max(15,"닉네임은 15자리 까지만 가능합니다.")
  
});
  
  
export default function SignUp(){

    //const [userEmail,setUserEmail]=useState("");
    //const [userPw,setUserPw]=useState("");
    //const [userN,setUserrN]=useState("");
    const emailRef=useRef<HTMLInputElement>(null);
    const pwRef=useRef<HTMLInputElement>(null);
    const NRef=useRef<HTMLInputElement>(null);

    const api_signup=async()=>{
        await axios.post(`${process.env.REACT_APP_SERVER_HOST}/api/v1/account`,{
                email:emailRef.current?.value,
                password:pwRef.current?.value,
                name:NRef.current?.value
            }).then(function(response){
                {
                    window.alert(response.data.message)
                    console.log(response.data.message)
                    document.location.assign('/')
                }
            }).catch((error) =>{
                window.alert(error.response.data.message)
                console.log(error.response.data.message)
                document.location.assign('/signup')
            })
    }


    const handleSubmit=(values:any)=>{
      console.log(values);
    };

    return(
    
        <div className='main'>
            <div className='signup-wrapper'>
                <div className='signup-header'>
                  <h3>
                      회원가입
                  </h3>
                </div>
                <Formik
                  
                  initialValues={{emailRef:'',pwRef:'',NRef:''}}
                  validationSchema={ValidationSchema}
                  onSubmit={handleSubmit}>
  
                    <Form>
                        <input ref={emailRef} name='emailRef' placeholder="이메일을 입력해주세요."></input>
                        <div className='error'>
                            <ErrorMessage name="email" component="div"></ErrorMessage>
                        </div>
                        <input ref={pwRef} name='pwRef' placeholder="비밀번호를 입력해주세요."></input>
                        <div className='error'>
                            <ErrorMessage name="pw" component="div"></ErrorMessage>
                        </div>
                        <input ref={NRef} name='NRef' placeholder="닉네임을 입력해주세요. "></input>
                        <div className='error'>
                            <ErrorMessage name="nick" component="div"></ErrorMessage>
                        </div>
                      
                        <button className="inputbutton" type='submit' onClick={api_signup}>회원가입</button>
                    </Form>
                </Formik>
  
              
              
                  
              </div>
            </div>
  
      );
}

