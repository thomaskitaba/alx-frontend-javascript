#!/usr/bin/python3
""" return list of integers representing
the pascals triangle of n """


def pascal_triangle(n):
    """ return list of integers """
    if n <= 0:
  	    return []
    arr = []
    arrIn = []
    for row in range(n):
        arrIn.clear()
        if row == 0:
            arrIn.append(1)
            arr.append(arrIn)
            continue

        for col in range(row):
            print(f"col = {col} row = {row}")
            # if col == 0 or col == row :
            #     arrIn.append(1)
            #     arr.append(arrIn)
            #     continue
            if row - 1 == 0:
                arrIn = [1, 1]
                arr.append(arrIn)
                # return arr
            elif col > 0:

                num1 = arr[row - 1][col - 1]
                num2 = arr[row - 1][col]
                arrIn.append(num1 + num2)
                arr.append(arrIn)




    return arr
                #
    # return arrIn



    #     arrIn.clear()
    #     if row == 1:
    #         arrIn.append(1)
    #         arr.append(arrIn)
    #     if row == 2:
    #         arrIn.clear()
    #         new = [1, 1]

    #         arrIn.append(new[0])
    #         arr.append(arrIn)
    #         return arr
    #         break
    #     for col in range(row):
    #         pass
    # # return (arr)


if __name__ == "__main__":
    print(pascal_triangle(5))