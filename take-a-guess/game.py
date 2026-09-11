import random
import keyboard

WORDS = ["Шишнила", "каратица", "жучка", "пёс"]
is_running = True

secret_word = random.choice(WORDS)
guessed_letters = []


def stop_program():
    global is_running
    is_running = False


keyboard.on_press_key("esc", lambda _: stop_program)


while is_running:
    word_mask = "*" * len(secret_word)

    print("Загаданное слово {0}".format(word_mask))
    user_input = input("Итак, ваша буква!\n")
    guessed_letters.append(user_input)

    answer_line = ""

    for letter in secret_word:
        if letter in guessed_letters:
            answer_line += letter
        else:
            answer_line += "*"

    print(answer_line)

    if answer_line == secret_word:
        print("Молодец, ты угадал!")
        is_running = False
else:
    print("Игра окончена")
