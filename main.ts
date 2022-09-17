let Chenge_Item = 0
let List_Number = 0
let Chenge_SerialPort = 0
let Chenge_Mode = 0
let Chenge_Value = 0
let Confirmation = 0
let List_1 = 0
let Decision_Value = 0
let List_2 = 0
let List_3 = 0
let List_4 = 0
let List_5 = 0
let List_6 = 0
let List_7 = 0
let List_8 = 0
let List_9 = 0
let List_10 = 0
let List_11 = 0
let List_12 = 0
let List_13 = 0
let List_14 = 0
let Tentative_Value = 0
function Chenge_Item_Real () {
    if (Chenge_Item == 1) {
        List_Number += -1
        Chenge_Item = 0
    }
    if (Chenge_Item == 2) {
        List_Number += 1
        Chenge_Item = 0
    }
}
function Chenge_Item_Value () {
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        Chenge_Item = 1
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        Chenge_Item = 2
    }
}
function シリアルポートの設定１段階目 () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        Chenge_SerialPort = 1
    }
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        Chenge_SerialPort = 2
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        Chenge_SerialPort = 3
    }
}
function Chenge_Mode_Value () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        Chenge_Mode = 1
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        Chenge_Mode = 2
    }
}
function Chenge_Value_Value () {
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        Chenge_Value = 1
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        Chenge_Value = 2
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 1 && pins.digitalReadPin(DigitalPin.P7) == 1) {
        Chenge_Value = 3
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        Chenge_Value = 4
    }
}
function Chenge_Mode_Real () {
    if (Chenge_Mode == 1) {
        Setting_Chenge()
    }
    if (Chenge_Mode == 2) {
        serial.writeLine("" + (["3", "99", "1"]))
        Chenge_Mode = 0
    }
}
function Chenge_Item_List () {
    if (List_Number == 1) {
        basic.showString("L1")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_1 = Decision_Value
        basic.showString("" + (List_1))
    }
    if (List_Number == 2) {
        basic.showString("L2")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_2 = Decision_Value
        basic.showString("" + (List_2))
    }
    if (List_Number == 3) {
        basic.showString("L3")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_3 = Decision_Value
        basic.showString("" + (List_3))
    }
    if (List_Number == 4) {
        basic.showString("L4")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_4 = Decision_Value
        basic.showString("" + (List_4))
    }
    if (List_Number == 5) {
        basic.showString("L5")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_5 = Decision_Value
        basic.showString("" + (List_5))
    }
    if (List_Number == 6) {
        basic.showString("L6")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_6 = Decision_Value
        basic.showString("" + (List_6))
    }
    if (List_Number == 7) {
        basic.showString("L7")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_7 = Decision_Value
        basic.showString("" + (List_7))
    }
    if (List_Number == 8) {
        basic.showString("L8")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_8 = Decision_Value
        basic.showString("" + (List_8))
    }
    if (List_Number == 9) {
        basic.showString("9")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_9 = Decision_Value
        basic.showString("" + (List_9))
    }
    if (List_Number == 10) {
        basic.showString("L10")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_10 = Decision_Value
        basic.showString("" + (List_10))
    }
    if (List_Number == 11) {
        basic.showString("L11")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_11 = Decision_Value
        basic.showString("" + (List_11))
    }
    if (List_Number == 12) {
        basic.showString("L12")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_12 = Decision_Value
        basic.showString("" + (List_12))
    }
    if (List_Number == 13) {
        basic.showString("L13")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_13 = Decision_Value
        basic.showString("" + (List_13))
    }
    if (List_Number == 14) {
        basic.showString("OK?")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_14 = Decision_Value
    }
}
function Chenge_Value_Real () {
    if (Chenge_Value == 1) {
        Tentative_Value += 1
        Chenge_Value = 0
    }
    if (Chenge_Value == 2) {
        Tentative_Value += -1
        Chenge_Value = 0
    }
    if (Chenge_Value == 3) {
        Decision_Value = 0
        Chenge_Value = 0
    }
    if (Chenge_Value == 4) {
        Tentative_Value = Decision_Value
        Confirmation = 1
        Chenge_Value = 0
        Confirmation = 0
    }
}
function Setting_Chenge () {
    Chenge_Mode = 0
    Mojiretu_CHENGE_SETTING()
    List_Number = 1
    Reset_Setting_List()
    Chenge_Item_List()
}
function apply_list () {
    if (List_14 == 1) {
        List_14 = 0
        basic.showString("Complete Apply!")
    }
}
function シリアルポートの設定２段階目 () {
    if (Chenge_SerialPort == 1) {
        serial.redirectToUSB()
        Chenge_SerialPort = 0
    }
    if (Chenge_SerialPort == 2) {
        serial.redirect(
        SerialPin.P0,
        SerialPin.P1,
        BaudRate.BaudRate115200
        )
        Chenge_SerialPort = 0
    }
    if (Chenge_SerialPort == 3) {
        serial.redirect(
        SerialPin.P0,
        SerialPin.P2,
        BaudRate.BaudRate115200
        )
        Chenge_SerialPort = 0
    }
}
function Reset_Setting_List () {
    let SettingList: number[] = []
    SettingList[0] = 0
    SettingList[1] = 0
    SettingList[2] = 0
    SettingList[3] = 0
    SettingList[4] = 0
    SettingList[5] = 0
    SettingList[6] = 0
    SettingList[7] = 0
    SettingList[8] = 0
    SettingList[9] = 0
    SettingList[10] = 0
    SettingList[11] = 0
    SettingList[12] = 0
    SettingList[13] = 0
    SettingList[14] = 0
    SettingList[15] = 0
    SettingList[16] = 0
}
function BackOne_or_Back_10 () {
    if (1 < List_Number) {
        List_Number = 10
    }
    if (10 > List_Number) {
        List_Number = 1
    }
}
function Mojiretu_CHENGE_SETTING () {
    basic.showString("C")
    basic.showString("H")
    basic.showString("E")
    basic.showString("N")
    basic.showString("G")
    basic.showString("E")
    basic.showString("")
    basic.showString("S")
    basic.showString("E")
    basic.showString("T")
    basic.showString("T")
    basic.showString("I")
    basic.showString("N")
    basic.showString("G")
}
control.inBackground(function () {
    シリアルポートの設定２段階目()
})
control.inBackground(function () {
    シリアルポートの設定１段階目()
})
control.inBackground(function () {
    Chenge_Item_Value()
})
control.inBackground(function () {
	
})
control.inBackground(function () {
    Chenge_Value_Value()
})
control.inBackground(function () {
    Chenge_Value_Real()
})
control.inBackground(function () {
    Chenge_Mode_Value()
})
control.inBackground(function () {
    Chenge_Mode_Real()
})
control.inBackground(function () {
    Chenge_Item_Real()
})
