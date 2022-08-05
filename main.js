class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="#" class="nav-branding">Your Company Name</a>

                <ul class="nav-menu">
                    <li class="nav-items">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="about.html" class="nav-link">About</a>
                    </li>
                    <li>
                        <a href="contact.html" class="nav-link">Contact</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>`
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-container">
            <div class="footer">

                <div class="footer-heading footer-1">
                    <h2>About Us</h2>
                    <a href="FAQ.html">FAQ</a>
                </div>

                <div class="footer-heading footer-2">
                    <h2>Contact Us</h2>
                    <a href="contact.html">Contact</a>
                    <a hrer="#">Hours of Operation</a>      
                </div>

                <div class="footer-heading footer-3">
                    <h2>Social Media</h2>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                </div>

                <div class="footer-email-form">
                    <h2>Join our newsletter</h2>
                    <input type="email" placeholder="Enter your email address" id="footer-email">
                    <input type="submit" value="Sign Up" id="footer-email-btn">
                    <p class="copyright-info">Copyright &copy
                        <script>document.write(new Date().getFullYear())</script> Stepher's Photo Studio
                    </p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('my-footer', MyFooter)