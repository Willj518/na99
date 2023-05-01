function internalScroller(hash)
{
    $('html, body').animate({
        scrollTop: $(hash).position().top
    }, 1200, function() {
        location.hash = hash;
      });
}
$('.wrap-scroll-arrow').click(function(e){
    e.preventDefault();
    var internalHash = location.hash;
    if(internalHash == '')
    {
        if(window.location.pathname == '/') //if the page is /
        {
            internalHash = '#Neuigkeiten'; // here state what is SECOND section
        }
        if(window.location.pathname == '/kochkurse')
        {
            internalHash = '#Fakten';
        }
        if(window.location.pathname == '/catering')
        {
            internalHash = '#fakten';
        }
        if(window.location.pathname == '/produkte')
        {
            internalHash = '#Warum';
        }
        
    }
    else{

        var lastHash = '';

        if(window.location.pathname == '/') //if we are on / page
        {
            if(internalHash == '#Anfahrt') // here set the last element
            {
                lastHash = '#Introduccione'; // here set where to scroll when last element
            }
        }
        if(window.location.pathname == '/kochkurse')
        {
            if(internalHash == '#Stimmen')
            {
                lastHash = '#Introduccione';
            }
        }
        if(window.location.pathname == '/catering')
        {
            if(internalHash == '#anrufen')
            {
                lastHash = '#Introduccione';
            }
        }
        if(window.location.pathname == '/produkte')
        {
            if(internalHash == '#anrufen')
            {
                lastHash = '#Introduccione';
            }
        }
    
        if(lastHash == '')
        {
            var jOb = $(internalHash);
            var nextObj = jOb.next();
            internalHash = '#' + nextObj.attr('id');
        }
        else{
            internalHash = lastHash;
        }

        
    }

    internalScroller(internalHash);

});

// TABS NAV KARTE 
var Webflow = Webflow || [];
Webflow.push(function() {

  // For any tab-prev and tab-next clicks
  $('.wrap-nav-karte-inner').on('click', '.tab-prev, .tab-next', function() {

    // Get direction
    var direction = $(this).hasClass('tab-prev') ? -1 : 1;

    // Get the tab links
    var tablinks = $('.wrap-inner').parent().find('.w-tab-menu');

    // Get index of current tab link, add direction
    var index = tablinks.find('.w--current').index() + direction;

    // If array out of bounds, click on the first
    index = index >= tablinks.children().length ? 0 : index;

    // Update tabs by triggering a "tap" event on the corresponding slide button
    tablinks.find('.w-tab-link').eq(index).trigger('click');

  }); // End click handler

}); // End ready function


// freeze bg scroll when nav open 

 Webflow.push(function() {
  $('.menu-button').on('click tap',function() {
   if( $("html").css("overflow-y") == 'hidden') {
    $("html").css('overflow-y', 'auto');
   }
   else
   {
    $("html").css('overflow-y', 'hidden');
   }
   });
  });


// editor hacks: recreate intial interaction states with jqeury

/*Webflow.push(function () {
  // check is the CMS editor is there
  if (Webflow.env('editor') != undefined) { 
//console.log('Editor is loaded: do not load custom js');}
    $(".full-screen-overlay").css({"display":"none"});} 
});

*/

/*
$(".barba-container").css({"opacity":"0","-webkit-transform":"translate(0,48px)","-ms-transform":"translate(0,48px)","transform":"translate(0,48px)"});

$(".full-screen-overlay").css({"display":"flex"});

  $(".giovanna-hero-cooking", ".pulpo-hero", ".wrapper-inpage-nav", ".tabs-karte", ".container-karte", ".reservieren-karte.hidden", ".hero-heading-1.karte").css({"opacity":"0",});

  $(".giovanna-hero-cooking").css({"-webkit-transform":"translate(24px,0)","-ms-transform":"translate(24px,0)","transform":"translate(24px,0)"});
  $(".pulpo-hero").css({"-webkit-transform":"translate(-24px,0)","-ms-transform":"translate(-24px,0)","transform":"translate(-24px,0)"});

*/


/*
    lazyLoadGoogleMaps v1.0.2
    A JavaScript plugin for lazy-loading Google Maps.
    -
    By Osvaldas Valutis, www.osvaldas.info
    Available for use under the MIT License


window.googleMapsScriptLoaded = function()
{
    $( window ).trigger( 'googleMapsScriptLoaded' );
};

;( function( $, window, document, undefined )
{
    'use strict';

    var $window                 = $( window ),
            $body                       = $( 'body' ),
            windowHeight        = $window.height(),
            windowScrollTop = 0,

        debounce = function( delay, fn )
        {
            var timer = null;
            return function()
            {
                var context = this, args = arguments;
                clearTimeout( timer );
                timer = setTimeout( function(){ fn.apply( context, args ); }, delay );
            };
        },
        throttle = function( delay, fn )
        {
            var last, deferTimer;
            return function()
            {
                var context = this, args = arguments, now = +new Date;
                if( last && now < last + delay )
                {
                    clearTimeout( deferTimer );
                    deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
                }
                else
                {
                    last = now;
                    fn.apply( context, args );
                }
            };
        },

        apiScriptLoaded  = false,
        apiScriptLoading = false,
        $containers          = $([]),

        init = function( callback )
        {
            windowScrollTop = $window.scrollTop();

            $containers.each( function()
            {
                var $this               = $( this ),
                        thisOptions = $this.data( 'options' );

                if( $this.offset().top - windowScrollTop > windowHeight * 1 )
                    return true;

                if( !apiScriptLoaded && !apiScriptLoading )
                {
                    var apiArgs =
                    {
                        callback: 'googleMapsScriptLoaded'
                    };

                    if( thisOptions.key )               apiArgs.key             = thisOptions.key;
                    if( thisOptions.libraries ) apiArgs.libraries   = thisOptions.libraries;
                    if( thisOptions.language )  apiArgs.language    = thisOptions.language;
                    if( thisOptions.region )        apiArgs.region      = thisOptions.region;

                    $body.append( '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&' + $.param( apiArgs ) + '"></script>' );
                    apiScriptLoading = true;
                }

                if( !apiScriptLoaded ) return true;

                var map = new google.maps.Map( this, { zoom: 15 });
                if( thisOptions.callback !== false )
                    thisOptions.callback( this, map );

                $containers = $containers.not( $this );
            });
        };

    $window.on( 'googleMapsScriptLoaded',function()
    {
        apiScriptLoaded = true;
        init();
    })
    .on( 'scroll', throttle( 500, init ) )
    .on( 'resize', debounce( 1000, function()
    {
        windowHeight = $window.height();
        init();
    }));

    $.fn.lazyLoadGoogleMaps = function( options )
    {
        options = $.extend(
        {
            key:         false,
            libraries: false,
            language:    false,
            region:      false,
            callback:  false,
        },
        options );

        this.each( function()
        {
            var $this = $( this );
            $this.data( 'options', options );
            $containers = $containers.add( $this );
        });

        init();

        this.debounce = debounce;
        this.throttle = throttle;

        return this;
    };

})( jQuery, window, document );

*/



window.googleMapsScriptLoaded = function()
{
    $( window ).trigger( 'googleMapsScriptLoaded' );
};

;( function( $, window, document, undefined )
{
    'use strict';

    var $window                 = $( window ),
            $body                       = $( 'body' ),
            windowHeight        = $window.height(),
            windowScrollTop = 0,

        debounce = function( delay, fn )
        {
            var timer = null;
            return function()
            {
                var context = this, args = arguments;
                clearTimeout( timer );
                timer = setTimeout( function(){ fn.apply( context, args ); }, delay );
            };
        },
        throttle = function( delay, fn )
        {
            var last, deferTimer;
            return function()
            {
                var context = this, args = arguments, now = +new Date;
                if( last && now < last + delay )
                {
                    clearTimeout( deferTimer );
                    deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
                }
                else
                {
                    last = now;
                    fn.apply( context, args );
                }
            };
        },

        apiScriptLoaded  = false,
        apiScriptLoading = false,
        $containers          = $([]),

        init = function( callback )
        {
            windowScrollTop = $window.scrollTop();

            $containers.each( function()
            {
                var $this               = $( this ),
                        thisOptions = $this.data( 'options' );

                if( $this.offset().top - windowScrollTop > windowHeight * 1 )
                    return true;

                if( !apiScriptLoaded && !apiScriptLoading )
                {
                    var apiArgs =
                    {
                        callback: 'googleMapsScriptLoaded'
                    };

                    if( thisOptions.key )               apiArgs.key             = thisOptions.key;
                    if( thisOptions.libraries ) apiArgs.libraries   = thisOptions.libraries;
                    if( thisOptions.language )  apiArgs.language    = thisOptions.language;
                    if( thisOptions.region )        apiArgs.region      = thisOptions.region;

                   // $body.append( '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&' + $.param( apiArgs ) + '"></script>' );
                    $body.append( '<script src="https://maps.googleapis.com/maps/api/js?callback=googleMapsScriptLoaded&key=AIzaSyDwWL5ooMBAK-3uan2caSU5lmOr7p9wfUM"></script>' );
                    apiScriptLoading = true;
                }

                if( !apiScriptLoaded ) return true;

                var map = new google.maps.Map( this, { zoom: 15 });
                if( thisOptions.callback !== false )
                    thisOptions.callback( this, map );

                $containers = $containers.not( $this );
            });
        };

    $window.on( 'googleMapsScriptLoaded',function()
    {
        apiScriptLoaded = true;
        init();
    })
    .on( 'scroll', throttle( 500, init ) )
    .on( 'resize', debounce( 1000, function()
    {
        windowHeight = $window.height();
        init();
    }));

    $.fn.lazyLoadGoogleMaps = function( options )
    {
        options = $.extend(
        {
            key:         false,
            libraries: false,
            language:    false,
            region:      false,
            callback:  false,
        },
        options );

        this.each( function()
        {
            var $this = $( this );
            $this.data( 'options', options );
            $containers = $containers.add( $this );
        });

        init();

        this.debounce = debounce;
        this.throttle = throttle;

        return this;
    };

})( jQuery, window, document );



