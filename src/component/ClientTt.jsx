import clientData from '../../clientRv.json'

const ClientTt = () => {
    const clientRv = clientData.map(data => (
        <div className='my-10 max-w-xs m-auto' key={data.name}>
            <img src={data.img} alt='clientPhoto' className=' m-auto rounded-full w-16 h-16' />
            <p className=' my-5 px-px text-neutral-Very-dark-grayish-blue'>{data.review}</p>
            <h3 className=' font-black font-fraun text-neutral-Very-dark-desaturated-blue'>{data.name}</h3>
            <span className=' text-sm'>{data.career}</span>
        </div>
    ))
  return (
    <div className='text-center mt-20'>
      <h3 className=' font-black font-fraun tracking-widest'>CLIENT TESTIMONIALS</h3>
      <section className='  px-5 text-neutral-Grayish-blue m-auto xl:flex justify-between'>
        {clientRv}
      </section>
    </div>
  )
}

export default ClientTt
