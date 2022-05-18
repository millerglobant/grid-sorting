
const Header = ({
  number = 1
}) => {
  return (
    <div className='flex items-center hover:cursor-pointer hover:bg-slate-50 border rounded p-1 justify-center'>
      <p className='font-bold mr-1'>Header {number}</p>
      <svg class="h-5 w-5 text-teal-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg>
    </div>
  )
}

export default Header