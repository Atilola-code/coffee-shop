"use client"
import React from 'react'

interface ToggleSwitchProps {
    isOn: boolean
    handleToggle: () => void
}

export default function ToggleSwitch({ isOn, handleToggle }: ToggleSwitchProps) {
  return (
      <div>
        <button onClick={handleToggle} className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${isOn ? "bg-blue-600" : "bg-gray-300"}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}>

            </div>
        </button>
      
    </div>
  )
}
