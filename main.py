def on_button_pressed_b():
    Sprite: game.LedSprite = None
    if Sprite.get(LedSpriteProperty.X) == 4 and Sprite.get(LedSpriteProperty.Y) == 4:
        Sprite.set(LedSpriteProperty.X, 0)
        Sprite.set(LedSpriteProperty.Y, 0)
    elif Sprite.get(LedSpriteProperty.X) == 4:
        Sprite.change(LedSpriteProperty.Y, 1)
        Sprite.set(LedSpriteProperty.X, 0)
    else:
        Sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

led.plot_brightness(0, 0, 111)

def on_forever():
    pass
basic.forever(on_forever)
