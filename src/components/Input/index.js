import React from 'react'
import './style.css'

function Input({ lable, placeholder, state, setState, type }) {
    return (
        <div className='input_container'>
            <p>{lable}</p>
            <input
                type={type}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input