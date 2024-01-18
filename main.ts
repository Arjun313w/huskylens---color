huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1) && (huskylens.isLearned(2) && huskylens.isLearned(3))) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("red")
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
        } else {
            basic.showIcon(IconNames.No)
        }
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("green")
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else {
            basic.showIcon(IconNames.No)
        }
        if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showString("yellow")
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 10)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    }
})
