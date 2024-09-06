import image from '../../public/Image.png'
import Button from './ui/Button'
import Added from '../../public/Added.svg';

const Card = () => {
  return (
    <div className='flex flex-col p-4 border rounded-2xl w-[277px] h-[484px] gap-8'>
      <div>
        <img src={image} alt="product" />
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-[#343434] font-semibold text-lg leading-[21.6px] mb-1'>Name of the product</h2>
        <div className='flex text-lg leading-[21.6px] gap-3 '>
          <p className='font-bold text-[#343434]'>$200.00</p>
          <del className='font-medium text-[#ABABAB]'>$300.00</del>
          <p className='font-semibold text-[#B92E2E]'>30% OFF</p>
        </div>
        <p className='font-normal text-sm text-[#838383] leading-[16.8px]'>
          It has a backrest that can be tilted back, and often a footrest extended
        </p>
      </div>
      <Button>
        <img className='text-black' src={Added} alt="" />
        <p className='font-semibold text-base leading-[19.2px]'>Add to cart</p>
      </Button>
    </div>
  )
}

export default Card