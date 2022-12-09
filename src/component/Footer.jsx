import fbIcon from '../../public/icon/icon-facebook.svg'
import igIcon from '../../public/icon/icon-instagram.svg'
import twtIcon from '../../public/icon/icon-twitter.svg'
import ptIcon from '../../public/icon/icon-pinterest.svg'
import logo from '../../public/icon/logo.svg'

const Footer = () => {
  return (
    <footer className=' text-center bg-primary-Dark-moderate-cyan py-14 text-primary-Dark-desaturated-cyan'>
      <img src={logo} alt='logo' className=' m-auto w-40' />
      <div className=' my-10'>
        <button className=' cursor-pointer'>About</button>
        <button className='mx-10 cursor-pointer'>Services</button>
        <button className=' cursor-pointer'>Projects</button>
      </div>
      <div className='flex mt-20 justify-center space-x-8'>
        <img src={fbIcon} alt='socialIcon' className=' cursor-pointer'/>
        <img src={igIcon} alt='socialIcon' className=' cursor-pointer'/>
        <img src={twtIcon} alt='socialIcon' className=' cursor-pointer'/>
        <img src={ptIcon} alt='socialIcon' className=' cursor-pointer'/>
      </div>
    </footer>
  )
}

export default Footer
