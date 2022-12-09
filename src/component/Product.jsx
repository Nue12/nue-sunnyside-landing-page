import milkMb from '../../public/images/mobile/image-gallery-milkbottles.jpg'
import milkDt from '../../public/images/desktop/image-gallery-milkbottles.jpg'
import orangeMb from '../../public/images/mobile/image-gallery-orange.jpg'
import orangeDt from '../../public/images/desktop/image-gallery-orange.jpg'
import coneMb from '../../public/images/mobile/image-gallery-cone.jpg'
import coneDt from '../../public/images/desktop/image-gallery-cone.jpg'
import sugarMb from '../../public/images/mobile/image-gallery-sugar-cubes.jpg'
import sugarDt from '../../public/images/desktop/image-gallery-sugarcubes.jpg'

const Product = () => {
  if(window.innerWidth < 760) {
    return (
      <div className='flex flex-wrap '>
          <img src={milkMb} alt='product' className=' w-3/6 md:w-auto'/>
          <img src={orangeMb} alt='product' className=' w-3/6 md:w-auto'/>
          <img src={coneMb} alt='product' className=' w-3/6 md:w-auto'/>
          <img src={sugarMb} alt='product' className=' w-3/6 md:w-auto'/>
      </div>
    )
  } 
  return(
    <div className='flex'>
      <img src={milkDt} alt='product' className=' w-1/4'/>
          <img src={orangeDt} alt='product' className='w-1/4'/>
          <img src={coneDt} alt='product' className='w-1/4'/>
          <img src={sugarDt} alt='product' className='w-1/4'/>
    </div>
  )
}

export default Product
