document.addEventListener('DOMContentLoaded', function() {
    const applyBtn = document.getElementById('applyBtn');
    
    applyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Button loading effect
        const originalText = this.textContent;
        this.textContent = 'Applying...';
        this.style.pointerEvents = 'none';
        
        // Simulate application process
        setTimeout(() => {
            this.textContent = originalText;
            this.style.pointerEvents = 'auto';
            
            // Show demo alert
            alert('🎉 Application started successfully!\n\nThis is a demo. In real app, redirect to form.');
            
            // Optional: Smooth scroll or other effects
            document.querySelector('.hero').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 1500);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255,255,255,0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });
});
