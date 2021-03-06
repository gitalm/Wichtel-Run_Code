enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................fffff..........................................................................
        ................................................................................ffff7771ff........................................................................
        ffffffffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffffffff17777771fffffffffffffffff...11fffffffffffffffffffffffffffffffffffffffff111111fff1
        77777777777777777777777777777777fffffffffffffffffffffffffffffffffff777777777777777777777777777777777777771fffff77777777777777777777777777777777777777777fffffff7ff
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        771ffff7177777777777777777777777f7711fffff7777777777777777777777ffff77f77777777777771777777777777777777777777771111ffffff777777771771117777777777777777717717ff777
        77777777f7777777777777777777777777777777777777777777777777f7777777777777777ff7777777f77777777777777777fff7777777777777777777777777777777777ff777777777777777777777
        77777777777777711ff7f1777777777777777777777777711117f7777777ff777777777777711fff77777771fffffff77771ff177177777777777777777717777777777777771111ffffff777777777777
        7777777777777777777777777777777777777777777777777fff7777777777777777777777777777777777777777777777777777777777777777777777777777777fff7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................fffff.................1111...................................................................................
        ....................................................ff7771ff..............ffffff................................................................................ff
        11ffffffffffffffffffffffffffffffff111111111111111111f777771f111111111111fff77777fff11111111111111111111111111111111111111111111fffffffffff111111111111111111111fff
        7777777777777777777777777777777777fffffffffffffffffff7777777fffffffffffff7777777777ffffffffffffffffffffffffffffffffffffffffffff77777777777fffffffffffffffffffff777
        7777777ff777777777777777777777ffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77771117f177777777777777777111f717777777777717711ff777777777777777777777777771777777777777717711117777777777777777777777777111177ffffffff7777777777777777f7f111177
        7777777777ffffff777fff777777777777777777777f777777fff777777777777777777777777fff777777777777777fffffffff7777777777777777777777777777777777777777777777777777fffff7
        77777777777777717711117777777777777771777777fff77777777fff711117777717fffffff777777171177777777777777177777771711f1777777ff777777777777777771771fffff7777777777777
        777777777777777777777777777777777777777777777777777777777ffff77777777777777777777777777777777777777777777777777777777ffff77777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    wichtel = sprites.create(img`
        ..............ffff......
        ..............fff33.....
        ..............ff3833....
        ..............f33333....
        ...............43322....
        ..........4444443333....
        ........44444444........
        ........444...44........
        ......4444.....444......
        ......aaa4.......4433...
        ......aaa6......66666...
        .......aa......66...6...
        .......aa6666666...66...
        ......6aaaa...666.......
        ......6.a6aa..6.6.......
        .....66.aa6aa66.66......
        ..ff66f..a6.a6...6ffff..
        .f..6..f.aa66...f66...f.
        .f..6..f.aa6....f.66..f.
        .f..f66666aa....f..f..f.
        .f.....f...a....f.....f.
        .f.....f........f.....f.
        ..fffff..........fffff..
        ........................
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ..............ffff......
        ..............fff33.....
        ..............ff3833....
        ..............f33333....
        ...............43322....
        ..........4444443333....
        ........44444444........
        ........444...44........
        ......4444.....444......
        ......aaa4.......4433...
        ......aaa6......66666...
        .......aa......66...6...
        .......aa6666666...66...
        ......6aaaa...666.......
        ......6.a6aa..6.6.......
        .....66.aa6aa66.66......
        ..ff66f..a6.a6...6ffff..
        ..f.6.f..aa66....66..f..
        .ff.6.ff.aa6....ff66.ff.
        .f..f66f66aa....f..f..f.
        .ff....f...a....ff....f.
        ..ff..ff.........ff.fff.
        ....ff............fff...
        ........................
        `)
    run.addAnimationFrame(img`
        ..............ffff......
        ..............fff33.....
        ..............ff3833....
        ..............f33333....
        ...............43322....
        ..........4444443333....
        ........44444444........
        ........444...44........
        ......4444.....444......
        ......aaa4.......4433...
        ......aaa6......66666...
        .......aa......66...6...
        .......aa6666666...66...
        ......6aaaa...666.......
        ......6.a6aa..6.6.......
        .....66.aa6aa66.66......
        ..ff66f..a6.a6...6ffff..
        .f..6..f.aa66...f66...f.
        .f..6..f.aa6....f.66..f.
        .f..f66666aa....f..f..f.
        .f.....f...a....f.....f.
        .f.....f........f.....f.
        ..fffff..........fffff..
        ........................
        `)
    animation.attachAnimation(wichtel, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ...........ffff.........
        ...........fff33........
        ...........ff3833.......
        ...........f33333.......
        ............43322.......
        ..........4443333.......
        ........444444..........
        ........44444444........
        ......4444.....466666...
        ......aaa4.....66...6...
        ......aaa6..6666...66...
        .......aa...6.666.......
        .......aa6666.6.6.......
        ......6aaaa..66.66......
        ......6.a6aa.6...6ffff..
        .....66.aa6aa6..f66...f.
        ..ff66f..a6.a6..f.66..f.
        .f..6..f.aa66...f..f..f.
        .f..6..f.aa6....f.....f.
        .f..f66666aa....f.....f.
        .f.....f...a.....fffff..
        .f.....f................
        ..fffff.................
        ........................
        `)
    animation.attachAnimation(wichtel, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ...............ffff.....
        ...............fff33....
        ...............ff3833...
        ...............f33333...
        ......4444.4....43322...
        ......aaa444444443333...
        ......aa666444444.......
        .....6aaaa.....44...6...
        .....6.a6aa.666644466...
        ....66.aa6a...666.4433..
        .ff66f..a6....6.666666..
        f..6..f.aa6.a66.663.....
        f..6..f.aa6.a6...6ffff..
        f..f66666aa.6...f66...f.
        f.....f...a.....f.66..f.
        f.....f.........f..f.ff.
        .fffff..........f....f..
        ................f...ff..
        .................ffff...
        ........................
        `)
    animation.attachAnimation(wichtel, dead)
    wichtel.z = 3
    wichtel.setPosition(15, 94)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(wichtel, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wichtel.y == 94 && end == 0) {
        wichtel.vy = -160
        animation.setAction(wichtel, ActionKind.Jumping)
    }
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let wichtel: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
scene.setBackgroundColor(9)
game.setDialogCursor(img`
    11111111111111ffff111111
    11111111111111fff3311111
    11111111111111ff38331111
    11111111111111f333331111
    111111111111111433221111
    111111111144444433331111
    111111114444444411111111
    111111114441114411111111
    111111444411111444111111
    111111aaa411111114433111
    111111aaa611111166666111
    1111111aa111111661116111
    1111111aa666666611166111
    1111116aaaa1116661111111
    11111161a6aa116161111111
    11111661aa6aa66166111111
    11ff66f11a61a61116ffff11
    1f11611f1aa66111f66111f1
    1f11611f1aa61111f16611f1
    1f11f66666aa1111f11f11f1
    1f11111f111a1111f11111f1
    1f11111f11111111f11111f1
    11fffff1111111111fffff11
    111111111111111111111111
    `)
game.splash("Bike for the Future", "Search the Code")
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("Press the button to jump over the cars and get the Code!", DialogLayout.Top)
game.onUpdate(function () {
    if (wichtel.y < 94) {
        wichtel.ay = 400
    } else {
        wichtel.ay = 0
        wichtel.y = 94
        if (end == 0) {
            animation.setAction(wichtel, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
    if (info.score() > 500) {
        game.splash("The Code is", "ppm")
        pause(1000)
        game.over(true, effects.blizzard)
    }
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, ground1.vx, 0)
        cactus.y = 100
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . . 6 c 6 6 6 6 6 6 9 6 . 
            . . . . 6 c c 6 6 6 6 6 6 9 c 6 
            . . d 6 9 c c 6 9 9 9 9 9 9 c c 
            . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
            . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
            . 6 6 6 6 6 8 b b b b 8 b b b 8 
            . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
            . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
            . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
            . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
            . 8 8 8 8 f f f 8 8 8 8 f f f f 
            . . . 8 f f f f f 8 8 f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, ground1.vx, 0)
        cactus.y = 98
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 . . 
            . . . . . 3 c 3 3 3 3 3 3 d 3 . 
            . . . . 3 c c 3 3 3 3 3 3 d c 3 
            . . d 3 d c c 3 d d d d d d c c 
            . d 3 3 d c b a a a a a a a 3 c 
            . 3 3 3 d b a a b b b a b b a 3 
            . 3 3 3 3 3 a b b b b a b b b a 
            . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
            . 3 d d 3 a f a a a f a a a a a 
            . d d 3 a a a f a a f a a a a a 
            . a a a a a a a f f f a a a a a 
            . a a a a f f f a a a a f f f f 
            . . . a f f f f f a a f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `, ground1.vx, 0)
        cactus.y = 99
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(20)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............888888..............
            ...........8.....8..............
            ...........8.....88.............
            ..........88......888888........
            ........8888......88...8........
            ........8..............8........
            ........8............888........
            ........8.....88......8.........
            .........88..8888.....8.........
            ...........88...888.888.........
            ...................88...........
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
    if (Math.percentChance(87)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............66666...............
            ...........6....666.............
            .......66666.....6.6............
            ......66..66.......6............
            ......6........6...6............
            ......66.......6...6............
            .....6.....6..666666............
            ....66...666666.6666............
            .....6..66......................
            .....6666.......................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
