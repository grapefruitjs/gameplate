//require game dependencies
define([
    'game/data/main',
    'game/entities/main',
    'game/hud/main'
], function(data, entities, huditems) {
    var $win = $(window),
        $game,
        game;

    $win.on('resize', onWindowResize);

    function create(obj) {
        $game = $('#' + obj.containerId); 
        game = new gf.Game(obj.containerId, {
            gravity: obj.gravity || 0,
            friction: obj.friction || 0,
            width: $game.width(),
            height: $game.height()
        });

        game.loader.on('progress', function(evt) {
            //called on each load complete
            if(obj.assetsProgress)
                obj.assetsProgress.call(this, evt);
        });

        //called when all are done loading
        game.loader.on('complete', function() {
            if(obj.assetsComplete)
                obj.assetsComplete.call(this);

            game.loadWorld(obj.startWorld);

            //TODO: bind game keys
            //TODO: init HUD

            //render
            game.render();
        });

        game.loader.load(data.resources);
    }

    function onWindowResize() {
        var w = $win.width(),
            h = $win.height();

        game.resize(w, h);
    }

    return {
        start: create
    }
});