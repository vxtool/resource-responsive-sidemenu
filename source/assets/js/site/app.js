/*
  Slidemenu
*/
(function() {
	var $body = document.body;
	var $menu_trigger = $body.getElementsByClassName('js-menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className === 'on' )? '' : 'on';
		});
	}

}).call(this);