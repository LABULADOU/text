basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P3))
    if (pins.analogReadPin(AnalogReadWritePin.P3) > 500) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
