import image from '../../public/Image.png'
import Button from './ui/Button'
import Added from '../../public/Added.png';

const Card = () => {
  return (
    <div>
      <img src={image} alt="product" />
      <h2>Name of the product</h2>
      <div className='flex'>
        <p>$200</p>
        <del>$300</del>
        <p>30% OFF</p>
      </div>
      <p>
      It has a backrest that can be tilted back, and often a footrest extended
      </p>
      <Button>
        <img className='text-black' src={Added} alt="" />
      </Button>
    </div>
  )
}

export default Card