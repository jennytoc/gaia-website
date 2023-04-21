import { Inter } from 'next/font/google'
import Carousel from '@/components/carousel.js'
import { Categories } from '@/components/carousel.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <nav>
        <img src="" alt="logo" />
        <ol>
          <li className='nav-icon'><img src="" alt="search icon" /></li>
          <li className='nav-icon'><img src="" alt="user icon" /></li>
          <li className='nav-icon'><img src="" alt="shopping cart icon" /></li>
        </ol>
      </nav>

      <div id="default-carousel">
        <Carousel />
      </div>

      <div className="categories">
        <Categories />
      </div>
      
      <section className='designers'>

      </section>
      <section className='donation'>

      </section>
      <section className='community'>

      </section>
      <footer>

      </footer>
    </main>
  )
}
