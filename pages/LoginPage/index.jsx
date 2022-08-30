import React, {  useState } from 'react';
import { useDispatch} from 'react-redux'
import { setCookie } from 'cookies-next';
import {Login, setUser} from "../../Slices/counterSlice"
import Button from '../Components/Button';


function LogIn() {
    const dispatch = useDispatch()
	const [password,setPassword]=useState()
	const [email,setEmail]=useState()
	
	
    return(
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input onChange={(e)=>{setEmail(e.target.value)}} className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100" />
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true" />
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input onChange={(e)=>{setPassword(e.target.value)}} className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" />
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true" />
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<Button onClick={()=>{dispatch(Login());dispatch(setUser({email,password}));setCookie("user",email) }} >
							Login
						</Button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
    )
}
export default LogIn
