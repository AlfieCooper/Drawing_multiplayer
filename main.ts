radio.onReceivedNumber(function (receivedNumber) {
    Sprite_received = game.createSprite(receivedNumber % 5, Math.floor(receivedNumber / 5))
})
input.onButtonPressed(Button.A, function () {
    Pixel_1 = game.createSprite(Sprite.get(LedSpriteProperty.X), Sprite.get(LedSpriteProperty.Y))
    radio.sendNumber(Pixel_1.get(LedSpriteProperty.Y) * 5 + Pixel_1.get(LedSpriteProperty.X))
})
input.onButtonPressed(Button.B, function () {
    if (Sprite.get(LedSpriteProperty.X) == 4 && Sprite.get(LedSpriteProperty.Y) == 4) {
        Sprite.set(LedSpriteProperty.X, 0)
        Sprite.set(LedSpriteProperty.Y, 0)
    } else if (Sprite.get(LedSpriteProperty.X) == 4) {
        Sprite.change(LedSpriteProperty.Y, 1)
        Sprite.set(LedSpriteProperty.X, 0)
    } else {
        Sprite.change(LedSpriteProperty.X, 1)
    }
})
let Pixel_1: game.LedSprite = null
let Sprite_received: game.LedSprite = null
let Sprite: game.LedSprite = null
radio.setGroup(1)
let Pixel = 0
Sprite = game.createSprite(0, 0)
Sprite.set(LedSpriteProperty.Brightness, 100)
