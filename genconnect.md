return {
        "name": name,
        "ticker": ticker,
        "algorithm": algorithm,
        "block_time": block_time,
        "premine": premine,
        "max_supply": max_supply,
        "network": network,
        "created_at": created_at,
        "coin_id": coin_id_hash[:12]
    }

def print_coin_info(coin):
    print("=" * 50)
    print(f"🪙 Coin Name: {coin['name']}")
    print(f"💱 Ticker: {coin['ticker']}")
    print(f"🔐 Algorithm: {coin['algorithm']}")
    print(f"⏱ Block Time: {coin['block_time']} seconds")
    print(f"💰 Premine: {coin['premine']:,} coins")
    print(f"📈 Max Supply: {coin['max_supply']:,}")
    print(f"🌐 Network: {coin['network']}")
    print(f"📅 Created At: {coin['created_at']}")
    print(f"🆔 Coin ID: {coin['coin_id']}")
    print("=" * 50)
