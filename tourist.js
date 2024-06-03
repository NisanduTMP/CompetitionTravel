document.addEventListener('DOMContentLoaded', function() {
    let quotes = document.querySelectorAll('#quoteContainer .quote');
    let currentQuoteIndex = 0;

    function showNextQuote() {
        quotes[currentQuoteIndex].classList.remove('show');

        setTimeout(function() {
            quotes[currentQuoteIndex].style.display = 'none';

            let nextQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quotes[nextQuoteIndex].style.display = 'flex';

            setTimeout(function() {
                quotes[nextQuoteIndex].classList.add('show');
                currentQuoteIndex = nextQuoteIndex;
            }, 20);
        }, 1000);
    }

    quotes[currentQuoteIndex].style.display = 'flex';
    quotes[currentQuoteIndex].classList.add('show');

    setInterval(showNextQuote, 7000);

    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
