import React from 'react'
import './style.css'

function Button({ onClick, text, btn_blue, disabled }) {
    return (
        <Button onClick={onClick} className={btn_blue ? "btn btn_blue" : "btn"} disabled={disabled}>{text}</Button>
    )
}

export default Button