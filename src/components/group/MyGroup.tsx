import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function MyGroup() {
    const [hour, setHour] = useState(5);
    const [min, setMin] = useState(0);

    return (
        <div>
            <div className="font-40 flex-center margin-top-30">
                <div>{parseInt(String(hour / 10)) === 0 ? '0' + hour : hour} :</div>
                <div>&nbsp;{parseInt(String(min / 10)) === 0 ? min + '0' : min}</div>
            </div>
            <div className="group-add-wrapper">
                <div className="group-contents flex-row">
                    <div className="my-study-name flex-row flex-center" style={{ marginLeft: '30px' }}>
                        <div>
                            <FaUserCircle size={25}/>
                        </div>
                        <div className="name" style={{color: 'gray', marginLeft: '10px'}}>user1</div>
                    </div>
                    <div style={{ width: '20px', marginLeft: '100px' }}>3h</div>
                    <div style={{ marginLeft: '10px', color: 'red', fontSize: '13px' }}>미달성</div>
                </div>
                <div className="group-contents flex-row">
                    <div className="my-study-name flex-row flex-center" style={{ marginLeft: '30px' }}>
                        <div>
                            <FaUserCircle size={25}/>
                        </div>
                        <div className="name" style={{color: 'gray', marginLeft: '10px'}}>user2</div>
                    </div>
                    <div style={{ width: '20px', marginLeft: '100px' }}>5h</div>
                    <div style={{ marginLeft: '10px', color: 'green', fontSize: '13px' }}>달성</div>
                </div>
                <div className="group-contents flex-row">
                    <div className="my-study-name flex-row flex-center" style={{ marginLeft: '30px' }}>
                        <div>
                            <FaUserCircle size={25}/>
                        </div>
                        <div className="name" style={{color: 'gray', marginLeft: '10px'}}>user3</div>
                    </div>
                    <div style={{ width: '20px', marginLeft: '100px' }}>3h</div>
                    <div style={{ marginLeft: '10px', color: 'red', fontSize: '13px' }}>미달성</div>
                </div>
            </div>
        </div>
    );
}