document.addEventListener('DOMContentLoaded', () => {
    const typingElements = document.querySelectorAll('.typing');
    
    // Typing animation function
    const typeEffect = (element, speed = 100) => {
        const text = element.getAttribute('data-text');
        let i = 0;
        
        return new Promise((resolve) => {
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    resolve();
                }
            }, speed);
        });
    };

    // Sequential typing simulation
    async function runTerminal() {
        for (const el of typingElements) {
            // Find the output related to this command
            const output = el.parentElement.querySelector('.output');
            if (output) output.style.opacity = '0';
            
            await typeEffect(el, 50);
            
            // Show output after typing command
            if (output) {
                output.style.opacity = '1';
                output.style.transition = 'opacity 0.2s ease-in';
            }
            
            // Wait a bit before next command
            await new Promise(r => setTimeout(r, 600));
        }
    }

    // Hide outputs initially (for the animation)
    const outputs = document.querySelectorAll('.output');
    outputs.forEach(opt => opt.style.opacity = '0');

    // Run terminal simulation
    runTerminal();

    // Subtle parallax effect on project cards
    const cards = document.querySelectorAll('.project-card');
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        cards.forEach(card => {
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    });

    // Handle scroll indicator to target footer
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const footerContent = document.querySelector('#footer-content');
    
    if (scrollIndicator && footerContent) {
        scrollIndicator.addEventListener('click', () => {
            footerContent.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
