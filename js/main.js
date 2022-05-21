// ======= Start locked
let lock = document.getElementById( "container-lock" ),
    unlocked = document.getElementById( "unlock" ),
    upTop = document.getElementById( "up-top" );
// ======= Start Nav Bar
let linkes = document.getElementById( "nav-menu" ),
    closeLink = document.getElementById( "close-link" ),
    showLink = document.getElementById( "show-link" );
let layOut = document.getElementById( "layout" ),
    sideBar = document.getElementById( "sidebar" ),
    showCar = document.getElementById( "car-shop" ),
    empty = document.getElementById( "empty" ),
    layoutLi = document.querySelectorAll( ".lists" );
// ======= Start Nav Bar Dark Mode
let dark = document.getElementById( "dark" ),
    moon = document.getElementById( "moon" ),
    sun = document.getElementById( "sun" ),
    option = document.getElementById( "option" ),
    optionLi = document.getElementById( "option-li" );

let switcherLis = document.querySelectorAll( ".links li" ),
    boxs = document.querySelectorAll( ".gallerys .box" ),
    nav = document.getElementById( "nav" ),
    footer = document.getElementById( "footer" ),
    logo = document.getElementById( "logo" );

// ================= Function for Nav
if ( showLink )
{
    showLink.addEventListener( "click", () =>
    {
        showLink.style.display = "none"
        linkes.style.display = "flex"
        closeLink.style.display = "block"
    } )
};
if ( closeLink )
{
    closeLink.addEventListener( "click", () =>
    {
        linkes.style.display = "none"
        closeLink.style.display = "none"
        showLink.style.display = "block"
    } )
};
// ============ Function For Dark Mode
if ( moon )
{
    moon.addEventListener( "click", () =>
    {
        document.body.style.background = "#0f1012"
        moon.style.display = "none"
        sun.style.display = "block"
    } )
};
if ( sun )
{
    sun.addEventListener( "click", () =>
    {
        document.body.style.background = "white"
        sun.style.display = "none"
        moon.style.display = "block"
        optionLi.classList.remove( ".edit-color-after span" )
    } )
};
switcherLis.forEach( ( ele ) =>
{
    ele.addEventListener( "click", function Active ()
    {
        switcherLis.forEach( ( ele ) =>
        {
            ele.classList.remove( "active" );
            this.classList.add( "active" );
        } );
        boxs.forEach( ( boxs ) =>
        {
            boxs.style.display = "none";
        } );
        document.querySelectorAll( this.dataset.cat ).forEach( ( ele ) =>
        {
            ele.style.display = "block";
        } );
    }
    );
} );
// ================= Functin For Scoll Window
window.onscroll = function ()
{
    if ( window.scrollY >= 400 )
    {
        upTop.style.opacity = "1";
        upTop.addEventListener( "click", function ()
        {
            window.scrollTo( {
                top: 0,
                lft: 0,
                behavior: "smooth",
            } );
        } );
    } else { upTop.style.opacity = "0"; }
    if ( window.scrollY >= footer.offsetTop - 500 ) { nav.style.display = "none"; }
    else { nav.style.display = "flex"; }
};
sideBar.onclick = function ( e )
{
    this.classList.toggle( "open" );
    layOut.classList.toggle( "show-lay" );
    layoutLi.forEach( ( ele ) =>
    {
        ele.addEventListener( "click", () =>
        {
            layOut.classList.remove( "show-lay" )
            sideBar.classList.remove( "open" )
        } );
    } );

};
logo.onclick = function ()
{
    window.scrollTo( {
        top: 0,
        left: 0,
        behavior: "smooth",
    } )
};

