Chenge_Item = 0
List_Number = 0
Chenge_SerialPort = 0
Chenge_Mode = 0
Program_1 = ""
Chenge_Value = 0
Confirmation = 0
List_1 = 0
Decision_Value = 0
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
List_14 = 0
Tentative_Value = 0
Allow_Chenge_Setting = 0
List_13 = 0
Setting_Data = ""
Program_2 = ""
Program_3 = ""
Program_4 = ""
Program_5 = ""
Program_6 = ""
Program_7 = ""
Program_8 = ""
Program_9 = ""
Program_10 = ""
Program_11 = ""
Program_12 = ""
Program_13 = ""
Program_14 = ""
Program_15 = ""
Program_16 = ""
Program_17 = ""
Program_18 = ""
Program_19 = ""
Program_20 = ""
Allow_Run_Data = 0
def Chenge_Item_Real():
    global List_Number, Chenge_Item
    if Chenge_Item == 1:
        List_Number += -1
        Chenge_Item = 0
    if Chenge_Item == 2:
        List_Number += 1
        Chenge_Item = 0
def reset_karidata():
    karidata: List[number] = []
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
def Chenge_Item_Value():
    global Chenge_Item
    if pins.digital_read_pin(DigitalPin.P11) == 1:
        Chenge_Item = 1
    if pins.digital_read_pin(DigitalPin.P12) == 1:
        Chenge_Item = 2
def シリアルポートの設定１段階目():
    global Chenge_SerialPort
    if pins.digital_read_pin(DigitalPin.P3) == 1:
        Chenge_SerialPort = 1
    if pins.digital_read_pin(DigitalPin.P4) == 1:
        Chenge_SerialPort = 2
    if pins.digital_read_pin(DigitalPin.P5) == 1:
        Chenge_SerialPort = 3
def Chenge_Mode_Value():
    global Chenge_Mode
    if pins.digital_read_pin(DigitalPin.P9) == 1:
        Chenge_Mode = 1
    if pins.digital_read_pin(DigitalPin.P10) == 1:
        Chenge_Mode = 2
def Main_Command(Run_OK: number):
    while Run_OK == 1:
        if True:
            serial.write_line(Program_1)
def Chenge_Value_Value():
    global Chenge_Value
    if pins.digital_read_pin(DigitalPin.P6) == 1:
        Chenge_Value = 1
    if pins.digital_read_pin(DigitalPin.P7) == 1:
        Chenge_Value = 2
    if pins.digital_read_pin(DigitalPin.P6) == 1 and pins.digital_read_pin(DigitalPin.P7) == 1:
        Chenge_Value = 3
    if pins.digital_read_pin(DigitalPin.P8) == 1:
        Chenge_Value = 4
def Chenge_Mode_Real():
    global Chenge_Mode
    if Chenge_Mode == 1:
        Setting_Chenge()
    if Chenge_Mode == 2:
        serial.write_line("" + str((["3", "99", "1"])))
        Chenge_Mode = 0
def Chenge_Item_List():
    global List_1, List_2, List_3, List_4, List_5, List_6, List_7, List_8, List_9, List_10, List_11, List_12, List_14
    if List_Number == 1:
        basic.show_string("Data Number")
        while Confirmation == 0:
            basic.pause(1000)
        List_1 = Decision_Value
        basic.show_string("" + str((List_1)))
    if List_Number == 2:
        basic.show_string("Pause Time")
        while Confirmation == 0:
            basic.pause(1000)
        List_2 = Decision_Value
        basic.show_string("" + str((List_2)))
    if List_Number == 3:
        basic.show_string("kaisuu")
        while Confirmation == 0:
            basic.pause(1000)
        List_3 = Decision_Value
        basic.show_string("" + str((List_3)))
    if List_Number == 4:
        basic.show_string("L4")
        while Confirmation == 0:
            basic.pause(1000)
        List_4 = Decision_Value
        basic.show_string("" + str((List_4)))
    if List_Number == 5:
        basic.show_string("L5")
        while Confirmation == 0:
            basic.pause(1000)
        List_5 = Decision_Value
        basic.show_string("" + str((List_5)))
    if List_Number == 6:
        basic.show_string("L6")
        while Confirmation == 0:
            basic.pause(1000)
        List_6 = Decision_Value
        basic.show_string("" + str((List_6)))
    if List_Number == 7:
        basic.show_string("L7")
        while Confirmation == 0:
            basic.pause(1000)
        List_7 = Decision_Value
        basic.show_string("" + str((List_7)))
    if List_Number == 8:
        basic.show_string("L8")
        while Confirmation == 0:
            basic.pause(1000)
        List_8 = Decision_Value
        basic.show_string("" + str((List_8)))
    if List_Number == 9:
        basic.show_string("9")
        while Confirmation == 0:
            basic.pause(1000)
        List_9 = Decision_Value
        basic.show_string("" + str((List_9)))
    if List_Number == 10:
        basic.show_string("L10")
        while Confirmation == 0:
            basic.pause(1000)
        List_10 = Decision_Value
        basic.show_string("" + str((List_10)))
    if List_Number == 11:
        basic.show_string("L11")
        while Confirmation == 0:
            basic.pause(1000)
        List_11 = Decision_Value
        basic.show_string("" + str((List_11)))
    if List_Number == 12:
        basic.show_string("L12")
        while Confirmation == 0:
            basic.pause(1000)
        List_12 = Decision_Value
        basic.show_string("" + str((List_12)))
    if List_Number == 13:
        basic.show_string("OK?")
        while Confirmation == 0:
            basic.pause(1000)
        List_14 = Decision_Value
def Chenge_Value_Real():
    global Tentative_Value, Chenge_Value, Decision_Value, Confirmation
    if Chenge_Value == 1:
        Tentative_Value += 1
        Chenge_Value = 0
    if Chenge_Value == 2:
        Tentative_Value += -1
        Chenge_Value = 0
    if Chenge_Value == 3:
        Decision_Value = 0
        Chenge_Value = 0
    if Chenge_Value == 4:
        Tentative_Value = Decision_Value
        Confirmation = 1
        Chenge_Value = 0
        Confirmation = 0
def Setting_Chenge():
    global Chenge_Mode, List_Number, Allow_Chenge_Setting
    Chenge_Mode = 0
    Mojiretu_CHENGE_SETTING()
    List_Number = 1
    Reset_Setting_List()
    Allow_Chenge_Setting = 1
    while Allow_Chenge_Setting == 1:
        Chenge_Item_List()
def apply_list():
    global List_13, Allow_Chenge_Setting, List_Number
    if List_13 == 1:
        List_13 = 0
        Write_Setting()
        basic.show_string("Complete Apply!")
        Allow_Chenge_Setting = 0
    else:
        List_Number = 12
def シリアルポートの設定２段階目():
    global Chenge_SerialPort
    if Chenge_SerialPort == 1:
        serial.redirect_to_usb()
        Chenge_SerialPort = 0
    if Chenge_SerialPort == 2:
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BAUD_RATE115200)
        Chenge_SerialPort = 0
    if Chenge_SerialPort == 3:
        serial.redirect(SerialPin.P0, SerialPin.P2, BaudRate.BAUD_RATE115200)
        Chenge_SerialPort = 0
def Reset_Setting_List():
    global List_1, List_2, List_3, List_4, List_5, List_6, List_7, List_8, List_9, List_10, List_11, List_12, List_13, List_14
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
def BackOne_or_Back_10():
    global List_Number
    if List_Number == 0:
        List_Number = 12
    if List_Number == 14:
        List_Number = 12
def Write_Setting():
    global Setting_Data, Program_1, Program_2, Program_3, Program_4, Program_5, Program_6, Program_7, Program_8, Program_9, Program_10, Program_11, Program_12, Program_13, Program_14, Program_15, Program_16, Program_17, Program_18, Program_19, Program_20, Allow_Run_Data
    Setting_Data = "" + str(List_1) + "," + str(List_2) + "," + str(List_3) + "," + str(List_4) + "," + str(List_5) + "," + str(List_6) + "," + str(List_7) + "," + str(List_8) + "," + str(List_9) + "," + str(List_10) + "," + str(List_11) + "," + str(List_12)
    if Setting_Data.split("=")[0] == "1":
        Program_1 = Setting_Data
    elif Setting_Data.split("=")[0] == "2":
        Program_2 = Setting_Data
    elif Setting_Data.split("=")[0] == "3":
        Program_3 = Setting_Data
    elif Setting_Data.split("=")[0] == "4":
        Program_4 = Setting_Data
    elif Setting_Data.split("=")[0] == "5":
        Program_5 = Setting_Data
    elif Setting_Data.split("=")[0] == "6":
        Program_6 = Setting_Data
    elif Setting_Data.split("=")[0] == "7":
        Program_7 = Setting_Data
    elif Setting_Data.split("=")[0] == "8":
        Program_8 = Setting_Data
    elif Setting_Data.split("=")[0] == "9":
        Program_9 = Setting_Data
    elif Setting_Data.split("=")[0] == "10":
        Program_10 = Setting_Data
    elif Setting_Data.split("=")[0] == "11":
        Program_11 = Setting_Data
    elif Setting_Data.split("=")[0] == "12":
        Program_12 = Setting_Data
    elif Setting_Data.split("=")[0] == "13":
        Program_13 = Setting_Data
    elif Setting_Data.split("=")[0] == "14":
        Program_14 = Setting_Data
    elif Setting_Data.split("=")[0] == "15":
        Program_15 = Setting_Data
    elif Setting_Data.split("=")[0] == "16":
        Program_16 = Setting_Data
    elif Setting_Data.split("=")[0] == "17":
        Program_17 = Setting_Data
    elif Setting_Data.split("=")[0] == "18":
        Program_18 = Setting_Data
    elif Setting_Data.split("=")[0] == "19":
        Program_19 = Setting_Data
    elif Setting_Data.split("=")[0] == "20":
        Program_20 = Setting_Data
    reset_karidata()
    Allow_Run_Data = 0
def Mojiretu_CHENGE_SETTING():
    basic.show_string("C")
    basic.show_string("H")
    basic.show_string("E")
    basic.show_string("N")
    basic.show_string("G")
    basic.show_string("E")
    basic.show_string("")
    basic.show_string("S")
    basic.show_string("E")
    basic.show_string("T")
    basic.show_string("T")
    basic.show_string("I")
    basic.show_string("N")
    basic.show_string("G")

def on_in_background():
    シリアルポートの設定１段階目()
control.in_background(on_in_background)

def on_in_background2():
    Chenge_Item_Value()
control.in_background(on_in_background2)

def on_in_background3():
    BackOne_or_Back_10()
control.in_background(on_in_background3)

def on_in_background4():
    Chenge_Value_Value()
control.in_background(on_in_background4)

def on_in_background5():
    Chenge_Value_Real()
control.in_background(on_in_background5)

def on_in_background6():
    Chenge_Mode_Value()
control.in_background(on_in_background6)

def on_in_background7():
    Chenge_Mode_Real()
control.in_background(on_in_background7)

def on_in_background8():
    Chenge_Item_Real()
control.in_background(on_in_background8)

def on_in_background9():
    Main_Command(1)
control.in_background(on_in_background9)

def on_in_background10():
    シリアルポートの設定２段階目()
control.in_background(on_in_background10)
