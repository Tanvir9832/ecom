import Button from "./ui/Button"
import Input from "./ui/Input"
import google from '../../public/google logo.png'
import apple from '../../public/apple logo.png'
import { Link } from "react-router-dom"


const SignUp = () => {
  return (
    <div className="max-w-[500px] w-full h-[719px] bg-[#FAFAFA] border border-[#F5F5F5] rounded-lg px-6 pb-4 pt-6 flex flex-col gap-[6px]">


      <div className="text-center flex flex-col gap-[6px]">
        <h3 className="font-semibold text-2xl leading-[28.8px] text-center">Welcome To</h3>
        <div className="flex flex-col gap-[2px] p-4 pt-0">
          <div className="font-bold text-4xl leading-[48px] text-center"> <span>Furni</span><span className="text-[#4977EE]">Flex</span>
          </div>
          <p className="text-base leading-[19.2px] font-medium text-[#707070]" >Signup for purchase your desire products</p>
        </div>
      </div>




      <div className="flex flex-col gap-[6px]">
        <div className="flex gap-[14px] ">
          <Input type="text" placeholder="First name (optional)" />
          <Input type="text" placeholder="Last name (optional)" />
        </div>
        <Input placeholder="Email address" />
        <Input type="password" placeholder="Password" />

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
        <p>Have an account? </p> <Link to='/signin' className="text-[#0F3DDE]" > Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp