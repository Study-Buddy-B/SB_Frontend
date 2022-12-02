import React,{useEffect, useLayoutEffect, useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import axios from 'axios';

import 'react-calendar/dist/Calendar.css'
import "../../assets/css/stcalendar.css";

import { Cookies } from 'react-cookie';



export default function STCalendar(){

    const cookies = new Cookies();
    const token=cookies.get("uuid");

    const [todayStudyTime,settodayStudyTime]=useState(0);
    

    
    const [dayStudyTime,setdayStudyTime]=useState(0);
    const [cumStudyTime,setcumStudyTime]=useState(14.23);
    const [avgStudyTime,setavgStudyTime]=useState(3.2);
    const [maxStudyTime,setmaxStudyTime]=useState(8.6);
    const [minStudyTime,setminStudyTime]=useState(3.2);



    const [value,onChange]=useState(new Date())
    const year=moment(value).format('YYYY')
    const month=moment(value).format('MM')
    const day=moment(value).format('DD')

    

    useEffect(()=>{
        const getStudyTime=async()=>{
            //+year+"-"+month+"-"+day
            await axios
                .get('${process.env.REACT_APP_SERVER_HOST}/api/v1/api/v1/time/today',{
                    headers:{
                        Authorization:token
                        //Authorization:"c17831ae-becb-4ff8-8482-b90cf3f305b0"
                    }
                }).then(function(response){
                    settodayStudyTime(response.data.time)
                    console.log(todayStudyTime)
                    }
                
                );
            
        };
        getStudyTime();
    },[]);

    
    const day_calendar=async()=>{
            await axios
                    .get('${process.env.REACT_APP_SERVER_HOST}/api/v1/time/date/'+year+'-'+month+'-'+day,{
                        headers:{
                            Authorization:token
                            //Authorization:"c17831ae-becb-4ff8-8482-b90cf3f305b0"
                            
                        }
                    }).then(function(response){
                        
                        setdayStudyTime(response.data.time)
                    
                        
                    }).catch(error=>{
                        console.log(error.response.message)
                        setdayStudyTime(0)
                    })
    };
    day_calendar();
    
    

    
    
    const st_calendar=async()=>{
            await axios
                .get("${process.env.REACT_APP_SERVER_HOST}/api/v1/time/month/"+year+"-"+month+"/report",{
                    headers:{
                        //Authorization:token
                        Authorization:"c17831ae-becb-4ff8-8482-b90cf3f305b0"
                        
                    }
                }).then(function(response){
                    if (response.data.average!=undefined){
                        console.log(month)
                        
                        setavgStudyTime(response.data.average)
                        setcumStudyTime(response.data.cumulative)
                        setmaxStudyTime(response.data.maximum)
                        setminStudyTime(response.data.minimum)
                    }
                    

    
                });
    };
    st_calendar();    
                
    
    
    
    

    return(
        <div className='main'>
            <Calendar onChange={onChange} value={value}
        
           
            />
                <div className='calendar-wrapper'>
                    <div className='time-header' >
                        <b>{("오늘 공부시간" )}</b>
                    </div>
                    
                    <div className='text-time'>{todayStudyTime} h</div>
                </div>
                <div className='calendar-wrapper'>
                    <div className='time-header' >
                        <b>{moment(value).format("MM월 DD일 공부시간")}</b>
                    </div>
                    
                    <div className='text-time'>{dayStudyTime} h</div>
                </div>
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 총 공부시간" )}</b>
                    </div>
                    
                    <div className='text-time'>{cumStudyTime} h</div>
                </div>
                <div className='calendar-wrapper'>
                    <div className='time-header'>
                        <b>{moment(value).format("MM월 평균 공부시간" )}</b>
                    </div>
                   
                    <div className='text-time'>{avgStudyTime} h</div>
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
    
    
};