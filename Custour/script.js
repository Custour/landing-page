document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    const navContainer = document.querySelector('.nav-container');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Create a simple mobile menu overlay or toggle classes
            // For this implementation, we'll toggle visibility directly
            // Note: In a real app, we'd likely want a separate mobile menu container
            // but we can hack it for this single-page demo by toggling a class on the nav

            const isMenuOpen = navContainer.classList.toggle('menu-open');

            // Simple style adjustments for mobile menu state
            if (isMenuOpen) {
                // We'd typically add a full screen class here.
                // For simplicity, let's just log or alert, or implement a basic toggle if we had CSS for it.
                // Let's dynamically add the CSS for the open menu if not present or manage via class

                // Let's assume the CSS handles .menu-open .nav-links { display: flex; ... }
                // Since I didn't write that CSS yet, I'll inject a quick style or rely on a simple alert for now?
                // No, I should fix the CSS implicitly or just make it work.

                // Let's just create a mobile menu container dynamically
                let mobileMenu = document.querySelector('.mobile-menu-overlay');
                if (!mobileMenu) {
                    mobileMenu = document.createElement('div');
                    mobileMenu.className = 'mobile-menu-overlay';
                    mobileMenu.style.position = 'fixed';
                    mobileMenu.style.top = '70px'; // Below nav
                    mobileMenu.style.left = '0';
                    mobileMenu.style.width = '100%';
                    mobileMenu.style.height = '100vh';
                    mobileMenu.style.background = 'rgba(10, 25, 20, 0.95)';
                    mobileMenu.style.backdropFilter = 'blur(10px)';
                    mobileMenu.style.display = 'flex';
                    mobileMenu.style.flexDirection = 'column';
                    mobileMenu.style.alignItems = 'center';
                    mobileMenu.style.padding = '2rem';
                    mobileMenu.style.gap = '2rem';

                    // Clone links
                    const links = navLinks.cloneNode(true);
                    links.style.display = 'flex';
                    links.style.flexDirection = 'column';
                    links.style.alignItems = 'center';
                    links.style.gap = '2rem';

                    const cta = navCta.cloneNode(true);
                    cta.style.display = 'block';

                    mobileMenu.appendChild(links);
                    mobileMenu.appendChild(cta);
                    document.body.appendChild(mobileMenu);

                    // Close on click
                    mobileMenu.querySelectorAll('a').forEach(a => {
                        a.addEventListener('click', () => {
                            mobileMenu.style.display = 'none';
                            navContainer.classList.remove('menu-open');
                        });
                    });
                } else {
                    mobileMenu.style.display = 'flex';
                }
            } else {
                const mobileMenu = document.querySelector('.mobile-menu-overlay');
                if (mobileMenu) mobileMenu.style.display = 'none';
            }
        });
    }

    // Waitlist Form Submission (Mock)
    const form = document.querySelector('.waitlist-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Joining...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.textContent = 'Welcome Aboard! 🌴';
                btn.style.background = 'var(--color-bg-1)';
                form.querySelector('input').value = '';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 3000);
            }, 1000);
        });
    }
    // Hero Chat Animation Sequence
    const chatContainer = document.getElementById('hero-chat');

    if (chatContainer) {
        const sequence = [
            { type: 'user', text: "I want to plan a trip to Bangkok", delay: 1000 },
            { type: 'ai', text: "Great! Let's start planning your trip to Bangkok. To help me find the best options for you, could you please tell me: <br><br>1. Where will you be departing from? <br>2. What are your desired travel dates? <br>3. How many adults/children?", delay: 800, thinkTime: 1500 },
            { type: 'user', text: "Going from Jakarta on 25 Dec to 2 Jan. Traveling with 2 other adults. Looking for hotels and flights.", delay: 2000 },
            { type: 'ai', text: "Got it! Round-trip flights from Jakarta to Bangkok for 3 adults during the holiday season. I'll search for flights and 5-star hotels now.", delay: 800, thinkTime: 2000 },
            { type: 'result-hotels', delay: 500 } // Special type for hotel carousel
        ];

        let currentIndex = 0;

        function playNextMessage() {
            if (currentIndex >= sequence.length) return;

            const step = sequence[currentIndex];

            setTimeout(() => {
                if (step.type === 'user') {
                    addMessage('user', step.text);
                    currentIndex++;
                    playNextMessage();
                } else if (step.type === 'ai') {
                    showTypingIndicator();
                    setTimeout(() => {
                        removeTypingIndicator();
                        addMessage('ai', step.text);
                        currentIndex++;
                        playNextMessage();
                    }, step.thinkTime);
                } else if (step.type === 'result-hotels') {
                    addHotelCarousel();
                    currentIndex++;
                }
            }, step.delay);
        }

        function addMessage(type, text) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${type}`;
            msgDiv.innerHTML = text; // Allow innerHTML for line breaks
            chatContainer.appendChild(msgDiv);
            scrollToBottom();
        }

        function showTypingIndicator() {
            const indicator = document.createElement('div');
            indicator.className = 'typing-indicator';
            indicator.id = 'typing';
            indicator.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            chatContainer.appendChild(indicator);
            scrollToBottom();
        }

        function removeTypingIndicator() {
            const indicator = document.getElementById('typing');
            if (indicator) indicator.remove();
        }

        function addHotelCarousel() {
            const carousel = document.createElement('div');
            carousel.className = 'hotel-carousel';
            // Using placeholders or colored blocks since we don't have real hotel images yet
            // In a real app, these would be real image URLs
            carousel.innerHTML = `
                <div class="hotel-card">
                    <div style="height:120px; background:#e0e0e0; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#888;">Example Hotel</div>
                    <h4>The Siam Hotel</h4>
                    <span>★★★★★ • Riverside</span>
                </div>
                <div class="hotel-card">
                   <div style="height:120px; background:#e0e0e0; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#888;">Example Hotel</div>
                    <h4>Mandarin Oriental</h4>
                    <span>★★★★★ • Chao Phraya</span>
                </div>
            `;
            chatContainer.appendChild(carousel);
            scrollToBottom();
        }

        function scrollToBottom() {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        // Start the sequence
        playNextMessage();
    }
});
