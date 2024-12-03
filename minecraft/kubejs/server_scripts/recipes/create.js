ServerEvents.recipes(event => {
    event.remove({
        output: [
            'create:cart_assembler',
            'create_dd:kinetic_motor',
            'createaddition:modular_accumulator',
            'createutilities:void_battery',
            'createutilities:void_chest',
            'createutilities:void_motor',
            'createutilities:void_steel_ingot',
            'createutilities:void_tank',
            'vintageimprovements:grinder_belt',
            'create_enchantment_industry:printer',
            'create_enchantment_industry:disenchanter',
            'create:copper_diving_boots',
            console.log('KubeJS Create recipes removed!')
        ]
    })
})

ServerEvents.recipes(event => {
    const create = defineCreateRecipes(event)

    create
    .SequencedAssembly('#forge:plates/electrum', 'create_dd:incomplete_integrated_mechanism')
    .deploy('architects_palette:wardstone_brick')
    .deploy('compressedcreativity:brass_gilded_lapis_lazuli')
    .deploy('create:electron_tube')
    .loops(3)
    .outputs('create_dd:integrated_mechanism')

    create
    .SequencedAssembly('create:copper_sheet', 'create_dd:incomplete_integrated_circuit')
    .deploy('ae2:silicon')
    .deploy('architects_palette:wardstone_brick')
    .deploy('#forge:nuggets/electrum')
    .loops(3)
    .outputs('create_dd:integrated_circuit')

    create
    .SequencedAssembly('#forge:plates/shadow_steel', 'create_dd:incomplete_abstruse_mechanism')
    .deploy('kubejs:polished_fluix')
    .deploy('#forge:ender_pearls')
    .deploy('createutilities:graviton_tube')
    .loops(3)
    .outputs('create_dd:abstruse_mechanism')

    create
    .SequencedAssembly('kubejs:silicon_sheet', 'kubejs:incomplete_card')
    .deploy('kubejs:certus_quartz_sheet')
    .deploy('kubejs:fluix_sheet')
    .deploy('create_dd:integrated_circuit')
    .loops(3)
    .outputs('ae2:advanced_card')

    create
    .SequencedAssembly('netherexp:netherite_plating', 'create_dd:incomplete_sealed_mechanism')
    .deploy('rubinated_nether:ruby_lava_lamp')
    .deploy('#forge:wires/bronze')
    .press()
    .loops(2)
    .outputs('create_dd:sealed_mechanism')

    create
    .SequencedAssembly('#forge:plates/obsidian', 'create_dd:incomplete_infernal_mechanism')
    .deploy('kubejs:spicy_gummy')
    .fill('minecraft:lava', 250)
    .deploy('#forge:plates/bronze')
    .press()
    .loops(2)
    .outputs('create_dd:infernal_mechanism')

    event.recipes.create.compacting('4x createutilities:void_steel_ingot', [
        '4x #forge:ingots/steel',
        '2x ae2:ender_dust',
        'cataclysm:void_core'
    ]).superheated()

    event.recipes.create.compacting('4x unify:steel_ingot', [
        '4x minecraft:iron_ingot',
        '#minecraft:coals'
    ]).heated()

    event.shaped('createutilities:void_motor', [
        'A',
        'V',
        'S'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        S: 'create:shaft'
    })

    event.shaped('createutilities:void_chest', [
        'A',
        'V',
        'C'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        C: 'minecraft:chest'
    })

    event.shaped('createutilities:void_tank', [
        'A',
        'V',
        'F'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        F: 'create:fluid_tank'
    })

    event.shaped('createutilities:void_battery', [
        'A',
        'V',
        'M'
    ], {
        A: 'create_dd:abstruse_mechanism',
        V: 'createutilities:void_casing',
        M: 'createaddition:modular_accumulator'
    })

    event.shaped('vintageimprovements:grinder_belt', [
        'DDD',
        'D D',
        'DDD'
    ], {
        D: 'createaddition:diamond_grit_sandpaper'
    })

    event.shaped('4x createaddition:modular_accumulator', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: '#forge:wires/electrum',
        B: '#forge:ingots/electrum',
        C: 'create:electron_tube',
        D: 'create:brass_casing',
        E: '#forge:ingots/brass'
    })

    event.shaped('create_enchantment_industry:printer', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'spelunkery:carved_nephrite',
        B: 'create_dd:sealed_mechanism',
        C: 'create_dd:hydraulic_casing',
        D: 'spelunkery:nephrite_diode'
    })

    event.shaped('create_enchantment_industry:disenchanter', [
        'AA',
        'BC'
    ], {
        A: 'spelunkery:nephrite_siphon',
        B: 'create_dd:hydraulic_casing',
        C: 'create_dd:sealed_mechanism'
    })

    event.shaped('create:copper_diving_boots', [
        'A A',
        'A A',
        'B B'
    ], {
        A: 'minecraft:copper_ingot',
        B: 'unify:lead_ingot'
    })
})
