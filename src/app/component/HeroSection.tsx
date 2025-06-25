import Image from 'next/image'
import { RiShoppingBasketFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <div>
      <header>
        <div className='md:w-full md:h-[285px] h-[160px] w-full overflow-hidden'>
            <Image src={"/Coffee-cherries.jpeg"} alt="Coffee Plant" width={'1200'} height={'285'} priority className="object-cover w-full h-full " />
        </div>
      </header>
      <div className=' md:ml-16 ml-6 flex md:flex-row flex-col gap-8 items-start md:items-center justify-between px-4 md:px-8'>
        <div>
            <Image src={"/store-image.jpg"} alt='coffee store image logo' width={'200'} height={'200'} className='rounded-full md:w-56 md:h-56 w-38 h-38 object-cover md:mt-16 mt-8' />
        </div>
        <div className='flex flex-col gap-2 mr-56'>
            <h1 className='md:text-3xl text-2xl font-bold '>Coffee Store</h1>
            <h2 className='mb-4 text-gray-500 text-base md:text-lg'>Odessa ON</h2>
            <div className='flex items-center gap-2'>
                <div className='flex flex-col'>
            <div className='flex flex-row text-base md:text-lg'><RiShoppingBasketFill  className='mt-1 mr-2 text-base md:text-lg'/><p>Location</p></div>
            <p className='ml-6 md:text-lg text-sm'>(Pick Up):</p>
                </div>
            <p className='ml-8 md:text-left text-center md:text-lg text-sm'>3 McAlpine St, Toronto, ON, CA, M5R 3TS <a href="https://cafeone.ng/" target='_blank'
        rel="noopener" className='text-blue-400 ml-8'>Get Direction</a></p>
        </div>
        
        </div>
        <div className='mr-24'>
            <Image src={"/store-owner-image.jpeg"} alt='Store owner avatar' width={'200'} height={'200'} className='rounded-full w-36 h-36 object-cover mb-4' />
            <p className='text-center md:text-right'>Owned by Lola and Coco</p>
        </div>

      </div>
    </div>
  )
}
