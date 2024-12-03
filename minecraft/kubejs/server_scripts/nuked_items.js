   //this list (nukedItems) can be called on to remove items from stuff such as tags, recipes, JEI, etc
   global.nukedItems = [
      '#ae2:covered_cable',
      'apotheosis:reforging_table',
      'quark:chorus_fruit_block',
      '#ae2:covered_dense_cable',
      '#ae2:glass_cable',
      '#vintagedelight:salt_lamp',
      'create_central_kitchen:sap_bucket',
      'create_dd:kinetic_motor',
      'ends_delight:end_stone_knife',
      'ends_delight:purpur_knife',
      'irons_spellbooks:arcane_debris',
      'irons_spellbooks:arcane_salvage',
      'irons_spellbooks:blood_upgrade_orb',
      'irons_spellbooks:copper_spell_book',
      'irons_spellbooks:ender_upgrade_orb',
      'irons_spellbooks:evocation_upgrade_orb',
      'irons_spellbooks:fire_upgrade_orb',
      'irons_spellbooks:holy_upgrade_orb',
      'irons_spellbooks:ice_upgrade_orb',
      'irons_spellbooks:iron_spell_book',
      'irons_spellbooks:lightning_upgrade_orb',
      'irons_spellbooks:nature_upgrade_orb',
      'irons_spellbooks:upgrade_orb',
      'overweight_farming:melon_juice',
      'refurbished_furniture:cheese',
      'refurbished_furniture:glow_berry_jam_toast',
      'refurbished_furniture:glow_berry_jam',
      'refurbished_furniture:knife',
      'spelunkery:portal_fluid_bottle',
      'spelunkery:portal_fluid_bucket',
      // 'spelunkery:rock_salt',
      'vintagedelight:cheese_burger',
      'vintagedelight:deluxe_burger',
      // 'vintagedelight:salt',
      // 'vintagedelight:salt_bucket',
      'irons_spellbooks:eldritch_manuscript',
      'irons_spellbooks:arcane_salvage',
      'irons_spellbooks:blood_upgrade_orb',
      'irons_spellbooks:ender_upgrade_orb',
      'irons_spellbooks:evocation_upgrade_orb',
      'irons_spellbooks:fire_upgrade_orb',
      'irons_spellbooks:holy_upgrade_orb',
      'irons_spellbooks:ice_upgrade_orb',
      'irons_spellbooks:lightning_upgrade_orb',
      'irons_spellbooks:nature_upgrade_orb',
      'irons_spellbooks:upgrade_orb',
      'refurbished_furniture:cheese',
      'delightful:electrum_knife',
      'rubinated_nether:freezer',
      '#vintageimprovements:springs',
      '#vintageimprovements:small_springs',
      'irons_spells:scroll',
      'scguns:netherite_respirator',
      'scguns:treated_brass_block',
      'scguns:pebbles',
      'scguns:disc_mold',
      'scguns:polar_generator',
      'spelunkery:sulfur',
      'spelunkery:sulfur_block',
      'scguns:stun_grenade',
      ['spelunkery:wooden_sluice', 'spelunkery:stone_sluice'],
      ['create_dd:raw_padded_rubber', 'create_dd:raw_padded_tiled_rubber', 'create_dd:raw_padded_mosaic_rubber', 'create_dd:raw_padded_rubber_slab', 'create_dd:raw_padded_rubber_stairs', 'create_dd:raw_rubber_block', 'create_dd:raw_rubber'],
      ['oreganized:lead_ingot', 'oreganized:silver_ingot', 'galosphere:silver_ingot', 'oreganized:electrum_ingot', 'createaddition:electrum_ingot'],
      ['oreganized:raw_lead', 'oreganized:raw_silver', 'galosphere:raw_silver'],
      ['galosphere:silver_ore', 'galosphere:deepslate_silver_ore', 'oreganized:silver_ore', 'oreganized:deepslate_silver_ore', 'oreganized:raw_lead_block', 'oreganized:raw_silver_block', 'scguns:anthralite_ore', 'scguns:deepslate_anthralite_ore', 'scguns:sulfur_ore', 'scguns:deepslate_sulfur_ore', 'unify:aluminum_ore', 'unify:nickel_ore', 'unify:tungsten_ore', 'unify:platinum_ore', 'unify:deepslate_platinum_ore', 'unify:deepslate_aluminum_ore', 'unify:deepslate_nickel_ore', 'unify:deepslate_tungsten_ore'],
      ['easy_villagers:farmer', 'easy_villagers:iron_farm'],
      ['pneumaticcraft:large_tank', 'pneumaticcraft:medium_tank', 'pneumaticcraft:huge_tank'],
      ['vintageimprovements:spring_coiling_machine', 'vintageimprovements:vacuum_chamber', 'vintageimprovements:vibrating_table', 'vintageimprovements:centrifuge', 'vintageimprovements:curving_press', 'vintageimprovements:helve_hammer', 'vintageimprovements:lathe', 'vintageimprovements:laser', 'vintageimprovements:convex_curving_head', 'vintageimprovements:concave_curving_head', 'vintageimprovements:w_shaped_curving_head', 'vintageimprovements:v_shaped_curving_head', 'vintageimprovements:spring_coiling_machine_wheel', 'vintageimprovements:laser_item', 'vintageimprovements:redstone_module', 'vintageimprovements:sulfur_chunk', 'vintageimprovements:sulfur', 'vintageimprovements:sulfur_block', 'vintageimprovements:vanadium_nugget', 'vintageimprovements:vanadium_ingot', 'vintageimprovements:vanadium_block', 'vintageimprovements:sulfuric_acid_bucket', 'vintageimprovements:copper_sulfate', 'vintageimprovements:recipe_card', 'vintageimprovements:helve_hammer_slot_cover', 'vintageimprovements:incomplete_redstone_module', 'vintageimprovements:incomplete_recipe_card'],
      ['pneumaticcraft:sentry_turret', 'pneumaticcraft:security_station', 'pneumaticcraft:gun_ammo', 'pneumaticcraft:gun_ammo_ap', 'pneumaticcraft:gun_ammo_explosive', 'pneumaticcraft:gun_ammo_freezing', 'pneumaticcraft:gun_ammo_incendiary', 'pneumaticcraft:gun_ammo_weighted', 'pneumaticcraft:minigun'],
      ['pneumaticcraft:spawner_agitator', 'pneumaticcraft:empty_spawner', 'pneumaticcraft:spawner_extractor'],
      ['create_dd:splashing_sail', 'create_dd:haunting_sail', 'create_dd:smoking_sail', 'create_dd:blasting_sail', 'create_dd:seething_sail', 'create_dd:freezing_sail', 'create_dd:sanding_sail'],
      ['ae2:1k_crafting_storage', 'ae2:4k_crafting_storage', 'ae2:64k_crafting_storage', 'ae2:256k_crafting_storage'],
      ['ae2:item_storage_cell_1k', 'ae2:item_storage_cell_4k', 'ae2:item_storage_cell_64k', 'ae2:item_storage_cell_256k', 'ae2:fluid_storage_cell_1k', 'ae2:fluid_storage_cell_4k', 'ae2:fluid_storage_cell_64k', 'ae2:fluid_storage_cell_256k', 'ae2:spatial_storage_cell_2', 'ae2:spatial_storage_cell_16', 'ae2:guide', 'ae2:debug_card', 'ae2:charger', 'ae2:crank'],
      ['ae2:sky_dust', 'ae2:spatial_cell_component_16', 'ae2:cell_component_1k', 'ae2:cell_component_4k', 'ae2:cell_component_64k', 'ae2:cell_component_256k', 'ae2:wireless_receiver', 'ae2:formation_core', 'ae2:annihilation_core', 'ae2:entropy_manipulator', 'ae2:charged_staff', 'ae2:matter_cannon', 'ae2:portable_item_cell_1k', 'ae2:portable_item_cell_4k', 'ae2:portable_item_cell_64k', 'ae2:portable_item_cell_256k', 'ae2:portable_fluid_cell_1k', 'ae2:portable_fluid_cell_4k', 'ae2:portable_fluid_cell_64k', 'ae2:portable_fluid_cell_256k', 'ae2:meteorite_compass', 'ae2:fluix_dust', 'ae2:fluix_pearl', 'ae2:calculation_processor_press', 'ae2:engineering_processor_press', 'ae2:logic_processor_press', 'ae2:printed_calculation_processor', 'ae2:printed_engineering_processor', 'ae2:printed_logic_processor', 'ae2:silicon_press', 'ae2:printed_silicon', 'ae2:name_press', 'ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor', 'ae2:spatial_cell_component_2'],
      ['everycomp:q/autumnity/orange_maple_hedge', 'everycomp:q/autumnity/orange_maple_leaf_carpet', 'everycomp:q/autumnity/red_maple_hedge', 'everycomp:q/autumnity/red_maple_leaf_carpet', 'regions_unexplored:maple_leaf_pile', 'regions_unexplored:red_maple_leaf_pile', 'regions_unexplored:orange_maple_leaf_pile', 'regions_unexplored:maple_sapling', 'regions_unexplored:orange_maple_sapling', 'everycomp:ap/regions_unexplored/maple_railing', 'everycomp:ap/regions_unexplored/maple_board_slab', 'everycomp:ap/regions_unexplored/maple_board_wall', 'everycomp:ap/regions_unexplored/maple_boards', 'everycomp:ap/regions_unexplored/maple_board_stairs', 'everycomp:c/regions_unexplored/maple_window', 'everycomp:c/regions_unexplored/maple_window_pane', 'everycomp:fd/regions_unexplored/maple_cabinet', 'everycomp:faf/regions_unexplored/maple_beehive', 'everycomp:q/regions_unexplored/maple_bookshelf', 'everycomp:q/regions_unexplored/maple_post', 'everycomp:q/regions_unexplored/stripped_maple_post', 'everycomp:q/regions_unexplored/vertical_maple_planks', 'everycomp:q/regions_unexplored/maple_ladder', 'everycomp:q/regions_unexplored/hollow_maple_log', 'everycomp:q/regions_unexplored/maple_chest', 'everycomp:q/regions_unexplored/maple_trapped_chest', 'everycomp:q/regions_unexplored/maple_hedge', 'everycomp:q/regions_unexplored/maple_leaf_carpet', 'everycomp:q/regions_unexplored/orange_maple_hedge', 'everycomp:q/regions_unexplored/orange_maple_leaf_carpet', 'everycomp:q/regions_unexplored/red_maple_hedge', 'everycomp:q/regions_unexplored/red_maple_leaf_carpet', 'everycomp:q/autumnity/maple_hedge', 'everycomp:q/autumnity/maple_leaf_carpet', 'everycomp:q/autumnity/yellow_maple_hedge', 'everycomp:q/autumnity/yellow_maple_leaf_carpet'],
      ['everycomp:rfm/regions_unexplored/maple_cutting_board', 'everycomp:rfm/regions_unexplored/mauve_cutting_board', 'everycomp:rfm/regions_unexplored/palm_cutting_board', 'everycomp:rfm/regions_unexplored/eucalyptus_cutting_board', 'everycomp:rfm/regions_unexplored/green_bioshroom_cutting_board', 'everycomp:rfm/regions_unexplored/joshua_cutting_board', 'everycomp:rfm/regions_unexplored/kapok_cutting_board', 'everycomp:rfm/regions_unexplored/larch_cutting_board', 'everycomp:rfm/regions_unexplored/magnolia_cutting_board', 'refurbished_furniture:oak_cutting_board', 'refurbished_furniture:spruce_cutting_board', 'refurbished_furniture:birch_cutting_board', 'refurbished_furniture:jungle_cutting_board', 'refurbished_furniture:acacia_cutting_board', 'refurbished_furniture:dark_oak_cutting_board', 'refurbished_furniture:mangrove_cutting_board', 'refurbished_furniture:cherry_cutting_board', 'refurbished_furniture:crimson_cutting_board', 'refurbished_furniture:warped_cutting_board', 'everycomp:rfm/mynethersdelight/powdery_cutting_board', 'everycomp:rfm/quark/azalea_cutting_board', 'everycomp:rfm/quark/ancient_cutting_board', 'everycomp:rfm/quark/blossom_cutting_board', 'everycomp:rfm/architects_palette/twisted_cutting_board', 'everycomp:rfm/cataclysm/chorus_cutting_board', 'everycomp:rfm/upgrade_aquatic/driftwood_cutting_board', 'everycomp:rfm/upgrade_aquatic/river_cutting_board', 'everycomp:rfm/autumnity/maple_cutting_board', 'everycomp:rfm/regions_unexplored/alpha_cutting_board', 'everycomp:rfm/regions_unexplored/brimwood_cutting_board', 'everycomp:rfm/regions_unexplored/blue_bioshroom_cutting_board', 'everycomp:rfm/regions_unexplored/blackwood_cutting_board', 'everycomp:rfm/regions_unexplored/baobab_cutting_board', 'everycomp:rfm/regions_unexplored/cobalt_cutting_board', 'everycomp:rfm/regions_unexplored/cypress_cutting_board', 'everycomp:rfm/regions_unexplored/dead_cutting_board',         'everycomp:rfm/regions_unexplored/palm_cutting_board', 'everycomp:rfm/regions_unexplored/pine_cutting_board', 'everycomp:rfm/regions_unexplored/pink_bioshroom_cutting_board', 'everycomp:rfm/regions_unexplored/redwood_cutting_board', 'everycomp:rfm/regions_unexplored/socotra_cutting_board', 'everycomp:rfm/regions_unexplored/willow_cutting_board', 'everycomp:rfm/regions_unexplored/yellow_bioshroom_cutting_board'],
      ['regions_unexplored:maple_trapdoor', 'regions_unexplored:maple_pressure_plate', 'regions_unexplored:maple_button', 'regions_unexplored:maple_sign', 'regions_unexplored:maple_hanging_sign', 'regions_unexplored:maple_boat', 'regions_unexplored:maple_chest_boat', 'regions_unexplored:red_maple_sapling', 'regions_unexplored:maple_shrub', 'regions_unexplored:orange_maple_shrub', 'regions_unexplored:red_maple_shrub', 'regions_unexplored:maple_leaves', 'regions_unexplored:orange_maple_leaves', 'regions_unexplored:red_maple_leaves', 'regions_unexplored:maple_branch', 'regions_unexplored:maple_log', 'regions_unexplored:maple_fence_gate', 'regions_unexplored:maple_door', 'regions_unexplored:maple_fence', 'regions_unexplored:maple_slab', 'regions_unexplored:maple_stairs', 'regions_unexplored:maple_planks', 'regions_unexplored:stripped_maple_wood', 'regions_unexplored:maple_wood', 'regions_unexplored:stripped_maple_log'],    
      // ['spelunkery:rock_salt_bricks', 'spelunkery:rock_salt_block', 'spelunkery:rock_salt_stairs', 'spelunkery:rock_salt_slab', 'spelunkery:rock_salt_wall', 'spelunkery:polished_rock_salt', 'spelunkery:polished_rock_salt_stairs', 'spelunkery:polished_rock_salt_slab', 'spelunkery:polished_rock_salt_wall', 'spelunkery:salt_block', 'spelunkery:rock_salt_brick_wall', 'spelunkery:rock_salt_brick_slab', 'spelunkery:rock_salt_brick_stairs', 'vintagedelight:salt_block', 'vintagedelight:smooth_salt_block', 'vintagedelight:salt_pillar', 'vintagedelight:salt_bricks', 'vintagedelight:salt_brick_stairs', 'vintagedelight:salt_brick_slab', 'vintagedelight:salt_brick_wall', 'vintagedelight:mixed_salt_bricks', 'vintagedelight:mixed_salt_brick_stairs', 'vintagedelight:mixed_salt_brick_slab', 'vintagedelight:mixed_salt_brick_wall'],
      ['storagedrawers:obsidian_storage_upgrade', 'storagedrawers:iron_storage_upgrade', 'storagedrawers:gold_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'storagedrawers:upgrade_template'],  
      ['vintagedelight:cheese_pizza', 'vintagedelight:cheese_pizza_slice', 'vintagedelight:meat_pizza', 'vintagedelight:meat_pizza_slice'],
  ]