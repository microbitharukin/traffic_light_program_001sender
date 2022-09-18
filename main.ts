let Chenge_Item = 0
let List_Number = 0
let Chenge_SerialPort = 0
let Chenge_Mode = 0
let Allow_Run_Data = 0
let Fin__Traffic = 0
let Program_1 = ""
let Program_2 = ""
let Program_3 = ""
let Program_4 = ""
let Program_5 = ""
let Program_6 = ""
let Program_7 = ""
let Program_8 = ""
let Program_9 = ""
let Program_10 = ""
let Program_11 = ""
let Program_12 = ""
let Program_13 = ""
let Program_14 = ""
let Program_15 = ""
let Program_16 = ""
let Program_17 = ""
let Program_18 = ""
let Program_19 = ""
let Program_20 = ""
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
let List_15 = 0
let List_16 = 0
let List_17 = 0
let List_18 = 0
let List_19 = 0
let List_20 = 0
let Tentative_Value = 0
let Allow_Chenge_Setting = 0
let Setting_Data = ""
function reset_karidata () {
    let karidata: number[] = []
    karidata[1] = 0
    karidata[2] = 0
    karidata[3] = 0
    karidata[4] = 0
    karidata[5] = 0
    karidata[6] = 0
    karidata[7] = 0
    karidata[8] = 0
    karidata[9] = 0
    karidata[10] = 0
    karidata[11] = 0
    karidata[12] = 0
    karidata[13] = 0
    karidata[14] = 0
    karidata[15] = 0
    karidata[16] = 0
    karidata[17] = 0
    karidata[18] = 0
    karidata[19] = 0
    karidata[20] = 0
    karidata[21] = 0
    karidata[22] = 0
    karidata[23] = 0
    karidata[24] = 0
    karidata[25] = 0
    karidata[26] = 0
    karidata[27] = 0
    karidata[28] = 0
    karidata[29] = 0
    karidata[30] = 0
}
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
function Fin_Traffic () {
	
}
function Main_Command () {
    while (Allow_Run_Data == 1) {
        Fin__Traffic = 0
        if (parseFloat(Program_1.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_1.split(",")[1]); index++) {
                serial.writeLine(Program_1)
                basic.pause(parseFloat(Program_1.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_2.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_2.split(",")[1]); index++) {
                serial.writeLine(Program_2)
                basic.pause(parseFloat(Program_2.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_3.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_3.split(",")[1]); index++) {
                serial.writeLine(Program_3)
                basic.pause(parseFloat(Program_3.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_4.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_4.split(",")[1]); index++) {
                serial.writeLine(Program_4)
                basic.pause(parseFloat(Program_4.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_5.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_5.split(",")[1]); index++) {
                serial.writeLine(Program_5)
                basic.pause(parseFloat(Program_5.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_6.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_6.split(",")[1]); index++) {
                serial.writeLine(Program_6)
                basic.pause(parseFloat(Program_6.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_7.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_7.split(",")[1]); index++) {
                serial.writeLine(Program_7)
                basic.pause(parseFloat(Program_7.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_8.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_8.split(",")[1]); index++) {
                serial.writeLine(Program_8)
                basic.pause(parseFloat(Program_8.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_9.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_9.split(",")[1]); index++) {
                serial.writeLine(Program_9)
                basic.pause(parseFloat(Program_9.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_10.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_10.split(",")[1]); index++) {
                serial.writeLine(Program_10)
                basic.pause(parseFloat(Program_10.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_11.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_11.split(",")[1]); index++) {
                serial.writeLine(Program_11)
                basic.pause(parseFloat(Program_11.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_12.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_12.split(",")[1]); index++) {
                serial.writeLine(Program_12)
                basic.pause(parseFloat(Program_12.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_13.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_13.split(",")[1]); index++) {
                serial.writeLine(Program_13)
                basic.pause(parseFloat(Program_13.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_14.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_14.split(",")[1]); index++) {
                serial.writeLine(Program_14)
                basic.pause(parseFloat(Program_14.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_15.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_15.split(",")[1]); index++) {
                serial.writeLine(Program_15)
                basic.pause(parseFloat(Program_15.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_16.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_16.split(",")[1]); index++) {
                serial.writeLine(Program_16)
                basic.pause(parseFloat(Program_16.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_17.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_17.split(",")[1]); index++) {
                serial.writeLine(Program_17)
                basic.pause(parseFloat(Program_17.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_18.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_18.split(",")[1]); index++) {
                serial.writeLine(Program_18)
                basic.pause(parseFloat(Program_18.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_19.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_19.split(",")[1]); index++) {
                serial.writeLine(Program_19)
                basic.pause(parseFloat(Program_19.split(",")[0]) * 1000)
            }
        }
        if (parseFloat(Program_20.split("=")[1]) == 1) {
            for (let index = 0; index < parseFloat(Program_20.split(",")[1]); index++) {
                serial.writeLine(Program_20)
                basic.pause(parseFloat(Program_20.split(",")[0]) * 1000)
            }
        }
    }
    if (Allow_Run_Data == 0) {
        Fin_Traffic()
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
        basic.showString("Data Number")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_1 = Decision_Value
        basic.showString("" + (List_1))
    }
    if (List_Number == 2) {
        basic.showString("Pause Time")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_2 = Decision_Value
        basic.showString("" + (List_2))
    }
    if (List_Number == 3) {
        basic.showString("kaisuu")
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
        basic.showString("L14")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_14 = Decision_Value
        basic.showString("" + (List_14))
    }
    if (List_Number == 15) {
        basic.showString("L15")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_15 = Decision_Value
        basic.showString("" + (List_15))
    }
    if (List_Number == 16) {
        basic.showString("L16")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_16 = Decision_Value
        basic.showString("" + (List_16))
    }
    if (List_Number == 17) {
        basic.showString("L17")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_17 = Decision_Value
        basic.showString("" + (List_17))
    }
    if (List_Number == 18) {
        basic.showString("L18")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_18 = Decision_Value
        basic.showString("" + (List_18))
    }
    if (List_Number == 19) {
        basic.showString("L19")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_19 = Decision_Value
        basic.showString("" + (List_19))
    }
    if (List_Number == 20) {
        basic.showString("L20")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_20 = Decision_Value
        basic.showString("" + (List_20))
    }
    if (List_Number == 20) {
        basic.showString("OK?")
        while (Confirmation == 0) {
            basic.pause(1000)
        }
        List_20 = Decision_Value
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
    Allow_Chenge_Setting = 1
    while (Allow_Chenge_Setting == 1) {
        Chenge_Item_List()
    }
}
function apply_list () {
    if (List_20 == 1) {
        List_20 = 0
        Write_Setting()
        basic.showString("Complete Apply!")
        Allow_Chenge_Setting = 0
    } else {
        List_Number = 19
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
    List_1 = 0
    List_2 = 0
    List_3 = 0
    List_4 = 0
    List_5 = 0
    List_6 = 0
    List_7 = 0
    List_8 = 0
    List_9 = 0
    List_10 = 0
    List_11 = 0
    List_12 = 0
    List_13 = 0
    List_14 = 0
}
function BackOne_or_Back_10 () {
    if (List_Number == 0) {
        List_Number = 19
    }
    if (List_Number == 21) {
        List_Number = 1
    }
}
function Write_Setting () {
    Setting_Data = "" + List_1 + "=" + List_2 + "=" + List_3 + "," + List_4 + "," + List_5 + "," + List_6 + "," + List_7 + "," + List_8 + "," + List_9 + "," + List_10 + "," + List_11 + "," + List_12 + ""
    if (Setting_Data.split("=")[0] == "1") {
        Program_1 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "2") {
        Program_2 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "3") {
        Program_3 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "4") {
        Program_4 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "5") {
        Program_5 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "6") {
        Program_6 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "7") {
        Program_7 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "8") {
        Program_8 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "9") {
        Program_9 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "10") {
        Program_10 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "11") {
        Program_11 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "12") {
        Program_12 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "13") {
        Program_13 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "14") {
        Program_14 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "15") {
        Program_15 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "16") {
        Program_16 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "17") {
        Program_17 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "18") {
        Program_18 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "19") {
        Program_19 = Setting_Data
    } else if (Setting_Data.split("=")[0] == "20") {
        Program_20 = Setting_Data
    }
    reset_karidata()
    Allow_Run_Data = 0
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
    シリアルポートの設定１段階目()
})
control.inBackground(function () {
    Chenge_Item_Value()
})
control.inBackground(function () {
    BackOne_or_Back_10()
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
control.inBackground(function () {
    Main_Command()
})
control.inBackground(function () {
    シリアルポートの設定２段階目()
})
control.inBackground(function () {
    if (Allow_Run_Data == 0) {
    	
    }
})
