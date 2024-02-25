import Cart from "./Cart"
const Header = () => {
  return (
    <div className='p-4 bg-slate-500 text-3xl flex justify-between'>
     <h1 className='font-bold font-popins'>MStore</h1>
     <Cart />
    </div>
  )
}

export default Header