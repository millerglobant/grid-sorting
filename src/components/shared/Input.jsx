import React from 'react'

const Input = ({
  id,
  placeholder = 'Type here...',
  value = 'default value!',
  onchange
}) => {
  return (
    <>
      <input
        type="text"
        class="
          form-control
          block
          w-full
          px-3
          py-1
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </>
  )
}

export default Input