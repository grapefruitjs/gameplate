define(['vendor/gf'], function(gf) {
    return {
        /**
         * Items required for the preloader to display
         */
        preload: function(game, progress, complete) {
            if(complete)
                complete();
        },
        /**
         * Items required for the initial startup of the game
         */
        startup: function(game, progress, complete) {
            _setup(game, progress, complete);

            // Images
            game.load.image('image_life',           'assets/ui/life.png',                       null, gf.ATLAS_FORMAT.JSON_HASH);

            // Misc Sprites Atlases
            game.load.atlas('sprite_intro',         'assets/sprites/misc/intro.png',            'assets/sprites/misc/intro.json',           null, gf.ATLAS_FORMAT.JSON_HASH);
            game.load.atlas('sprite_select',        'assets/sprites/misc/selectscreen.png',     'assets/sprites/misc/selectscreen.json',    null, gf.ATLAS_FORMAT.JSON_HASH);
            game.load.atlas('sprite_particles',     'assets/sprites/misc/particles.png',        'assets/sprites/misc/particles.json',       null, gf.ATLAS_FORMAT.JSON_HASH);

            // Music
            game.load.audio('music_title', [
                    'assets/audio/music/title.lite.ogg'
                ]
            );
            game.load.audio('music_select', [
                    'assets/audio/music/select_screen.lite.ogg'
                ]
            );

            game.load.start();
        }
    };

    function _setup(game, progress, complete) {
        if(progress)
            game.load.on('progress', progress);

        game.load.once('complete', function() {
            if(progress)
                game.load.off('progress', progress);

            if(complete)
                complete();
        });
    }
});