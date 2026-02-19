function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('overlay');
            const isHidden = menu.classList.contains('-translate-x-full');
            
            if (isHidden) {
                menu.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                menu.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }