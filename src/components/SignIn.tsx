import Button from "./ui/Button"
import Input from "./ui/Input"
import google from '../../public/google logo.png'
import apple from '../../public/apple logo.png'
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="max-w-[500px] w-full h-[619px] bg-[#FAFAFA] border border-[#F5F5F5] rounded-lg px-6 pb-4 pt-6 flex flex-col gap-[6px]">

      <div className="text-start flex flex-col gap-[2px]">
        <h1 className="font-bold text-[32px] leading-[38.4px]">Welcome Back!</h1>
        <p className="text-[14px] leading-[19.2px] font-medium text-[#707070] mb-4" >Enter your Credentials to access your account</p>

      </div>

      <div className="flex flex-col gap-[6px]">
        <Input placeholder="Email address" />
        <div>
          <Input type="password" placeholder="Password" />
          <p className="text-end text-[#1E99F5] text-[14px] leading-[16.8px]">Forgot Password</p>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <input type="checkbox" /> <span className="font-medium text-sm leading-[16.8px]">I agree to the <u>Terms & Policy</u></span>
        </div>

        <Button className="font-semibold text-[17px] leading-[17px] h-[56px]">Signup</Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-center"> <hr className="w-[40%] " /> or <hr className="w-[47%]" /></div>
      <div className="flex gap-[10px] mt-3">
        <Button className="bg-white text-black border">
          <img src={google} alt="google" />
          <p>Sign in with Google</p>
        </Button>
        <Button className="bg-white text-black border">
          <img src={apple} alt="apple" />
          <p>Sign in with Apple</p>
        </Button>
      </div>
      <div className="flex justify-center items-center mt-3 gap-1">
        <p>Have an account? </p> <Link to='/signup' className="text-[#0F3DDE]" > Sign Up</Link>
      </div>
    </div>

  )
}

export default SignIn
