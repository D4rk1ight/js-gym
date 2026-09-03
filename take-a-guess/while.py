import random

random_int = random.randint(1, 5)
# print(random_int)

is_running = True

while is_running:
    user_int = int(input("Угадай число "))
    if user_int > random_int:
        print("Загаданное число меньше")
    elif user_int < random_int:
        print("Загаданное число больше")
    else:
        print("Правильно!")
        is_running = False
else:
    print("Игра окончена")

# while is_running:
#     print("Введи число")
#     user_int = " "
#     user_int = int()

#     if user_int == random_int:
#         print("Молодец, ты угадал!")
#     elif user_int < random_int:
#         print("Загаданное число меньше")
#     else:
#         print("Загаданное число больше")
# else:
#     print("Игра окончена")
