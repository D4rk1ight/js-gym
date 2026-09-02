import random

WORDS = ["Шишнила", "каратица", "жучка", "пёс"]
is_running = True

secret_word = random.choice(WORDS)
guessed_letters = []
while is_running:
    print(secret_word)
    hidden_word = "*" * len(secret_word)

    print("Загаданное слово {0}".format(hidden_word))
    user_input = input("Итак, ваша буква! ")
    if user_input in secret_word:
        print("Есть такая буква!")
        guessed_letters.append(user_input)
        # print(guessed_letters)
    else:
        print("Нет такой буквы!")
    new_line = ""

    for guessed_letters in secret_word:
        print(guessed_letters, secret_word)
