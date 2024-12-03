// Ore / material processing

ServerEvents.recipes(event => {
    
    // rawMaterial: Ore in raw form; Raw Copper. Can be a tag - '#forge:raw_materials/copper'
    // rawBlock: Ore in raw block form; Block of Raw Copper. Can be a tag - '#forge:storage_blocks/raw_copper'
    // rawOreBlock: Ore in its ore block form; Copper Ore. Can be a tag - '#forge:ores/copper'
    // crushedRawMaterial: Crushed form of the material; Crushed Raw Copper. Must NOT be a tag.
    // oreRawNugget: Raw nugget form of the material; Raw Copper Nugget. Must NOT be a tag.
    // washingOutput: Secondary output from washing the crushed ore.
    // originalNuggetOutput: The original nugget output, which is being removed

    let oreProcessing = ([rawMaterial, rawBlock, rawOreBlock, crushedRawMaterial, oreRawNugget, washingByproduct, originalNuggetOutput]) => {
        event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), Item.of(crushedRawMaterial, 2)], rawMaterial);
        event.recipes.create.crushing([Item.of('9x create:experience_nugget').withChance(0.75), Item.of(crushedRawMaterial, 18)], rawBlock);
        event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), Item.of(crushedRawMaterial, 3)], rawOreBlock);
        event.recipes.create.splashing([Item.of(oreRawNugget, 9), Item.of(washingByproduct).withChance(0.50)], crushedRawMaterial);
        event.remove({type: 'create:splashing', output: [originalNuggetOutput]});
        event.remove({type: 'create:crushing', output: [oreRawNugget]})
        event.remove({type: 'create:crushing', output: [crushedRawMaterial]})
    };
    
    oreProcessing([
        '#forge:raw_materials/iron',
        '#forge:storage_blocks/raw_iron',
        '#forge:ores/iron',
        'create:crushed_raw_iron',
        'spelunkery:raw_iron_nugget',
        'minecraft:redstone',
        '#forge:nuggets/iron'
    ]);

    oreProcessing([
        '#forge:raw_materials/gold',
        '#forge:storage_blocks/raw_gold',
        '#forge:ores/gold',
        'create:crushed_raw_gold',
        'spelunkery:raw_gold_nugget',
        'minecraft:quartz',
        '#forge:nuggets/gold',
    ])

    oreProcessing([
        '#forge:raw_materials/copper',
        '#forge:storage_blocks/raw_copper',
        '#forge:ores/copper',
        'create:crushed_raw_copper',
        'spelunkery:raw_copper_nugget',
        'minecraft:clay_ball',
        '#forge:nuggets/copper'
    ])

    oreProcessing([
        '#forge:raw_materials/zinc',
        '#forge:storage_blocks/raw_zinc',
        '#forge:ores/zinc',
        'create:crushed_raw_zinc',
        'spelunkery:raw_zinc_nugget',
        'minecraft:gunpowder',
        '#forge:nuggets/zinc'
    ])

    oreProcessing([
        '#forge:raw_materials/platinum',
        '#forge:storage_blocks/raw_platinum',
        '#forge:ores/platinum',
        'create:crushed_raw_platinum',
        'unify:platinum_nugget',
        'spelunkery:rough_diamond_shard',
        '#forge:nuggets/platinum'
    ])

    oreProcessing([
        '#forge:raw_materials/lead',
        '#forge:storage_blocks/raw_lead',
        '#forge:ores/lead',
        'create:crushed_raw_lead',
        'spelunkery:raw_lead_nugget',
        'spelunkery:raw_silver_nugget',
        '#forge:nuggets/lead'
    ])

    oreProcessing([
        '#forge:raw_materials/silver',
        '#forge:storage_blocks/raw_silver',
        '#forge:ores/silver',
        'create:crushed_raw_silver',
        'spelunkery:raw_silver_nugget',
        'spelunkery:raw_lead_nugget',
        '#forge:nuggets/silver'
    ])

    oreProcessing([
        '#forge:raw_materials/tin',
        '#forge:storage_blocks/raw_tin',
        '#forge:ores/tin',
        'create:crushed_raw_tin',
        'spelunkery:raw_tin_nugget',
        'spelunkery:saltpeter',
        'unify:tin_nugget'
    ])

    oreProcessing([
        '#forge:raw_materials/uranium',
        '#forge:storage_blocks/raw_uranium',
        '#forge:ores/uranium',
        'create:crushed_raw_uranium',
        'unify:uranium_nugget',
        'scguns:sulfur_dust',
        '#forge:nuggets/uranium'
    ])

    oreProcessing([
        '#forge:raw_materials/aluminum',
        '#forge:storage_blocks/raw_aluminum',
        '#forge:ores/aluminum',
        'create:crushed_raw_aluminum',
        'unify:aluminum_nugget',
        'ae2:certus_quartz_dust',
        '#forge:nuggets/aluminum'
    ])

    oreProcessing([
        '#forge:raw_materials/nickel',
        '#forge:storage_blocks/raw_nickel',
        '#forge:ores/nickel',
        'create:crushed_raw_nickel',
        'unify:nickel_nugget',
        'spelunkery:rough_emerald_shard',
        '#forge:nuggets/nickel'
    ])

    // oreProcessing([
    //     '#forge:raw_materials/tungsten',
    //     '#forge:storage_blocks/raw_tungsten',
    //     '#forge:ores/tungsten',
    //     'unify:crushed_raw_tungsten',
    //     'unify:tungsten_nugget',
    //     'create:powdered_obsidian',
    //     '#forge:nuggets/tungsten',
    // ])

    // roughGem: 

    let gemProcessing = ([roughGem, roughBlock, gemOreBlock, polishedGemBlock, polishedGem, roughGemShard, polishedGemShard]) => {
        event.recipes.create.crushing([Item.of('create:experience_nugget').withChance(0.75), Item.of(roughGem, 3)], gemOreBlock);
        event.recipes.create.sandpaper_polishing(polishedGem, roughGem)
        event.recipes.create.sandpaper_polishing(polishedGemBlock, roughBlock)
        event.recipes.create.sandpaper_polishing(polishedGemShard, roughGemShard)
        event.recipes.vintageimprovements.polishing([Item.of(polishedGem, 2)], roughGem)
        event.recipes.vintageimprovements.polishing([Item.of(polishedGemBlock, 2)], roughBlock)
        event.recipes.vintageimprovements.polishing([Item.of(polishedGemShard, 2)], roughGemShard)
        event.remove({type: 'create:crushing', output: [roughGem]})
        event.remove({type: 'create:sandpaper_polishing', input: [roughGem]})
    };

    gemProcessing([
        'spelunkery:rough_emerald',
        'spelunkery:rough_emerald_block',
        '#forge:ores/emerald',
        'minecraft:emerald_block',
        'minecraft:emerald',
        'spelunkery:rough_emerald_shard',
        'spelunkery:emerald_shard'
    ])

    gemProcessing([
        'spelunkery:rough_diamond',
        'spelunkery:rough_diamond_block',
        '#forge:ores/diamond',
        'minecraft:diamond_block',
        'minecraft:diamond',
        'spelunkery:rough_diamond_shard',
        'spelunkery:diamond_shard'
    ])

    gemProcessing([
        'spelunkery:rough_lazurite',
        'spelunkery:rough_lazurite_block',
        '#forge:ores/lapis',
        'minecraft:lapis_block',
        'minecraft:lapis_lazuli',
        'spelunkery:rough_lazurite_shard',
        'spelunkery:lapis_lazuli_shard'
    ])

    gemProcessing([
        'spelunkery:rough_cinnabar',
        'spelunkery:rough_cinnabar_block',
        '#forge:ores/redstone',
        'spelunkery:cinnabar_block',
        'spelunkery:cinnabar',
        'spelunkery:rough_cinnabar_shard',
        'spelunkery:cinnabar_shard'
    ])

    event.recipes.create.crushing(['2x minecraft:redstone', Item.of('create:experience_nugget').withChance(0.25)], 'regions_unexplored:pointed_redstone')
    event.recipes.create.crushing(['3x minecraft:redstone'], 'regions_unexplored:raw_redstone_block')
    event.recipes.create.crushing(['minecraft:redstone'], 'regions_unexplored:redstone_bud')
    event.recipes.create.crushing(['2x minecraft:redstone', Item.of('create:experience_nugget').withChance(0.50)], 'regions_unexplored:redstone_bulb')
    event.recipes.create.crushing(['2x minecraft:redstone'], 'spelunkery:cinnabar')
    event.recipes.create.crushing(['3x minecraft:redstone'], 'spelunkery:rough_cinnabar')
    event.recipes.create.crushing(['3x minecraft:coal'], '#forge:ores/coal')
    event.remove({type: `create:crushing`, output: ['minecraft:redstone']})
    event.remove({input: '#forge:ores/coal', output: ['minecraft:coal']})

    event.recipes.vintageimprovements.polishing('2x createutilities:polished_amethyst', 'minecraft:amethyst_shard')
    event.recipes.vintageimprovements.polishing('2x kubejs:polished_certus_quartz', 'ae2:certus_quartz_crystal')
    event.recipes.vintageimprovements.polishing('2x kubejs:polished_fluix', 'ae2:fluix_crystal')
    event.recipes.vintageimprovements.polishing('2x create:polished_rose_quartz', 'create:rose_quartz')

    console.log('Excellent, the fantastic recipes have been loaded, good day you log checker')
})