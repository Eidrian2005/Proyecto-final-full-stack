import Carousel from 'react-bootstrap/Carousel';
// import carrucelimg1 from '../img/+506 6206 4042 20240627_211905 - Cindy baletti (1).jpg'
import "../styles/carrucel.css"
// import carrucelimg2 from "../img/IMG_20230929_125429 - Cindy baletti.jpg"
// import carrucelimg3 from "../img/IMG-20240830-WA0069 - Cindy baletti.jpg"
import tempo from '../img/shopping-in-greece-a-stunning-3d-rendering-for-your-social-picture-image_3754989.jpg'


function DarkVariantExample() {
  return (
    <Carousel id='carrucel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tempo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src={carrucelimg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src={carrucelimg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;