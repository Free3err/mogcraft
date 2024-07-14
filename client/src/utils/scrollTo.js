export default function scrollTo(e) {
    e.preventDefault();
    const anchor = document.querySelector(e.currentTarget.getAttribute('href'));
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
    }
}
