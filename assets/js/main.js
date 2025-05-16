document.addEventListener('DOMContentLoaded', () => {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    const loginError = loginForm ? loginForm.querySelector('#errorMessage') : null;
    const loginButton = document.getElementById('loginButton');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Clear previous error
            loginError.classList.add('hidden');
            
            // Get form data
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                loginError.textContent = 'Please fill in all fields';
                loginError.classList.remove('hidden');
                return;
            }
            
            if (!validateEmail(email)) {
                loginError.textContent = 'Please enter a valid email address';
                loginError.classList.remove('hidden');
                return;
            }
            
            // Show loading state
            loginButton.textContent = 'Logging in...';
            loginButton.disabled = true;
            
            try {
                // Simulate API call (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // For demo purposes, redirect to dashboard
                // In production, verify credentials with backend first
                window.location.href = 'dashboard.html';
            } catch (error) {
                loginError.textContent = 'Invalid email or password';
                loginError.classList.remove('hidden');
            } finally {
                loginButton.textContent = 'Login';
                loginButton.disabled = false;
            }
        });
    }

    // Registration form handling
    const registerForm = document.getElementById('registerForm');
    const registerError = registerForm ? registerForm.querySelector('#errorMessage') : null;
    const registerButton = document.getElementById('registerButton');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Clear previous error
            registerError.classList.add('hidden');
            
            // Get form data
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Basic validation
            if (!name || !surname || !email || !phone || !password || !confirmPassword) {
                registerError.textContent = 'Please fill in all fields';
                registerError.classList.remove('hidden');
                return;
            }
            
            if (!validateEmail(email)) {
                registerError.textContent = 'Please enter a valid email address';
                registerError.classList.remove('hidden');
                return;
            }

            if (password.length < 6) {
                registerError.textContent = 'Password must be at least 6 characters long';
                registerError.classList.remove('hidden');
                return;
            }
            
            if (password !== confirmPassword) {
                registerError.textContent = 'Passwords do not match';
                registerError.classList.remove('hidden');
                return;
            }
            
            // Show loading state
            registerButton.textContent = 'Creating Account...';
            registerButton.disabled = true;
            
            try {
                // Simulate API call (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // For demo purposes, redirect to dashboard
                // In production, verify registration with backend first
                window.location.href = 'dashboard.html';
            } catch (error) {
                registerError.textContent = 'Registration failed. Email may already be in use.';
                registerError.classList.remove('hidden');
            } finally {
                registerButton.textContent = 'Create Account';
                registerButton.disabled = false;
            }
        });
    }

    // Dashboard functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const assetsTab = document.getElementById('assetsTab');
    const activitiesTab = document.getElementById('activitiesTab');
    const assetsContent = document.getElementById('assetsContent');
    const activitiesContent = document.getElementById('activitiesContent');
    const logoutButton = document.getElementById('logoutButton');
    const mobileLogoutButton = document.getElementById('mobileLogoutButton');

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Tab switching
    if (assetsTab && activitiesTab && assetsContent && activitiesContent) {
        assetsTab.addEventListener('click', () => {
            assetsTab.classList.add('text-trading-primary', 'border-trading-primary', 'border-b-2');
            activitiesTab.classList.remove('text-trading-primary', 'border-trading-primary', 'border-b-2');
            assetsContent.classList.remove('hidden');
            activitiesContent.classList.add('hidden');
        });

        activitiesTab.addEventListener('click', () => {
            activitiesTab.classList.add('text-trading-primary', 'border-trading-primary', 'border-b-2');
            assetsTab.classList.remove('text-trading-primary', 'border-trading-primary', 'border-b-2');
            activitiesContent.classList.remove('hidden');
            assetsContent.classList.add('hidden');
        });
    }

    // Logout functionality
    const handleLogout = () => {
        // Add any cleanup or API calls here
        window.location.href = 'login.html';
    };

    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }

    if (mobileLogoutButton) {
        mobileLogoutButton.addEventListener('click', handleLogout);
    }
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
