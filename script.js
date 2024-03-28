
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let interestSelect = document.getElementById('interest');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let interestError = document.getElementById('interestError');
    let isValid = true;

    // Validasi nama
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validasi email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Validasi interest
    if (interestSelect.value === '') {
        interestError.textContent = 'Please select your interest';
        isValid = false;
    } else {
        interestError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Form reset
        document.getElementById('contactForm').reset();
    }
});


function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
  
    // Menyimpan lebar slide untuk penggunaan nanti
    let slideWidth = slides[0].clientWidth;
  
    // Menggeser slider ke kiri
    document.querySelector('.slider').style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
  
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  
    setTimeout(showSlides, 4000); // durasi slide
  }

document.querySelector('.prev').addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = document.querySelectorAll('.slide').length;
  }
  showSlides();
});

document.querySelector('.next').addEventListener('click', function() {
  slideIndex++;
  if (slideIndex > document.querySelectorAll('.slide').length) {
    slideIndex = 1;
  }
  showSlides();
});
