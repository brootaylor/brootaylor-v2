/**
 * Carousel component
 */

const carousel = () => {
  console.log('Returning carousel logic.');
  const carouselWrapper = document.querySelector('.carousel');
  const carouselTrack = document.querySelector('.carousel__track');
  const carouselSlides = Array.from(carouselTrack.children)

  console.log(carouselSlides);
};

export { carousel };
