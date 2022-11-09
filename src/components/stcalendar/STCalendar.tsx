import React,{useMemo,useState} from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Calendar from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css'
import "../../assets/css/stcalendar.css";

export default function STCalendar(){

    const dayStudyTime=useState(5);
    const monStudyTime=useState(3);
    const maxStudyTime=useState(9);
    const minStudyTime=useState(1);
    
    

    const [value,onChange]=useState(new Date());

    return(
        <div className='main'>
            <Calendar onChange={onChange} value={value}/>
              
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 DD일 공부시간" )}</b>
                    </div>
                    <div className='text-time'>{dayStudyTime} h</div>
                </div>
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 평균 공부시간" )}</b>
                    </div>
                    <div className='text-time'>{monStudyTime} h</div>
                </div>
                
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 최대 공부시간" )}</b>
                    </div>
                    <div className='text-time'>{maxStudyTime} h</div>
                </div>
                
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 최소 공부시간" )}</b>
                    </div>
                    <div className='text-time'>{minStudyTime} h</div>

                </div>

        </div>

                
    )
    
    
}