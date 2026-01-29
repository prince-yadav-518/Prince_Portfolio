// Smooth scroll + Active link highlight
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Smooth scroll on click
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Active link highlight on scroll
window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});



function sendEmail(event) {
  event.preventDefault(); 

  emailjs.sendForm('service_wgchnid', 'template_piih62j', '#contact-form')
    .then(function(response) {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset(); 
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('Oops... Something went wrong.');
      console.log('FAILED...', error);
    });
}

