var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
})

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
}

const appearWhenOnScreen = new IntersectionObserver(function(entries, appearWhenOnScreen) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('appear');
            appearWhenOnScreen.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearWhenOnScreen.observe(fader);
})