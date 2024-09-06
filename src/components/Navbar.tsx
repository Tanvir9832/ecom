import logo from '../../public/Logo (2).png'

const Navbar = () => {
    return (
        <>
            <div className=' h-[98px] flex items-center justify-between mx-24'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex gap-2 text-center items-center justify-center cursor-pointer'>
                    <li className='px-4 py-1 text-[#202020] bg-[#F8F8F8]'>Home</li>
                    <li className='px-4 py-1 text-[#202020] bg-[#F8F8F8]'>Products</li>
                    <li className='px-4 py-1 text-[#202020] bg-[#F8F8F8]'>Categories</li>
                    <li className='px-4 py-1 text-[#202020] bg-[#F8F8F8]'>Custom</li>
                    <li className='px-4 py-1 text-[#202020] bg-[#F8F8F8]'>Bolgs</li>
                </ul>

                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar