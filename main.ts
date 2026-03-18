input.onButtonPressed(Button.A, function () {
    radio.sendString("koppie koppie")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("loop weg")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("hoi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("cool")
})
radio.setGroup(4)
