import Image from 'next/image'
import { RiShoppingBasketFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <div>
      <header>
        <div className='w-full h-[285px] overflow-hidden'>
            <Image src={"/Coffee-cherries.jpeg"} alt="Coffee Plant" width={200} height={200} className="object-cover w-full h-full " />
        </div>
      </header>
      <div className=' ml-16 flex flex-row gap-8 items-center justify-between'>
        <div>
            <Image src={"/store-image.jpg"} alt='coffee store image logo' width={'200'} height={'200'} className='rounded-full w-56 h-56 object-cover mt-16' />
        </div>
        <div className='flex flex-col gap-2 mr-56'>
            <h1 className='text-3xl font-bold '>Coffee Store</h1>
            <h2 className='mb-4 text-gray-500 text-lg'>Odessa ON</h2>
            <div className='flex items-center gap-2'>
                <div className='flex flex-col'>
            <div className='flex flex-row text-lg'><RiShoppingBasketFill  className='mt-1 mr-2 text-lg'/><p>Location</p></div>
            <p className='ml-6'>(Pick Up):</p>
                </div>
            <p className='ml-8'>3 McAlpine St, Toronto, ON, CA, M5R 3TS {" "} <a href="https://cafeone.ng/" target='_blank'
        rel="noopener" className='text-blue-400 ml-8'>Get Direction</a></p>
        </div>
        
        </div>
        <div className='mr-24'>
            <Image src={"/store-owner-image.jpeg"} alt='Store owner avatar' width={'200'} height={'200'} className='rounded-full w-36 h-36 object-cover mb-4' />
            <p>Owned by Lola and Coco</p>
        </div>

      </div>
    </div>
  )
}
