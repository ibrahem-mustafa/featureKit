
if ( window.innerWidth >= 991 ) {

    var user = document.querySelector( 'li.user' );

    if ( user ) {

        var img = user.querySelector( 'a#navbarDropdown' );

        if ( img ) {
            img.addEventListener( 'mouseenter', function () {
                var list = user.querySelector( '.dropdown-menu' );

                if ( list ) {
                    list.classList.add( 'show' )
                }
            } )

            user.querySelector( '.dropdown-menu' ).addEventListener( 'mouseleave', function () {
                var list = user.querySelector( '.dropdown-menu' );

                if ( list ) {
                    list.classList.remove( 'show' )
                }
            } )

        }
    }
}

