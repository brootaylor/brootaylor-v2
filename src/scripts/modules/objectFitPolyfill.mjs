/**
 * Object fit module
 *
 */

// Pulling in `object-fit-images` polyfill (for IE & Edge (earlier versions) compatability)
// Ref: https://github.com/fregante/object-fit-images
import objectFitImages from 'object-fit-images';

export default function () {
  /**
   * Object fit function
   */
  const objectFitPolyfill = () => {
    // an array/NodeList
    const someImages = document.querySelectorAll('img.obj-fit');
    objectFitImages(someImages);
  };

  return objectFitPolyfill(); // Makes method available publicly
}
