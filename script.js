const toggle = document.getElementById("navbar-toggle");
const links = document.getElementById("navbar-links");
const closeBtn = document.getElementById("close-btn");

// Toggle menu open/close
toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    toggle.classList.toggle("active"); // Change toggle to close icon
});

// Close menu when close button is clicked
closeBtn.addEventListener("click", () => {
    links.classList.remove("active");
    toggle.classList.remove("active");
});

// Smooth scroll for each section
const navLinks = document.querySelectorAll(".navbar-links a");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Close menu after click (mobile view)
        links.classList.remove("active");
        toggle.classList.remove("active");
    });
});


// Select all sections
const sections = document.querySelectorAll("section");

// Observe each section
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // Add 'active' class when in view
            }
        });
    },
    {
        threshold: 0.2, // Trigger when 20% of the section is visible
    }
);

// Apply observer to each section
sections.forEach((section) => {
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Software Developer.","Java Developer.","Full Stack Developer."];
    const typingElement = document.querySelector(".typing");
    let arrayIndex = 0; // Keeps track of the current message
    let charIndex = 0;  // Keeps track of the current character

    typingElement.textContent = "";

    // Typing function
    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Typing speed (in milliseconds)
        } else {
            setTimeout(startErasing, 1500); // Wait before starting to erase
        }
    }

    // Erasing function
    function startErasing() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(startErasing, 50); // Erasing speed (in milliseconds)
        } else {
            arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next message
            setTimeout(type, 500); // Delay before typing next message (in milliseconds)
        }
    }

    // Start the typing effect
    type();
});




// JavaScript for Scroll Effect
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});


// certificate
function openModal(certId) {
    var modal = document.getElementById("certModal");
    var modalImage = document.getElementById("modalImage");
    var certImage = document.getElementById(certId);

    // Set the image in the modal
    modal.style.display = "block";
    modalImage.src = certImage.src;
}

function closeModal() {
    var modal = document.getElementById("certModal");
    modal.style.display = "none";
}


//contact 


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    form.classList.add("slide-in"); // Add the slide-in class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the form is visible
    );

    observer.observe(form);
});




    document.addEventListener('DOMContentLoaded', () => {
        // Add click event listeners to all navbar links
        const navLinks = document.querySelectorAll('.navbar-links a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
    
                // Add active class to clicked link
                this.classList.add('active');
            });
        });
    });
    

    // Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Detect visibility of the Contact section
  document.addEventListener("scroll", function() {
    const contactSection = document.getElementById("contact"); // Replace with your Contact section's ID
    const backToTopBtn = document.getElementById("backToTopBtn");
  
    // Check if the Contact section is in the viewport
    const rect = contactSection.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
    // Show or hide the button based on visibility
    if (isVisible) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  

  