import gsap from 'gsap'
import { ScrollTrigger , SplitText} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText)


const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl to-indigo-300 '>
Hello
      </h1>
    </div>
  )
}

export default App
