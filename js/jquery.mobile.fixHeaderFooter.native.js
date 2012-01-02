/*
* "fixHeaderFooter" native plugin - Behavior for "fixed" headers,footers, and scrolling inner content
*/

(function( $, undefined ) {

// Enable touch overflow scrolling when it's natively supported
$.mobile.touchOverflowEnabled = true;

// Enabled zoom when touch overflow is enabled. Can cause usability issues, unfortunately
$.mobile.touchOverflowZoomEnabled = false;


// hacky attempt at overflow support using Graceful Degradation... yeah, I know.
var initialScroll,
	initialPageY,
	moved = false;

$( document ).one( "pageshow", function(){
	initialScroll = $( ".ui-page-active" ).scrollTop();
});

$( document ).bind( "vmousemove.overflowtest vmouseup.overflowtest", function( e ){
	if( !initialPageY ){
		initialPageY = e.pageY;
		return;
	}
	
	if( initialPageY !== e.pageY ){		
		$( document ).unbind( ".overflowtest" );
		if( $( ".ui-page-active" ).scrollTop() == initialScroll ){
			$( ".ui-page" ).removeClass( "ui-mobile-touch-overflow" );
			$.mobile.touchOverflowEnabled = false;
			$.support.touchOverflow = false;
		}
	}
});



$( document ).bind( "pagecreate", function( event ) {
	if( $.support.touchOverflow && $.mobile.touchOverflowEnabled ){
		
		var $target = $( event.target ),
			scrollStartY = 0;
			
		if( $target.is( ":jqmData(role='page')" ) ){
			
			$target.each(function() {
				var $page = $( this ),
					$fixies = $page.find( ":jqmData(role='header'), :jqmData(role='footer')" ).filter( ":jqmData(position='fixed')" ),
					fullScreen = $page.jqmData( "fullscreen" ),
					$scrollElem = $fixies.length ? $page.find( ".ui-content" ) : $page;
				
				$page.addClass( "ui-mobile-touch-overflow" );
				
				$scrollElem.bind( "scrollstop", function(){
					if( $scrollElem.scrollTop() > 0 ){
						window.scrollTo( 0, $.mobile.defaultHomeScroll );
					}
				});	
				
				if( $fixies.length ){
					
					$page.addClass( "ui-native-fixed" );
					
					if( fullScreen ){

						$page.addClass( "ui-native-fullscreen" );

						$fixies.addClass( "fade in" );

						$( document ).bind( "vclick", function(){
							$fixies
								.removeClass( "ui-native-bars-hidden" )
								.toggleClass( "in out" )
								.animationComplete(function(){
									$(this).not( ".in" ).addClass( "ui-native-bars-hidden" );
								});
						});
					}
				}
			});
		}
	}
});

})( jQuery );
