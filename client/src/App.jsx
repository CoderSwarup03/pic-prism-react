import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import GsapTransition from './Components/GsapTransition'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GsapTransition />
        {/* add footer here */}
      </BrowserRouter>
    </>
  )
}