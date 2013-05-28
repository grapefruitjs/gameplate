//require game dependencies
require([
    'game/main'
], function(Game) {
    $(function() {
        Game.start({
            containerId: 'game',
            startWorld: '',
            assetsProgress: function(evt) {

            },
            assetsComplete: function() {

            }
        });
    });
});