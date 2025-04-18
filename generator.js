def generate_multiple_coins(count=3):
    for _ in range(count):
        coin = generate_coin()
        print_coin_info(coin)
