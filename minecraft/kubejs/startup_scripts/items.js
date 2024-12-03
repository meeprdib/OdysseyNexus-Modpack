StartupEvents.registry('item', event => {
    event.create('polished_certus_quartz').displayName('Polished Certus Quartz')
    event.create('certus_quartz_sheet').displayName('Certus Quartz Sheet')
    event.create('polished_fluix').displayName('Polished Fluix')
    event.create('fluix_sheet').displayName('Fluix Sheet')
    event.create('silicon_sheet').displayName('Silicon Sheet')
    event.create('mushroom_paste').displayName('Mushroom Paste')
    event.create('mycelial_blend').displayName('Mycelial Blend')
    // event.create('steel_ingot').displayName('Steel Ingot')
    event.create('computational_mechanism').displayName('Computational Mechanism').rarity('rare')
    event.create('incomplete_computational_mechanism').displayName('Incomplete Computational Mechanism').rarity('rare')
    event.create('nuclear_mechanism').displayName('Nuclear Mechanism')
    event.create('incomplete_nuclear_mechanism').displayName('Incomplete Nuclear Mechanism')
    event.create('incomplete_card').displayName('Incomplete Upgrade Card')

    event.create('chorus_gummy')
    .displayName('Chorus Gummy')
    .food(food => {
        food
        .hunger(2)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .effect('tipsylib:gravity_resistance', 600, 0, 1)
    })

    event.create('spicy_gummy')
    .displayName('Spicy Gummy')
    .food(food => {
        food
        .hunger(2)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .effect('tipsylib:trail_blazing', 600, 0, 1)
        .effect('minecraft:speed', 600, 0, 1)
    })

    console.log('Items Added!')

})