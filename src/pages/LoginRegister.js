import React from 'react'
import Header from '../components/Header'
import SignUpComponent from '../components/SignUpComponent'

function LoginRegister() {
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <SignUpComponent />
            </div>
        </div>
    )
}

export default LoginRegister