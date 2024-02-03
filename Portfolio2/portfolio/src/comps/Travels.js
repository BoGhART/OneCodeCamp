import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../assets/414436063_7134139116607759_7718479973048955449_n.jpg';
import image2 from '../assets/49031471_2108318919189829_4829859894523854848_n.jpg';
import image3 from '../assets/416491039_7168825386472465_2748332323074195778_n.jpg';


const Travels = () => {
  return (
    <div className="gen">
      <header>
            <nav>
                <Link to="/portfolio" className="navi">
                    Home
                </Link>
                <Link to="/portfolio/#about" className="navi">
                    About Me
                </Link>
                <Link to="/portfolio/#contact" className="navi">
                    Contact
                </Link>
            </nav>
      </header>

      <section className="desc">
        <h2>Travel Journal</h2>
        <p>
          Embarking on a journey through the vibrant tapestry of the Philippines, I traversed the length and breadth of Luzon, discovering the dynamic contrasts between bustling urban landscapes and serene natural wonders. The journey continued to the heart of the Visayas, where Cebu welcomed me with its pristine beaches and historic sites, narrating tales of a rich cultural heritage. Venturing southward to Davao in Mindanao, I marveled at the region's unique charm and the mesmerizing landscapes that unfolded before me. However, my adventures were not confined to the archipelago. Japan, a country that beckoned with its captivating blend of tradition and modernity, became a recurrent destination in my travel chronicles. Three separate sojourns allowed me to explore the historic streets of Kyoto and savor the bustling energy of Tokyo. These experiences, woven together in the pages of my travel journal, serve as a testament to the diverse beauty that both the Philippines and Japan have graciously shared, leaving an enduring mark on my journey of exploration and discovery.
        </p>
      </section>

      <section className="pics">
        <div className="container mt-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="Image 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Image 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Image 3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <footer>-Portfolio-</footer>
    </div>
  );
};

export default Travels;
