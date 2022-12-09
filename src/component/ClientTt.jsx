import emilyImg from '../../public/icon/image-emily.jpg'
import JennieImg from '../../public/icon/image-jennie.jpg'
import thomasImg from '../../public/icon/image-thomas.jpg'

const ClientTt = () => {
  return (
    <div className='text-center mt-20'>
      <h3 className=' font-black font-fraun tracking-widest'>CLIENT TESTIMONIALS</h3>
      <section className='  px-5 text-neutral-Grayish-blue m-auto xl:flex justify-between'>

        <div className='my-10 max-w-xs m-auto'>
            <img src={emilyImg} alt='clientPhoto' className=' m-auto rounded-full w-16 h-16' />
            <p className=' my-5 px-px text-neutral-Very-dark-grayish-blue'>We put our trust in Sunnyside and they delivered, making sure our needs weer met and deadlines were always hit.</p>
            <h3 className=' font-black font-fraun text-neutral-Very-dark-desaturated-blue'>Emily R.</h3>
            <span className=' text-sm'>Marketing Director</span>
        </div>

        <div className='my-10 max-w-xs m-auto'>
            <img src={thomasImg} alt='clientPhoto' className=' m-auto rounded-full w-16 h-16' />
            <p className=' my-5 px-px text-neutral-Very-dark-grayish-blue'>Sunny's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
            <h3 className=' font-black font-fraun text-neutral-Very-dark-desaturated-blue'>Thomas S.</h3>
            <span className=' text-sm'>Chief Operating Officer</span>
        </div>

        <div className='my-10 max-w-xs m-auto'>
            <img src={JennieImg} alt='clientPhoto' className=' m-auto rounded-full w-16 h-16' />
            <p className=' my-5 px-px text-neutral-Very-dark-grayish-blue'>incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <h3 className=' font-black font-fraun text-neutral-Very-dark-desaturated-blue'>Jennie F.</h3>
            <span className=' text-sm'>Business Owner</span>
        </div>

      </section>
    </div>
  )
}

export default ClientTt
