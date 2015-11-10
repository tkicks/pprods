$(document).ready(function() {
	var move_lets = $('.move_letters'),
		playState = '-webkit-animation-play-state',
		scrollCount = 0;

	$(document).keydown(function (key) {
    	switch (parseInt(key.which, 10)) {

        // back slide
        case 37:
            scrollCount = scrollCount - 1;
            console.log(scrollCount);
            break;

        // next slide
        case 39:
            scrollCount = scrollCount + 1;
            console.log(scrollCount);
            if (scrollCount === 6) {
				move_lets.css(playState, function(i, v) {
					return v === 'paused' ? 'running' : 'paused';
				});
				$('body').toggleClass('paused', $(this).css(playState) === 'paused');
			};
            break;

        default:
            break;
        }
    });

	// move_lets.click(function() {

});