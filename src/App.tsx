import Header from './component/Header.jsx'
import MenuItem from './component/MenuItem.js'
import OrderContents from './component/OrderContents.js'
import OrderTotal from './component/OrderTotal.js'
import { menuItems } from './data/db.js'
import useOrder from './hooks/useOrder.js'
function App() {
  
  const { addItem, removeItem, order } = useOrder()

  return (
    <>
     <Header />
     <main className='max-w-7xl mx-auto py-20 px-2 grid md:grid-cols-2 gap-2'>
      <div>
        <h2 className='text-4xl font-bold'>Menu</h2>
        <div className='space-y-1 mt-10'>
          {
            menuItems.map(item => {
              return <MenuItem item={item} key={item.id} addItem={addItem}/>
            })
          }
        </div>
      </div>
      <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
        <OrderContents order={order} removeItem={removeItem}/>
        <OrderTotal order={order}/>
      </div>
     </main>
    </>
  )
}

export default App
