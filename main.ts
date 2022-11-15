input.onButtonPressed(Button.A, function () {
	
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
let Sprite: game.LedSprite = null
Sprite = game.createSprite(0, 0)
Sprite.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
	
})
