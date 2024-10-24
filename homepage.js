// 2nd
// Intersection Observer API to detect when the image is in the viewport
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('scrollImage');

    // Create a new observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to remove the skew and bring the image to normal
                image.classList.add('skew-to-normal');
            }
        });
    });

    // Observe the image element
    observer.observe(image);
});

// 3rd
// Intersection Observer API to detect when the image is in the viewport
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('slideImage');

    // Create a new observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to slide the image in when in view
                image.classList.add('slide-in');
                // Unobserve after the animation to prevent re-triggering
                observer.unobserve(image);
            }
        });
    });

    // Observe the image element
    observer.observe(image);
});

// 4th
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('flipImage');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('animate-flip');
                observer.unobserve(image);
            }
        });
    });

    observer.observe(image);
});

// 5th
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('bounceImage');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    });

    observer.observe(image);
});

// text-fade

document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.fade-text'); // Select all elements with the class

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textElement = entry.target;

                // Trigger the fade and color change animation
                textElement.classList.add('show');
                observer.unobserve(textElement); // Stop observing once it appears
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each text element
    texts.forEach(text => {
        observer.observe(text); // Start observing each text element
    });
});