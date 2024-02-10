player.onChat("b", function () {
    blocks.fill(
    FIRE,
    pos(5, -1, 5),
    pos(-9, -8, -9),
    FillOperation.Replace
    )
})
player.onChat("a", function () {
    blocks.fill(
    TNT,
    pos(5, -1, 5),
    pos(-9, -8, -9),
    FillOperation.Replace
    )
})
player.onChat("c", function () {
    blocks.fill(
    AIR,
    pos(5, -1, 5),
    pos(-9, -8, -9),
    FillOperation.Replace
    )
})
