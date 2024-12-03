Ponder.registry((event) => {
    event.create("ae2:certus_quartz_crystal").scene("our_first_scene", "Harvesting Certus Quartz", (scene, util) => {
        scene.showStructure();

        /**
         * The last argument is for spawning particles.
         * true if yes, false if no
         */
        scene.world.setBlocks([0, 1, 0, 4, 1, 4], "minecraft:brick_slab", true);
        scene.world.setBlock([0, 1, 1], "minecraft:stone_slab", false);

        scene.world.modifyBlocks([2, 1, 2, 2, 1, 3], (curState) => curState.with("type", "double"), true);
        scene.world.modifyBlock([0, 1, 4], (curState) => curState.with("type", "top"), true);

        /**
         * Or directly return a new block state.
         */
        scene.world.modifyBlock([0, 1, 3], () => Block.id("minecraft:jungle_slab").with("type", "top"), true);

        scene.world.replaceBlocks([3, 1, 0, 4, 1, 4], "minecraft:oak_slab", false);
        const creeperLink = scene.world.createEntity("creeper", [2.5, 1, 2.5]);

        /**
         * 50 -> the tick length of the instruction
         * [x, y, z] -> the position that the text should point at
         */
        scene
            .text(60, "Example text", [2.0, 2.5, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
            /**
             * Optional | Adds a keyframe to the scene.
             */
            .attachKeyFrame();

        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */
        scene
            .showControls(60, [2.5, 3, 2.5], "down")
            /**
             * Uses mouse right click as icon.
             * Alternatively, `.leftClick()` can be used
             * or `.showing(icon)` for a custom icon.
             */
            .rightClick()
            /**
             * Defines the item that should be shown with the icon.
             */
            .withItem("shears")
            /**
             * Optional | Defines that controls are only shown when sneaking.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileSneaking()
            /**
             * Optional | Defines that controls are only shown when holding CTRL.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileCTRL();
    });
});