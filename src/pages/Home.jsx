import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TopSection from '../components/TopSection'
import Card from '../components/Card'

const categories = [
  { name: 'DEHYDRATED GARLIC POWDER', image: '13.jpg' },
  { name: 'CARROT POWDER', image: '18.png' },
  { name: 'ONION POWDER', image: '14.png' },
  { name: 'READY TO EAT MAIN COURSE FOOD', image: '26.jpg' },
  { name: 'DRY FRUITS', image: '32.jpg' },
  { name: 'FRESH FRUITS & VEGETABLES', image: '33.jpg' },
  { name: 'DEHYDRATED FRUITS & VEGETABLES', image: '34.jpg' },
  { name: 'READY TO EAT PACKED SNACKS FOOD', image: '35.jpg' },
  { name: 'DEHYDRATED GINGER POWDER', image: '8.jpg' },
]

const Home = () => {
  const topSection = useRef(null)
  const heroSection = useRef(null)
  const categorySection = useRef(null)
  const serviceSection = useRef(null)
  const reviewSection = useRef(null)

  return (
    <div >
      {/* It's established in the year 2022 in Haryana, India. */}
      <div className="home-page">
        <Navbar topSection={topSection} reviewSection={reviewSection} heroSection={heroSection} categorySection={categorySection} serviceSection={serviceSection} />
        <TopSection topSection={topSection} />
      </div>
      <HeroSection heroSection={heroSection} />

      <div className="parent">
        <div className=" services-section mx-auto my-9">
          <h1 ref={serviceSection} className='text-5xl font-bold py-6 text-center'><span className="lato">About Us</span></h1>
          <div className='border h-1 w-28 text-gray-800 mx-auto'></div>
          {/* <p className='font-semibold text-gray-800 py-4'>We upgrade ourselves with the latest equipment, and most modern and sophisticated grading and packing techniques to keep pace with technological advancement. We provide superior quality products and offer total packaging solutions too. We ensure that our products are adequately packed & reach the clients in the best of shape.</p> */}
          <p className='roboto text-justify text-gray-800 py-4'>We are exporters and retailers of products in which we deals raw and grinded spices, fresh fruits & vegetables, dehydrated fruits & vegetables, powder form fruits & vegetables, Dry fruits, Ready to eat snacks food, ready to serve main course food in curry and vegetable shahi paneer etc. We also deals in old and new food processing units startups. Quality manner is at the very forefront of our pursuits. We are committed to providing superior quality products through an efficient quality management system to satisfy & fulfil the stated & unstated needs of our customers. Our products go through a stringent quality assurance test.</p>
        </div>
      </div>


      <div className="category-section w-full mx-auto my-9">
        <h1 ref={categorySection} className='text-5xl py-6 font-bold text-center'><span className="lato">Products</span></h1>
        <div className='border h-1 w-28 text-gray-800 mx-auto'></div>
        <div className="categories w-[95%] mx-auto flex flex-wrap justify-around">
          {categories.map((category, idx) => (
            <Card key={idx} category={category} image={category.image} />
          ))}
        </div>
      </div>

      <div className="parent mt-6">
        <div ref={reviewSection} className="parallax text-justify mt-16 review w-[92%] md:w-[85%] mx-auto">
          {/* <div class="parallax"></div> */}
          <h1 className='text-5xl py-6 font-bold text-center'>Reviews</h1>
          {/* <div className='border h-2 w-28 text-gray-900 mx-auto'></div> */}
          <p className=' text-black py-5 font-semibold'><span className='dark font-bold'>Kaka foods & caterers</span> is ideal for any indian dishes.it has good Taste and Aroma.Kaka foods & caterers cantain spices withen are used for anhancing taste.it is not only use for good Aroma, it has many healthy resons .kitchen king masala powder cantains all the major spices like- fenugreek, garlic, ginger, anistar, black cardamom, black gram, black paper, cardamom, cardamom seed, chilli, clove, cumin etc.all these spices have high Nutritional value and are source of many valuable Nutrients.it has good flaver.and packging is very attractive.</p>
        </div>
      </div>

    </div>
  )
}

export default Home
