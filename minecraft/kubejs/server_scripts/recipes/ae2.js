ServerEvents.recipes(event => {

    event.smelting('ae2:silicon', '#ae2:all_quartz', 0.5)
    event.recipes.create.pressing('kubejs:silicon_sheet', 'ae2:silicon')
    event.recipes.create.pressing('kubejs:certus_quartz_sheet', 'kubejs:polished_certus_quartz')
    event.recipes.create.pressing('kubejs:fluix_sheet', 'kubejs:polished_fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_fluix', '#forge:gems/fluix')
    event.recipes.create.sandpaper_polishing('kubejs:polished_certus_quartz', 'ae2:charged_certus_quartz_crystal')
    event.shapeless('ae2:network_tool', ['minecraft:stick', 'create_dd:kinetic_mechanism'])
    event.recipes.create.item_application('kubejs:silicon_casing', ['minecraft:quartz_block', 'kubejs:silicon_sheet'])
    event.recipes.create.item_application('ae2:quantum_link', ['#rubinated_nether:ruby_glass_tag', 'kubejs:chorus_gummy'])
    event.recipes.create.item_application('ae2:molecular_assembler', ['#rubinated_nether:ruby_glass_tag', 'kubejs:silicon_sheet'])

    event.recipes.create.mixing('ae2:fluix_crystal', [Fluid.water(250), '8x #on:red_stuff', 'ae2:charged_certus_quartz_crystal']).heated()
    
    event.shaped('ae2:item_cell_housing', [
        'SSS',
        'I I',
        'SSS'
    ], {
        S: 'kubejs:silicon_sheet',
        I: 'ae2:silicon'
    })

    event.shaped('ae2:fluid_cell_housing', [
        'CCC',
        'O O',
        'CCC'
    ], {
        C: 'create:copper_sheet',
        O: 'minecraft:copper_ingot'
    })

    event.shaped('ae2:blank_pattern', [
        'III',
        'C C',
        'III'
    ], {
        I: 'create:iron_sheet',
        C: 'ae2:charged_certus_quartz_crystal'
    })

    event.shaped('ae2:controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:polished_fluix',
        B: 'kubejs:computational_mechanism',
        C: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'kubejs:polished_fluix',
        B: 'kubejs:silicon_sheet',
        C: 'kubejs:silicon_casing',
        D: 'ae2:dense_energy_cell'
    })

    event.recipes.create.sequenced_assembly([
        ('kubejs:computational_mechanism')
    ], 'kubejs:silicon_sheet', [
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_certus_quartz']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'kubejs:polished_fluix']),
        event.recipes.createDeploying('kubejs:incomplete_computational_mechanism', ['kubejs:incomplete_computational_mechanism', 'create_dd:integrated_circuit']),
		event.recipes.createPressing('kubejs:incomplete_computational_mechanism','kubejs:incomplete_computational_mechanism'),
    ]).transitionalItem('kubejs:incomplete_computational_mechanism').loops(3)

    event.recipes.create.mechanical_crafting('8x ae2:quantum_ring', [
    'ACBCA',
    'C   C',
    'B   B',
    'C   C',
    'ACBCA'
    ], {
        A: 'kubejs:computational_mechanism',
        B: 'create_dd:abstruse_mechanism',
        C: 'ae2:spatial_pylon',
    })

    event.recipes.create.mechanical_crafting('ae2:spatial_anchor', [
        ' BBB ',
        'BCACB',
        'BAEAB',
        'BCACB',
        ' BBB '
        ], {
            A: 'kubejs:computational_mechanism',
            B: 'ae2:spatial_pylon',
            C: 'create_dd:integrated_circuit',
            E: 'createutilities:void_casing'
        })

event.shaped('ae2:dense_energy_cell', [
    'ABA',
    'BCB',
    'ABA'
], {
    A: 'ae2:fluix_block',
    B: 'kubejs:fluix_sheet',
    C: 'createaddition:modular_accumulator'
})

event.shaped('ae2:wireless_booster', [
    'A',
    'B',
    'C'
], {
    A: 'createutilities:void_steel_sheet',
    B: 'kubejs:computational_mechanism',
    C: '#forge:plates/iron'
})

event.shaped('ae2:export_bus', [
    ' A ',
    'BCB',
    ' D '
], {
    A: 'create:chute',
    B: '#forge:wires/copper',
    C: 'ae2:silicon',
    D: 'ae2:fluix_smart_cable'
})

event.shaped('ae2:import_bus', [
    ' D ',
    'BCB',
    ' A '
], {
    A: 'create:chute',
    B: '#forge:wires/copper',
    C: 'ae2:silicon',
    D: 'ae2:fluix_smart_cable'
})

event.shaped('ae2:interface', [
    'ABA',
    'CDE',
    'ABA'
], {
    A: 'kubejs:silicon_sheet',
    B: 'create_dd:integrated_circuit',
    C: 'ae2:import_bus',
    D: 'kubejs:silicon_casing',
    E: 'ae2:export_bus'
})

    event.shapeless('ae2:drive', ['#storagedrawers:drawers', 'kubejs:silicon_casing'])
    event.shapeless('ae2:chest', ['#forge:chests', 'kubejs:silicon_casing'])
    event.shapeless('ae2:portable_item_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'ae2:dense_energy_cell', 'ae2:item_cell_housing'])
    event.shapeless('ae2:portable_fluid_cell_16k', ['ae2:chest', 'ae2:cell_component_16k', 'ae2:dense_energy_cell', 'ae2:fluid_cell_housing'])
    event.shapeless('ae2:cell_workbench', ['kubejs:silicon_casing', '#forge:workbench'])
    event.shapeless('ae2:spatial_storage_cell_128', ['ae2:item_cell_housing', 'ae2:spatial_cell_component_128'])

    event.shaped('4x ae2:fluix_smart_cable', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create_dd:rubber',
        B: '#forge:wires/copper',
        C: 'ae2:silicon'
    })

    event.shaped('4x ae2:quartz_fiber', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create_dd:rubber',
        B: '#forge:wires/electrum',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:energy_acceptor', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:ingots/electrum',
        B: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:spatial_pylon', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:fluix_smart_dense_cable',
        C: 'kubejs:silicon_casing'
    })

    event.shaped('ae2:crafting_unit', [
        'ADA',
        'DCD',
        'ABA'
    ], {
        A: 'kubejs:silicon_sheet',
        B: '#forge:workbench',
        C: 'kubejs:silicon_casing',
        D: 'ae2:fluix_smart_dense_cable'
    })

    event.shaped('ae2:cell_component_16k', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'ae2:silicon'
    })

    event.shaped('ae2:spatial_cell_component_128', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:silicon'
    })

    event.shaped('ae2:io_port', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'kubejs:computational_mechanism',
        C: 'ae2:io_port'
    })

    event.shaped('ae2:formation_plane', [
        'AB',
        'CB',
        'AB'
    ], {
        A: 'kubejs:chorus_gummy',
        B: 'ae2:charged_certus_quartz_crystal',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:annihilation_plane', [
        'AB',
        'CB',
        'AB'
    ], {
        A: 'kubejs:spicy_gummy',
        B: 'ae2:charged_certus_quartz_crystal',
        C: 'ae2:silicon'
    })

    event.shaped('4x ae2:semi_dark_monitor', [
        'AB',
        'CB',
        'AB'
    ], {
        A: '#forge:wires/electrum',
        B: '#rubinated_nether:ruby_glass_tag',
        C: 'ae2:silicon'
    })

    event.shaped('ae2:spatial_io_port', [
        'AAA',
        'ABA',
        'CDC'
    ], {
        A: '#forge:ingots/steel',
        B: 'kubejs:silicon_casing', 
        C: 'kubejs:chorus_gummy', 
        D: '#forge:gems/fluix'
    })

    event.shaped('ae2:color_applicator', [
        'AB ',
        'BB ',
        '  B'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'minecraft:stick'
    })

    event.shapeless('ae2:cable_anchor', ['#forge:rods/wooden', 'ae2:silicon'])
    event.shapeless('ae2:toggle_bus', ['minecraft:lever', 'ae2:fluix_smart_cable'])
    event.shapeless('ae2:crafting_accelerator', ['ae2:crafting_unit', 'create_dd:integrated_circuit'])
    event.shapeless('ae2:pattern_provider', ['ae2:crafting_unit', 'ae2:blank_pattern'])
    event.shapeless('ae2:memory_card', ['kubejs:silicon_sheet', '#forge:plates/copper'])
    event.shapeless('ae2:crafting_terminal', ['ae2:terminal', '#forge:workbench'])
    event.shapeless('ae2:pattern_encoding_terminal', ['ae2:crafting_terminal', 'ae2:blank_pattern'])
    event.shapeless('ae2:terminal', ['#ae2:illuminated_panel', 'create_dd:integrated_circuit'])
    event.shapeless('ae2:storage_monitor', ['#ae2:illuminated_panel', '#storagedrawers:drawers'])
    event.shapeless('ae2:storage_monitor', ['#ae2:illuminated_panel', '#forge:chests'])
    event.shapeless('ae2:conversion_monitor', ['ae2:storage_monitor', 'kubejs:spicy_gummy', 'kubejs:chorus_gummy'])
    event.shapeless('ae2:pattern_access_terminal', ['#ae2:illuminated_panel', '#ae2:pattern_provider'])
    event.shapeless('ae2:wireless_access_point', ['ae2:fluix_smart_cable', 'createutilities:graviton_tube'])
    event.shapeless('ae2:level_emitter', ['ae2:cable_anchor', 'minecraft:redstone_torch'])
    event.shapeless('ae2:energy_level_emitter', ['ae2:energy_level_emitter', '#forge:gems/fluix'])
    event.shapeless('ae2:wireless_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:terminal'])
    event.shapeless('ae2:wireless_crafting_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:crafting_terminal'])
    event.shapeless('ae2:wireless_crafting_terminal', ['minecraft:stick', 'createutilities:void_steel_sheet', 'ae2:terminal', '#forge:workbench'])

    event.stonecutting('ae2:redstone_card', '#on:card')
    event.stonecutting('ae2:capacity_card', '#on:card')
    event.stonecutting('ae2:void_card', '#on:card')
    event.stonecutting('ae2:advanced_card', '#on:card')
    event.stonecutting('ae2:fuzzy_card', '#on:card')
    event.stonecutting('ae2:speed_card', '#on:card')
    event.stonecutting('ae2:inverter_card', '#on:card')
    event.stonecutting('ae2:basic_card', '#on:card')
    event.stonecutting('ae2:equal_distribution_card', '#on:card')
    event.stonecutting('ae2:energy_card', '#on:card')

    event.stonecutting('ae2:semi_dark_monitor', '#ae2:illuminated_panel')
    event.stonecutting('ae2:dark_monitor', '#ae2:illuminated_panel')
    event.stonecutting('ae2:monitor', '#ae2:illuminated_panel')

})

ServerEvents.recipes(event => {
    event.remove({ not: { output: ['ae2:dark_monitor', 'ae2:semi_dark_monitor', 'ae2:monitor', 'ae2:inverted_toggle_bus', 'ae2:quantum_entangled_singularity', 'ae2:ender_dust', 'ae2:fluix_dust', 'ae2:certus_quartz_dust', 'ae2:certus_quartz_crystal', 'ae2:crafting_monitor', 'ae2:16k_crafting_storage', 'ae2:quartz_fixture', 'ae2:light_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:redstone_p2p_tunnel', 'ae2:cable_energy_acceptor', 'ae2:cable_interface', 'ae2:cable_pattern_provider', 'ae2:cut_quartz_slab', 'ae2:smooth_quartz_slab', 'ae2:quartz_brick_slab', 'ae2:chiseled_quartz_slab', 'ae2:quartz_pillar_slab', 'ae2:flawless_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:damaged_budding_quartz', 'ae2:small_quartz_bud', 'ae2:medium_quartz_bud', 'ae2:large_quartz_bud', 'ae2:quartz_cluster', 'ae2:quartz_block', 'ae2:cut_quartz_block', 'ae2:smooth_quartz_block', 'ae2:quartz_bricks', 'ae2:quartz_pillar', 'ae2:chiseled_quartz_block', 'ae2:quartz_stairs', 'ae2:cut_quartz_stairs', 'ae2:smooth_quartz_stairs', 'ae2:quartz_brick_stairs', 'ae2:chiseled_quartz_stairs', 'ae2:quartz_pillar_stairs', 'ae2:quartz_wall', 'ae2:cut_quartz_wall', 'ae2:smooth_quartz_wall', 'ae2:quartz_brick_wall', 'ae2:chiseled_quartz_wall', 'ae2:quartz_pillar_wall', 'ae2:quartz_slab', 'ae2:fluix_block', 'ae2:fluix_stairs', 'ae2:fluix_wall', 'ae2:fluix_slab', 'ae2:fluix_smart_dense_cable'] }, mod: 'ae2' })
    console.log('Not-recipes done!')
})