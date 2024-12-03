ServerEvents.recipes(event => {
    event.remove({
        output: [
            '@waterframes',
            'apotheosis:augmenting_table',
            'apotheosis:sigil_of_socketing',
            'apotheosis:simple_reforging_table',
            'apotheosis:sigil_of_unnaming',
            'apotheosis:sigil_of_enhancement',
            'apotheosis:sigil_of_rebirth',
            'apotheosis:sigil_of_withdrawal',
            'cataclysm:ignitium_upgrade_smithing_template',
            'minecraft:enchanted_golden_apple',
            'apotheosis:gem_fused_slate',
            'apotheosis:salvaging_table',
            'refurbished_furniture:workbench',
            'refurbished_furniture:light_electricity_generator',
            'xercapaint:item_canvas',
            'delightful:salmonberry_gummy',
            'delightful:matcha_gummy',
            'delightful:cantaloupe_gummy',
        ]
    })
})

ServerEvents.recipes(event => {
    let itemReplacement = ([replacedInput, replacementItem]) => {
        event.replaceInput({ input: replacedInput }, replacedInput, replacementItem);
        global.replacedItems = global.replacedItems || [];
        global.replacedItems.push(replacedInput);
    };

    itemReplacement(['createaddition:capacitor', 'create:electron_tube']);
    itemReplacement(['createaddition:copper_spool', 'createaddition:electrum_spool']);
    itemReplacement(['createaddition:gold_spool', 'createaddition:electrum_spool']);
    itemReplacement(['create_central_kitchen:sap_bucket', 'create_dd:sap_bucket']);
    itemReplacement(['refurbished_furniture:sweet_berry_jam', 'vintagedelight:sweet_berry_jam_bottle']);
    itemReplacement(['spelunkery:rock_salt', 'galosphere:pink_salt_shard']);
    itemReplacement(['create_dd:bury_blend', 'architects_palette:wardstone_brick']);
    itemReplacement(['scguns:hardened_pebbles', '#spelunkery:pebbles']);
    itemReplacement(['scguns:nitro_buckshot', 'scguns:nitro_powder']);
    itemReplacement(['scguns:nitro_buckshot', 'scguns:nitro_powder']);
    itemReplacement(['pneumaticcraft:ingot_iron_compressed', 'unify:steel_ingot']);
    itemReplacement(['pneumaticcraft:capacitor', 'create:electron_tube']);
    console.log("KubeJS Item Replacement functions complete!")
});

ServerEvents.recipes(event => {
    const removedRecipeTypes = [
        'vintageimprovements:pressurizing',
        'vintageimprovements:vacuumizing',
        'vintageimprovements:hammering',
        'create_dd:seething',
        'refurbished_furniture:cutting_board_slicing',
        'refurbished_furniture:cutting_board_combining',
        'ae2:inscriber',
        'rubinated_nether:freezing'
    ];
    removedRecipeTypes.forEach(type => {
        event.remove({ type: type });
    });
    console.log('KubeJS recipe types removed!');
})

ServerEvents.recipes(event => {
    const removedRecipeIDs = [
        'minecraft:lodestone',
        'spelunkery:copper_ore_blasting',
        'spelunkery:copper_ore_smelting',
        'spelunkery:diamond_ore_blasting',
        'spelunkery:emerald_ore_smelting',
        'spelunkery:gold_ore_blasting',
        'spelunkery:gold_ore_smelting',
        'spelunkery:iron_ore_blasting',
        'spelunkery:iron_ore_smelting',
        'spelunkery:redstone_ore_blasting',
        'spelunkery:redstone_ore_smelting',
        'spelunkery:zinc_ore_blasting',
        'spelunkery:zinc_ore_smelting',
        'spelunkery:lapis_ore_smelting',
        'spelunkery:lapis_ore_blasting',
        'spelunkery:coal_ore_smelting',
        'spelunkery:coal_ore_blasting',
        'vintagedelight:salt_bucket_to_salt',
        'autumnity:sappy_maple_log_from_sap_bottle',
        'autumnity:sappy_maple_wood_from_sap_bottle',
        'ae2:network/parts/panels_semi_dark_monitor',
        'unify:compacting/steel_ingot',
        'unify:compacting/cast_iron_ingot',
        'unify:wrought_iron_ingot',
        'create_dd:crafting/lapis_lazuli_shard_from_lapis_lazuli',
        'create_dd:crafting/lapis_lazuli_from_lapis_lazuli_shard',
        'create_dd:crafting/diamond_shard_from_diamond',
        'create_dd:crafting/diamond_from_diamond_shard',
        'create:mixing/compat/ae2/fluix_crystal',
        'spelunkery:raw_silver',
        'spelunkery:raw_lead',
        'spelunkery:raw_zinc',
        'spelunkery:raw_copper',
        'spelunkery:raw_gold',
        'spelunkery:raw_iron',
        'createaddition:mixing/electrum',
        'oreganized:create/mixing/electrum_ingot',
        'create:crafting/materials/andesite_alloy',
        'create:crafting/materials/andesite_alloy_from_zinc',
        'create:mixing/andesite_alloy',
        'create:mixing/andesite_alloy_from_zinc',
        'create:crushing/gilded_blackstone',
    ];
        removedRecipeIDs.forEach(id => {
        event.remove({ id: id });
    });
    console.log('KubeJS recipes by ID removed!');
});



ServerEvents.recipes(event => {
    const create = defineCreateRecipes(event)

    event.shapeless('9x spelunkery:diamond_shard', 'minecraft:diamond')
    event.shapeless('9x spelunkery:lapis_lazuli_shard', 'minecraft:lapis_lazuli')

    event.shaped('minecraft:bundle', [
        'SLS',
        'L L',
        'LLL'
    ], {
        S: 'minecraft:string',
        L: '#on:leather'
    })

    event.recipes.create.emptying([Fluid.of('create_dd:sap', 250), 'minecraft:bottle'], 'autumnity:sap_bottle')
    event.recipes.create.emptying([Fluid.of('create_dd:sap', 1000), 'minecraft:bucket'], 'create_dd:sap_bucket')
    event.recipes.create.emptying([Fluid.of('create_central_kitchen:syrup', 250), 'minecraft:bottle'], 'autumnity:syrup_bottle')

    event.smelting('create:andesite_alloy', 'kubejs:mycelial_blend', 0.2)
    event.smelting('create:copper_nugget', '#forge:nuggets/copper', 0.1)
    
    event.shapeless('2x kubejs:mycelial_blend', ['kubejs:mushroom_paste', 'supplementaries:flax', 'kubejs:mushroom_paste', 'supplementaries:flax'])
    event.recipes.farmersdelight.cutting('#on:small_mushroom', '#forge:tools/knives', ['kubejs:mushroom_paste'])
    event.recipes.farmersdelight.cutting('#on:big_mushroom', '#forge:tools/knives', ['4x kubejs:mushroom_paste'])

    event.recipes.farmersdelight.cutting('#on:big_mushroom', '#forge:tools/knives', ['4x kubejs:mushroom_paste'])
    event.recipes.farmersdelight.cutting('minecraft:bread', '#forge:tools/knives', ['4x refurbished_furniture:bread_slice'])

    event.recipes.farmersdelight.cutting('#on:salt_block', '#forge:tools/pickaxe', ['galosphere:pink_salt_shard'])
    event.recipes.farmersdelight.cutting('galosphere:pink_salt_shard', '#forge:tools/pickaxe', ['spelunkery:salt'])

    let gummyBuilder = (gummy, ingredient) => {
        // event.recipes.remove({output: gummy})
        event.recipes.farmersdelight.cooking([ingredient, 'minecraft:honey_bottle', 'minecraft:kelp', '#forge:sugar'], gummy, 10, 200)
    }

    gummyBuilder('delightful:salmonberry_gummy', 'delightful:salmonberries')
    gummyBuilder('delightful:matcha_gummy', '#forge:matcha')
    gummyBuilder('delightful:cantaloupe_gummy', '#forge:fruits/cantaloupe')
    gummyBuilder('kubejs:chorus_gummy', 'architects_palette:oracle_jelly')
    gummyBuilder('kubejs:spicy_gummy', '#forge:hot_spice')

    event.shaped('sophisticatedbackpacks:netherite_backpack', [
        'A A',
        'BCB',
        'DED'
    ], {
        A: 'farmersdelight:rope',
        B: 'minecraft:bundle',
        C: 'minecraft:shulker_box',
        D: 'supplementaries:sack',
        E: '#on:leather'
    })

    event.recipes.create.compacting('create_dd:rubber', ['ae2:silicon', 'scguns:sulfur_dust']).heated()

    event.recipes.create.pressing('vintageimprovements:netherite_sheet', '#forge:ingots/netherite')

    event.recipes.create.mixing('rubinated_nether:molten_ruby', ['rubinated_nether:ruby']).heated()

    event.shapeless('8x create:rose_quartz', ['rubinated_nether:molten_ruby', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz', '#forge:gems/quartz'])

// Furniture

    event.shaped('refurbished_furniture:workbench', [
        'CBC',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: 'minecraft:stonecutter',
        C: '#forge:wires/electrum'
    })

    event.shaped('refurbished_furniture:light_electricity_generator', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: '#forge:wires/electrum',
        C: 'minecraft:furnace'
    })

    event.shapeless('refurbished_furniture:raw_vegetable_pizza', ['#forge:vegetables', '#forge:vegetables', '#forge:vegetables', '#forge:cheese', '#forge:cheese', '#forge:dough'])
    event.shapeless('refurbished_furniture:raw_meatlovers_pizza', ['minecraft:cooked_chicken', 'minecraft:cooked_beef', 'minecraft:cooked_porkchop', '#forge:cheese', '#forge:cheese', '#forge:dough'])
    event.shapeless('refurbished_furniture:cheese_sandwich', ['refurbished_furniture:bread_slice', '#forge:cheese', 'refurbished_furniture:bread_slice'])

    // Apotheosis

    event.shaped('8x apotheosis:gem_fused_slate', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'apotheosis:gem_dust',
        B: '#apotheosis:deepslate',
        C: 'create:experience_nugget'
    })

    event.shaped('8x apotheosis:sigil_of_withdrawal', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#on:sigil',
        B: '#minecraft:flowers'
    })

    event.shaped('8x apotheosis:sigil_of_rebirth', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#on:sigil',
        B: 'irons_spellbooks:arcane_ingot'
    })

    event.shaped('8x apotheosis:sigil_of_enhancement', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#on:sigil',
        B: 'cataclysm:burning_ashes'
    })

    event.shaped('8x apotheosis:sigil_of_enhancement', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#on:sigil',
        B: 'irons_spellbooks:cinder_essence'
    })

    event.shaped('8x apotheosis:sigil_of_unnaming', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#on:sigil',
        B: 'minecraft:flint'
    })

    event.shaped('apotheosis:salvaging_table', [
        'AAA',
        'BCB',
        'BDB'
    ], {
        A: '#forge:ingots/steel',
        B: '#minecraft:planks',
        C: 'irons_spellbooks:arcane_ingot',
        D: 'apotheosis:gem_dust'
    })

    event.shaped('apotheosis:reforging_table', [
        ' A ',
        'BCB',
        'CCC'
    ], {
        A: 'oreganized:bush_hammer',
        B: 'irons_spellbooks:arcane_ingot',
        C: 'minecraft:nether_bricks'
    })

    event.recipes.create.mechanical_crafting('apotheosis:augmenting_table', [
        'AABAA',
        'ACCCA',
        'BCDCB',
        'ACCCA',
        'AABAA'
        ], {
            A: 'bygonenether:netherite_scrap_ingot',
            B: 'cataclysm:ignitium_ingot',
            C: 'architects_palette:hadaline',
            D: 'ae2:singularity'
        })

    event.shaped('waterframes:remote', [
        'ABC',
        'BDB',
        'BEB'
    ], {
        A: 'minecraft:redstone',
        C: 'minecraft:lapis_lazuli',
        B: 'create_dd:rubber',
        D: '#minecraft:buttons',
        E: 'create_dd:integrated_circuit'
    })

    event.shapeless('waterframes:frame', ['#ae2:illuminated_panel', '#forge:wires/copper', 'create_dd:integrated_circuit'])

    event.shaped('waterframes:projector', [
        'AAA',
        'ABC'
    ], {
        A: '#forge:ingots/steel',
        B: 'minecraft:redstone_lamp',
        C: 'minecraft:amethyst_shard'
    })
    event.shaped('waterframes:tv', [
        'AA',
        'AA',
        'BB'
    ], {
        A: 'waterframes:frame',
        B: 'ae2:cable_anchor'
    })

    event.shaped('waterframes:big_tv', [
        'AAA',
        'AAA',
        'B B'
    ], {
        A: 'waterframes:frame',
        B: 'ae2:cable_anchor'
    })

    event.shaped('xercapaint:item_canvas', [
        'AA',
        'AA'
    ], {
        A: 'farmersdelight:canvas'
    })

    })

