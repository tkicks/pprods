$(document).ready(function() {
	var move_lets = $('.move_letters'),
		playState = '-webkit-animation-play-state';

	move_lets.click(function() {
		move_lets.css(playState, function(i, v) {
			return v === 'paused' ? 'running' : 'paused';
		});
		$('body').toggleClass('paused', $(this).css(playState) === 'paused');
	});
});