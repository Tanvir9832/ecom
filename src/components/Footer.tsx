import facebook from '../../public/facebook-02.png';
import insta from '../../public/instagram.png';
import x from '../../public/new-twitter.png';
import linkedin from '../../public/linkedin-02.png';
import usa from '../../public/Frame 1000001262.png';
import logo from '../../public/Logo (3).png'

const Footer = () => {
    return (
        <div className='bg-[#0E0E0E] h-[590px] text-white'>
            <div className='flex flex-col justify-around h-full mx-24'>
                <div className='flex items-start'>

                    <div className='basis-[50%]'>
                        <img src={logo} />
                    </div>
                    <div className='flex justify-between basis-[50%]'>
                        <div className='flex flex-col gap-7'>
                            <h4 className='font-semibold text-lg'>About US</h4>
                            <ul className='flex flex-col gap-3 text-[#81859F]'>
                                <li>Master Plan</li>
                                <li>Jobs</li>
                                <li>Invest</li>
                                <li>Pressroom</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-7'>
                            <h4 className='font-semibold text-lg'>Explore EEVE</h4>
                            <ul className='flex flex-col gap-3 text-[#81859F]'>
                                <li>Unlock my Robot Power</li>
                                <li>Starlight</li>
                                <li>Robot Platform</li>
                                <li>EEVE Roadmap</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-7'>
                            <h4 className='font-semibold text-lg'>Community & Support</h4>
                            <ul className='flex flex-col gap-3 text-[#81859F]'>
                                <ul>
                                    <li>Willow X Community</li>
                                    <li>Developer & Maker Access</li>
                                    <li>Special Cases</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between text-[#81859F] border-t pt-2 border-[#252948]'>
                    <div className='flex gap-[11.43px]'>
                        <img src={facebook} alt="facebook" />
                        <img src={insta} alt="insta" />
                        <img src={x} alt="x" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                    <div className='flex gap-[24px]'>
                        <p>March22 Recap</p>
                        <p>Privacy Policy</p>
                        <p>General Terms</p>
                        <p>Contact</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={usa} alt="usa" />
                        <p>United States (English)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer