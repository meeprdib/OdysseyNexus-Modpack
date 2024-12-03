ItemEvents.tooltip(event => {
    event.add(['irons_spellbooks:arcane_debris', 'irons_spellbooks:ancient_knowledge_fragment', 'irons_spellbooks:common_ink', 'irons_spellbooks:uncommon_ink', 'irons_spellbooks:rare_ink', 'irons_spellbooks:epic_ink', 'irons_spellbooks:legendary_ink'], '§7Useless in the modpack as of now, but there might be a use for this later. If I decide to remove it, you have gotten yourself a collectors item!');
    event.add(['apotheosis:gem'], '§7Apply to a piece of gear with sockets using a Smithing Table. Sockets can be granted to gear through the Reforging Table.')
    event.add(['irons_spellbooks:inscription_table', 'irons_spellbooks:scroll_forge', 'irons_spellbooks:alchemist_cauldron', 'irons_spellbooks:arcane_anvil'], '§7This item has had its functionality removed in this modpack, it only serves decorative purposes now!')
    event.add(['supplementaries:wild_flax', 'supplementaries:flax_seeds', 'supplementaries:flax'], '§7Found growing near water')

    event.add([
        ['unify:platinum_ingot', 'unify:platinum_nugget', 'unify:platinum_sheet', 'unify:platinum_rod', 'unify:platinum_wire', 'unify:platinum_block', 'unify:raw_platinum', 'unify:raw_platinum_block', 'unify:platinum_ore', 'unify:deepslate_platinum_ore'],
        ['unify:tin_ingot', 'unify:tin_nugget', 'unify:tin_sheet', 'unify:tin_rod', 'unify:tin_wire', 'unify:tin_block', 'unify:raw_tin', 'unify:raw_tin_block', 'unify:tin_ore'],
        ['unify:aluminum_ingot', 'unify:aluminum_nugget', 'unify:aluminum_sheet', 'unify:aluminum_rod', 'unify:aluminum_wire', 'unify:aluminum_block', 'unify:raw_aluminum', 'unify:raw_aluminum_block', 'unify:aluminum_ore'],
        ['unify:nickel_ingot', 'unify:nickel_nugget', 'unify:nickel_sheet', 'unify:nickel_rod', 'unify:nickel_wire', 'unify:nickel_block', 'unify:raw_nickel', 'unify:raw_nickel_block', 'unify:nickel_ore'],
        ['unify:bronze_ingot', 'unify:bronze_nugget', 'unify:bronze_sheet', 'unify:bronze_rod', 'unify:bronze_wire', 'unify:bronze_block'],
        ['unify:invar_ingot', 'unify:invar_nugget', 'unify:invar_sheet', 'unify:invar_rod', 'unify:invar_wire', 'unify:invar_block'],
        ['unify:deepslate_tin_ore', 'unify:deepslate_aluminum_ore', 'unify:deepslate_nickel_ore']
    ], "§7This material does not serve any purpose besides decoration at the moment, more uses may be given later on in the modpack's development")
    event.add([
        ['unify:uranium_ingot', 'unify:uranium_nugget', 'unify:uranium_sheet', 'unify:uranium_rod', 'unify:uranium_wire', 'unify:uranium_block', 'unify:raw_uranium', 'unify:raw_uranium_block', 'unify:uranium_ore'],
        ['unify:tungsten_ingot', 'unify:tungsten_nugget', 'unify:tungsten_sheet', 'unify:tungsten_rod', 'unify:tungsten_wire', 'unify:tungsten_block', 'unify:raw_tungsten', 'unify:raw_tungsten_block', 'unify:tungsten_ore'],
        ['unify:constantan_ingot', 'unify:constantan_nugget', 'unify:constantan_sheet', 'unify:constantan_rod', 'unify:constantan_wire', 'unify:constantan_block'],
        ['unify:wrought_iron_ingot', 'unify:wrought_iron_nugget', 'unify:wrought_iron_sheet', 'unify:wrought_iron_rod', 'unify:wrought_iron_wire', 'unify:wrought_iron_block'],
        ['unify:tarnished_gold_ingot', 'unify:tarnished_gold_nugget', 'unify:tarnished_gold_sheet', 'unify:tarnished_gold_rod', 'unify:tarnished_gold_wire', 'unify:tarnished_gold_block']
        ['unify:deepslate_tungsten_ore', 'unify:deepslate_uranium_ore']
    ], "§4This material has limited functionality and is subject to be removed")
})