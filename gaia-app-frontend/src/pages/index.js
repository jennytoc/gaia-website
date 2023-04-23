import { Inter } from 'next/font/google'
import Image from 'next/image'
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

      <div id="categories">
        <Categories />
      </div>

      <section id='designers'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h4>GAIA X</h4>
          <h5>Designer Name</h5>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <button>Shop</button>
        </div>
      </section>

      <section id='donation'>
        <div>
          <h4>DONATION DISCOUNTS</h4>
          <p>Donate now and get 15% off your next purchase!</p>
          <button>Donate</button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>

      <section id='community'>
        <h4>THE GAIA COMMUNITY</h4>
        <div>
          <img src="" alt="" />
          <h6>Connect</h6>
          <p>with eco-conscious individuals and like-minded people</p>
        </div>
        <div>
          <img src="" alt="" />
          <h6>Share</h6>
          <p>your sustainable values and experiences</p>
        </div>
        <div>
          <img src="" alt="" />
          <h6>Post</h6>
          <p>photos of your new sustainable wardrobe</p>
        </div>
        <button>Forums</button>
      </section>

      <footer>
        <h4>GAIA</h4>
        <ol>
          <li>My Account</li>
          <li>About GAIA</li>
          <li>Sustainability Info</li>
          <li>Get Help</li>
        </ol>
        <small>2023 GAIA All Rights Reserved</small>
      </footer>
    </main>
  )
}
