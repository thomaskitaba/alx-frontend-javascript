#!/usr/bin/python3

def pascal(num):
    arry = []
    count = 0
    for row in range(num):
        arrIn = []
        for col in range(row + 1):
            print("thomas kitaba")
            if col == 0 or col == row:
                arrIn.append(1)
            else:

                arrIn.append(arry[row - 1][col] + arry[row - 1][col - 1])
        arry.append(arrIn)
    return(arry)

        # arry.append()
    return arry
if __name__ == "__main__":
    result = pascal(5)
    size = len(result)
    for count, row in enumerate(result):
        # for i in range(size - count):
        #     print (" ", end = '')
        spaces = [" " for i in range(size - count)]
        print(''.join(spaces), end='')
        print (row)