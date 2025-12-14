import './App.css'
import { CardImg } from './assets'
import Card from './components/Card'
import { PapayaCopy } from './content/content'

function App() {

  return (
    <div className='flex h-screen items-center justify-center bg-gray-800'>
      <div className="container flex flex-col items-center">
        <Card
          imagePath={CardImg}
          altText='Food Item'
          speciality='best seller'
          rating={4.5}
          users={22}
          name='papaya'
          desc={PapayaCopy}
          price="₹100" />
      </div>
    </div>
  )
}

export default App
