import random

WORDS = ["Шишнила", "каратица", "жучка", "пёс"]

secret_word = random.choice(WORDS)

hidden_word = "*" * len(secret_word)



print("Загаданное слово {0}".format(hidden_word))


user_input = input("Итак, ваша буква! ")


if user_input in secret_word:
    print("Есть такая буква!")
else:
    print("Нет такой буквы!")
