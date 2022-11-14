input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (314 < input.compassHeading() && input.compassHeading() < 45) {
        basic.showString("N")
    } else if (44 < input.compassHeading() && input.compassHeading() < 135) {
        basic.showString("E")
    } else if (134 < input.compassHeading() && input.compassHeading() < 225) {
        basic.showString("S")
    } else if (224 < input.compassHeading() && input.compassHeading() < 315) {
        basic.showString("W")
    }
})
