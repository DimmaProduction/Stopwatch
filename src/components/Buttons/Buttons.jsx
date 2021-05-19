import React from 'react';
import s from './Buttons.module.css'
import {wait} from '../../App';


// import { fromEvent, interval } from 'rxjs';
//  реалізував doubleClick але не зміг привязати його до вже задіяних кнопок, 
//  код для doubleClick button в './testButton.js';


const Buttons = (props) => {

    return (
        <div className={s.content}>
            {(props.status === 0) ?
                <button className={s.startButton} onClick={props.start} >Start</button> : ""
            }

            {(props.status === 1) ?
                <div>
                    <button className={s.waitButton} onClick={props.wait} >Wait</button>
                    <button className={s.resetButton} onClick={props.reset}>Reset</button>
                </div> : ""
            }

            {(props.status === 2) ?
                <div>
                    <button className={s.resumeButton} onClick={props.resume}>Resume</button>
                    <button className={s.resetButton} onClick={props.reset}>Reset</button>
                </div> : ""
            }
            
        </div>
    );
}

export default Buttons;

