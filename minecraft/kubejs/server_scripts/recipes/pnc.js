ServerEvents.recipes(event => {
    const create = defineCreateRecipes(event)
    event.remove({
        output: [
            'pneumaticcraft:display_table',
            'pneumaticcraft:huge_tank',
            'compressedcreativity:compressed_iron_casing',
            console.log('KubeJS PNC recipes removed!')
        ]
    })

    event.shaped('pneumaticcraft:small_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'netherexp:netherite_plating',
        B: 'create_dd:sealed_mechanism',
        C: 'create:fluid_tank'
    })

    event.shapeless('pneumaticcraft:display_table', 'pneumaticcraft:display_shelf')
    event.shaped('pneumaticcraft:display_table', [
        'AAA',
        'B B'
    ], {
        A: 'pneumaticcraft:reinforced_stone_slab',
        B: '#forge:rods/steel'
    })

    event.shaped('4x pneumaticcraft:crop_support', [
        'AAA',
        'A A'
    ], {
        A: '#forge:rods/steel'
    })

    create
    .item_application('compressedcreativity:compressed_iron_casing', [
        '#on:stripped_inflammable_log',
        '#forge:ingots/steel'
    ])


})