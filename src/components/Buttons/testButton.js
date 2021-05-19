import React from 'react';
import s from './Buttons.module.css';

let timer;

const DoubleClick = ({ onClick = () => {console.log('click')}, onDoubleClick = () => {console.log('double click')}, children='Double Click Button' }) => {

    const onClickHandler = (event) => {
        clearTimeout(timer);
        if (event.detail === 1) {
            timer = setTimeout(onClick, 300)
        } else if (event.detail === 2) {
            onDoubleClick()
        }
    }

    return (
        <div className={s.clickBlock} onClick={onClickHandler}>
            <button>{children}</button>
        </div>
    )
}

export default DoubleClick;