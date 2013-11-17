require([
    'vendor/gf', //NOTE: This expects gf.js to be in the `js/vendors` folder
    'game/data/resources'
], function(gf, resources) {
    var $game,
        game,
        txtLoading;

    function runGame() {
        // When this function runs, all resources in data/resources.js#startup() will
        // have been loaded. This is where you can:
        // - Create custom game states
        // - Bind user keys
        // - Use any resources you loaded
        // - Run your game!

        //hide loading text
        txtLoading.visible = false;
    }

    //updates the loading progress on the screen
    function loadProgress(val) {
        txtLoading.setText('Loading: ' + val + '%');
    }

    //is called when preload resources are ready, this will start loading startup resources
    function startup() {
        //setup loading text.
        txtLoading = new gf.Text('Loading: 0%');
        txtLoading.position.x = 225;
        txtLoading.position.y = 300;
        game.camera.add.obj(txtLoading);

        //load startup resources
        resources.startup(game, loadProgress, runGame);
    }

    //when DOM is ready, create the game instance and start loading stuffz
    $(function() {
        $game = $('#game');

        //set the default scale mode to nearest so all our textures scale pixely
        gf.Texture.SCALE_MODE.DEFAULT = gf.Texture.SCALE_MODE.NEAREST;

        //create game instance
        game = new gf.Game('game', {
            width: $game.width(),
            height: $game.height(),
            transparent: false,
            background: '#000',
            antialias: true,
            renderer: gf.RENDERER.AUTO
        });

        //start loading necessary preload files
        resources.preload(game, null, startup);

        //start render loop
        game.render();
    });
});
