import React from 'react';
import s from './Time.module.css'

const Time = (props) => {
    const hours = () => {
        if (props.time.h === 0) return "";
        else {
            return (<span>{(props.time.h >= 10)? props.time.h: "0" + props.time.h}</span>);
        }
    }

    return (
        <div className={s.content}>
            
                <h1>S T O P W A T C H</h1>           

           {hours()}&nbsp;&nbsp;
           <span>{(props.time.m >= 10)? props.time.m: "0" + props.time.m}</span>&nbsp;:&nbsp;
           <span>{(props.time.s >= 10)? props.time.s: "0" + props.time.s}</span>&nbsp;:&nbsp;
           <span>{(props.time.ms >= 10)? props.time.ms: "0" + props.time.ms}</span>&nbsp;
        </div>
    );
}

export default Time;