import React, { useState } from 'react'
import './style.css'
import Input from '../Input'
import Button from '../Button'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

function SignUpComponent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [loading, setLoading] = useState(false)

    function SignUpWithEmail() {
        setLoading(true)
        //authenticate the user with email
        if (name !== '' && email !== '' && password !== '' && cpassword !== '') {
            console.log(name)
            console.log(email)
            console.log(password)
            console.log(cpassword)
            if (password === cpassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        // ...
                        console.log("user-->>" + JSON.stringify(user))
                        toast.success("User Login Successfully !!")
                        setLoading(false)
                        setName('')
                        setEmail('')
                        setCpassword('')
                        setCpassword('')
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        toast.error(errorMessage)
                        setLoading(false)
                    });
            } else {
                toast.error("Password is not matching!")
                setLoading(false)
            }

        } else {
            toast.error("All fields are mandatory")
            setLoading(false)
        }
    }



    return (
        <div className='login_wrapper'>
            <h2 className='Signup_heading'>Sign Up on <span style={{ color: "var(--theme)" }}>financely .</span></h2>
            <form>
                <Input
                    type={"text"}
                    lable={"Full Name"}
                    placeholder={"Enter Your Full Name"}
                    state={name}
                    setState={setName}
                />
                <Input
                    type={"email"}
                    lable={"Enter Email"}
                    placeholder={"1234@email.com"}
                    state={email}
                    setState={setEmail}
                />
                <Input
                    type={"password"}
                    lable={"Enter Password"}
                    placeholder={"Enter Password"}
                    state={password}
                    setState={setPassword}
                />
                <Input
                    type={"password"}
                    lable={"Confirm Password"}
                    placeholder={"Confirm Password"}
                    state={cpassword}
                    setState={setCpassword}
                />
                <Button
                    disabled={loading}
                    onClick={SignUpWithEmail}
                    text={loading ? "Loading..." : "Sign Up using Email "}
                />
                <p style={{ textAlign: "center" }}> or</p>
                <Button
                    text={loading ? "Loading..." : "Sign Up using Google "}
                    btn_blue={true} />
            </form>
        </div>
    )
}

export default SignUpComponent