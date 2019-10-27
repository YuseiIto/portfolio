function Header(){
    document.write('<header id="header" class="alt">\
    <a href="index.html" class="logo"><strong>Portfolio</strong> <span>By Yusei Ito</span></a>\
    <nav>\
        <a href="#menu">Menu</a>\
    </nav>\
</header>\
');

}

function Menu(){
document.write(' <nav id="menu">\
    <ul class="links">\
        <li><a href="index.html">Home</a></li>\
        <li><a href="history.html">History</a></li>\
    </ul>\
    <ul class="actions stacked">\
        <li><a href="#" class="button primary fit">Contact</a></li>\
        <li><a href="https://yuseiito.github.io/" class="button fit">Blog</a></li>\
    </ul>\
</nav>');

}

function Footer(){
    document.write('<footer id="footer">\
    <div class="inner">\
        <ul class="icons">\
            <li><a href="https://twitter.com/ItyuJ" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>\
            <li><a href="https://facebook.com/Ityuj" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>\
            <li><a href="https://instagram.com/yuseiito" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>\
            <li><a href="https://github.com/yuseiito" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>\
            <li><a href="https://www.linkedin.com/in/yusei-ito-a01760160/" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>\
        </ul>\
        <ul class="copyright">\
            <li>&copy; YuseiIto</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>\
        </ul>\
    </div>\
</footer>');
}



function Contact(){
    document.write('	<section id="contact">\
    <div class="inner">\
        <section>\
            <form method="post" action="#">\
                <div class="fields">\
                    <div class="field half">\
                        <label for="name">Name</label>\
                        <input type="text" name="name" id="name" />\
                    </div>\
                    <div class="field half">\
                        <label for="email">Email</label>\
                        <input type="text" name="email" id="email" />\
                    </div>\
                    <div class="field">\
                        <label for="message">Message</label>\
                        <textarea name="message" id="message" rows="6"></textarea>\
                    </div>\
                </div>\
                <ul class="actions">\
                    <li><input type="submit" value="Send Message" class="primary" /></li>\
                    <li><input type="reset" value="Clear" /></li>\
                </ul>\
            </form>\
        </section>\
        <section class="split">\
            <section>\
                <div class="contact-method">\
                    <span class="icon solid alt fa-envelope"></span>\
                    <h3>Email</h3>\
                    <a href="#">yuseikun@outlook.jp</a>\
                </div>\
            </section>\
            <section>\
                <div class="contact-method">\
                    <span class="icon solid alt fa-phone"></span>\
                    <h3>Phone</h3>\
                    <span>公開していません。直接ご連絡いただいた方にのみお伝えしています。</span>\
                </div>\
            </section>\
            <section>\
                <div class="contact-method">\
                    <span class="icon solid alt fa-home"></span>\
                    <h3>Blog</h3>\
                    <span>私にInputされたものを、Outputする場所です。<br>\
                        <a href="http://yuseiito.github.io/">I/O-By Yusei Ito</a>\
                    </span>\
                </div>\
            </section>\
        </section>\
    </div>\
</section>');
}