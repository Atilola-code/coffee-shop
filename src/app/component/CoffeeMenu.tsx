'use client'
import React, { useState } from 'react'
import { coffeeMenu } from './data'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import ToggleSwitch from './ToggleSwitch';

interface CategoryFilter {
  coffee: boolean
  baked: boolean
  friendly: boolean
  glutenFree: boolean
    nutFree: boolean
}


export default function CoffeeMenu() {
    const [filter, setFilter] = useState<CategoryFilter>({ coffee: true, baked: true, friendly: false, glutenFree: false, nutFree: false })
    const [searchCoffee, setSearchCoffee] = useState<string>("")
    const [categoriesOpen, setCategoriesOpen] = useState<boolean>(true)
    const [dietaryOpen, setDietaryOpen] = useState<boolean>(true)
    const [imageOnly, setImageOnly] = useState<boolean>(false)
    const [sortBy, setSortBy] = useState<string>("Bestselling")

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFilter((prev) => ({
            ...prev, [name]: checked
        }))}
    const filteredProducts = coffeeMenu.filter((item) => {
        const isCoffee = item.coffeeTitle.toLowerCase().includes("coffee") || item.coffeeTitle.toLowerCase().includes("latte") || item.coffeeTitle.toLowerCase().includes("cappuccino") || item.coffeeTitle.toLowerCase().includes("espresso")
        const isBaked = !isCoffee
        const matchesCategory = (filter.coffee && isCoffee) || (filter.baked && isBaked)
        const matchesSearch = item.coffeeTitle.toLowerCase().includes(searchCoffee.toLowerCase())
        const matchesDietary = (!filter.friendly || item.coffeeTitle.toLowerCase().includes("eco friendly")) &&
            (!filter.glutenFree || item.coffeeTitle.toLowerCase().includes("gluten free")) &&
            (!filter.nutFree || item.coffeeTitle.toLowerCase().includes("nut free"))
        return matchesCategory && matchesSearch && matchesDietary
    })

    const sortProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'PriceLowHigh') return a.price - b.price
        if (sortBy === 'PriceHighLow') return b.price - a.price
        return 0 
    })
  return (
    <div className='px-6'>
      <nav className='flex space-x-46 gap-8 text-lg font-medium mb-2 mt-24'>
        <button className='pb-2 font-semibold ml-34'>Products</button>
        <button className='pb-2 text-gray-600 hover:text-black border-black'>Photos</button>
      </nav>
      <hr className='border-gray-300 mb-16'/>
      <div className='flex flex-col md:flex-row gap-6 p-6'>
        <aside className='md:w-1/5 w-full'>
            <input type="text"  placeholder='Search products...' value={searchCoffee} onChange={(e) => setSearchCoffee(e.target.value)} className='w-full px-3 py-2 rounded mb-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <button onClick={() => setFilter({coffee: false, baked: false, friendly: false, glutenFree: false, nutFree: false})} className='text-blue-400 hover:underline mb-4 text-lg'>
                Clear all
            </button>
            <div className='p-4 bg-white'>
                <button onClick={() => setCategoriesOpen(!categoriesOpen)} className='flex items-center justify-between w-full font-bold text-xl mb-4'>Categories <IoIosArrowDown className={`transform transition-transform duration-300 ${categoriesOpen ? "rotate-0" : "rotate-180"}`} /></button>
                {categoriesOpen && (
                <div className='flex flex-col gap-2'>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" name="coffee" checked={filter.coffee} onChange={handleCheckboxChange} className='form-checkbox h-4 w-4 text-blue-600' />
                        <span className='ml-2'>Coffee</span>
                    </label>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" name="baked" checked={filter.baked} onChange={handleCheckboxChange} className='form-checkbox h-4 w-4 text-blue-600' />
                        <span className='ml-2'>Baked Goods</span>
                    </label>
                </div>
                )}
            </div>
            <div className='p-4 bg-white mt-4'>
                <button onClick={() => setDietaryOpen(!dietaryOpen)}
                 className='flex items-center justify-between w-full font-bold text-xl mb-4'>Dietary <IoIosArrowDown className={`transform transition-transform duration-300 ${dietaryOpen ? "rotate-0" : "rotate-180"}`} /></button>

                {dietaryOpen && (
                <div className='flex flex-col gap-2'>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" name="friendly" checked={filter.friendly} onChange={handleCheckboxChange} className='form-checkbox h-4 w-4 text-blue-600' />
                        <span>Eco Friendly</span>
                    </label>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" name="glutenFree" checked={filter.glutenFree} onChange={handleCheckboxChange} className='form-checkbox h-4 w-4 text-blue-600' />
                        <span>Gluten Free</span>
                    </label>
                    <label className='inline-flex items-center'>
                        <input type="checkbox" name="nutFree" checked={filter.nutFree} onChange={handleCheckboxChange} className='form-checkbox h-4 w-4 text-blue-600' />
                        <span>Nut Free</span>
                    </label>
                </div>
                )}
            </div>
        </aside>
        <div className='flex-1'>
        <div className='flex flex-col md:flex-row sm:items-center justify-between mb-6 gap-4'>
            <p className='text-gray-700 font-medium'> Show all products ({filteredProducts.length})</p>
            <div className='flex items-center gap-3'>
                <span className='text-sm text-gray-600'>Show Images Only</span>
                <ToggleSwitch isOn={imageOnly} handleToggle={() => setImageOnly(!imageOnly)} />
            </div>
            <div className='flex items-center gap-3'>
                <label htmlFor="sortBy" className='text-sm text-gray-600'>Sort By:</label>
                <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='form-select h-10 w-40 px-3 py-2 bg-white '>
                    <option value="Bestselling">Bestselling</option>
                    <option value="PriceLowHigh">Price: Low to High</option>
                    <option value="PriceHighLow">Price: High to Low</option>
                </select>
        </div>
        </div>
        <main className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredProducts.map((item) => (
                    <div key={item.id} className=' rounded-lg p-4 bg-white shadow'>

                            <Image src={item.coffeeImage} alt={item.coffeeTitle} width={300} height={300} className='w-full h-48 object-cover rounded-md' />
                        {imageOnly && (
                            <>
                        <h3 className='text-xl font-semibold mt-4'>{item.coffeeTitle}</h3>
                        <div className='flex flex-row items-start gap-2 mt-2'>
                        <Image src={item.bakeryImage} alt={item.bakeryName} width={20} height={20} className='w-8 h-8 object-cover rounded-full mb-2' />
                        <p className='text-gray-600 mb-2'>{item.bakeryName}</p>
                        </div>
                        <p className='text-lg font-medium'>${item.price.toFixed(2)}</p>
                            </>
                        )}
                    </div>
                ))}
            
        </main>

      </div>
    </div>
    </div>
  )
}
