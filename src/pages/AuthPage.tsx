import chris from '../../public/chris.png'
import icon from '../../public/icon (1).png'
import { useLocation } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'


const AuthPage = () => {
  const location = useLocation();
  return (
    <>
      <div className='flex items-center justify-center h-screen gap-24'>
        <div className='flex items-center justify-center'>
          {

            location?.pathname === "/signup" ? <SignUp /> : <SignIn />
          }

        </div>
        <div className='relative'>
          <img className='h-screen object-cover' src={chris} />
          <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40'>
            <img className='max-w-[45px] max-h-[43px]' src={icon} />
            <div className="font-bold text-4xl leading-[48px] text-center"> <span className='text-white'>Furni</span><span className="text-[#4977EE]">Flex</span>
            </div>
            <div className='text-center px-4'>
              <p className='break-words text-white text-[13px]'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPage
