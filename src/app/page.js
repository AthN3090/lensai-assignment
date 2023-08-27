import Image from 'next/image'
import hand from '../../public/iphone-x-mockup.png'
import Products from '@/components/Products/Products';
import Advantages from '@/components/Advantages/Advantages';
import Markets from '@/components/Markets/Markets';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
  <main>
    <section className='lg:flex-row lg:items-center lg:justify-center flex flex-col h-screen overflow-hidden p-12 bg-teal-50 '>
      <div className='lg:max-w-[45%]'>
        <p className="xl:text-7xl text-6xl font-bold text-teal-900">Contactless fingerprint recognition</p>
        <ul className="list-disc xl:text-2xl text-xl pl-7 pt-10 flex flex-col gap-3 text-teal-800">
          <li>Highly accurate neural network algorithms</li>
          <li>Work with scans and photo images</li>
          <li>All types of fingerprints are supported</li>        
        </ul>
        <p className='pt-10 xl:text-2xl text-xl font-bold text-teal-800'>Top-tier algorithm accuracy in <span className='underline'>NIST PFT III evaluation</span></p>
      </div>
      <div className='xl:max-w-[33%] max-w-[40%] mt-20 lg:mx-0 mx-auto'>
        <Image className="object-fill" src={hand} alt="hand-image" />
      </div>
    </section>
    <Products />
    <Advantages />
    <Markets />
    <About />
    <Contact />
  </main>);
}
