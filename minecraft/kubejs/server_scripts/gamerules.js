ServerEvents.loaded(event => {
    event.server.gameRules.set("doInsomnia", false)
    event.server.gameRules.set("doPatrolSpawning", false)
    event.server.gameRules.set("disableRaids", true)
})