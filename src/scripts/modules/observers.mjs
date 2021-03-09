/**
 * observer module
 * Adds a class to the element once it comes into view (ie. intersects) on scroll
 */

export default function () {
  /**
   * observer function
   */
  const observers = () => {
    const animation = document.querySelectorAll('.js-animate');
    const fadeIn = document.querySelectorAll('.js-fadein');

    // "Animation" observer
    const animateOptions = {
      threshold: 0,
      rootMargin: '0px 0px -200px 0px',
    };

    const animateOnScroll = new IntersectionObserver(
      (entries, animateOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
          } else {
            entry.target.classList.add('animate-active');
            animateOnScroll.unobserve(entry.target);
          }
        });
      },
      animateOptions
    );

    // "Fadein" observer
    const fadeInOptions = {
      threshold: 0,
      rootMargin: '0px 0px -200px 0px',
    };

    const fadeInOnScroll = new IntersectionObserver(
      (entries, fadeInOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
          } else {
            entry.target.classList.add('fadein-active');
            fadeInOnScroll.unobserve(entry.target);
          }
        });
      },
      fadeInOptions
    );

    /**
     * Find the relevant elements to run the observer
     */
    animation.forEach((animate) => {
      animateOnScroll.observe(animate);
    });

    fadeIn.forEach((fade) => {
      fadeInOnScroll.observe(fade);
    });
  };

  return observers(); // Makes it available publicly
}
