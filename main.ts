basic.forever(function () {
    if (magicbit.Ultrasonic(DigitalPin.P8) < 5) {
        magicbit.MotorRun(magicbit.Motors.M1, 0)
        magicbit.MotorRun(magicbit.Motors.M2, 255)
    } else {
        magicbit.MotorRun(magicbit.Motors.M1, 255)
        magicbit.MotorRun(magicbit.Motors.M2, 255)
    }
})
