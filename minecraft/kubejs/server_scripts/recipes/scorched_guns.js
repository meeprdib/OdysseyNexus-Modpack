ServerEvents.recipes(event => {

    event.remove({
        output: [
            'scguns:mechanical_press',
            'scguns:powered_mechanical_press',
        ]
    })

    let bullet_production = (round, casing, propellant, bullet, incompleteRound) => {

        event.custom({
            type: "scguns:mechanical_pressing",
            processingTime: 20,
            ingredients: [{item: casing}, {item: propellant}, {item: bullet,}],
            result: {item: round,count: 1},
          });

          event.custom({
            type: "scguns:powered_mechanical_pressing",
            processingTime: 10,
            energyUse: 500,
            ingredients: [{item: casing}, {item: propellant}, {item: bullet,}],
            result: {item: round,count: 1},
          });

        event.recipes.create.sequenced_assembly([
            (round)
        ], casing, [
            event.recipes.createDeploying(incompleteRound, [incompleteRound, propellant]),
            event.recipes.createDeploying(incompleteRound, [incompleteRound, bullet]),
            event.recipes.createPressing(incompleteRound, incompleteRound),
        ]).transitionalItem(incompleteRound).loops(1);

        event.remove({output: round})
    };

    bullet_production('scguns:compact_copper_round', 'scguns:small_copper_casing', 'minecraft:gunpowder', 'scguns:standard_bullet', 'scguns:unfinished_compact_copper_round');
    bullet_production('scguns:hog_round', 'scguns:small_iron_casing', 'scguns:sheol', 'minecraft:gold_nugget', 'scguns:unfinished_hog_round');
    bullet_production('scguns:standard_copper_round', 'scguns:medium_copper_casing', 'minecraft:gunpowder', 'scguns:standard_bullet', 'scguns:unfinished_standard_copper_round');
    bullet_production('scguns:standard_copper_round', 'scguns:medium_copper_casing', 'minecraft:gunpowder', 'scguns:standard_bullet', 'scguns:unfinished_standard_copper_round');
    bullet_production('scguns:blaze_fuel', 'scguns:large_iron_casing', 'minecraft:blaze_powder', 'scguns:standard_bullet', 'scguns:unfinished_blaze_fuel');
    bullet_production('scguns:compact_advanced_round', 'scguns:small_brass_casing', 'minecraft:gunpowder', 'scguns:hardened_bullet', 'scguns:unfinished_compact_advanced_round');
    bullet_production('scguns:advanced_round', 'scguns:medium_brass_casing', 'minecraft:gunpowder', 'scguns:hardened_bullet', 'scguns:unfinished_advanced_round');
    bullet_production('scguns:krahg_round', 'scguns:large_brass_casing', 'minecraft:gunpowder', 'scguns:hardened_bullet', 'scguns:unfinished_krahg_round');
    bullet_production('scguns:ramrod_round', 'scguns:small_iron_casing', 'scguns:peal', 'scguns:hardened_bullet', 'scguns:unfinished_ramrod_round');
    bullet_production('scguns:beowulf_round', 'scguns:small_diamond_steel_casing', 'scguns:nitro_powder', 'scguns:hardened_bullet', 'scguns:unfinished_beowulf_round');
    bullet_production('scguns:gibbs_round', 'scguns:medium_diamond_steel_casing', 'scguns:peal', 'scguns:hardened_bullet', 'scguns:unfinished_gibbs_round');
    bullet_production('scguns:shulkshot', 'scguns:shulker_casing', 'scguns:peal', 'scguns:hardened_bullet', 'scguns:unfinished_shulkshot');
    bullet_production('scguns:shotgun_shell', 'scguns:small_copper_casing', 'scguns:sheol', 'minecraft:paper', 'scguns:unfinished_shotgun_shell');
    bullet_production('scguns:bearpack_shell', 'scguns:medium_brass_casing', 'scguns:nitro_powder', 'minecraft:paper', 'scguns:unfinished_bearpack_shell');
    bullet_production('scguns:energy_cell', 'scguns:empty_cell', 'scguns:plasma', 'scguns:hardened_bullet', 'scguns:unfinished_energy_cell');
    bullet_production('scguns:sculk_cell', 'scguns:empty_cell', 'scguns:peal', 'scguns:hardened_bullet', 'scguns:unfinished_sculk_cell');
    bullet_production('scguns:sculk_cell', 'scguns:empty_cell', 'scguns:peal', 'scguns:hardened_bullet', 'scguns:unfinished_sculk_cell');
    bullet_production('scguns:rocket', 'scguns:large_iron_casing', 'scguns:sheol', 'scguns:hardened_bullet', 'scguns:unfinished_rocket');

    event.recipes.create.mixing('3x scguns:anthralite_ingot', [
        '#forge:ingots/tin',
        '#forge:ingots/lead',
        '#forge:ingots/gold'
    ]).heated();

    event.recipes.create.mixing('3x scguns:diamond_steel_ingot', [
        '#forge:ingots/tin',
        '#forge:dusts/diamond',
        '#forge:ingots/uranium',
    ]).heated();

    event.shaped('scguns:mechanical_press', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'create:mechanical_press',
        B: '#forge:ingots/steel',
        C: 'create_dd:industrial_casing',
        D: 'create_dd:calculation_mechanism'
    })

    event.shaped('scguns:powered_mechanical_press', [
        ' A ',
        'BCB'
    ], {
        A: '#forge:plates/steel',
        B: '#forge:wires/electrum',
        C: 'scguns:mechanical_press'
    })

});
