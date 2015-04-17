/*
 * mobile flipswitch unit tests
 */
( function( $ ) {

test( "checkbox based flipswitch is enhanced", function( assert ) {
	assert.hasClasses( $( "#flip-checkbox" ).parent(), "ui-flipswitch", "should be enhanced" );
} );
test( "select based flipswitch is enhanced", function( assert ) {
	assert.hasClasses( $( "#flip-select" ).parent(), "ui-flipswitch", "should be enhanced" );
} );
test( "checkbox based flipswitch is disabled", function( assert ) {
	assert.hasClasses( $( "#flip-checkbox-disabled" ).parent(), "ui-state-disabled", "should be disabled" );
} );
test( "select based flipswitch is disabled", function( assert ) {
	assert.hasClasses( $( "#flip-select-disabled" ).parent(), "ui-state-disabled", "should be disabled" );
} );
test( "checkbox based flipswitch is active", function( assert ) {
	assert.hasClasses( $( "#flip-checkbox-active" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "select based flipswitch is active", function( assert ) {
	assert.hasClasses( $( "#flip-select-second-option" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "checkbox based flipswitch is mini", function( assert ) {
	assert.hasClasses( $( "#flip-checkbox-mini" ).parent(), "ui-mini", "should be mini" );
} );
test( "select based flipswitch is mini", function( assert ) {
	assert.hasClasses( $( "#flip-select-mini" ).parent(), "ui-mini", "should be mini" );
} );
test( "checkbox based flipswitch should have theme inherit", function( assert ) {
	assert.hasClasses( $( "#flip-checkbox-active" ).parent(), "ui-bar-inherit", "should be inherit theme" );
} );
test( "select based flipswitch should have theme inherit", function( assert ) {
	assert.hasClasses( $( "#flip-select-second-option" ).parent(), "ui-bar-inherit", "should be inherit theme" );
} );
test( "checkbox based flipswitch is toggled on click", function( assert ) {
	assert.lacksClasses($( "#flip-checkbox" ).parent(), "ui-flipswitch-active", "should not be active" );
	$( "#flip-checkbox" ).parent().click()
	assert.hasClasses( $( "#flip-checkbox" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "select based flipswitch is toggled on click", function( assert ) {
	$( "#flip-select" ).click();
	assert.hasClasses( $( "#flip-select" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "checkbox based flipswitch is not active after left swipe", function( assert ) {
	$( "#flip-checkbox" ).trigger( "swipeleft" );
	assert.lacksClasses( $( "#flip-checkbox" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "select based flipswitch is not active after left swipe", function( assert ) {
	$( "#flip-select" ).trigger( "swipeleft" );
	assert.lacksClasses( $( "#flip-select" ).parent(), "ui-flipswitch-active", "should be active" );
} );
test( "checkbox based flipswitch is active after right swipe", function( assert ) {
	$( "#flip-checkbox" ).trigger( "swiperight" );
	assert.hasClasses( $( "#flip-checkbox" ).parent(), "ui-flipswitch-active", "should not be active" );
} );
test( "select based flipswitch is active after right swipe", function( assert ) {
	$( "#flip-select" ).trigger( "swiperight" );
	assert.hasClasses( $( "#flip-select" ).parent(), "ui-flipswitch-active", "should not be active" );
} );
test( "checkbox based flipswitch is untabbable", function() {
	deepEqual( parseInt( $( "#flip-checkbox" ).attr( "tabindex" ) ), -1,
		"tabindex is set to -1" );
} );
test( "select based flipswitch is untabbable", function() {
	deepEqual( parseInt( $( "#flip-select" ).attr( "tabindex" ) ), -1,
		"tabindex is set to -1" );
} );

} )( jQuery );
