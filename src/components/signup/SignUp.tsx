import React,{useState} from 'react';
import {Form,Formik,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';

import "../../assets/css/signup.css";



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
  
    userN:yup
    .string()
    .required("닉네임을 입력해주세요.")
    .min(2,"닉네임은 2자리 이상 가능합니다.")
    .max(15,"닉네임은 15자리 까지만 가능합니다.")
  
});
  
interface SignUpForm{
    userEmail:string;
    userPw:string;
    userN:string;
    isSignUp:boolean;
}

  
export default function SignUp(){
  
    const handleSubmit=(values:SignUpForm)=>{
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
                  
                  initialValues={{userEmail:'',userPw:'',userN:'',isSignUp:false}}
                  validationSchema={ValidationSchema}
                  onSubmit={handleSubmit}>
  
                    <Form>
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
                        name="userN"
                        type="userN"
                        placeholder="닉네임을 입력해주세요."
                        form={''}>
                        </Field>
                        <div className='error'>
                            <ErrorMessage name="userN" component="div"></ErrorMessage>
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
                      
                        <button className="inputbutton" type='submit'>회원가입</button>
                    </Form>
                </Formik>
  
              
              
                  
              </div>
            </div>
  
      );
}
  