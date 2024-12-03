// Adding or creating tags to give to items / materials

ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(global.nukedItems)

    event.add('ae2:can_remove_color', 'supplementaries:soap')
    event.add('on:lumen_paint_balls', ['ae2:cyan_lumen_paint_ball', 'ae2:purple_lumen_paint_ball', 'ae2:blue_lumen_paint_ball', 'ae2:brown_lumen_paint_ball', 'ae2:green_lumen_paint_ball', 'ae2:red_lumen_paint_ball', 'ae2:black_lumen_paint_ball', 'ae2:white_lumen_paint_ball', 'ae2:orange_lumen_paint_ball', 'ae2:magenta_lumen_paint_ball', 'ae2:light_blue_lumen_paint_ball', 'ae2:yellow_lumen_paint_ball', 'ae2:lime_lumen_paint_ball', 'ae2:pink_lumen_paint_ball', 'ae2:gray_lumen_paint_ball', 'ae2:light_gray_lumen_paint_ball'])

    // event.add('forge:dusts/sulfur', 'spelunkery:sulfur', 'vintageimprovements:sulfur')
    event.add('forge:ingots/industrial_iron', 'createdeco:industrial_iron_ingot')
    event.add('forge:ores/coal', ['spelunkery:andesite_coal_ore', 'spelunkery:diorite_coal_ore', 'spelunkery:granite_coal_ore', 'spelunkery:tuff_coal_ore'])
    event.add('forge:ores/copper', ['spelunkery:andesite_copper_ore', 'spelunkery:diorite_copper_ore', 'spelunkery:granite_copper_ore', 'spelunkery:tuff_copper_ore'])
    event.add('forge:ores/diamond', ['spelunkery:andesite_diamond_ore', 'spelunkery:diorite_diamond_ore', 'spelunkery:granite_diamond_ore', 'spelunkery:tuff_diamond_ore', 'spelunkery:smooth_basalt_diamond_ore'])
    event.add('forge:ores/emerald', ['spelunkery:andesite_emerald_ore', 'spelunkery:diorite_emerald_ore', 'spelunkery:granite_emerald_ore', 'spelunkery:tuff_emerald_ore'])
    event.add('forge:ores/gold', ['spelunkery:andesite_gold_ore', 'spelunkery:andesite_gold_ore', 'spelunkery:diorite_gold_ore', 'spelunkery:granite_gold_ore', 'minecraft:gilded_blackstone'])
    event.add('forge:ores/iron', ['spelunkery:diorite_iron_ore', 'spelunkery:granite_iron_ore', 'spelunkery:tuff_iron_ore', 'spelunkery:andesite_iron_ore'])
    event.add('forge:ores/lapis', ['spelunkery:andesite_lapis_ore', 'spelunkery:diorite_lapis_ore', 'spelunkery:granite_lapis_ore', 'spelunkery:sandstone_lapis_ore', 'spelunkery:tuff_lapis_ore'])
    event.add('forge:ores/redstone', ['spelunkery:andesite_redstone_ore', 'spelunkery:diorite_redstone_ore', 'spelunkery:tuff_redstone_ore', 'spelunkery:granite_redstone_ore', 'spelunkery:calcite_redstone_ore', 'alexscaves:guanostone_redstone_ore'])
    event.add('forge:ores/zinc', ['spelunkery:andesite_zinc_ore', 'spelunkery:diorite_zinc_ore', 'spelunkery:granite_zinc_ore'])
    event.add('forge:nuggets/coal', 'spelunkery:coal_lump')

    event.add('c:salt_dust', 'vintagedelight:salt_dust', 'ratatouille:salt', 'vintagedelight:salt', 'refurbished_furniture:sea_salt')
    event.add('forge:storage_blocks/apple', 'fruitsdelight:apple_crate')
    event.add('forge:storage_blocks/carrot', 'farmersdelight:carrot_crate')
    event.add('forge:storage_blocks/beetroot', 'farmersdelight:beetroot_crate')
    event.add('forge:raw_fishes', 'fintastic:raw_fish')
    event.add('forge:cooked_fishes', 'fintastic:cooked_fish')

    event.add('on:small_mushroom', ['spelunkery:button_mushroom', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:crimson_fungus', 'minecraft:warped_fungus', 'spelunkery:conk_fungus', 'spelunkery:inkcap_mushroom', 'spelunkery:white_inkcap_mushroom', 'spelunkery:phosphor_fungus', 'regions_unexplored:blue_bioshroom', 'regions_unexplored:green_bioshroom', 'regions_unexplored:pink_bioshroom', 'regions_unexplored:yellow_bioshroom', 'quark:glow_shroom', 'regions_unexplored:tall_yellow_bioshroom', 'regions_unexplored:tall_pink_bioshroom', 'regions_unexplored:tall_green_bioshroom', 'regions_unexplored:tall_blue_bioshroom', 'spelunkery:mushgloom'])
    event.add('on:big_mushroom', ['quark:glow_shroom_stem', 'quark:glow_shroom_block', 'regions_unexplored:glistering_wart', 'regions_unexplored:stripped_yellow_bioshroom_hyphae', 'regions_unexplored:yellow_bioshroom_hyphae', 'regions_unexplored:stripped_yellow_bioshroom_stem', 'regions_unexplored:yellow_bioshroom_stem', 'regions_unexplored:stripped_pink_bioshroom_hyphae', 'regions_unexplored:pink_bioshroom_hyphae', 'regions_unexplored:stripped_pink_bioshroom_stem', 'regions_unexplored:pink_bioshroom_stem', 'regions_unexplored:stripped_green_bioshroom_hyphae', 'regions_unexplored:green_bioshroom_hyphae', 'regions_unexplored:stripped_green_bioshroom_stem', 'regions_unexplored:green_bioshroom_stem', 'regions_unexplored:stripped_blue_bioshroom_hyphae', 'regions_unexplored:blue_bioshroom_hyphae', 'regions_unexplored:stripped_blue_bioshroom_stem', 'regions_unexplored:blue_bioshroom_stem', 'regions_unexplored:glowing_yellow_bioshroom_block', 'regions_unexplored:glowing_pink_bioshroom_block', 'regions_unexplored:glowing_green_bioshroom_block', 'regions_unexplored:glowing_blue_bioshroom_block', 'regions_unexplored:yellow_bioshroom_block', 'regions_unexplored:pink_bioshroom_block', 'regions_unexplored:green_bioshroom_block', 'regions_unexplored:blue_bioshroom_block', 'iceandfire:pixie_house_mushroom_brown', 'iceandfire:pixie_house_mushroom_red', 'spelunkery:white_inkcap_mushroom_block', 'spelunkery:inkcap_mushroom_block', 'spelunkery:conk_fungus_block', 'minecraft:shroomlight', 'minecraft:warped_wart_block', 'minecraft:nether_wart_block', 'minecraft:mushroom_stem','minecraft:brown_mushroom_block', 'minecraft:red_mushroom_block'])
    event.add('on:leather', ['minecraft:rabbit_hide', 'mynethersdelight:hoglin_hide', 'alexscaves:tough_hide', 'minecraft:leather'])
    event.add('on:red_stuff', ['minecraft:redstone', 'minecraft:red_dye', 'create:cinder_flour'])
    event.add('on:cubable_raw_dragon_meat', 'ends_delight:raw_dragon_meat', 'iceandfire:ice_dragon_flesh', 'iceandfire:fire_dragon_flesh', 'iceandfire:lightning_dragon_flesh')
    event.add('on:raw_dragon_meat', 'ends_delight:raw_dragon_meat', 'ends_delight:raw_dragon_meat_cuts', 'ends_delight:dragon_leg', 'iceandfire:ice_dragon_flesh', 'iceandfire:fire_dragon_flesh', 'iceandfire:lightning_dragon_flesh')
    event.add('on:cake_base', 'ratatouille:cake_base', 'createaddition:cake_base')
    event.add('on:salt_bucket', 'spelunkery:salt_bucket', 'vintagedelight:salt_bucket')
    event.add('on:salt_block', ['galosphere:pink_salt', 'galosphere:rose_pink_salt', 'galosphere:pastel_pink_salt'])
    event.add('on:piston', ['minecraft:piston', 'minecraft:sticky_piston', 'create:mechanical_piston', 'create:sticky_mechanical_piston'])
    event.add('on:chorus', ['minecraft:chorus_fruit', 'minecraft:popped_chorus_fruit', 'ends_delight:chorus_fruit_grain', 'ends_delight:chorus_succulent', 'ends_delight:dried_chorus_flower'])
    event.add('on:card', ['ae2:basic_card', 'ae2:redstone_card', 'ae2:capacity_card', 'ae2:void_card', 'ae2:advanced_card', 'ae2:fuzzy_card', 'ae2:speed_card', 'ae2:inverter_card', 'ae2:crafting_card', 'ae2:equal_distribution_card', 'ae2:energy_card'])
    event.add('forge:ingots/steel', 'kubejs:steel_ingot')
    event.add('on:hammer', 'cataclysm:infernal_forge', 'cataclysm:void_forge')
    event.add('on:cactus', ['minecraft:cactus', 'regions_unexplored:saguaro_cactus'])
    event.add('on:raw_overweight_crop', ['overweight_farming:overweight_beetroot_block', 'overweight_farming:overweight_carrot_block', 'overweight_farming:overweight_cocoa_block', 'overweight_farming:overweight_potato_block', 'overweight_farming:overweight_nether_wart_block', 'overweight_farming:overweight_poisonous_potato_block', 'overweight_farming:overweight_apple_block'])
    event.add('on:sigil', ['apotheosis:gem_fused_slate', 'apotheosis:sigil_of_withdrawal', 'apotheosis:sigil_of_rebirth', 'apotheosis:sigil_of_enhancement', 'apotheosis:sigil_of_unnaming', 'apotheosis:sigil_of_socketing'])
    event.add('on:clay_like', 'kubejs:mycelial_compound', 'minecraft:clay')
    event.add('on:stripped_inflammable_log', ['minecraft:stripped_crimson_stem', 'minecraft:stripped_warped_stem', 'minecraft:stripped_crimson_hyphae', 'minecraft:stripped_warped_hyphae', 'netherexp:stripped_claret_stem', 'netherexp:stripped_claret_hyphae', 'regions_unexplored:stripped_brimwood_log', 'regions_unexplored:stripped_brimwood_wood', 'regions_unexplored:stripped_cobalt_wood', 'regions_unexplored:stripped_cobalt_log'])

    event.add('minecraft:coals', 'vintagedelight:ghost_charcoal')

    event.add('forge:stripped_logs', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_driftwood', 'autumnity:stripped_maple_log', 'autumnity:stripped_maple_wood')


    event.add('forge:ingots/aluminium', 'unify:aluminum_ingot')
    event.add('forge:storage_blocks/aluminium', 'unify:aluminum_block')

    event.add('forge:dough', 'refurbished_furniture:dough')
    event.add('forge:flour', 'refurbished_furniture:wheat_flour')
    event.add('create_enchantment_industry:ink_ingredient', ['spelunkery:inkcap_mushroom', 'regions_unexplored:dorcel', 'regions_unexplored:black_snowbelle'])

    event.add('forge:clover', 'regions_unexplored:clover')

    event.add('vintagedelight:jam_jars', '#forge:jam')

    event.add('scguns:standard_bullet_material', '#forge:ingots/lead')
    event.add('scguns:advanced_bullet_material', '#forge:ingots/uranium')

    event.remove('forge:ores/redstone', 'regions_unexplored:raw_redstone_block')
    event.remove('forge:ores', 'regions_unexplored:raw_redstone_block')
    event.remove('minecraft:redstone_ores', 'regions_unexplored:raw_redstone_block')
})

ServerEvents.tags('block', event => {
    event.removeAllTagsFrom(global.nukedItems)
    event.add('oreganized:blows_lead_cloud', 'spelunkery:andesite_lead_ore', 'spelunkery:diorite_lead_ore', 'spelunkery:granite_lead_ore', 'spelunkery:tuff_lead_ore', 'unify:lead_ore', 'unify:deepslate_lead_ore')
    event.add('create:tree_attachments', 'spelunkery:conk_fungus_block')
    event.add('minecraft:logs', 'spelunkery:conk_fungus_block')
})