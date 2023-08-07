import React from 'react'
import Logo from '../images/amrit-logo.png'
import Input from './common/Input/Input'
import Button from './common/Buttons/Button'


export default function Login() {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card overflow-hidden " style={{borderRadius: 15 + 'px'}}>
            <div className="bg-white p-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={Logo} alt="" className='img-fluid' />
                    </div>
                </div>
                <form>
                 <Input username="Username" type= "text" placeholder="Enter Your Username" />
                 <Input username="Password" type= "password" placeholder="Enter Your Password" />
                 <Button title={"LOGIN"}/>

                 <div className="text-center mt-3">
                 <a href="/" class="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</a>
                 </div>
                </form>

            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
