ServerEvents.recipes(event => {
    event.remove({
        output: [
            ['storagedrawers:controller_slave', 'storagedrawers:controller', 'storagedrawers:compacting_drawers_3'],
            ['storagedrawers:obsidian_storage_upgrade', 'storagedrawers:iron_storage_upgrade', 'storagedrawers:gold_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'storagedrawers:upgrade_template', 'storagedrawers:diamond_storage_upgrade', 'storagedrawers:one_stack_upgrade'],
            ['storagedrawers:redstone_upgrade', 'storagedrawers:min_redstone_upgrade', 'storagedrawers:max_redstone_upgrade', 'storagedrawers:fill_level_upgrade'],
            'storagedrawers:drawer_key',
            'storagedrawers:illumination_upgrade',
            'storagedrawers:void_upgrade',
        ]
    })
})

ServerEvents.recipes(event => {

    event.shaped('storagedrawers:compacting_drawers_3', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: '#on:piston',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:controller', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'create_dd:integrated_circuit',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:controller_slave', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: '#forge:ingots/steel',
        B: 'minecraft:comparator',
        C: '#storagedrawers:drawers'
    })

    event.shaped('storagedrawers:diamond_storage_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:gems/certus_quartz',
        B: 'sophisticatedbackpacks:upgrade_base',
    })

    event.shaped('storagedrawers:drawer_key', [
        'AA ',
        ' A ',
        ' A '
    ], {
        A: '#forge:nuggets/gold'
    })

    event.shapeless('storagedrawers:one_stack_upgrade', ['minecraft:flint', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:void_upgrade', ['kubejs:spicy_gummy', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:redstone_upgrade', ['minecraft:redstone', 'sophisticatedbackpacks:upgrade_base'])
    event.shapeless('storagedrawers:min_redstone_upgrade', 'storagedrawers:redstone_upgrade')
    event.shapeless('storagedrawers:max_redstone_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:fill_level_upgrade', 'storagedrawers:min_redstone_upgrade')
    event.shapeless('storagedrawers:redstone_upgrade', 'storagedrawers:fill_level_upgrade')
    event.shapeless('storagedrawers:illumination_upgrade', ['#ae2:p2p_attunements/light_p2p_tunnel', 'sophisticatedbackpacks:upgrade_base'])
    
})