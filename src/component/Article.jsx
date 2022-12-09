import transformDt from '../../public/images/desktop/image-transform.jpg'
import standOutDt from '../../public/images/desktop/image-stand-out.jpg'
import graphicMb from '../../public/images/mobile/image-graphic-design.jpg'
import photographyMb from '../../public/images/mobile/image-photography.jpg'

const Article = () => {

  let widthCheck;
  if (window.innerWidth > 640) {
    widthCheck = true;
  } else {
    widthCheck = false;
  }

  return (
    <section className=' text-center'>

      <article className='sm:flex'>
        <img src={transformDt} alt='articlePhoto'  className='sm:w-3/6 '/>
        <div className=' px-5 py-14 m-auto max-w-sm'>
            <h2 className=' font-fraun text-3xl font-black text-neutral-Very-dark-desaturated-blue '>Transform your brand</h2>
            <p className=' text-neutral-Very-dark-grayish-blue leading-7 my-10 sm:my-5 text-base'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className=' text-neutral-Very-dark-desaturated-blue font-fraun font-black text-base'>LEARN MORE</button>
        </div>
      </article>

      <article className='sm:flex'>
        <img src={standOutDt} alt='articlePhoto'  className='sm:w-3/6 order-2 '/>
        <div className=' px-5 py-14 m-auto max-w-sm order-1'>
            <h2 className=' font-fraun text-3xl font-black text-neutral-Very-dark-desaturated-blue '>Stand out to the right audience</h2>
            <p className=' text-neutral-Very-dark-grayish-blue leading-7 my-10 text-base'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            <button className=' text-neutral-Very-dark-desaturated-blue font-fraun font-black text-base'>LEARN MORE</button>
        </div>
      </article>

      <article className=' sm:w-3/6 inline-block'>
        <img src={graphicMb} alt='articlePhoto' />
        <div className=' px-5 py-8 text-primary-Dark-desaturated-cyan -mt-64 m-auto max-w-sm'>
            <h2 className=' font-fraun text-3xl font-black '>Graphic Design</h2>
            <p className='  leading-7 my-5 text-base font-black'>Great design makes you memorable. We deliver artowrk that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </article>

      <article className=' sm:w-3/6 inline-block'>
        <img src={photographyMb} alt='articlePhoto' />
        <div className=' px-5 py-8 text-primary-Dark-blue -mt-64 m-auto max-w-sm'>
            <h2 className=' font-fraun text-3xl font-black'>Photography</h2>
            <p className=' leading-7 my-5 text-base'>Increase your credibility by getting the most stunning high-quality photos that improve your business image.</p>
        </div>
      </article>
    </section>
  )
}

export default Article
