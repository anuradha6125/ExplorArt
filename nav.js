const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <h3 class="brand-ea">ExplorArt</h3>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="user.png" alt=""></a>
                <a href="#"><img src="more.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">artist</a></li>
            <li class="link-item"><a href="#" class="link">artwork</a></li>
            <li class="link-item"><a href="#" class="link">about us</a></li>
            <li class="link-item"><a href="#" class="link">blog</a></li>
            <li class="link-item"><a href="#" class="link">contact us</a></li>
        </ul>
    ;
}

createNav();