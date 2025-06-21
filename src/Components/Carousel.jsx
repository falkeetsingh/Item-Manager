import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

export default function Carousel({ images = [] }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ReactCarousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </ReactCarousel>
  );
}