




export function fetchAllCategories(): Promise<unknown[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(coinCategories);
        }, 2000);
})
}



const coinCategories = [


  {
    "id": "smart-contract-platform",
    "name": "Smart Contract Platform",
    "market_cap": 2533142456112.4683,
    "market_cap_change_24h": 2.0068649160957066,
    "content": "Smart contract platforms are usually blockchains that host smart contracts or decentralized applications. Users can interact with different smart contracts on these platforms to perform various actions such as lending and borrowing funds, staking their assets or minting NFTs. Smart contracts are programs that are stored on the blockchain and are automatically executed when certain conditions are met.",
    "top_3_coins_id": [
      "bitcoin",
      "ethereum",
      "binancecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
    ],
    "volume_24h": 52911460230.34425,
    "updated_at": "2026-01-02T09:35:17.758Z"
  },
  {
    "id": "layer-1",
    "name": "Layer 1 (L1)",
    "market_cap": 2484641348484.086,
    "market_cap_change_24h": 1.8834392439964345,
    "content": "Layer 1 serves as the primary and autonomous chain on which transactions are directly executed and confirmed, as well as providing the essential infrastructure for the blockchain network.",
    "top_3_coins_id": [
      "bitcoin",
      "ethereum",
      "binancecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
    ],
    "volume_24h": 50190772485.73276,
    "updated_at": "2026-01-02T09:36:31.819Z"
  },
  {
    "id": "proof-of-work-pow",
    "name": "Proof of Work (PoW)",
    "market_cap": 1842182421340.241,
    "market_cap_change_24h": 1.846469592811424,
    "content": "Proof of Work (PoW) is a blockchain consensus mechanism to validate transactions and create new blocks through computational efforts by miners.",
    "top_3_coins_id": [
      "bitcoin",
      "dogecoin",
      "bitcoin-cash"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png"
    ],
    "volume_24h": 28440620636.60657,
    "updated_at": "2026-01-02T09:36:43.647Z"
  },
  {
    "id": "world-liberty-financial-portfolio",
    "name": "World Liberty Financial Portfolio",
    "market_cap": 694372787123.0552,
    "market_cap_change_24h": 1.3802068053391958,
    "content": "The World Liberty Financial portfolio includes purchases made by the World Liberty Financial project. World Liberty Financial is a DeFi project associated with U.S. presidential candidate Donald Trump and his family members.",
    "top_3_coins_id": [
      "ethereum",
      "tether",
      "usd-coin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png"
    ],
    "volume_24h": 68675250802.11466,
    "updated_at": "2026-01-02T09:37:01.184Z"
  },
  {
    "id": "proof-of-stake-pos",
    "name": "Proof of Stake (PoS)",
    "market_cap": 638129620643.6705,
    "market_cap_change_24h": 2.2564797586187666,
    "content": "Proof of Stake (PoS) is a blockchain consensus mechanism where validators are selected to create new blocks based on the amount of cryptocurrency they hold and are willing to stake as collateral.",
    "top_3_coins_id": [
      "ethereum",
      "binancecoin",
      "solana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/4128/small/solana.png"
    ],
    "volume_24h": 21364735418.082962,
    "updated_at": "2026-01-02T09:35:53.552Z"
  },
  {
    "id": "made-in-usa",
    "name": "Made in USA",
    "market_cap": 381829423086.24084,
    "market_cap_change_24h": 2.7893894254523084,
    "content": "Refers to cryptocurrencies that have significant connections to the United States, either through their founding team or company headquarters.",
    "top_3_coins_id": [
      "ripple",
      "usd-coin",
      "solana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/4128/small/solana.png"
    ],
    "volume_24h": 17428702702.66528,
    "updated_at": "2026-01-02T09:35:33.347Z"
  },
  {
    "id": "stablecoins",
    "name": "Stablecoins",
    "market_cap": 310982626157.0825,
    "market_cap_change_24h": -0.07419496639625604,
    "content": "A stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to an external reference, such as a fiat currency.",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "usds"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/39926/small/usds.webp"
    ],
    "volume_24h": 54906159134.63814,
    "updated_at": "2026-01-02T09:36:47.135Z"
  },
  {
    "id": "usd-stablecoin",
    "name": "USD Stablecoin",
    "market_cap": 302209425779.82996,
    "market_cap_change_24h": -0.12466759993025643,
    "content": "A USD stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the United States dollar.",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "usds"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/39926/small/usds.webp"
    ],
    "volume_24h": 55376716534.71725,
    "updated_at": "2026-01-02T09:35:42.376Z"
  },
  {
    "id": "fiat-backed-stablecoin",
    "name": "Fiat-backed Stablecoin",
    "market_cap": 295762831636.9464,
    "market_cap_change_24h": -0.1136932110984763,
    "content": "A fiat-backed stablecoin is designed to maintain a stable value by being pegged to a reserve of fiat currency, such as the US dollar, euro, or other national currencies. ",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "usds"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/39926/small/usds.webp"
    ],
    "volume_24h": 53490815431.373245,
    "updated_at": "2026-01-02T09:37:02.478Z"
  },
  {
    "id": "alleged-sec-securities",
    "name": "Alleged SEC Securities",
    "market_cap": 246534989717.1164,
    "market_cap_change_24h": 1.8909911478583226,
    "content": "Tokens and cryptocurrencies alleged to be securities by the U.S. Securities and Exchange Commission (SEC). \r\n\r\nNote: The labeling of these cryptocurrencies as securities by the SEC doesn't equate to the legal classification till proven in a court.",
    "top_3_coins_id": [
      "binancecoin",
      "solana",
      "tron"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/4128/small/solana.png",
      "https://coin-images.coingecko.com/coins/images/1094/small/tron-logo.png"
    ],
    "volume_24h": 5700902126.345668,
    "updated_at": "2026-01-02T09:35:35.362Z"
  },
  {
    "id": "exchange-based-tokens",
    "name": "Exchange-based Tokens",
    "market_cap": 174457428181.9725,
    "market_cap_change_24h": 0.9507317068948896,
    "content": "These tokens are associated with both centralized and decentralized exchanges which share the same purposes such as enjoy discounted trading fees and gain access to exclusive token sales on the exchange. While decentralized exchanges tokens also function as governance as a governance tokens, centralized exchange token does not.",
    "top_3_coins_id": [
      "binancecoin",
      "whitebit",
      "leo-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/27045/small/wbt_token.png",
      "https://coin-images.coingecko.com/coins/images/8418/small/leo-token.png"
    ],
    "volume_24h": 2141555573.6190135,
    "updated_at": "2026-01-02T09:35:31.000Z"
  },
  {
    "id": "made-in-china",
    "name": "Made in China",
    "market_cap": 162706612759.36502,
    "market_cap_change_24h": 0.626023983564233,
    "content": "Refers to cryptocurrencies that have significant connections to the China, either through their founding team or company headquarters.",
    "top_3_coins_id": [
      "binancecoin",
      "tron",
      "mantle"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/1094/small/tron-logo.png",
      "https://coin-images.coingecko.com/coins/images/30980/small/MNT_Token_Logo.png"
    ],
    "volume_24h": 1645613637.58221,
    "updated_at": "2026-01-02T09:35:06.742Z"
  },
  {
    "id": "centralized-exchange-token-cex",
    "name": "Centralized Exchange (CEX) Token",
    "market_cap": 155727358725.65356,
    "market_cap_change_24h": 0.7137852901840769,
    "content": "These utility tokens are issued by a centralized exchange and can be used for a variety of purposes. Although holders are not able to exercise governance, they still carry many other benefits such as enjoy discounted trading fees and gain access to exclusive token sales on the exchange.",
    "top_3_coins_id": [
      "binancecoin",
      "whitebit",
      "leo-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/27045/small/wbt_token.png",
      "https://coin-images.coingecko.com/coins/images/8418/small/leo-token.png"
    ],
    "volume_24h": 855401558.3377516,
    "updated_at": "2026-01-02T09:35:24.480Z"
  },
  {
    "id": "decentralized-finance-defi",
    "name": "Decentralized Finance (DeFi)",
    "market_cap": 106353689137.5947,
    "market_cap_change_24h": 3.191831525815319,
    "content": "Decentralized Finance, is a financial system that operates without central authorities or intermediaries, using blockchain technology and smart contracts to provide a range of financial services such as lending, borrowing, and trading.",
    "top_3_coins_id": [
      "staked-ether",
      "wrapped-steth",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png",
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": 3605265131.9694276,
    "updated_at": "2026-01-02T09:35:30.024Z"
  },
  {
    "id": "liquid-staking-tokens",
    "name": "Liquid Staking Tokens",
    "market_cap": 72361794137.40088,
    "market_cap_change_24h": 2.2624151044368284,
    "content": "Liquid staking token is a tokenized representation of staked tokens that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "staked-ether",
      "wrapped-steth",
      "wrapped-beacon-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png",
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/30061/small/wbeth-icon.png"
    ],
    "volume_24h": 137773443.76466987,
    "updated_at": "2026-01-02T09:37:04.340Z"
  },
  {
    "id": "wrapped-tokens",
    "name": "Wrapped-Tokens",
    "market_cap": 69602352114.16205,
    "market_cap_change_24h": 2.272931422509289,
    "content": "Wrapped tokens offer a way to circumvent the lack of interoperability between different blockchains. The wrapping of a token happens when the original asset is put into a “wrapper” and deployed on a different blockchain. With it being wrapped, the cryptocurrency can now be used on a blockchain where it previously wasn’t available. One example of a wrapped token would be Wrapped Bitcoin (WBTC). It is an ERC-20 version of Bitcoin, which allows it to be used on protocols based on Ethereum. Watch this video to learn more about Wrapped tokens.",
    "top_3_coins_id": [
      "wrapped-steth",
      "wrapped-bitcoin",
      "wrapped-beacon-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/30061/small/wbeth-icon.png"
    ],
    "volume_24h": 1179419264.3780377,
    "updated_at": "2026-01-02T09:37:05.560Z"
  },
  {
    "id": "asset-backed-tokens",
    "name": "Crypto-Backed Tokens",
    "market_cap": 69367139609.48433,
    "market_cap_change_24h": 2.283414998588804,
    "content": "Crypto-backed tokens are digital assets backed or collateralized by other cryptocurrencies. Stablecoins are excluded from this category and are classified separately under the Crypto-Backed Stablecoin category.",
    "top_3_coins_id": [
      "wrapped-steth",
      "wrapped-bitcoin",
      "wrapped-beacon-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/30061/small/wbeth-icon.png"
    ],
    "volume_24h": 1217031391.943564,
    "updated_at": "2026-01-02T09:35:22.110Z"
  },
  {
    "id": "liquid-staking",
    "name": "Liquid Staking",
    "market_cap": 68822555684.56107,
    "market_cap_change_24h": 2.4859494209812616,
    "content": "Liquid staking is a process in which users can stake their cryptocurrency tokens to earn rewards while maintaining the ability to use or trade those tokens in DeFi applications.",
    "top_3_coins_id": [
      "staked-ether",
      "wrapped-steth",
      "wrapped-beacon-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png",
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/30061/small/wbeth-icon.png"
    ],
    "volume_24h": 294276213.27919436,
    "updated_at": "2026-01-02T09:35:05.601Z"
  },
  {
    "id": "real-world-assets-rwa",
    "name": "Real World Assets (RWA)",
    "market_cap": 54095557168.443924,
    "market_cap_change_24h": 2.395656135092356,
    "content": "Real World Assets (RWAs) refer to tangible or physical assets that have value in the real world. The tokenization of RWAs involves representing these assets digitally on a blockchain, allowing for fractional ownership, increased liquidity, and more efficient management and trading of these assets.",
    "top_3_coins_id": [
      "figure-heloc",
      "chainlink",
      "stellar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68480/small/figure.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/100/small/fmpFRHHQ_400x400.jpg"
    ],
    "volume_24h": 1560130949.7347655,
    "updated_at": "2026-01-02T09:36:47.062Z"
  },
  {
    "id": "meme-token",
    "name": "Meme",
    "market_cap": 44183805343.22316,
    "market_cap_change_24h": 8.266305628007697,
    "content": "Meme coins derive their relevance from memes, thriving on hype and picking up momentum as the community grows.",
    "top_3_coins_id": [
      "dogecoin",
      "shiba-inu",
      "memecore"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/11939/small/shiba.png",
      "https://coin-images.coingecko.com/coins/images/53247/small/square-bg-transparent.png"
    ],
    "volume_24h": 4858417113.677201,
    "updated_at": "2026-01-02T09:37:07.157Z"
  },
  {
    "id": "liquid-staked-eth",
    "name": "Liquid Staked ETH",
    "market_cap": 34384076357.385956,
    "market_cap_change_24h": 2.2969579659353148,
    "content": "Liquid staked ETH is a tokenized representation of staked Ethereum that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "staked-ether",
      "rocket-pool-eth",
      "kelp-dao-restaked-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13442/small/steth_logo.png",
      "https://coin-images.coingecko.com/coins/images/20764/small/reth.png",
      "https://coin-images.coingecko.com/coins/images/33800/small/Icon___Dark.png"
    ],
    "volume_24h": 24083470.768886264,
    "updated_at": "2026-01-02T09:36:05.589Z"
  },
  {
    "id": "governance",
    "name": "Governance",
    "market_cap": 32089969540.8191,
    "market_cap_change_24h": 4.424824995055605,
    "content": "A governance token grants its holders the right to influence, vote, or decide on changes to a blockchain protocol, dApp, or DAO.",
    "top_3_coins_id": [
      "hyperliquid",
      "uniswap",
      "polkadot"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50882/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12171/small/polkadot.jpg"
    ],
    "volume_24h": 2157943113.1973677,
    "updated_at": "2026-01-02T09:37:07.725Z"
  },
  {
    "id": "dog-themed-coins",
    "name": "Dog-Themed",
    "market_cap": 28578062774.507652,
    "market_cap_change_24h": 9.521912624873886,
    "content": "Meme coins which are inspired by dog.",
    "top_3_coins_id": [
      "dogecoin",
      "shiba-inu",
      "bonk"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/11939/small/shiba.png",
      "https://coin-images.coingecko.com/coins/images/28600/small/bonk.jpg"
    ],
    "volume_24h": 2097388632.850049,
    "updated_at": "2026-01-02T09:35:38.784Z"
  },
  {
    "id": "infrastructure",
    "name": "Infrastructure",
    "market_cap": 28484326037.61224,
    "market_cap_change_24h": 4.960201068306492,
    "content": "Fundamental systems and networks that support the functioning and development of the technology.",
    "top_3_coins_id": [
      "chainlink",
      "litecoin",
      "internet-computer"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/2/small/litecoin.png",
      "https://coin-images.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png"
    ],
    "volume_24h": 2214954132.3127747,
    "updated_at": "2026-01-02T09:35:08.637Z"
  },
  {
    "id": "artificial-intelligence",
    "name": "Artificial Intelligence (AI)",
    "market_cap": 26485987438.014313,
    "market_cap_change_24h": 6.601171944969901,
    "content": "Artificial Intelligence (AI) tokens are cryptocurrencies that power AI-related projects, such as AI-powered portfolio management, image generation, path finding, and more. ",
    "top_3_coins_id": [
      "chainlink",
      "bittensor",
      "near"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/28452/small/ARUsPeNQ_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/10365/small/near.jpg"
    ],
    "volume_24h": 2261815238.130858,
    "updated_at": "2026-01-02T09:35:25.478Z"
  },
  {
    "id": "4chan-themed",
    "name": "4chan-Themed",
    "market_cap": 25465525511.24465,
    "market_cap_change_24h": 11.148174848157733,
    "content": "4chan-themed coins are tokens inspired by 4chan’s meme culture.",
    "top_3_coins_id": [
      "dogecoin",
      "pepe",
      "bonk"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/29850/small/pepe-token.jpeg",
      "https://coin-images.coingecko.com/coins/images/28600/small/bonk.jpg"
    ],
    "volume_24h": 2564909301.2269616,
    "updated_at": "2026-01-02T09:35:33.298Z"
  },
  {
    "id": "bridged-tokens",
    "name": "Bridged-Tokens",
    "market_cap": 25195394432.100174,
    "market_cap_change_24h": 0.45586126037611174,
    "content": "Bridged-tokens refers to a token that has been transferred or \"bridged\" from one blockchain to another, typically through the use of a blockchain bridge.",
    "top_3_coins_id": [
      "binance-bridged-usdt-bnb-smart-chain",
      "usdt0",
      "binance-bridged-usdc-bnb-smart-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35021/small/USDT.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/35220/small/USDC.jpg"
    ],
    "volume_24h": 1897105797.9221497,
    "updated_at": "2026-01-02T09:36:55.458Z"
  },
  {
    "id": "elon-musk-inspired-coins",
    "name": "Elon Musk-Inspired",
    "market_cap": 21743138319.367046,
    "market_cap_change_24h": 9.794147275058453,
    "content": "Meme coins inspired by Elon Musk, none of these projects are (necessarily) endorsed or created by Elon Musk.",
    "top_3_coins_id": [
      "dogecoin",
      "dogelon-mars",
      "69420"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/14962/small/6GxcPRo3_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/32830/small/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.jpg"
    ],
    "volume_24h": 1453825233.1980398,
    "updated_at": "2026-01-02T09:37:04.391Z"
  },
  {
    "id": "decentralized-exchange",
    "name": "Decentralized Exchange (DEX)",
    "market_cap": 19619364774.33668,
    "market_cap_change_24h": 3.2205840542408306,
    "content": "Decentralized exchanges (DEXs) allow users to trade with one another in a permissionless manner and without any intermediaries.",
    "top_3_coins_id": [
      "hyperliquid",
      "uniswap",
      "aster-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50882/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/69040/small/_ASTER.png"
    ],
    "volume_24h": 1331674357.3596907,
    "updated_at": "2026-01-02T09:35:09.936Z"
  },
  {
    "id": "privacy-coins",
    "name": "Privacy Coins",
    "market_cap": 18951402248.38138,
    "market_cap_change_24h": -1.306707793030985,
    "content": "Privacy coins are cryptocurrencies which allow users to conduct transactions privately and anonymously. This ensures untraceable transactions and the identity of the parties involved are kept private.This is done by hiding the origin and destination of transactions. In some cases, multiple transactions are mixed together in order to make onchain analysis tougher.",
    "top_3_coins_id": [
      "zcash",
      "monero",
      "beldex"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/486/small/circle-zcash-color.png",
      "https://coin-images.coingecko.com/coins/images/69/small/monero_logo.png",
      "https://coin-images.coingecko.com/coins/images/5111/small/Beldex.png"
    ],
    "volume_24h": 718910317.3459727,
    "updated_at": "2026-01-02T09:36:54.382Z"
  },
  {
    "id": "tokenized-btc",
    "name": "Tokenized BTC",
    "market_cap": 18774279067.426422,
    "market_cap_change_24h": 2.0048073625705234,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "coinbase-wrapped-btc",
      "tbtc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/40143/small/cbbtc.webp",
      "https://coin-images.coingecko.com/coins/images/11224/small/0x18084fba666a33d37592fa2633fd49a74dd93a88.png"
    ],
    "volume_24h": 246989203.59715125,
    "updated_at": "2026-01-02T09:36:59.960Z"
  },
  {
    "id": "bridged-stablecoins",
    "name": "Bridged Stablecoin",
    "market_cap": 17926094050.64613,
    "market_cap_change_24h": -0.3809731718318389,
    "content": "Bridged stablecoin refers to a stablecoin that has been transferred, or “bridged,” from one blockchain to another, typically through the use of a blockchain bridge.",
    "top_3_coins_id": [
      "binance-bridged-usdt-bnb-smart-chain",
      "usdt0",
      "binance-bridged-usdc-bnb-smart-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35021/small/USDT.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/35220/small/USDC.jpg"
    ],
    "volume_24h": 1321497492.074487,
    "updated_at": "2026-01-02T09:36:58.744Z"
  },
  {
    "id": "binance-alpha-spotlight",
    "name": "Binance Alpha Spotlight",
    "market_cap": 17727776840.83115,
    "market_cap_change_24h": 1.5134799201566491,
    "content": "\r\nBinance Alpha is a platform within Binance Wallet that highlights promising early-stage crypto projects before they potentially list on Binance.",
    "top_3_coins_id": [
      "memecore",
      "midnight-3",
      "ondo-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53247/small/square-bg-transparent.png",
      "https://coin-images.coingecko.com/coins/images/71015/small/midnight.png",
      "https://coin-images.coingecko.com/coins/images/26580/small/ONDO.png"
    ],
    "volume_24h": 2393523939.1779904,
    "updated_at": "2026-01-02T09:36:51.400Z"
  },
  {
    "id": "yzi-labs-portfolio",
    "name": "YZi Labs (Prev. Binance Labs) Portfolio",
    "market_cap": 16498847039.912827,
    "market_cap_change_24h": 7.242149198200298,
    "content": "Protocols and tokens that YZi Labs (Prev. Binance Labs) have invested in.",
    "top_3_coins_id": [
      "sui",
      "ethena",
      "aptos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26375/small/sui-ocean-square.png",
      "https://coin-images.coingecko.com/coins/images/36530/small/ethena.png",
      "https://coin-images.coingecko.com/coins/images/26455/small/Aptos-Network-Symbol-Black-RGB-1x.png"
    ],
    "volume_24h": 2144236808.4375956,
    "updated_at": "2026-01-02T09:36:50.307Z"
  },
  {
    "id": "defi-pulse-index-dpi",
    "name": "Index Coop Defi Index",
    "market_cap": 15083882151.972736,
    "market_cap_change_24h": 3.296498287774731,
    "content": "The DeFi Pulse Index (DPI) is a capitalization-weighted index that tracks the performance of some of the largest protocols in the DeFi space.",
    "top_3_coins_id": [
      "weth",
      "uniswap",
      "aave"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2518/small/weth.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png"
    ],
    "volume_24h": 609147315.7794629,
    "updated_at": "2026-01-02T09:36:04.526Z"
  },
  {
    "id": "restaking",
    "name": "Restaking",
    "market_cap": 14877809770.00115,
    "market_cap_change_24h": 2.925669927560368,
    "content": "Restaking allows users who have staked their tokens to participate in extending the underlying security of the base network to other protocols and networks.",
    "top_3_coins_id": [
      "wrapped-eeth",
      "kelp-dao-restaked-eth",
      "lombard-staked-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/33800/small/Icon___Dark.png",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png"
    ],
    "volume_24h": 239821724.69131893,
    "updated_at": "2026-01-02T09:35:36.761Z"
  },
  {
    "id": "tokenized-private-credit",
    "name": "Tokenized Private Credit",
    "market_cap": 14725364024.924618,
    "market_cap_change_24h": -1.3412265848134866,
    "content": "Tokenized private credit refers to the digital representation of economic claims on non-publicly traded debt instruments, such as direct loans to businesses or consumers.",
    "top_3_coins_id": [
      "figure-heloc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68480/small/figure.png"
    ],
    "volume_24h": 499874.1810862819,
    "updated_at": "2026-01-02T09:35:21.073Z"
  },
  {
    "id": "bridged-usdt",
    "name": "Bridged USDT",
    "market_cap": 13979710250.673225,
    "market_cap_change_24h": -0.4039453496327127,
    "content": "Bridged USDT refers to Tether tokens that have been transferred from their native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "binance-bridged-usdt-bnb-smart-chain",
      "usdt0",
      "qusdt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35021/small/USDT.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/52913/small/usdt.jpg"
    ],
    "volume_24h": 942595575.7793795,
    "updated_at": "2026-01-02T09:35:07.823Z"
  },
  {
    "id": "yield-bearing-stablecoins",
    "name": "Yield-Bearing Stablecoin",
    "market_cap": 13703000134.321615,
    "market_cap_change_24h": 0.747024457917516,
    "content": "Yield-bearing stablecoins are stablecoins that passively earn interest or yield for holders, either through DeFi lending, staking rewards, or real-world asset backing.",
    "top_3_coins_id": [
      "susds",
      "ethena-staked-usde",
      "syrupusdc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52721/small/sUSDS_Coin.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png",
      "https://coin-images.coingecko.com/coins/images/54658/small/syrupUSDC.png"
    ],
    "volume_24h": 63310582.81333539,
    "updated_at": "2026-01-02T09:37:03.406Z"
  },
  {
    "id": "liquid-restaking-tokens",
    "name": "Liquid Restaking Tokens",
    "market_cap": 13327110718.089338,
    "market_cap_change_24h": 2.4053801353699997,
    "content": "Liquid Restaking Tokens are a liquid representation of restaking positions. Restaking enable users who have staked their tokens to extend the security of the base network to other protocols and networks.",
    "top_3_coins_id": [
      "wrapped-eeth",
      "kelp-dao-restaked-eth",
      "lombard-staked-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/33800/small/Icon___Dark.png",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png"
    ],
    "volume_24h": 10394690.218421469,
    "updated_at": "2026-01-02T09:36:01.383Z"
  },
  {
    "id": "zero-knowledge-zk",
    "name": "Zero Knowledge (ZK)",
    "market_cap": 13272652106.782814,
    "market_cap_change_24h": 0.9648692247396423,
    "content": "Zero-knowledge proof or Zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true while the prover avoids conveying any additional information apart from the fact that the statement is indeed true.\r\n\r\nThis category tracks cryptocurrency that utilises Zero Knowledge implementation to execute transactions, which may include smart contract execution, value transfer, and others.",
    "top_3_coins_id": [
      "zcash",
      "midnight-3",
      "starknet"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/486/small/circle-zcash-color.png",
      "https://coin-images.coingecko.com/coins/images/71015/small/midnight.png",
      "https://coin-images.coingecko.com/coins/images/26433/small/starknet.png"
    ],
    "volume_24h": 997432784.8676962,
    "updated_at": "2026-01-02T09:36:53.375Z"
  },
  {
    "id": "bitcoin-fork",
    "name": "Bitcoin Fork",
    "market_cap": 12479014876.350273,
    "market_cap_change_24h": -0.43681300596226613,
    "content": "A Bitcoin fork is a change to the underlying rules of the Bitcoin network that results in a split into a separate versions of the blockchain.",
    "top_3_coins_id": [
      "bitcoin-cash",
      "bitcoin-cash-sv",
      "ecash"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png",
      "https://coin-images.coingecko.com/coins/images/6799/small/BSV.png",
      "https://coin-images.coingecko.com/coins/images/16646/small/Logo_final-22.png"
    ],
    "volume_24h": 296041555.82624686,
    "updated_at": "2026-01-02T09:35:39.879Z"
  },
  {
    "id": "decentralized-perpetuals",
    "name": "Perpetuals",
    "market_cap": 11730342261.518944,
    "market_cap_change_24h": 0.7952252922989985,
    "content": "Perpetuals offer traders the ability to take leveraged positions on the price of an asset without owning the underlying asset. ",
    "top_3_coins_id": [
      "hyperliquid",
      "aster-2",
      "myx-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50882/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/69040/small/_ASTER.png",
      "https://coin-images.coingecko.com/coins/images/55506/small/myx.jpg"
    ],
    "volume_24h": 659922794.5180893,
    "updated_at": "2026-01-02T09:37:06.623Z"
  },
  {
    "id": "chain-abstraction",
    "name": "Chain Abstraction",
    "market_cap": 11674151247.944506,
    "market_cap_change_24h": 6.531579839614535,
    "content": "Chain abstraction is the concept of creating a seamless, unified user experience across multiple blockchains, allowing users and developers to interact with different chains without needing to manually bridge assets, switch networks, or handle chain-specific complexities.",
    "top_3_coins_id": [
      "chainlink",
      "near",
      "river"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/10365/small/near.jpg",
      "https://coin-images.coingecko.com/coins/images/69318/small/river-token.png"
    ],
    "volume_24h": 646775817.250216,
    "updated_at": "2026-01-02T09:35:41.040Z"
  },
  {
    "id": "cross-chain-communication",
    "name": "Cross-chain Communication",
    "market_cap": 11507519103.474627,
    "market_cap_change_24h": 5.627095652499581,
    "content": "Cross-chain communication allows different blockchain networks to interact and exchange data and assets. ",
    "top_3_coins_id": [
      "chainlink",
      "c8ntinuum",
      "olympus"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/55253/small/CTM_200X200.png",
      "https://coin-images.coingecko.com/coins/images/14483/small/token_OHM_%281%29.png"
    ],
    "volume_24h": 579196561.6705999,
    "updated_at": "2026-01-02T09:35:02.393Z"
  },
  {
    "id": "superchain-ecosystem",
    "name": "Optimism Superchain Ecosystem",
    "market_cap": 11354296835.625084,
    "market_cap_change_24h": 6.628822817005458,
    "content": "The Optimism Superchain is a unified network of chains built using the open-source OP Stack. This framework provides a standardized, modular architectural framework for creating Layer 2 chains that share a common security and communication layer.",
    "top_3_coins_id": [
      "chainlink",
      "worldcoin-wld",
      "optimism"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/31069/small/worldcoin.jpeg",
      "https://coin-images.coingecko.com/coins/images/25244/small/Optimism.png"
    ],
    "volume_24h": 605460882.024438,
    "updated_at": "2026-01-02T09:35:54.560Z"
  },
  {
    "id": "rwa-protocol",
    "name": "RWA Protocol",
    "market_cap": 11231584253.800377,
    "market_cap_change_24h": 6.310517316443977,
    "content": "RWA Protocol refer to protocol that facilitates the tokenization of real-world assets.",
    "top_3_coins_id": [
      "chainlink",
      "ondo-finance",
      "zebec-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/26580/small/ONDO.png",
      "https://coin-images.coingecko.com/coins/images/37052/small/zbcn.jpeg"
    ],
    "volume_24h": 541336311.0525018,
    "updated_at": "2026-01-02T09:35:44.553Z"
  },
  {
    "id": "stablecoin-issuer",
    "name": "Stablecoin Issuer",
    "market_cap": 10702090175.249466,
    "market_cap_change_24h": 6.053111961666574,
    "content": "Stablecoin issuers are protocols that create and manage stablecoins pegged to assets like fiat by using on-chain mechanisms such as collateralization, liquidity pools, or algorithmic supply adjustments.",
    "top_3_coins_id": [
      "world-liberty-financial",
      "aave",
      "ethena"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50767/small/wlfi.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png",
      "https://coin-images.coingecko.com/coins/images/36530/small/ethena.png"
    ],
    "volume_24h": 496200482.9721445,
    "updated_at": "2026-01-02T09:35:25.433Z"
  },
  {
    "id": "depin",
    "name": "DePIN",
    "market_cap": 10566306128.726738,
    "market_cap_change_24h": 7.585361826232026,
    "content": "DePIN refers to Decentralized Physical Infrastructure Networks which utilize blockchain and tokenized incentives to build real-world infrastructure across areas like wireless networks, storage, geolocation, transportation and energy.",
    "top_3_coins_id": [
      "bittensor",
      "filecoin",
      "render-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28452/small/ARUsPeNQ_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/12817/small/filecoin.png",
      "https://coin-images.coingecko.com/coins/images/11636/small/rndr.png"
    ],
    "volume_24h": 803230262.5349176,
    "updated_at": "2026-01-02T09:36:02.698Z"
  },
  {
    "id": "yield-farming",
    "name": "Yield Farming",
    "market_cap": 10455272691.047047,
    "market_cap_change_24h": 4.7135341766851235,
    "content": "Yield farming involves putting cryptocurrency into a DeFi protocol to collect interest on trading fees. Liquidity providers can profit by providing liquidity in DeFi protocols like Uniswap, utilizing assets that would otherwise sit idle on an exchange or hot wallet.",
    "top_3_coins_id": [
      "uniswap",
      "aave",
      "pancakeswap-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png",
      "https://coin-images.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png"
    ],
    "volume_24h": 746259751.087153,
    "updated_at": "2026-01-02T09:36:28.475Z"
  },
  {
    "id": "layer-2",
    "name": "Layer 2 (L2)",
    "market_cap": 10425000734.016064,
    "market_cap_change_24h": 4.671270341933301,
    "content": "Layer 2s are off-chain vertical scaling solutions that run on top of Layer 1 blockchains like Ethereum to improve scalability, while maintaining the decentralization and security standards of the Layer 1.",
    "top_3_coins_id": [
      "mantle",
      "arbitrum",
      "polygon-ecosystem-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30980/small/MNT_Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/16547/small/arb.jpg",
      "https://coin-images.coingecko.com/coins/images/32440/small/pol.png"
    ],
    "volume_24h": 761065114.0176075,
    "updated_at": "2026-01-02T09:36:43.713Z"
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "market_cap": 10228114022.688164,
    "market_cap_change_24h": 6.177140803432804,
    "content": "Oracles are used by protocols in their smart contracts in order to obtain external data. This allows the closed-off blockchain environment to communicate with data points on the outside world. For example, a protocol offering synthetic Nasdaq-listed stock on the blockchain will need to pull external data from the stock market. With an oracle, the protocol will be able to do so. ",
    "top_3_coins_id": [
      "chainlink",
      "pyth-network",
      "xyo-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/31924/small/pyth.png",
      "https://coin-images.coingecko.com/coins/images/4519/small/XYO_Network-logo.png"
    ],
    "volume_24h": 579458542.7538533,
    "updated_at": "2026-01-02T09:37:01.179Z"
  },
  {
    "id": "ether-fi-ecosystem",
    "name": "Ether.fi Ecosystem",
    "market_cap": 10166809599.45188,
    "market_cap_change_24h": 2.6594878405490863,
    "content": "Interconnected platforms and services built around Ether.fi.",
    "top_3_coins_id": [
      "wrapped-eeth",
      "ether-fi",
      "ether-fi-staked-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/35958/small/etherfi.jpeg",
      "https://coin-images.coingecko.com/coins/images/33049/small/ether.fi_eETH.png"
    ],
    "volume_24h": 43978081.143713966,
    "updated_at": "2026-01-02T09:35:50.204Z"
  },
  {
    "id": "x402-ecosystem",
    "name": "x402 Ecosystem",
    "market_cap": 9847110163.40139,
    "market_cap_change_24h": 6.111317191726156,
    "content": "x402 is an open protocol that defines an internet-native micropayment rail using HTTP 402 and stablecoins. It allows automated clients and AI agents to pay directly for APIs, data, and compute on demand, enabling real-time, low-friction transactions without intermediaries.",
    "top_3_coins_id": [
      "chainlink",
      "eigenlayer",
      "unibase"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/37441/small/eigencloud.jpg",
      "https://coin-images.coingecko.com/coins/images/69108/small/unibase.png"
    ],
    "volume_24h": 513796545.30960083,
    "updated_at": "2026-01-02T09:35:15.297Z"
  },
  {
    "id": "privacy-blockchain",
    "name": "Privacy Blockchain",
    "market_cap": 9533293246.198074,
    "market_cap_change_24h": 0.40156608386523035,
    "content": "A privacy blockchain is a smart contract platform designed to prioritize transaction confidentiality and anonymity while maintaining decentralization and security. ",
    "top_3_coins_id": [
      "canton-network",
      "midnight-3",
      "tezos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70468/small/Canton-Ticker_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/71015/small/midnight.png",
      "https://coin-images.coingecko.com/coins/images/976/small/Tezos-logo.png"
    ],
    "volume_24h": 309173819.9713435,
    "updated_at": "2026-01-02T09:35:07.828Z"
  },
  {
    "id": "tokenized-products",
    "name": "Tokenized Assets",
    "market_cap": 9509570898.277863,
    "market_cap_change_24h": 1.017568351893576,
    "content": "Tokenized products refers to digital representation of assets on a blockchain platform.",
    "top_3_coins_id": [
      "tether-gold",
      "pax-gold",
      "hashnote-usyc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10481/small/Tether_Gold.png",
      "https://coin-images.coingecko.com/coins/images/9519/small/paxgold.png",
      "https://coin-images.coingecko.com/coins/images/51054/small/Hashnote_SDYC_200x200.png"
    ],
    "volume_24h": 540487203.5472977,
    "updated_at": "2026-01-02T09:37:00.193Z"
  },
  {
    "id": "cybersecurity",
    "name": "Cybersecurity",
    "market_cap": 9357217980.63846,
    "market_cap_change_24h": 6.130105536999733,
    "content": "Cybersecurity projects enhance measures through services like smart contract auditing, security analysis, and bug bounty programs.",
    "top_3_coins_id": [
      "chainlink",
      "certik",
      "agentlisa"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12944/small/shentu_2.jpg",
      "https://coin-images.coingecko.com/coins/images/71140/small/lisa.png"
    ],
    "volume_24h": 457902393.9737755,
    "updated_at": "2026-01-02T09:37:00.131Z"
  },
  {
    "id": "quantum-resistant",
    "name": "Quantum-Resistant",
    "market_cap": 9310743591.137798,
    "market_cap_change_24h": 0.5100641508244862,
    "content": "Quantum-resistant projects are characterised by their use of post-quantum cryptographic algorithms (e.g., hash-based, lattice-based) to remain secure against potential attacks from future quantum computers.",
    "top_3_coins_id": [
      "zcash",
      "starknet",
      "quantum-resistant-ledger"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/486/small/circle-zcash-color.png",
      "https://coin-images.coingecko.com/coins/images/26433/small/starknet.png",
      "https://coin-images.coingecko.com/coins/images/700/small/qrl-logo.png"
    ],
    "volume_24h": 501246190.2025845,
    "updated_at": "2026-01-02T09:35:13.145Z"
  },
  {
    "id": "synthetic-dollar",
    "name": "Synthetic Dollar",
    "market_cap": 9280773153.958431,
    "market_cap_change_24h": 0.09447643384240849,
    "content": "",
    "top_3_coins_id": [
      "ethena-usde",
      "falcon-finance",
      "usdai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/54558/small/ff_200_X_200.png",
      "https://coin-images.coingecko.com/coins/images/55857/small/USDai_Token_Full_Glyph.png"
    ],
    "volume_24h": 87474653.12522127,
    "updated_at": "2026-01-02T09:35:14.139Z"
  },
  {
    "id": "binance-launchpool",
    "name": "Binance Launchpool",
    "market_cap": 9273291769.223295,
    "market_cap_change_24h": 8.05561266024826,
    "content": "Tokens and coins launched on Binance Launchpool, a platform that allows crypto holders to earn new tokens by locking some of their existing assets.",
    "top_3_coins_id": [
      "sui",
      "ethena",
      "ether-fi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26375/small/sui-ocean-square.png",
      "https://coin-images.coingecko.com/coins/images/36530/small/ethena.png",
      "https://coin-images.coingecko.com/coins/images/35958/small/etherfi.jpeg"
    ],
    "volume_24h": 1047206012.7170049,
    "updated_at": "2026-01-02T09:36:49.176Z"
  },
  {
    "id": "decentralized-derivatives",
    "name": "Derivatives",
    "market_cap": 9006911213.23757,
    "market_cap_change_24h": -0.5703716098741328,
    "content": "Derivatives are financial instruments whose value is derived from an underlying asset (e.g. Crude Oil, Gold, Bitcoin etc). Compared to spot markets where the underlying asset changes ownership, in derivatives markets, traders trade contracts rather than the actual assets.",
    "top_3_coins_id": [
      "hyperliquid",
      "myx-finance",
      "lighter"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50882/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/55506/small/myx.jpg",
      "https://coin-images.coingecko.com/coins/images/71121/small/lighter.png"
    ],
    "volume_24h": 512153740.3668284,
    "updated_at": "2026-01-02T09:35:46.950Z"
  },
  {
    "id": "crypto-backed-stablecoin",
    "name": "Crypto-backed Stablecoin",
    "market_cap": 8632326373.61136,
    "market_cap_change_24h": 0.08898005744015083,
    "content": "A crypto-backed stablecoin is designed to maintain a stable value by being backed by a reserve of other cryptocurrencies.",
    "top_3_coins_id": [
      "dai",
      "falcon-finance",
      "gho"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/9956/small/Badge_Dai.png",
      "https://coin-images.coingecko.com/coins/images/54558/small/ff_200_X_200.png",
      "https://coin-images.coingecko.com/coins/images/30663/small/gho-token-logo.png"
    ],
    "volume_24h": 75752395.38157915,
    "updated_at": "2026-01-02T09:36:50.377Z"
  },
  {
    "id": "trump-affiliated-tokens",
    "name": "Trump-Affiliated",
    "market_cap": 8478750236.823184,
    "market_cap_change_24h": 2.370544901512799,
    "content": "This category includes tokens that are officially launched, endorsed, or held by Donald Trump or his immediate family. Only tokens with verifiable affiliation through official statements or reputable sources are included. Community-created tokens or projects that use Trump-related names or slogans without formal connection are excluded.",
    "top_3_coins_id": [
      "world-liberty-financial",
      "usd1-wlfi",
      "official-trump"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50767/small/wlfi.png",
      "https://coin-images.coingecko.com/coins/images/54977/small/USD1_1000x1000_transparent.png",
      "https://coin-images.coingecko.com/coins/images/53746/small/trump.png"
    ],
    "volume_24h": 1135627918.258159,
    "updated_at": "2026-01-02T09:35:10.104Z"
  },
  {
    "id": "automated-market-maker-amm",
    "name": "Automated Market Maker (AMM)",
    "market_cap": 8198773902.993512,
    "market_cap_change_24h": 6.897212486522905,
    "content": "Automated market makers (AMMs) make use of liquidity pools containing 2 or more assets, and prices are derived based on the proportion of each asset in that pool as well as the mathematical function used. Orders through an AMM are executed automatically via a smart contract that will calculate the trade prices algorithmically, including any slippage from the trade execution.",
    "top_3_coins_id": [
      "uniswap",
      "pump-fun",
      "pancakeswap-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/67164/small/pump.jpg",
      "https://coin-images.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png"
    ],
    "volume_24h": 687933994.9618287,
    "updated_at": "2026-01-02T09:35:04.574Z"
  },
  {
    "id": "non-fungible-tokens-nft",
    "name": "NFT",
    "market_cap": 7938117988.010678,
    "market_cap_change_24h": 5.138663025931285,
    "content": "Non-fungible tokens (NFTs) are collectible elements that represent something unique and therefore are not mutually interchangeable. In other words, no non-fungible token is the same. NFT creators can also encrypt details such as rich metadata or secure file links allowing people to create all sorts of digital assets which are verifiable such as videos and songs.",
    "top_3_coins_id": [
      "render-token",
      "fetch-ai",
      "chiliz"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11636/small/rndr.png",
      "https://coin-images.coingecko.com/coins/images/5681/small/ASI.png",
      "https://coin-images.coingecko.com/coins/images/8834/small/CHZ_Token_updated.png"
    ],
    "volume_24h": 1232905743.971298,
    "updated_at": "2026-01-02T09:36:48.189Z"
  },
  {
    "id": "layer-0-l0",
    "name": "Layer 0 (L0)",
    "market_cap": 6872243709.626245,
    "market_cap_change_24h": 7.893462457736502,
    "content": "Layer 0 is the foundational infrastructure upon which multiple Layer 1 blockchains can be built.",
    "top_3_coins_id": [
      "polkadot",
      "internet-computer",
      "cosmos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12171/small/polkadot.jpg",
      "https://coin-images.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png",
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png"
    ],
    "volume_24h": 388226792.91126937,
    "updated_at": "2026-01-02T09:36:02.593Z"
  },
  {
    "id": "directed-acyclic-graph-dag",
    "name": "Directed Acyclic Graph (DAG)",
    "market_cap": 6724995706.62588,
    "market_cap_change_24h": 8.730720915117312,
    "content": "A DAG-based blockchain is a type of distributed ledger that uses a graph-like structure instead of a linear chain, allowing faster and parallel transaction processing by linking each transaction to multiple previous ones.",
    "top_3_coins_id": [
      "hedera-hashgraph",
      "kaspa",
      "iota"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3688/small/hbar.png",
      "https://coin-images.coingecko.com/coins/images/25751/small/kaspa-icon-exchanges.png",
      "https://coin-images.coingecko.com/coins/images/692/small/IOTA_Thumbnail_%281%29.png"
    ],
    "volume_24h": 138752672.97264162,
    "updated_at": "2026-01-02T09:36:42.489Z"
  },
  {
    "id": "gaming",
    "name": "Gaming (GameFi)",
    "market_cap": 6238053563.674691,
    "market_cap_change_24h": 2.803973226753827,
    "content": "GameFi combines blockchain technology, gaming, and decentralized finance (DeFi), allowing players to earn cryptocurrency and NFT rewards while also offering true ownership and control over in-game assets.",
    "top_3_coins_id": [
      "floki",
      "the-sandbox",
      "gala"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/12129/small/sandbox_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png"
    ],
    "volume_24h": 943647068.17062,
    "updated_at": "2026-01-02T09:35:09.012Z"
  },
  {
    "id": "liquid-staked-sol",
    "name": "Liquid Staked SOL",
    "market_cap": 5651075953.237755,
    "market_cap_change_24h": 3.160641626503205,
    "content": "Liquid staked SOL is a tokenized representation of staked SOL that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "jito-staked-sol",
      "binance-staked-sol",
      "jupiter-staked-sol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28046/small/JitoSOL-200.png",
      "https://coin-images.coingecko.com/coins/images/40132/small/bnsol.png",
      "https://coin-images.coingecko.com/coins/images/37482/small/jupsol.png"
    ],
    "volume_24h": 25040672.126062877,
    "updated_at": "2026-01-02T09:35:00.187Z"
  },
  {
    "id": "solana-meme-coins",
    "name": "Solana Meme",
    "market_cap": 5445646240.723244,
    "market_cap_change_24h": 6.37847905577367,
    "content": "Meme coins native to the Solana network.",
    "top_3_coins_id": [
      "official-trump",
      "bonk",
      "pudgy-penguins"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53746/small/trump.png",
      "https://coin-images.coingecko.com/coins/images/28600/small/bonk.jpg",
      "https://coin-images.coingecko.com/coins/images/52622/small/PUDGY_PENGUINS_PENGU_PFP.png"
    ],
    "volume_24h": 1069873830.560788,
    "updated_at": "2026-01-02T09:36:35.351Z"
  },
  {
    "id": "tokenized-commodities",
    "name": "Tokenized Commodities",
    "market_cap": 4777731568.4808445,
    "market_cap_change_24h": 1.6488507246146817,
    "content": "Tokenized Commodities refers to digital representation of commodities such as oil, gold, silver on a blockchain platform. ",
    "top_3_coins_id": [
      "tether-gold",
      "pax-gold",
      "kinesis-gold"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10481/small/Tether_Gold.png",
      "https://coin-images.coingecko.com/coins/images/9519/small/paxgold.png",
      "https://coin-images.coingecko.com/coins/images/29788/small/kau-currency-ticker.png"
    ],
    "volume_24h": 430388306.8006158,
    "updated_at": "2026-01-02T09:35:04.689Z"
  },
  {
    "id": "lending-borrowing",
    "name": "Lending/Borrowing Protocols",
    "market_cap": 4719789143.301412,
    "market_cap_change_24h": 3.232502188041736,
    "content": "Lending/borrowing protocols allow users to offer crypto loans by staking their assets in them without the need for a bank account. Users are given rewards, usually in the form of the protocol’s native token.",
    "top_3_coins_id": [
      "aave",
      "morpho",
      "syrup"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png",
      "https://coin-images.coingecko.com/coins/images/29837/small/Morpho-token-icon.png",
      "https://coin-images.coingecko.com/coins/images/51232/small/_syrup_token_logo.png"
    ],
    "volume_24h": 297142414.23973864,
    "updated_at": "2026-01-02T09:37:07.839Z"
  },
  {
    "id": "launchpad",
    "name": "Launchpad",
    "market_cap": 4657612031.558657,
    "market_cap_change_24h": 7.845273286920317,
    "content": "Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "pump-fun",
      "pancakeswap-token",
      "jupiter-exchange-solana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67164/small/pump.jpg",
      "https://coin-images.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/34188/small/jup.png"
    ],
    "volume_24h": 466394238.1595297,
    "updated_at": "2026-01-02T09:36:20.978Z"
  },
  {
    "id": "tokenized-gold",
    "name": "Tokenized Gold",
    "market_cap": 4409580319.241074,
    "market_cap_change_24h": 1.5481245921337812,
    "content": "Tokenized gold refers to digital representation of physical gold on a blockchain platform. These tokens are backed by an equivalent amount of real gold held in custody by the issuing institution.",
    "top_3_coins_id": [
      "tether-gold",
      "pax-gold",
      "kinesis-gold"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10481/small/Tether_Gold.png",
      "https://coin-images.coingecko.com/coins/images/9519/small/paxgold.png",
      "https://coin-images.coingecko.com/coins/images/29788/small/kau-currency-ticker.png"
    ],
    "volume_24h": 432031469.3020478,
    "updated_at": "2026-01-02T09:35:29.731Z"
  },
  {
    "id": "neobank",
    "name": "Neobank",
    "market_cap": 4128838751.533263,
    "market_cap_change_24h": 4.234182766076639,
    "content": "A neobank is a digital-only bank that operates online or through mobile apps without physical branches.",
    "top_3_coins_id": [
      "mantle",
      "ether-fi",
      "plasma"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30980/small/MNT_Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/35958/small/etherfi.jpeg",
      "https://coin-images.coingecko.com/coins/images/66489/small/Plasma-symbol-green-1.png"
    ],
    "volume_24h": 226932754.16134894,
    "updated_at": "2026-01-02T09:37:02.281Z"
  },
  {
    "id": "wallets",
    "name": "Wallets",
    "market_cap": 3530232730.013929,
    "market_cap_change_24h": 0.9064988381751784,
    "content": "Crypto wallets are digital tools that allow you to interact with blockchain networks to store and manage cryptocurrencies.",
    "top_3_coins_id": [
      "kaspa",
      "beldex",
      "telcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25751/small/kaspa-icon-exchanges.png",
      "https://coin-images.coingecko.com/coins/images/5111/small/Beldex.png",
      "https://coin-images.coingecko.com/coins/images/1899/small/tel.png"
    ],
    "volume_24h": 260063280.45481554,
    "updated_at": "2026-01-02T09:35:27.483Z"
  },
  {
    "id": "gambling",
    "name": "Gambling (GambleFi)",
    "market_cap": 3256662332.0283103,
    "market_cap_change_24h": 1.7330321116070562,
    "content": "GambleFi refers to decentralized gambling platforms and tokens leveraging blockchain technology and smart contracts.",
    "top_3_coins_id": [
      "rain",
      "rollbit-coin",
      "shuffle-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69134/small/Rain_logo_1_.png",
      "https://coin-images.coingecko.com/coins/images/24552/small/unziL6wO_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/35148/small/shuffle_token_200x200.png"
    ],
    "volume_24h": 75769973.33777738,
    "updated_at": "2026-01-02T09:35:54.585Z"
  },
  {
    "id": "bridged-usdc",
    "name": "Bridged USDC",
    "market_cap": 3243116522.6322036,
    "market_cap_change_24h": -0.12293103152076036,
    "content": "Bridged USDC refers to USDC that have been transferred from their native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "binance-bridged-usdc-bnb-smart-chain",
      "bridged-usdc-polygon-pos-bridge",
      "ibc-bridged-usdc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35220/small/USDC.jpg",
      "https://coin-images.coingecko.com/coins/images/33000/small/usdc_normal.png",
      "https://coin-images.coingecko.com/coins/images/38604/small/usdc.png"
    ],
    "volume_24h": 196348386.5401886,
    "updated_at": "2026-01-02T09:35:05.683Z"
  },
  {
    "id": "tokenized-t-bills",
    "name": "Tokenized Treasury Bills (T-Bills)",
    "market_cap": 3234108722.87823,
    "market_cap_change_24h": 0.26911361236270076,
    "content": "A Tokenized Treasury Bill (T-Bill) is a digital version of a U.S. government short-term debt security represented on a blockchain.",
    "top_3_coins_id": [
      "hashnote-usyc",
      "superstate-short-duration-us-government-securities-fund-ustb",
      "eutbl"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51054/small/Hashnote_SDYC_200x200.png",
      "https://coin-images.coingecko.com/coins/images/35012/small/ustb.jpeg",
      "https://coin-images.coingecko.com/coins/images/39657/small/EUTBL.png"
    ],
    "volume_24h": 1261512.6252333322,
    "updated_at": "2026-01-02T09:35:01.205Z"
  },
  {
    "id": "ai-agents",
    "name": "AI Agents",
    "market_cap": 3174462440.948098,
    "market_cap_change_24h": 3.4984613173775854,
    "content": "An AI agent is a smart computer program that can act on its own to achieve goals.",
    "top_3_coins_id": [
      "fetch-ai",
      "virtual-protocol",
      "pippin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5681/small/ASI.png",
      "https://coin-images.coingecko.com/coins/images/34057/small/LOGOMARK.png",
      "https://coin-images.coingecko.com/coins/images/51589/small/pippin_logo.png"
    ],
    "volume_24h": 486409593.06964266,
    "updated_at": "2026-01-02T09:36:52.332Z"
  },
  {
    "id": "binance-hodler-airdrops",
    "name": "Binance HODLer Airdrops",
    "market_cap": 3077266529.2069983,
    "market_cap_change_24h": 5.837209020725381,
    "content": "Binance HODLer Airdrops is an airdrop program by Binance. Users who subscribe to Simple Earn using BNB will receive airdropped tokens issued by projects with a large token circulating supply that intend to soon list on Binance.",
    "top_3_coins_id": [
      "pudgy-penguins",
      "plasma",
      "falcon-finance-ff"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52622/small/PUDGY_PENGUINS_PENGU_PFP.png",
      "https://coin-images.coingecko.com/coins/images/66489/small/Plasma-symbol-green-1.png",
      "https://coin-images.coingecko.com/coins/images/69121/small/ff.png"
    ],
    "volume_24h": 804341826.5458423,
    "updated_at": "2026-01-02T09:35:11.065Z"
  },
  {
    "id": "prediction-markets",
    "name": "Prediction Markets",
    "market_cap": 3003607025.979915,
    "market_cap_change_24h": 1.7254561903966201,
    "content": "A crypto prediction market is a marketplace where people can bet on the outcome of future events using crypto.",
    "top_3_coins_id": [
      "rain",
      "drift-protocol",
      "predictions"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69134/small/Rain_logo_1_.png",
      "https://coin-images.coingecko.com/coins/images/37509/small/DRIFT.png",
      "https://coin-images.coingecko.com/coins/images/70315/small/PRDT.png"
    ],
    "volume_24h": 75995559.46470001,
    "updated_at": "2026-01-02T09:35:15.738Z"
  },
  {
    "id": "play-to-earn",
    "name": "Play To Earn",
    "market_cap": 2940057510.2151823,
    "market_cap_change_24h": 6.058499939827468,
    "content": "Play to Earn games are built on the blockchain, giving players full control over their gaming accounts and related assets, which they can sell on exchanges or secondary marketplaces.",
    "top_3_coins_id": [
      "floki",
      "the-sandbox",
      "gala"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/12129/small/sandbox_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png"
    ],
    "volume_24h": 386784833.43497753,
    "updated_at": "2026-01-02T09:35:12.144Z"
  },
  {
    "id": "rollup",
    "name": "Rollup",
    "market_cap": 2919367032.8696876,
    "market_cap_change_24h": 7.376747065557734,
    "content": "Rollup is a layer 2 solution that aggregates and processes transactions outside of a main blockchain, before submitting them as a single batch, to enhance scalability and reduce fees.",
    "top_3_coins_id": [
      "arbitrum",
      "optimism",
      "starknet"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16547/small/arb.jpg",
      "https://coin-images.coingecko.com/coins/images/25244/small/Optimism.png",
      "https://coin-images.coingecko.com/coins/images/26433/small/starknet.png"
    ],
    "volume_24h": 314010541.441419,
    "updated_at": "2026-01-02T09:35:27.481Z"
  },
  {
    "id": "data-availability",
    "name": "Data Availability",
    "market_cap": 2914680124.303331,
    "market_cap_change_24h": 7.8488999682740355,
    "content": "Data availability on the blockchain ensures that all participants have the transaction data needed to verify blocks, even with resource limitations and scalability needs. Without it, independent verification crumbles, compromising the entire system. Data availability centric protocols aim to allow nodes to verify data availability more efficiently.",
    "top_3_coins_id": [
      "near",
      "celestia",
      "eigenlayer"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10365/small/near.jpg",
      "https://coin-images.coingecko.com/coins/images/31967/small/tia.jpg",
      "https://coin-images.coingecko.com/coins/images/37441/small/eigencloud.jpg"
    ],
    "volume_24h": 292828360.9699807,
    "updated_at": "2026-01-02T09:35:01.223Z"
  },
  {
    "id": "metaverse",
    "name": "Metaverse",
    "market_cap": 2873822799.0948567,
    "market_cap_change_24h": 10.768657418228193,
    "content": "The metaverse refers to a digital world where participants can interact with each other in a shared virtual reality.",
    "top_3_coins_id": [
      "render-token",
      "floki",
      "the-sandbox"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11636/small/rndr.png",
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/12129/small/sandbox_logo.jpg"
    ],
    "volume_24h": 402238357.96868074,
    "updated_at": "2026-01-02T09:36:50.254Z"
  },
  {
    "id": "binance-launchpad",
    "name": "Binance Launchpad",
    "market_cap": 2863316806.889888,
    "market_cap_change_24h": 5.263298488667495,
    "content": "Tokens and coins launched on Binance Launchpad, a platform that assists blockchain and crypto startups in raising funds.",
    "top_3_coins_id": [
      "fetch-ai",
      "injective-protocol",
      "bittorrent"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5681/small/ASI.png",
      "https://coin-images.coingecko.com/coins/images/12882/small/Other_200x200.png",
      "https://coin-images.coingecko.com/coins/images/22457/small/btt_logo.png"
    ],
    "volume_24h": 366855484.14531666,
    "updated_at": "2026-01-02T09:35:42.373Z"
  },
  {
    "id": "decentralized-options",
    "name": "Options",
    "market_cap": 2860207394.495747,
    "market_cap_change_24h": 1.601527036709332,
    "content": "Options refer to financial instruments that give holders the right, but not the obligation, to buy or sell a cryptocurrency at a predetermined price, known as the strike price, before a specific date, known as the expiry date. ",
    "top_3_coins_id": [
      "rain",
      "derive",
      "hegic"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69134/small/Rain_logo_1_.png",
      "https://coin-images.coingecko.com/coins/images/52889/small/Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/12454/small/new.png"
    ],
    "volume_24h": 63171685.52281485,
    "updated_at": "2026-01-02T09:36:12.214Z"
  },
  {
    "id": "binance-peg-tokens",
    "name": "Binance-Peg Tokens",
    "market_cap": 2820845979.77217,
    "market_cap_change_24h": 3.013934095978936,
    "content": "Binance-Peg Tokens are wrapped versions of cryptocurrencies pegged by Binance on a 1:1 ratio. ",
    "top_3_coins_id": [
      "binance-peg-weth",
      "binance-peg-dogecoin",
      "binance-peg-busd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39580/small/weth.png",
      "https://coin-images.coingecko.com/coins/images/15768/small/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/31273/small/new_binance-peg-busd.png"
    ],
    "volume_24h": 43111164.2112099,
    "updated_at": "2026-01-02T09:36:28.485Z"
  },
  {
    "id": "frog-themed-coins",
    "name": "Frog-Themed",
    "market_cap": 2802426212.226663,
    "market_cap_change_24h": 20.214441805521112,
    "content": "Meme coins which are inspired by frogs.",
    "top_3_coins_id": [
      "pepe",
      "ape-and-pepe",
      "based-brett"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29850/small/pepe-token.jpeg",
      "https://coin-images.coingecko.com/coins/images/39614/small/APEPE_200.png",
      "https://coin-images.coingecko.com/coins/images/35529/small/1000050750.png"
    ],
    "volume_24h": 1073109931.3033255,
    "updated_at": "2026-01-02T09:35:48.065Z"
  },
  {
    "id": "the-boy-s-club",
    "name": "The Boy’s Club",
    "market_cap": 2648478659.6535215,
    "market_cap_change_24h": 20.79966960363816,
    "content": "Meme coins which are inspired by The Boy's Club.",
    "top_3_coins_id": [
      "pepe",
      "ape-and-pepe",
      "based-brett"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29850/small/pepe-token.jpeg",
      "https://coin-images.coingecko.com/coins/images/39614/small/APEPE_200.png",
      "https://coin-images.coingecko.com/coins/images/35529/small/1000050750.png"
    ],
    "volume_24h": 1021579308.9009833,
    "updated_at": "2026-01-02T09:36:57.828Z"
  },
  {
    "id": "storage",
    "name": "Storage",
    "market_cap": 2515037459.807524,
    "market_cap_change_24h": 7.512712941582535,
    "content": "Storage protocols allow users to store their data on the blockchain network in a decentralized manner. This negates the need for a centralized storage host such as Amazon, OneDrive, DropBox, and others. This removes the issue of a single point of failure. Decentralized servers make use of independent nodes which in turn use spare storage space on computers. Users are able to rent out their spare storage on  In exchange for storage space, users are able to use a storage protocol’s token to pay for the service.",
    "top_3_coins_id": [
      "filecoin",
      "bittorrent",
      "arweave"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12817/small/filecoin.png",
      "https://coin-images.coingecko.com/coins/images/22457/small/btt_logo.png",
      "https://coin-images.coingecko.com/coins/images/4343/small/oRt6SiEN_400x400.jpg"
    ],
    "volume_24h": 372965387.0381782,
    "updated_at": "2026-01-02T09:36:25.347Z"
  },
  {
    "id": "bridged-weth",
    "name": "Bridged WETH",
    "market_cap": 2427900740.1692095,
    "market_cap_change_24h": 2.351171565882218,
    "content": "Bridged WETH refers to WETH that have been transferred from their native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "l2-standard-bridged-weth-base",
      "arbitrum-bridged-weth-arbitrum-one",
      "polygon-pos-bridged-weth-polygon-pos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39810/small/weth.png",
      "https://coin-images.coingecko.com/coins/images/39713/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/39708/small/WETH.PNG"
    ],
    "volume_24h": 467936868.6631,
    "updated_at": "2026-01-02T09:36:53.500Z"
  },
  {
    "id": "liquid-staked-btc",
    "name": "Liquid Staked BTC",
    "market_cap": 2418770964.2947097,
    "market_cap_change_24h": 1.8918299666598342,
    "content": "Liquid staked BTC is a tokenized representation of staked Bitcoin that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "lombard-staked-btc",
      "clbtc",
      "sbtc-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png",
      "https://coin-images.coingecko.com/coins/images/54164/small/clBTC.png",
      "https://coin-images.coingecko.com/coins/images/54285/small/sbtc-logo-orange-bg-white-circle-1000px_2.png"
    ],
    "volume_24h": 5510584.822897848,
    "updated_at": "2026-01-02T09:36:43.806Z"
  },
  {
    "id": "identity",
    "name": "Decentralized Identifier (DID)",
    "market_cap": 2387139659.7020946,
    "market_cap_change_24h": 6.571820392352502,
    "content": "Decentralized Identifier (DID) allows individuals or entities to create and manage their own identifiers independently of any centralized registry, identity provider, or intermediary. ",
    "top_3_coins_id": [
      "worldcoin-wld",
      "ethereum-name-service",
      "concordium"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31069/small/worldcoin.jpeg",
      "https://coin-images.coingecko.com/coins/images/19785/small/ENS.jpg",
      "https://coin-images.coingecko.com/coins/images/23547/small/Concordium_Symbol_Black.png"
    ],
    "volume_24h": 180206029.12823632,
    "updated_at": "2026-01-02T09:36:55.404Z"
  },
  {
    "id": "payment-solutions",
    "name": "Payment Solutions",
    "market_cap": 2384665674.8966317,
    "market_cap_change_24h": 2.331810786136669,
    "content": "Platforms or services that enable the acceptance and processing of cryptocurrency payments for goods and services.",
    "top_3_coins_id": [
      "telcoin",
      "stable-2",
      "zebec-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1899/small/tel.png",
      "https://coin-images.coingecko.com/coins/images/69242/small/stable-logotype-framed-square-light.png",
      "https://coin-images.coingecko.com/coins/images/37052/small/zbcn.jpeg"
    ],
    "volume_24h": 169369775.98108217,
    "updated_at": "2026-01-02T09:35:35.649Z"
  },
  {
    "id": "socialfi",
    "name": "SocialFi",
    "market_cap": 2361253896.1177073,
    "market_cap_change_24h": 7.560742916785055,
    "content": "SocialFi combines social media and DeFi. It aims to bring a more decentralized and user-centric approach to social media platforms, allowing users to monetize their interactions and content directly. ",
    "top_3_coins_id": [
      "pump-fun",
      "reallink",
      "zora"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67164/small/pump.jpg",
      "https://coin-images.coingecko.com/coins/images/20665/small/TGBfBt6Y2Dm3RHdNpZAdqywBsvfdysf834.jpeg",
      "https://coin-images.coingecko.com/coins/images/54693/small/zora.jpg"
    ],
    "volume_24h": 245493407.10281712,
    "updated_at": "2026-01-02T09:37:03.416Z"
  },
  {
    "id": "yield-bearing-tokens",
    "name": "Yield-Bearing",
    "market_cap": 2322038956.8728256,
    "market_cap_change_24h": 0.38619909034667366,
    "content": "Yield-bearing tokens generate passive income for holders by accruing rewards or interest over time, typically through staking, lending, or yield-generating protocols.",
    "top_3_coins_id": [
      "ondo-us-dollar-yield",
      "susdai",
      "savings-dai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31700/small/usdy_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/55861/small/sUSDai_Token_Full_Glyph.png",
      "https://coin-images.coingecko.com/coins/images/32254/small/sdai.png"
    ],
    "volume_24h": 5027452.043290498,
    "updated_at": "2026-01-02T09:36:54.387Z"
  },
  {
    "id": "pump-fun",
    "name": "Pump.fun Ecosystem",
    "market_cap": 2215950496.0922956,
    "market_cap_change_24h": 2.4183739187418998,
    "content": "Pump.fun Ecosystem consists of tokens launched via pump.fun.",
    "top_3_coins_id": [
      "pippin",
      "fartcoin",
      "alchemist-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51589/small/pippin_logo.png",
      "https://coin-images.coingecko.com/coins/images/50891/small/fart.jpg",
      "https://coin-images.coingecko.com/coins/images/52302/small/small-logo.png"
    ],
    "volume_24h": 404633508.8516758,
    "updated_at": "2026-01-02T09:35:44.884Z"
  },
  {
    "id": "internet-of-things-iot",
    "name": "Internet of Things (IOT)",
    "market_cap": 1898559039.6425524,
    "market_cap_change_24h": 5.9088830941802994,
    "content": "The Internet of Things (IoT) ecosystem consists of interconnected computing devices, with the ability to transfer data over a network without the need for any human interaction.",
    "top_3_coins_id": [
      "vechain",
      "jasmycoin",
      "helium"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1167/small/VET.png",
      "https://coin-images.coingecko.com/coins/images/13876/small/JASMY200x200.jpg",
      "https://coin-images.coingecko.com/coins/images/4284/small/helium_logo_use.png"
    ],
    "volume_24h": 72827939.86981913,
    "updated_at": "2026-01-02T09:36:07.940Z"
  },
  {
    "id": "mobile-mining",
    "name": "Mobile Mining",
    "market_cap": 1806011596.940306,
    "market_cap_change_24h": 0.6711925846464123,
    "content": "Mobile mining allows users to use a smartphone or mobile device to mine cryptocurrencies.",
    "top_3_coins_id": [
      "pi-network",
      "verus-coin",
      "ice"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54342/small/pi_network.jpg",
      "https://coin-images.coingecko.com/coins/images/6769/small/Screenshot_33.png",
      "https://coin-images.coingecko.com/coins/images/34674/small/ion-coingecko-200w.png"
    ],
    "volume_24h": 8096598.899998539,
    "updated_at": "2026-01-02T09:36:33.897Z"
  },
  {
    "id": "ai-framework",
    "name": "AI Framework",
    "market_cap": 1797687732.4685104,
    "market_cap_change_24h": 2.2442710983794734,
    "content": "An AI Framework/ AI agent framework is a set of tools, libraries, and methodologies designed to facilitate the development, management, and operation of AI agents. ",
    "top_3_coins_id": [
      "virtual-protocol",
      "pippin",
      "zero-gravity"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34057/small/LOGOMARK.png",
      "https://coin-images.coingecko.com/coins/images/51589/small/pippin_logo.png",
      "https://coin-images.coingecko.com/coins/images/69096/small/0G_1024x1024_Circular_Outlined.png"
    ],
    "volume_24h": 244801039.07623914,
    "updated_at": "2026-01-02T09:36:13.418Z"
  },
  {
    "id": "lp-tokens",
    "name": "LP Tokens",
    "market_cap": 1658429810.0712924,
    "market_cap_change_24h": 1.3021874941865486,
    "content": "",
    "top_3_coins_id": [
      "jupiter-perpetuals-liquidity-provider-token",
      "resolv-rlp",
      "maxi-payfi-strategy-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33094/small/jlp.png",
      "https://coin-images.coingecko.com/coins/images/40017/small/orangeLogo..png",
      "https://coin-images.coingecko.com/coins/images/55272/small/mPST.png"
    ],
    "volume_24h": 13003824.538489563,
    "updated_at": "2026-01-02T09:36:28.487Z"
  },
  {
    "id": "gaming-blockchains",
    "name": "Gaming Blockchains",
    "market_cap": 1567360060.3389843,
    "market_cap_change_24h": 5.5301804117587565,
    "content": "Gaming blockchains refer to blockchain platforms specialized in gaming.",
    "top_3_coins_id": [
      "immutable-x",
      "apecoin",
      "wemix-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/17233/small/immutableX-symbol-BLK-RGB.png",
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png",
      "https://coin-images.coingecko.com/coins/images/12998/small/wemixcoin_color_200.png"
    ],
    "volume_24h": 202753970.92841357,
    "updated_at": "2026-01-02T09:35:51.175Z"
  },
  {
    "id": "ai-meme-coins",
    "name": "AI Meme",
    "market_cap": 1561359084.0692174,
    "market_cap_change_24h": 3.7043808229325363,
    "content": "Meme coins related or inspired by AI. They either leverage AI-powered agents, are created using AI tools, or derive their concept from AI technologies and trends.",
    "top_3_coins_id": [
      "pippin",
      "fartcoin",
      "ribbita-by-virtuals"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51589/small/pippin_logo.png",
      "https://coin-images.coingecko.com/coins/images/50891/small/fart.jpg",
      "https://coin-images.coingecko.com/coins/images/54970/small/Untitled_design.png"
    ],
    "volume_24h": 256299400.11474594,
    "updated_at": "2026-01-02T09:36:56.537Z"
  },
  {
    "id": "binance-wallet-ido",
    "name": "Binance Wallet IDO",
    "market_cap": 1550459531.5430012,
    "market_cap_change_24h": -0.04225384956149858,
    "content": "Tokens and coins launched on Binance Wallet IDO.",
    "top_3_coins_id": [
      "myx-finance",
      "river",
      "irys"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55506/small/myx.jpg",
      "https://coin-images.coingecko.com/coins/images/69318/small/river-token.png",
      "https://coin-images.coingecko.com/coins/images/70808/small/irys.png"
    ],
    "volume_24h": 346273878.99144834,
    "updated_at": "2026-01-02T09:35:12.042Z"
  },
  {
    "id": "sidechain",
    "name": "SideChain",
    "market_cap": 1466429629.893393,
    "market_cap_change_24h": 2.966843263569578,
    "content": "A sidechain is a separate blockchain that runs parallel to a main blockchain. It allows transactions and applications to operate independently to enhance scalability and functionality.",
    "top_3_coins_id": [
      "blockstack",
      "gnosis",
      "merlin-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2069/small/Stacks_Logo_png.png",
      "https://coin-images.coingecko.com/coins/images/662/small/logo_square_simple_300px.png",
      "https://coin-images.coingecko.com/coins/images/37118/small/merlin.jpeg"
    ],
    "volume_24h": 49937946.1831868,
    "updated_at": "2026-01-02T09:36:18.807Z"
  },
  {
    "id": "masternodes",
    "name": "Masternodes",
    "market_cap": 1455816121.7716858,
    "market_cap_change_24h": 1.0396766857314945,
    "content": "Masternodes are needed to verify new blocks in certain cryptocurrencies. However, unlike other nodes, they do not add new blocks to the network. In order to maintain a masternode, one would need to hold a certain amount of the protocol’s cryptocurrency, and it’s usually a significant amount. In return for operating a masternode, the operator is rewarded with the native currency.",
    "top_3_coins_id": [
      "beldex",
      "dash",
      "ontology"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5111/small/Beldex.png",
      "https://coin-images.coingecko.com/coins/images/19/small/dash-logo.png",
      "https://coin-images.coingecko.com/coins/images/3447/small/ONT.png"
    ],
    "volume_24h": 114239183.27332966,
    "updated_at": "2026-01-02T09:36:12.251Z"
  },
  {
    "id": "bitcoin-layer-2",
    "name": "Bitcoin Sidechains",
    "market_cap": 1446712937.1047664,
    "market_cap_change_24h": 3.8757541702796523,
    "content": "Bitcoin Sidechains are designed to enhance the Bitcoin blockchain's capacity by creating a new layer that improves transaction processing speed by handling transactions off the primary chain.",
    "top_3_coins_id": [
      "blockstack",
      "starknet",
      "merlin-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2069/small/Stacks_Logo_png.png",
      "https://coin-images.coingecko.com/coins/images/26433/small/starknet.png",
      "https://coin-images.coingecko.com/coins/images/37118/small/merlin.jpeg"
    ],
    "volume_24h": 82533916.15930101,
    "updated_at": "2026-01-02T09:35:05.639Z"
  },
  {
    "id": "ai-agent-launchpad",
    "name": "AI Agent Launchpad",
    "market_cap": 1442623510.025856,
    "market_cap_change_24h": 7.218851325528481,
    "content": "Platforms that allow users to deploy and launch their own AI agents.",
    "top_3_coins_id": [
      "fetch-ai",
      "virtual-protocol",
      "stp-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5681/small/ASI.png",
      "https://coin-images.coingecko.com/coins/images/34057/small/LOGOMARK.png",
      "https://coin-images.coingecko.com/coins/images/8713/small/awe-network.jpg"
    ],
    "volume_24h": 216267593.5139498,
    "updated_at": "2026-01-02T09:36:23.142Z"
  },
  {
    "id": "analytics",
    "name": "Analytics",
    "market_cap": 1390509383.6349113,
    "market_cap_change_24h": 2.706590923935339,
    "content": "Projects that provide advanced insights and charting tools to track historical token prices, real-time trades, volume, and many more.",
    "top_3_coins_id": [
      "the-graph",
      "sosovalue",
      "kaito"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13397/small/Graph_Token.png",
      "https://coin-images.coingecko.com/coins/images/53919/small/soso.jpg",
      "https://coin-images.coingecko.com/coins/images/54411/small/Qm4DW488_400x400.jpg"
    ],
    "volume_24h": 187687308.38959756,
    "updated_at": "2026-01-02T09:36:44.695Z"
  },
  {
    "id": "morpho-ecosystem",
    "name": "Morpho Ecosystem",
    "market_cap": 1354213033.1663144,
    "market_cap_change_24h": 0.7614068237582303,
    "content": "Vault tokens within the Morpho Protocol.",
    "top_3_coins_id": [
      "morpho",
      "steakhouse-usdc-morpho-vault",
      "gauntlet-usdc-prime-morpho-vault"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29837/small/Morpho-token-icon.png",
      "https://coin-images.coingecko.com/coins/images/51473/small/steakUSDC.png",
      "https://coin-images.coingecko.com/coins/images/51338/small/usdc.png"
    ],
    "volume_24h": 10056525.593575485,
    "updated_at": "2026-01-02T09:36:54.389Z"
  },
  {
    "id": "gaming-utility-token",
    "name": "Gaming Utility Token",
    "market_cap": 1232808698.4326086,
    "market_cap_change_24h": 6.503000656327605,
    "content": "Gaming Utility Tokens provide holders with benefits such as making in-game purchases, accessing special content, participating in events, or earning rewards.",
    "top_3_coins_id": [
      "the-sandbox",
      "apecoin",
      "axie-infinity"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12129/small/sandbox_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png",
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png"
    ],
    "volume_24h": 239567457.2378029,
    "updated_at": "2026-01-02T09:35:12.110Z"
  },
  {
    "id": "bridged-wbtc",
    "name": "Bridged WBTC",
    "market_cap": 1230087083.7838204,
    "market_cap_change_24h": 1.691497423556895,
    "content": "Bridged WBTC refers to WBTC that have been transferred from their native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "arbitrum-bridged-wbtc-arbitrum-one",
      "polygon-bridged-wbtc-polygon-pos",
      "vaultbridge-bridged-wbtc-katana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39532/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/39530/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/67045/small/btc.png"
    ],
    "volume_24h": 35306966.86386569,
    "updated_at": "2026-01-02T09:35:22.941Z"
  },
  {
    "id": "politifi",
    "name": "PolitiFi",
    "market_cap": 1167124834.3386905,
    "market_cap_change_24h": 2.1686217419380935,
    "content": "Political Finance (PolitiFi) are meme coins inspired by political figures.\r\n\r\nNote: Most of these tokens have no official affiliation to any political figures.",
    "top_3_coins_id": [
      "official-trump",
      "melania-meme",
      "constitutiondao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53746/small/trump.png",
      "https://coin-images.coingecko.com/coins/images/53775/small/melania-meme.png",
      "https://coin-images.coingecko.com/coins/images/20612/small/GN_UVm3d_400x400.jpg"
    ],
    "volume_24h": 246343753.19540396,
    "updated_at": "2026-01-02T09:36:16.561Z"
  },
  {
    "id": "airdropped-tokens-by-nft-projects",
    "name": "Airdropped Tokens by NFT Projects",
    "market_cap": 1156151855.5863776,
    "market_cap_change_24h": 9.977852563635818,
    "content": "Airdropped tokens by NFT Projects refer to tokens distributed by NFT projects as part of their community engagement or ecosystem expansion initiatives. Airdrops are often tied to ownership of specific NFT collections or eligibility within certain user groups.",
    "top_3_coins_id": [
      "pudgy-penguins",
      "loaded-lions",
      "apecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52622/small/PUDGY_PENGUINS_PENGU_PFP.png",
      "https://coin-images.coingecko.com/coins/images/54686/small/_LION_Token_Artwork.png",
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png"
    ],
    "volume_24h": 208074435.8482159,
    "updated_at": "2026-01-02T09:35:26.398Z"
  },
  {
    "id": "name-service",
    "name": "Name Service",
    "market_cap": 1147276872.9957943,
    "market_cap_change_24h": 1.820137369442516,
    "content": "Name Service is a decentralized naming system that allows users to map human-readable domain names to machine-readable information.",
    "top_3_coins_id": [
      "beldex",
      "ethereum-name-service",
      "bonfida"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5111/small/Beldex.png",
      "https://coin-images.coingecko.com/coins/images/19785/small/ENS.jpg",
      "https://coin-images.coingecko.com/coins/images/13395/small/bonfida.png"
    ],
    "volume_24h": 34400136.88538987,
    "updated_at": "2026-01-02T09:35:22.090Z"
  },
  {
    "id": "liquid-staking-governance-tokens",
    "name": "Liquid Staking Governance Tokens",
    "market_cap": 1114799599.2957394,
    "market_cap_change_24h": 5.84479733055268,
    "content": "Liquid Staking Governance Tokens facilitate decision-making and policy formation in Liquid Staking Token Protocols, allowing holders to influence asset allocation and platform strategy.",
    "top_3_coins_id": [
      "lido-dao",
      "jito-governance-token",
      "ankr"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13573/small/Lido_DAO.png",
      "https://coin-images.coingecko.com/coins/images/33228/small/jto.png",
      "https://coin-images.coingecko.com/coins/images/4324/small/Ankr_Blue_Symbol.png"
    ],
    "volume_24h": 92299308.37473506,
    "updated_at": "2026-01-02T09:36:14.400Z"
  },
  {
    "id": "ip-meme",
    "name": "IP Meme",
    "market_cap": 1095597827.9352896,
    "market_cap_change_24h": 11.810928387327523,
    "content": "Meme projects tied to verifiable IP assets.",
    "top_3_coins_id": [
      "pudgy-penguins",
      "apecoin",
      "cat-in-a-dogs-world"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52622/small/PUDGY_PENGUINS_PENGU_PFP.png",
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png",
      "https://coin-images.coingecko.com/coins/images/36440/small/MEW.png"
    ],
    "volume_24h": 262500742.11194852,
    "updated_at": "2026-01-02T09:31:52.199Z"
  },
  {
    "id": "dex-aggregator",
    "name": "Dex Aggregator",
    "market_cap": 1077878682.6157498,
    "market_cap_change_24h": 6.723610655751309,
    "content": "A DEX aggregator is designed to enhance the efficiency and accessibility of cryptocurrency trading. It searches across multiple decentralized exchanges (DEXs) to combine their liquidity, helping users avoid slippage on large orders, lower trading fees, and secure the best prices for tokens.",
    "top_3_coins_id": [
      "jupiter-exchange-solana",
      "1inch",
      "home"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34188/small/jup.png",
      "https://coin-images.coingecko.com/coins/images/13469/small/1inch-logo.jpeg",
      "https://coin-images.coingecko.com/coins/images/54873/small/defi-app.png"
    ],
    "volume_24h": 97792790.78912325,
    "updated_at": "2026-01-02T09:35:47.011Z"
  },
  {
    "id": "ai-applications",
    "name": "AI Applications",
    "market_cap": 1074880346.934263,
    "market_cap_change_24h": 4.811450319301212,
    "content": "",
    "top_3_coins_id": [
      "pieverse",
      "alchemist-ai",
      "chainopera-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68773/small/pieverse.png",
      "https://coin-images.coingecko.com/coins/images/52302/small/small-logo.png",
      "https://coin-images.coingecko.com/coins/images/69447/small/coai.png"
    ],
    "volume_24h": 189937146.15168047,
    "updated_at": "2026-01-02T09:35:36.713Z"
  },
  {
    "id": "parallel-evm",
    "name": "Parallelized EVM",
    "market_cap": 1072660741.5597972,
    "market_cap_change_24h": 7.642844592723732,
    "content": "Parallel EVM refers to the capability of processing and executing multiple blockchain transactions simultaneously rather than in a sequential manner.",
    "top_3_coins_id": [
      "sei-network",
      "monad",
      "reactive-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28205/small/Sei_Logo_-_Transparent.png",
      "https://coin-images.coingecko.com/coins/images/38927/small/mon.png",
      "https://coin-images.coingecko.com/coins/images/54415/small/Symbol_ColorBlack_H32_%281%29.png"
    ],
    "volume_24h": 246938911.18978113,
    "updated_at": "2026-01-02T09:31:16.273Z"
  },
  {
    "id": "algorithmic-stablecoin",
    "name": "Algorithmic Stablecoin",
    "market_cap": 998585321.3589523,
    "market_cap_change_24h": 0.925058747984874,
    "content": "An algorithmic stablecoin is a type of stablecoin that maintains its peg to a specific value, such as a fiat currency or other assets through algorithmic mechanisms. These mechanisms adjust the supply of the stablecoin based on market demand often by issuing more coins when the price is above the peg and buying back or burning coins when the price is below the peg.",
    "top_3_coins_id": [
      "usdd",
      "celo-dollar",
      "hylo-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25380/small/UUSD.jpg",
      "https://coin-images.coingecko.com/coins/images/13161/small/icon-celo-dollar-color-1000-circle-cropped.png",
      "https://coin-images.coingecko.com/coins/images/69284/small/hyusd.png"
    ],
    "volume_24h": 7407579.614405646,
    "updated_at": "2026-01-02T09:37:02.269Z"
  },
  {
    "id": "aave-tokens",
    "name": "Aave Tokens",
    "market_cap": 944339020.849854,
    "market_cap_change_24h": 2.1588596248928495,
    "content": "Aave Tokens are balance tokens on the Aave Protocol which represents a lending balance on the Aave money market.",
    "top_3_coins_id": [
      "staked-aave",
      "wrapped-aave-ethereum-usdc",
      "wrapped-aave-ethereum-usdt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70936/small/7278.png",
      "https://coin-images.coingecko.com/coins/images/68142/small/waEthusdc_64.png",
      "https://coin-images.coingecko.com/coins/images/68140/small/waEthusdt_64.png"
    ],
    "volume_24h": 65176752.23770383,
    "updated_at": "2026-01-02T09:35:16.658Z"
  },
  {
    "id": "liquid-restaking-governance-token",
    "name": "Liquid Restaking Governance Tokens",
    "market_cap": 896211035.0161602,
    "market_cap_change_24h": 9.58191184375303,
    "content": "Liquid Restaking Governance Tokens facilitate decision-making and policy formation in Liquid Restaking Token Protocols, allowing holders to influence asset allocation and platform strategy.",
    "top_3_coins_id": [
      "ether-fi",
      "pendle",
      "kernel-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35958/small/etherfi.jpeg",
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/54326/small/Kernel_token_logo_2x.png"
    ],
    "volume_24h": 97617116.74394561,
    "updated_at": "2026-01-02T09:36:00.297Z"
  },
  {
    "id": "telegram_apps",
    "name": "Telegram Apps",
    "market_cap": 862593924.004664,
    "market_cap_change_24h": -0.9938260812274107,
    "content": "Applications built on the Telegram platform that integrate cryptocurrency or blockchain technology.",
    "top_3_coins_id": [
      "floki",
      "audiera",
      "gamebuild"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/70428/small/audiera.png",
      "https://coin-images.coingecko.com/coins/images/37789/small/GameBuild_Logo_Asset_250808_Icon_Blue_White.png"
    ],
    "volume_24h": 189944431.91882327,
    "updated_at": "2026-01-02T09:35:29.845Z"
  },
  {
    "id": "curve-ecosystem",
    "name": "Curve Ecosystem",
    "market_cap": 853698676.4311148,
    "market_cap_change_24h": 9.329936520993765,
    "content": "Interconnected platforms and services built around Curve Finance.",
    "top_3_coins_id": [
      "curve-dao-token",
      "convex-finance",
      "frax-share"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12124/small/Curve.png",
      "https://coin-images.coingecko.com/coins/images/15585/small/convex.png",
      "https://coin-images.coingecko.com/coins/images/13423/small/frax.png"
    ],
    "volume_24h": 64472497.392720014,
    "updated_at": "2026-01-02T09:35:37.655Z"
  },
  {
    "id": "modular-blockchain",
    "name": "Modular Blockchain",
    "market_cap": 832871292.8765309,
    "market_cap_change_24h": 7.52737363594727,
    "content": "A modular blockchain is a type of blockchain architecture that separates the core functions of a blockchain into distinct modules or layers. Each module is designed to handle specific tasks independently.",
    "top_3_coins_id": [
      "celestia",
      "movement",
      "skale"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31967/small/tia.jpg",
      "https://coin-images.coingecko.com/coins/images/39345/small/movement-testnet-token.png",
      "https://coin-images.coingecko.com/coins/images/13245/small/SKALE_token_300x300.png"
    ],
    "volume_24h": 110962803.22976166,
    "updated_at": "2026-01-02T09:36:09.080Z"
  },
  {
    "id": "sports",
    "name": "Sports",
    "market_cap": 832053188.3318013,
    "market_cap_change_24h": -0.9165952783144939,
    "content": "These projects have introduced a new way for sports teams to engage with their fans and has made it easier for ordinary sports fans to show their support to their favorite teams and players. \r\nWith Fan Tokens and NFTs, fans have the power to influence their favourite sports teams in minor decisions and enter an exclusive club of like-minded supporters and VIP benefits.",
    "top_3_coins_id": [
      "chiliz",
      "flow",
      "og-fan-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/8834/small/CHZ_Token_updated.png",
      "https://coin-images.coingecko.com/coins/images/13446/small/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png",
      "https://coin-images.coingecko.com/coins/images/11663/small/OG.png"
    ],
    "volume_24h": 243702564.64167318,
    "updated_at": "2026-01-02T09:36:24.196Z"
  },
  {
    "id": "tokenized-treasury-bonds-t-bonds",
    "name": "Tokenized Treasury Bonds (T-Bonds)",
    "market_cap": 824306325.498084,
    "market_cap_change_24h": 0.02475566727059715,
    "content": "A Tokenized Treasury Bond (T-Bond) is a digital version of a U.S. government debt security represented on a blockchain. ",
    "top_3_coins_id": [
      "ousg",
      "backed-ib01-treasury-bond-0-1yr",
      "backed-ibta-treasury-bond-1-3yr"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29023/small/OUSG.png",
      "https://coin-images.coingecko.com/coins/images/31755/small/200p_bIB01_3.png",
      "https://coin-images.coingecko.com/coins/images/31880/small/200p_bIBTA_3.png"
    ],
    "volume_24h": 12812.984985593426,
    "updated_at": "2026-01-02T09:36:26.390Z"
  },
  {
    "id": "us-treasury-backed-stablecoin",
    "name": "US Treasury-backed Stablecoin",
    "market_cap": 811949823.7436625,
    "market_cap_change_24h": 0.3224423439017091,
    "content": "A stablecoin that is 1:1 backed by U.S. Treasuries. This includes direct holdings of Treasury bills (T-bills), short-maturity Treasury notes (T-Notes), and repurchase agreements (repos) that are fully collateralized by U.S. Treasuries.",
    "top_3_coins_id": [
      "ondo-us-dollar-yield",
      "openeden-open-dollar",
      "noble-dollar-usdn"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31700/small/usdy_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/53750/small/USDO_LOGO-white.png",
      "https://coin-images.coingecko.com/coins/images/55257/small/USDN.png"
    ],
    "volume_24h": 789380.8415422435,
    "updated_at": "2026-01-02T09:35:14.512Z"
  },
  {
    "id": "bittensor-subnets",
    "name": "Bittensor Subnets",
    "market_cap": 791772863.0367463,
    "market_cap_change_24h": 11.522019209307842,
    "content": "Subnets on Bittensor are specialized mini-networks dedicated to specific AI tasks. In each subnet, models (miners) compete to produce high-quality outputs, and their performance is evaluated by validators who assign rankings and allocate TAO rewards accordingly.",
    "top_3_coins_id": [
      "chutes",
      "celium",
      "ridges-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66308/small/chutes.jpg",
      "https://coin-images.coingecko.com/coins/images/66328/small/lium_Icon_FullColor_500x500.png",
      "https://coin-images.coingecko.com/coins/images/66309/small/62.jpg"
    ],
    "volume_24h": 12869554.342857644,
    "updated_at": "2026-01-02T09:35:30.929Z"
  },
  {
    "id": "btcfi",
    "name": "BTCfi Protocol",
    "market_cap": 788115212.0455009,
    "market_cap_change_24h": 5.530215631856076,
    "content": "BTCfi Protocol refers to DeFi protocols built on or around the Bitcoin ecosystem. It aims to bring DeFi activities such as lending, borrowing, and yield farming to Bitcoin holders.",
    "top_3_coins_id": [
      "pendle",
      "lombard-protocol",
      "threshold-network-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/68404/small/bard.png",
      "https://coin-images.coingecko.com/coins/images/22228/small/nFPNiSbL_400x400.jpg"
    ],
    "volume_24h": 110701052.14622955,
    "updated_at": "2026-01-02T09:35:31.965Z"
  },
  {
    "id": "murad-picks",
    "name": "Murad Picks",
    "market_cap": 781120376.3141111,
    "market_cap_change_24h": 11.193888179751179,
    "content": "Tokens promoted by a memecoin KOL @MustStopMurad.",
    "top_3_coins_id": [
      "spx6900",
      "mog-coin",
      "popcat"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31401/small/centeredcoin_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/31059/small/MOG_LOGO_200x200.png",
      "https://coin-images.coingecko.com/coins/images/33760/small/image.jpg"
    ],
    "volume_24h": 53742306.90137277,
    "updated_at": "2026-01-02T09:36:09.036Z"
  },
  {
    "id": "virtuals-protocol-ecosystem",
    "name": "Virtuals Protocol Ecosystem",
    "market_cap": 775562724.2947125,
    "market_cap_change_24h": 8.971173642798178,
    "content": "",
    "top_3_coins_id": [
      "virtual-protocol",
      "ribbita-by-virtuals",
      "aixbt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34057/small/LOGOMARK.png",
      "https://coin-images.coingecko.com/coins/images/54970/small/Untitled_design.png",
      "https://coin-images.coingecko.com/coins/images/51784/small/3.png"
    ],
    "volume_24h": 111692645.7709406,
    "updated_at": "2026-01-02T09:36:45.010Z"
  },
  {
    "id": "robotics",
    "name": "Robotics",
    "market_cap": 760971562.9880263,
    "market_cap_change_24h": 7.3971470515794095,
    "content": "",
    "top_3_coins_id": [
      "virtual-protocol",
      "iotex",
      "geodnet"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34057/small/LOGOMARK.png",
      "https://coin-images.coingecko.com/coins/images/3334/small/20250731-171811.png",
      "https://coin-images.coingecko.com/coins/images/31608/small/Circular_White.png"
    ],
    "volume_24h": 65513455.95660962,
    "updated_at": "2026-01-02T09:35:02.331Z"
  },
  {
    "id": "ip",
    "name": "IP",
    "market_cap": 758425746.783715,
    "market_cap_change_24h": 20.269569689031155,
    "content": "Intellectual property (IP) related crypto projects leverage blockchain technology to tokenize and manage intellectual property, enabling transparent ownership, automated royalties, and decentralized marketplaces for creators and investors.",
    "top_3_coins_id": [
      "story-2",
      "camp-network",
      "aria-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54035/small/Transparent_bg.png",
      "https://coin-images.coingecko.com/coins/images/68465/small/camp.png",
      "https://coin-images.coingecko.com/coins/images/70388/small/logo-abberation-token-white.png"
    ],
    "volume_24h": 312649379.923865,
    "updated_at": "2026-01-02T09:37:05.393Z"
  },
  {
    "id": "vpn",
    "name": "VPN",
    "market_cap": 756261004.9142135,
    "market_cap_change_24h": 0.6538015090270244,
    "content": "A Virtual Private Network (VPN) is a technology that creates an encrypted connection, allowing users to securely access and transmit data as though their devices were directly connected to a private network.",
    "top_3_coins_id": [
      "beldex",
      "nym",
      "sentinel"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5111/small/Beldex.png",
      "https://coin-images.coingecko.com/coins/images/24488/small/NYM_Token.png",
      "https://coin-images.coingecko.com/coins/images/14879/small/200x200.png"
    ],
    "volume_24h": 11431023.612203134,
    "updated_at": "2026-01-02T09:36:15.518Z"
  },
  {
    "id": "entertainment",
    "name": "Entertainment",
    "market_cap": 730756899.5638953,
    "market_cap_change_24h": -1.0860355341963275,
    "content": "Projects that are specifically designed to be used within the entertainment sector, which may include areas such as music, film, gaming, and other forms of digital media.",
    "top_3_coins_id": [
      "decentraland",
      "ravedao",
      "enjincoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/878/small/decentraland-mana.png",
      "https://coin-images.coingecko.com/coins/images/70544/small/coin.jpeg",
      "https://coin-images.coingecko.com/coins/images/1102/small/Symbol_Only_-_Purple.png"
    ],
    "volume_24h": 187938228.3025178,
    "updated_at": "2026-01-02T09:36:05.584Z"
  },
  {
    "id": "gaming-governance-token",
    "name": "Gaming Governance Token",
    "market_cap": 726068342.7413279,
    "market_cap_change_24h": 6.3744752833302805,
    "content": "Gaming Governance Token gives holders the right to participate in development and decision making process of the game.",
    "top_3_coins_id": [
      "apecoin",
      "axie-infinity",
      "illuvium"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png",
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png",
      "https://coin-images.coingecko.com/coins/images/14468/small/logo-200x200.png"
    ],
    "volume_24h": 230275784.52511102,
    "updated_at": "2026-01-02T09:36:04.599Z"
  },
  {
    "id": "mev-protection",
    "name": "MEV Protection",
    "market_cap": 722606616.3107024,
    "market_cap_change_24h": 2.8846603210992954,
    "content": "MEV (Maximal Extractable Value) protection is a set of rules and mechanisms designed to prevent or mitigate the negative impacts of MEV in decentralized finance (DeFi) environments.",
    "top_3_coins_id": [
      "gnosis",
      "cow-protocol",
      "railgun"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/662/small/logo_square_simple_300px.png",
      "https://coin-images.coingecko.com/coins/images/24384/small/CoW-token_logo.png",
      "https://coin-images.coingecko.com/coins/images/16840/small/railgun.jpeg"
    ],
    "volume_24h": 38467191.81535191,
    "updated_at": "2026-01-02T09:36:11.140Z"
  },
  {
    "id": "cat-themed-coins",
    "name": "Cat-Themed",
    "market_cap": 695029914.8346531,
    "market_cap_change_24h": 9.84071922889524,
    "content": "Meme coins which are inspired by cat.",
    "top_3_coins_id": [
      "toshi",
      "mog-coin",
      "popcat"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31126/small/Toshi_Logo_-_Circular.png",
      "https://coin-images.coingecko.com/coins/images/31059/small/MOG_LOGO_200x200.png",
      "https://coin-images.coingecko.com/coins/images/33760/small/image.jpg"
    ],
    "volume_24h": 99480794.90727052,
    "updated_at": "2026-01-02T09:36:58.840Z"
  },
  {
    "id": "account-abstraction",
    "name": "Account Abstraction",
    "market_cap": 693674121.3734767,
    "market_cap_change_24h": 2.4782636597490306,
    "content": "Account abstraction aims to simplify the way users interact with dApps by doing away with the complexities of gas fees and transaction management.",
    "top_3_coins_id": [
      "trust-wallet-token",
      "iotex",
      "home"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11085/small/Trust.png",
      "https://coin-images.coingecko.com/coins/images/3334/small/20250731-171811.png",
      "https://coin-images.coingecko.com/coins/images/54873/small/defi-app.png"
    ],
    "volume_24h": 77687807.86192185,
    "updated_at": "2026-01-02T09:35:21.095Z"
  },
  {
    "id": "bridged-dai",
    "name": "Bridged DAI",
    "market_cap": 689194979.0817873,
    "market_cap_change_24h": -0.14822874901969915,
    "content": "Bridged DAI refers to DAI that has been transferred from its native blockchain to a different blockchain through \"bridging'.",
    "top_3_coins_id": [
      "polygon-pos-bridged-dai-polygon-pos",
      "makerdao-arbitrum-bridged-dai-arbitrum-one",
      "makerdao-optimism-bridged-dai-optimism"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39787/small/dai.png",
      "https://coin-images.coingecko.com/coins/images/39790/small/dai.png",
      "https://coin-images.coingecko.com/coins/images/39818/small/dai.png"
    ],
    "volume_24h": 43292656.06626613,
    "updated_at": "2026-01-02T09:35:24.289Z"
  },
  {
    "id": "eur-stablecoin",
    "name": "EUR Stablecoin",
    "market_cap": 685264657.9106975,
    "market_cap_change_24h": 0.12249051709770974,
    "content": "A EUR stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Euro.",
    "top_3_coins_id": [
      "euro-coin",
      "stasis-eurs",
      "societe-generale-forge-eurcv"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26045/small/euro.png",
      "https://coin-images.coingecko.com/coins/images/5164/small/EURS_300x300.png",
      "https://coin-images.coingecko.com/coins/images/33415/small/eurcv_%281%29.png"
    ],
    "volume_24h": 38413240.096503064,
    "updated_at": "2026-01-02T09:35:49.140Z"
  },
  {
    "id": "defai",
    "name": "DeFAI",
    "market_cap": 685212500.6848372,
    "market_cap_change_24h": 3.814858273050742,
    "content": "DeFAI or AIFI projects leverage AI to streamline and automate DeFi activities such as trading, staking, yield farming, market analysis, and investment optimization.",
    "top_3_coins_id": [
      "ribbita-by-virtuals",
      "derive",
      "everipedia"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54970/small/Untitled_design.png",
      "https://coin-images.coingecko.com/coins/images/52889/small/Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/5010/small/iq_logo_1.png"
    ],
    "volume_24h": 109643081.26595905,
    "updated_at": "2026-01-02T09:36:08.920Z"
  },
  {
    "id": "liquid-staked-hype",
    "name": "Liquid Staked HYPE\t",
    "market_cap": 680399853.6293303,
    "market_cap_change_24h": -3.9593974383340793,
    "content": "Liquid staked HYPE is a tokenized representation of staked HYPE that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "kinetic-staked-hype",
      "staked-hype",
      "kinetiq-markets-lst"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67388/small/khype.png",
      "https://coin-images.coingecko.com/coins/images/54509/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/71042/small/kmhype.png"
    ],
    "volume_24h": 7461257.335584548,
    "updated_at": "2026-01-02T09:36:56.530Z"
  },
  {
    "id": "rpg",
    "name": "RPG",
    "market_cap": 662266542.4980336,
    "market_cap_change_24h": 8.941517278014526,
    "content": "Role-playing game (RPG) is a video game genre where players control a single or group of character in a fictional world. RPG games typically include elements of storytelling, character development, exploration, quests, and inventory management.",
    "top_3_coins_id": [
      "floki",
      "illuvium",
      "big-time"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/14468/small/logo-200x200.png",
      "https://coin-images.coingecko.com/coins/images/32251/small/-6136155493475923781_121.jpg"
    ],
    "volume_24h": 116183212.53036952,
    "updated_at": "2026-01-02T09:36:25.404Z"
  },
  {
    "id": "bridged-wsteth",
    "name": "Bridged wstETH",
    "market_cap": 628801500.8840702,
    "market_cap_change_24h": 2.5700464688344873,
    "content": "Bridged wstETH refers to Wrapped Staked ETH (wstETH) that has been transferred from its native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "arbitrum-bridged-wsteth-arbitrum",
      "superbridge-bridged-wsteth-base",
      "superbridge-bridged-wsteth-optimism"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53102/small/arbitrum-bridged-wsteth-arbitrum.webp",
      "https://coin-images.coingecko.com/coins/images/53103/small/superbridge-bridged-wsteth-base.png",
      "https://coin-images.coingecko.com/coins/images/53104/small/superbridge-bridged-wsteth-optimism.webp"
    ],
    "volume_24h": 3991277.7879183027,
    "updated_at": "2026-01-02T09:36:36.145Z"
  },
  {
    "id": "cefi",
    "name": "CeFi",
    "market_cap": 624728166.9119376,
    "market_cap_change_24h": 2.1922865358165877,
    "content": "",
    "top_3_coins_id": [
      "vision-3",
      "swissborg",
      "momentum-3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67399/small/Logo-Vision-Symbol-BG-Green.png",
      "https://coin-images.coingecko.com/coins/images/2117/small/YJUrRy7r_400x400.png",
      "https://coin-images.coingecko.com/coins/images/69899/small/4_icon_PFP_RGB.png"
    ],
    "volume_24h": 41049957.6079866,
    "updated_at": "2026-01-02T09:36:46.978Z"
  },
  {
    "id": "simulation-games",
    "name": "Simulation Games",
    "market_cap": 595867562.6008413,
    "market_cap_change_24h": 6.490886423021649,
    "content": "Simulation game replicates real-world activities, offering players the opportunity to experience different skills or activities in a virtual environment.",
    "top_3_coins_id": [
      "the-sandbox",
      "decentraland",
      "wilder-world"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12129/small/sandbox_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/878/small/decentraland-mana.png",
      "https://coin-images.coingecko.com/coins/images/15407/small/wld-logo.png"
    ],
    "volume_24h": 54547236.70615143,
    "updated_at": "2026-01-02T09:35:43.401Z"
  },
  {
    "id": "synthetic",
    "name": "Synthetic",
    "market_cap": 580331458.5916414,
    "market_cap_change_24h": 4.25484465518226,
    "content": "This category includes both synthetic asset issuers and the synthetic assets themselves. Synthetic assets are on-chain tokens that replicate the price behavior of another asset, whether it’s a fiat currency, commodity, or stock using smart contracts and price oracles. ",
    "top_3_coins_id": [
      "havven",
      "gaib-ai-dollar-alpha-usdc",
      "stp-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3406/small/SNX.png",
      "https://coin-images.coingecko.com/coins/images/69615/small/aidausdc.png",
      "https://coin-images.coingecko.com/coins/images/8713/small/awe-network.jpg"
    ],
    "volume_24h": 52322145.757292025,
    "updated_at": "2026-01-02T09:35:10.118Z"
  },
  {
    "id": "gaming-platform",
    "name": "Gaming Platform",
    "market_cap": 576812375.7890991,
    "market_cap_change_24h": 6.983164860328225,
    "content": "Gaming platform allows users to play, download, and manage video games. They often provide features like multiplayer matchmaking, community forums, and in-game purchases.",
    "top_3_coins_id": [
      "gala",
      "unipoly",
      "deapcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png",
      "https://coin-images.coingecko.com/coins/images/32510/small/20231018_231410.png",
      "https://coin-images.coingecko.com/coins/images/10970/small/DEAPcoin_01.png"
    ],
    "volume_24h": 77308993.29348883,
    "updated_at": "2026-01-02T09:36:48.175Z"
  },
  {
    "id": "stock-market-themed",
    "name": "Stock market-themed",
    "market_cap": 522153178.79851663,
    "market_cap_change_24h": 9.522368401688619,
    "content": "Meme coins related to the stock market.",
    "top_3_coins_id": [
      "spx6900",
      "game-stop",
      "stonks-4"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31401/small/centeredcoin_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/37895/small/_GME_New_Logo.png",
      "https://coin-images.coingecko.com/coins/images/52124/small/hehe.0fe13131.png"
    ],
    "volume_24h": 14757232.829077097,
    "updated_at": "2026-01-02T09:36:40.551Z"
  },
  {
    "id": "liquid-restaked-eth",
    "name": "Liquid Restaked ETH",
    "market_cap": 516287961.4875324,
    "market_cap_change_24h": 3.316575317760716,
    "content": "Liquid Restaked ETH is a tokenized representation of restaked Ethereum that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "mantle-restaked-eth",
      "etherfi-weeths",
      "renzo-restaked-lst"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51114/small/symbol.png",
      "https://coin-images.coingecko.com/coins/images/40058/small/weETHs.jpeg",
      "https://coin-images.coingecko.com/coins/images/39124/small/200x200.png"
    ],
    "volume_24h": 1282502.278791834,
    "updated_at": "2026-01-02T09:35:28.532Z"
  },
  {
    "id": "bridge-governance-tokens",
    "name": "Bridge Governance Tokens",
    "market_cap": 512818470.4931618,
    "market_cap_change_24h": 3.127897266060182,
    "content": "A bridge governance token is a type of cryptocurrency token that is used to manage and govern a blockchain bridge.",
    "top_3_coins_id": [
      "thorchain",
      "axelar",
      "debridge"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6595/small/THORChain_Gradient_Logo_Circle_%283%29.png",
      "https://coin-images.coingecko.com/coins/images/27277/small/V-65_xQ1_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/38019/small/DBR_icon_Color.png"
    ],
    "volume_24h": 55076194.37342981,
    "updated_at": "2026-01-02T09:35:06.622Z"
  },
  {
    "id": "buidlpad-launchpad",
    "name": "Buidlpad Launchpad",
    "market_cap": 506019788.3888237,
    "market_cap_change_24h": 3.1653691461464026,
    "content": "Buidlpad is a launchpad that enables token sales with KYC-verified participants.",
    "top_3_coins_id": [
      "falcon-finance-ff",
      "lombard-protocol",
      "sahara-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69121/small/ff.png",
      "https://coin-images.coingecko.com/coins/images/68404/small/bard.png",
      "https://coin-images.coingecko.com/coins/images/66681/small/Token_Logo_3x.png"
    ],
    "volume_24h": 31009005.83431784,
    "updated_at": "2026-01-02T09:37:04.269Z"
  },
  {
    "id": "lsdfi",
    "name": "LSDFi",
    "market_cap": 496557460.4663996,
    "market_cap_change_24h": 10.325189832077006,
    "content": "Liquid Staking Derivatives Finance (LSDFi) combines the principles of liquid staking derivatives with traditional DeFi applications to offer enhanced financial opportunities and flexibility to cryptocurrency users.",
    "top_3_coins_id": [
      "pendle",
      "babylon",
      "sanctum-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/55092/small/Baby-Symbol-Mint_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/38485/small/CLOUD_128x128.png"
    ],
    "volume_24h": 56465887.24848277,
    "updated_at": "2026-01-02T09:35:34.289Z"
  },
  {
    "id": "base-meme-coins",
    "name": "Base Meme",
    "market_cap": 487961172.0276959,
    "market_cap_change_24h": 8.333405543365009,
    "content": "Meme coins native to the Base network.",
    "top_3_coins_id": [
      "based-brett",
      "toshi",
      "degen-base"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35529/small/1000050750.png",
      "https://coin-images.coingecko.com/coins/images/31126/small/Toshi_Logo_-_Circular.png",
      "https://coin-images.coingecko.com/coins/images/34515/small/android-chrome-512x512.png"
    ],
    "volume_24h": 58582739.48820446,
    "updated_at": "2026-01-02T09:35:19.845Z"
  },
  {
    "id": "four-meme-ecosystem",
    "name": "Four.meme Ecosystem (BNB Memes)",
    "market_cap": 469576394.9129345,
    "market_cap_change_24h": 2.219621049009529,
    "content": "Four.meme Ecosystem consists of tokens launched via four.meme on BNB Chain.",
    "top_3_coins_id": [
      "conscious-token",
      "bianrensheng",
      "siren-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55111/small/conscious_token_logo.png",
      "https://coin-images.coingecko.com/coins/images/69848/small/%E5%B8%81%E5%AE%89%E4%BA%BA%E7%94%9F.png",
      "https://coin-images.coingecko.com/coins/images/54479/small/siren.png"
    ],
    "volume_24h": 411501833.17297095,
    "updated_at": "2026-01-02T09:35:19.751Z"
  },
  {
    "id": "hyperunit-ecosystem",
    "name": "Hyperunit Ecosystem",
    "market_cap": 469287026.15858537,
    "market_cap_change_24h": 5.176571195259661,
    "content": "The HyperUnit Ecosystem includes wrapped tokens like Unit Bitcoin, Unit Ethereum, and Unit Solana, which represent native assets such as BTC, ETH, and SOL bridged into the Hyperliquid platform. These tokens can be traded and used across Hyperliquid’s trading layer (HyperCore) and smart contract layer (HyperEVM) without relying on centralized exchanges or third-party bridges.",
    "top_3_coins_id": [
      "unit-bitcoin",
      "unit-pump",
      "unit-plasma"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55066/small/ubtc.jpg",
      "https://coin-images.coingecko.com/coins/images/67362/small/pump.jpg",
      "https://coin-images.coingecko.com/coins/images/69561/small/plasma.png"
    ],
    "volume_24h": 82474119.91485739,
    "updated_at": "2026-01-02T09:36:55.386Z"
  },
  {
    "id": "tokenfi-launchpad",
    "name": "TokenFi Launchpad",
    "market_cap": 468892795.84827375,
    "market_cap_change_24h": 11.82606707862134,
    "content": "TokenFi Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "floki",
      "simon-s-cat",
      "tokenfi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/39765/small/Dv9GheV0_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/32507/small/MAIN_TokenFi_logo_icon.png"
    ],
    "volume_24h": 76750358.73968689,
    "updated_at": "2026-01-02T09:36:24.262Z"
  },
  {
    "id": "on-chain-gaming",
    "name": "On-chain Gaming",
    "market_cap": 466323454.7025479,
    "market_cap_change_24h": 11.418204534742674,
    "content": "On-chain games refer to games where all components, including game logic, assets, interactions, and characteristics, are stored directly on the blockchain.",
    "top_3_coins_id": [
      "floki",
      "playsout",
      "darkstar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16746/small/PNG_image.png",
      "https://coin-images.coingecko.com/coins/images/67765/small/plays.jpg",
      "https://coin-images.coingecko.com/coins/images/67917/small/_DARKSTAR.png"
    ],
    "volume_24h": 64027307.553792484,
    "updated_at": "2026-01-02T09:36:10.107Z"
  },
  {
    "id": "rebase-tokens",
    "name": "Rebase Tokens",
    "market_cap": 419702708.12352264,
    "market_cap_change_24h": 0.9306889998113927,
    "content": "Rebase tokens are cryptocurrencies that are usually pegged to a certain value, and they control their prices by algorithmically adjusting their token’s circulating supply.  ",
    "top_3_coins_id": [
      "olympus",
      "snowbank",
      "ampleforth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14483/small/token_OHM_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/19947/small/sb.png",
      "https://coin-images.coingecko.com/coins/images/4708/small/Ampleforth.png"
    ],
    "volume_24h": 110465.46533264269,
    "updated_at": "2026-01-02T09:36:15.471Z"
  },
  {
    "id": "yield-aggregator",
    "name": "Yield Aggregator",
    "market_cap": 414815007.4108694,
    "market_cap_change_24h": 4.89390801048338,
    "content": "Yield aggregators are protocols that collate multiple yield farms in a single place in order to ease the process of farming. With many new farms popping up on the market, it can be tedious for one to hop from farm to farm. However, with yield aggregators, that isn’t necessary as it’s done automatically in order to maximize the yield generated for users.",
    "top_3_coins_id": [
      "convex-finance",
      "yearn-finance",
      "inverse-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15585/small/convex.png",
      "https://coin-images.coingecko.com/coins/images/11849/small/yearn.jpg",
      "https://coin-images.coingecko.com/coins/images/14205/small/inverse_finance.jpg"
    ],
    "volume_24h": 46656317.81916238,
    "updated_at": "2026-01-02T09:36:22.279Z"
  },
  {
    "id": "fixed-interest",
    "name": "Fixed Interest",
    "market_cap": 408142394.26617324,
    "market_cap_change_24h": 11.825102126274395,
    "content": "Protocols that involved in providing financial products that include fixed interest.",
    "top_3_coins_id": [
      "pendle",
      "saffron-finance",
      "inverse-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/13117/small/sfi_red_250px.png",
      "https://coin-images.coingecko.com/coins/images/14205/small/inverse_finance.jpg"
    ],
    "volume_24h": 44044194.61225559,
    "updated_at": "2026-01-02T09:35:53.536Z"
  },
  {
    "id": "decentralized-science-desci",
    "name": "Decentralized Science (DeSci)",
    "market_cap": 408010501.62486476,
    "market_cap_change_24h": 4.418437923630636,
    "content": "Decentralized Science aims to leverage the blockchain and Web3 tools to create an open ecosystem to conduct, and disseminate scientific research. ",
    "top_3_coins_id": [
      "origintrail",
      "bio-protocol",
      "hairdao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1877/small/TRAC.jpg",
      "https://coin-images.coingecko.com/coins/images/53022/small/bio.jpg",
      "https://coin-images.coingecko.com/coins/images/29620/small/LinkedIn_Logo.jpg"
    ],
    "volume_24h": 33585863.078819536,
    "updated_at": "2026-01-02T09:35:41.161Z"
  },
  {
    "id": "ondo-tokenized-assets",
    "name": "Ondo Tokenized Assets",
    "market_cap": 389423262.9485093,
    "market_cap_change_24h": 1.4142863531864285,
    "content": "Ondo Tokenized Assets are on-chain tokens that represent economic exposure to traditional stocks and ETFs, with each token typically backed 1:1 by the underlying security held in custody.",
    "top_3_coins_id": [
      "spdr-s-p-500-etf-ondo-tokenized-etf",
      "ishares-core-s-p-500-etf-ondo-tokenized-etf",
      "invesco-qqq-etf-ondo-tokenized-etf"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68655/small/spyon_160x160.png",
      "https://coin-images.coingecko.com/coins/images/68650/small/ivvon_160x160.png",
      "https://coin-images.coingecko.com/coins/images/68654/small/qqqon_160x160.png"
    ],
    "volume_24h": 45071052.883554466,
    "updated_at": "2026-01-02T09:36:40.429Z"
  },
  {
    "id": "midas-liquid-yield-tokens",
    "name": "Midas Liquid Yield Tokens",
    "market_cap": 384514438.18858683,
    "market_cap_change_24h": 0.3070640114244674,
    "content": "Midas Liquid Yield Tokens refer to liquid yield tokens issued by Midas and offered on https://midas.app/.",
    "top_3_coins_id": [
      "midas-mf-one",
      "midas-mhyper",
      "midas-mtbill"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66975/small/mfone-logo.png",
      "https://coin-images.coingecko.com/coins/images/68298/small/mHYPER.png",
      "https://coin-images.coingecko.com/coins/images/37839/small/mTBILL_token.png"
    ],
    "volume_24h": 26307.000323079974,
    "updated_at": "2026-01-02T09:37:01.192Z"
  },
  {
    "id": "echo-launchpad",
    "name": "Echo Launchpad",
    "market_cap": 380476287.3700252,
    "market_cap_change_24h": 10.998441176831001,
    "content": "Echo.xyz is a decentralized launchpad that enables early-stage project funding.",
    "top_3_coins_id": [
      "plasma",
      "lab"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66489/small/Plasma-symbol-green-1.png",
      "https://coin-images.coingecko.com/coins/images/70014/small/lab.png"
    ],
    "volume_24h": 155118269.63652456,
    "updated_at": "2026-01-02T09:37:03.362Z"
  },
  {
    "id": "seigniorage",
    "name": "Seigniorage",
    "market_cap": 374214211.77117735,
    "market_cap_change_24h": -0.14150105917904943,
    "content": "In the case of algorithmic stablecoins, seigniorage is generated when the stablecoin's value rises above its peg (e.g., $1). The protocol can then mint new tokens and sell them on the open market, generating revenue. This revenue is used to maintain the stablecoin's peg to its target value. If the stablecoin's value falls below its peg, the protocol can buy back tokens, reducing the supply and helping to restore the peg.",
    "top_3_coins_id": [
      "frax",
      "frax-share",
      "terrausd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13422/small/LFRAX.png",
      "https://coin-images.coingecko.com/coins/images/13423/small/frax.png",
      "https://coin-images.coingecko.com/coins/images/12681/small/UST.png"
    ],
    "volume_24h": 9704339.04569922,
    "updated_at": "2026-01-02T09:36:18.631Z"
  },
  {
    "id": "avalanche-subnet",
    "name": "Avalanche L1",
    "market_cap": 370486722.9363068,
    "market_cap_change_24h": 4.440388384508316,
    "content": "Avalanche L1 are specialized sets of validators on Avalanche that allow the creation of customized independent networks with specific rules and governance to enable scalable and tailored blockchain solutions for various applications.",
    "top_3_coins_id": [
      "beam-2",
      "nexpace",
      "apertum"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32417/small/cgicon.png",
      "https://coin-images.coingecko.com/coins/images/55703/small/wk63iOZz_400x400.png",
      "https://coin-images.coingecko.com/coins/images/55116/small/200x200_CG.png"
    ],
    "volume_24h": 24015008.894537803,
    "updated_at": "2026-01-02T09:35:04.701Z"
  },
  {
    "id": "synths",
    "name": "Synthetic Asset",
    "market_cap": 368181794.7174412,
    "market_cap_change_24h": 0.7821438751846513,
    "content": "Synthetic assets are financial instruments that mimic the value of assets, such as stocks, bonds, commodities, or cryptocurrencies.",
    "top_3_coins_id": [
      "strata-senior-usde",
      "felix-feusd",
      "nusd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/71272/small/srUSDe.png",
      "https://coin-images.coingecko.com/coins/images/55068/small/feusd.jpg",
      "https://coin-images.coingecko.com/coins/images/5013/small/sUSD.png"
    ],
    "volume_24h": 3596518.718324646,
    "updated_at": "2026-01-02T09:35:08.904Z"
  },
  {
    "id": "yield-tokenization",
    "name": "Yield Tokenization Protocol",
    "market_cap": 366299696.9617561,
    "market_cap_change_24h": 14.191892098978084,
    "content": "Yield tokenization protocol refers to protocol taking a yield-bearing asset and splitting the future yield stream out to distinct token.\r\n",
    "top_3_coins_id": [
      "pendle",
      "zenrock",
      "apwine"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/52032/small/Zenrock_Token_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/15597/small/spectra.png"
    ],
    "volume_24h": 43649377.421794794,
    "updated_at": "2026-01-02T09:36:29.496Z"
  },
  {
    "id": "infofi",
    "name": "InfoFi",
    "market_cap": 362553397.29349583,
    "market_cap_change_24h": 3.5042373841056693,
    "content": "InfoFi combines blockchain and AI to monetise and trade attention, influence, and data as assets. It uses decentralised platforms to aggregate, verify, and distribute information, enabling users to be rewarded from their engagement or content.\r\n\r\n",
    "top_3_coins_id": [
      "origintrail",
      "kaito",
      "cookie"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1877/small/TRAC.jpg",
      "https://coin-images.coingecko.com/coins/images/54411/small/Qm4DW488_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/38450/small/cookie_token_logo_200x200.png"
    ],
    "volume_24h": 34846776.018564604,
    "updated_at": "2026-01-02T09:36:58.891Z"
  },
  {
    "id": "communication",
    "name": "Communication",
    "market_cap": 355336432.84841377,
    "market_cap_change_24h": 7.777128114736335,
    "content": "",
    "top_3_coins_id": [
      "helium",
      "xpin-network",
      "towns"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4284/small/helium_logo_use.png",
      "https://coin-images.coingecko.com/coins/images/68422/small/xpin.png",
      "https://coin-images.coingecko.com/coins/images/55230/small/Towns_token_2x.png"
    ],
    "volume_24h": 22024756.09316436,
    "updated_at": "2026-01-02T09:36:57.641Z"
  },
  {
    "id": "lrtfi",
    "name": "LRTfi",
    "market_cap": 353570632.2487918,
    "market_cap_change_24h": 12.24174245455212,
    "content": "LRTfi refers to DeFi protocols that are built upon Liquid Restaking Tokens, allowing users to earn additional yield from their staked assets by restaking them.",
    "top_3_coins_id": [
      "pendle",
      "thetanuts-finance",
      "loop-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15069/small/Pendle_Logo_Normal-03.png",
      "https://coin-images.coingecko.com/coins/images/33021/small/Thetanuts_Profile_Green.png",
      "https://coin-images.coingecko.com/coins/images/50842/small/lpETH_Copy.png"
    ],
    "volume_24h": 43640195.66480993,
    "updated_at": "2026-01-02T09:36:10.083Z"
  },
  {
    "id": "synthetic-issuer",
    "name": "Synthetic Issuer",
    "market_cap": 345950576.83630383,
    "market_cap_change_24h": 5.861788514299439,
    "content": "Issuer of synthetic asset.",
    "top_3_coins_id": [
      "havven",
      "stp-network",
      "uma"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3406/small/SNX.png",
      "https://coin-images.coingecko.com/coins/images/8713/small/awe-network.jpg",
      "https://coin-images.coingecko.com/coins/images/10951/small/UMA.png"
    ],
    "volume_24h": 51206771.55210054,
    "updated_at": "2026-01-02T09:36:17.618Z"
  },
  {
    "id": "terminal-of-truths",
    "name": "Terminal of Truths",
    "market_cap": 333445503.4454762,
    "market_cap_change_24h": 10.544128228229502,
    "content": "Terminal of Truths refers to tokens mentioned by https://x.com/truth_terminal.",
    "top_3_coins_id": [
      "fartcoin",
      "goatseus-maximus",
      "aiwithdaddyissues"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50891/small/fart.jpg",
      "https://coin-images.coingecko.com/coins/images/50717/small/GOAT_LOGO_NEW.jpg",
      "https://coin-images.coingecko.com/coins/images/50958/small/shegen.jpg"
    ],
    "volume_24h": 57361827.388900876,
    "updated_at": "2026-01-02T09:36:32.785Z"
  },
  {
    "id": "education",
    "name": "Education",
    "market_cap": 323961988.4741824,
    "market_cap_change_24h": -0.11251581468556847,
    "content": "Decentralized educational platform built on blockchain technology.",
    "top_3_coins_id": [
      "legacy-token",
      "edu-coin",
      "dacxi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50673/small/token2d.jpg",
      "https://coin-images.coingecko.com/coins/images/29948/small/EDU_Logo.png",
      "https://coin-images.coingecko.com/coins/images/4466/small/dacxi.png"
    ],
    "volume_24h": 7110817.479420141,
    "updated_at": "2026-01-02T09:37:05.568Z"
  },
  {
    "id": "intent",
    "name": "Intent",
    "market_cap": 322759860.5746377,
    "market_cap_change_24h": 4.426007018685508,
    "content": "Intents are signed messages that simplify on-chain goals. They are handled by solvers to enhance user experiences, optimize transactions, and incentivize efficient execution paths.",
    "top_3_coins_id": [
      "cow-protocol",
      "debridge",
      "anoma"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/24384/small/CoW-token_logo.png",
      "https://coin-images.coingecko.com/coins/images/38019/small/DBR_icon_Color.png",
      "https://coin-images.coingecko.com/coins/images/69380/small/Anoma_Logo_Roundel_RGB_Colour-01.png"
    ],
    "volume_24h": 45316254.38430504,
    "updated_at": "2026-01-02T09:36:03.476Z"
  },
  {
    "id": "nft-marketplace",
    "name": "NFT Marketplace",
    "market_cap": 296584451.91419953,
    "market_cap_change_24h": 3.080797320581614,
    "content": "A NFT marketplace is a platform where users can buy, sell, and trade NFTs.",
    "top_3_coins_id": [
      "magic-eden",
      "blur",
      "collect-on-fanable"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39850/small/_ME_Profile_Dark_2x.png",
      "https://coin-images.coingecko.com/coins/images/28453/small/blur.png",
      "https://coin-images.coingecko.com/coins/images/71291/small/collect.png"
    ],
    "volume_24h": 44301488.89525274,
    "updated_at": "2026-01-02T09:36:11.189Z"
  },
  {
    "id": "insurance",
    "name": "Insurance",
    "market_cap": 295253064.7932753,
    "market_cap_change_24h": 3.8050636410344554,
    "content": "Decentralized insurance provides the infrastructure for members to buy cover, underwrite risk, assess claims, and build risk management businesses.",
    "top_3_coins_id": [
      "nxm",
      "re-protocol-reusd",
      "wrapped-nxm"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11810/small/NXMmain.png",
      "https://coin-images.coingecko.com/coins/images/66291/small/Points_Program_Group_91.png",
      "https://coin-images.coingecko.com/coins/images/11890/small/wNXM.png"
    ],
    "volume_24h": 889859.6946148078,
    "updated_at": "2026-01-02T09:35:57.932Z"
  },
  {
    "id": "appchains",
    "name": "Appchains",
    "market_cap": 280857760.66772497,
    "market_cap_change_24h": 9.759469998592664,
    "content": "An appchain (application-specific blockchain) is a specialized blockchain designed to optimize performance and efficiency, tailored for particular tasks or specific use cases.",
    "top_3_coins_id": [
      "dydx-chain",
      "cartesi",
      "syndicate-3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32594/small/dydx.png",
      "https://coin-images.coingecko.com/coins/images/11038/small/Cartesi_Logo.png",
      "https://coin-images.coingecko.com/coins/images/69122/small/synd.png"
    ],
    "volume_24h": 48035162.48243169,
    "updated_at": "2026-01-02T09:35:43.387Z"
  },
  {
    "id": "letsbonk-fun-ecosystem",
    "name": "BONK.fun Ecosystem",
    "market_cap": 280689973.0843897,
    "market_cap_change_24h": 10.52207082469952,
    "content": "LetsBONK.fun Ecosystem consists of tokens launched via letsbonk.fun.",
    "top_3_coins_id": [
      "the-american-dream",
      "useless-3",
      "1-coin-can-change-your-life"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/71123/small/Untitled_design_%2853%29.png",
      "https://coin-images.coingecko.com/coins/images/55684/small/coingeckoupdate.png",
      "https://coin-images.coingecko.com/coins/images/69844/small/1coinlogo_200x200.png"
    ],
    "volume_24h": 50669875.20740472,
    "updated_at": "2026-01-02T09:35:45.952Z"
  },
  {
    "id": "tokenized-silver",
    "name": "Tokenized Silver",
    "market_cap": 276469696.59854287,
    "market_cap_change_24h": 3.4543857603306276,
    "content": "Tokenized silver refers to digital representation of physical silver on a blockchain platform. ",
    "top_3_coins_id": [
      "kinesis-silver",
      "gram-silver"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29789/small/kag-currency-ticker.png",
      "https://coin-images.coingecko.com/coins/images/34370/small/grams.png"
    ],
    "volume_24h": 416678.3373089551,
    "updated_at": "2026-01-02T09:36:24.270Z"
  },
  {
    "id": "tradable-ecosystem",
    "name": "Tradable Ecosystem",
    "market_cap": 271384806.1776872,
    "market_cap_change_24h": 0.5385572782052658,
    "content": "Tradable Ecosystem consists of assets tokenised by https://www.tradable.xyz/.",
    "top_3_coins_id": [
      "tradable-na-rent-financing-platform-sstn",
      "tradable-singapore-fintech-ssl-2",
      "tradable-latam-bnpl-sstn"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66150/small/tradable.jpg",
      "https://coin-images.coingecko.com/coins/images/66954/small/tradable.jpg",
      "https://coin-images.coingecko.com/coins/images/66793/small/tradable.jpg"
    ],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:00.195Z"
  },
  {
    "id": "binance-buildkey-tge",
    "name": "Binance Buildkey TGE",
    "market_cap": 265141622.43989307,
    "market_cap_change_24h": 2.0101196236209975,
    "content": "The BuildKey TGE Model is a hybrid Token Generation Event (TGE) framework developed by Aspecta in collaboration with Binance Wallet.",
    "top_3_coins_id": [
      "river",
      "zkpass",
      "fight-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69318/small/river-token.png",
      "https://coin-images.coingecko.com/coins/images/70273/small/zkpass.png",
      "https://coin-images.coingecko.com/coins/images/70650/small/FIGHT_Token_Icon_200x200.png"
    ],
    "volume_24h": 92017130.78344725,
    "updated_at": "2026-01-02T09:35:15.346Z"
  },
  {
    "id": "card-games",
    "name": "Card Games",
    "market_cap": 256051723.69843283,
    "market_cap_change_24h": 6.843103534942293,
    "content": "Crypto card games are digital card games that utilize blockchain technology allowing players to collect, trade, and play with unique digital cards often represented as NFTs.",
    "top_3_coins_id": [
      "axie-infinity",
      "echelon-prime",
      "gods-unchained"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png",
      "https://coin-images.coingecko.com/coins/images/29053/small/prime-logo-small-border_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/17139/small/10631.png"
    ],
    "volume_24h": 62808103.89040499,
    "updated_at": "2026-01-02T09:35:07.589Z"
  },
  {
    "id": "gaming-marketplace",
    "name": "Gaming Marketplace",
    "market_cap": 253739602.10458365,
    "market_cap_change_24h": 10.577130538887262,
    "content": "A platform where players can buy, sell, or trade in-game assets, currencies, or digital items.",
    "top_3_coins_id": [
      "immutable-x",
      "overtake",
      "open-loot"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/17233/small/immutableX-symbol-BLK-RGB.png",
      "https://coin-images.coingecko.com/coins/images/68577/small/overtake.png",
      "https://coin-images.coingecko.com/coins/images/51801/small/_OPENLOOT_token-icon_black_%282%29.png"
    ],
    "volume_24h": 36991905.26391683,
    "updated_at": "2026-01-02T09:36:49.170Z"
  },
  {
    "id": "yield-optimizer",
    "name": "Yield Optimizer",
    "market_cap": 230375942.18649483,
    "market_cap_change_24h": 5.5874978085057085,
    "content": "Yield optimizer passively maximizing return by using an automated service that actively managing the fund.",
    "top_3_coins_id": [
      "convex-finance",
      "stake-dao",
      "penpie"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15585/small/convex.png",
      "https://coin-images.coingecko.com/coins/images/13724/small/stakedao_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/30760/small/PNP_Token.png"
    ],
    "volume_24h": 9202902.913211077,
    "updated_at": "2026-01-02T09:35:34.359Z"
  },
  {
    "id": "centralized-exchange-cex-product",
    "name": "Centralized Exchange (CEX) Product",
    "market_cap": 227800786.7005637,
    "market_cap_change_24h": -2.349087514972085,
    "content": "A centralized exchange (CEX) product refers to services or features offered by centralized cryptocurrency exchanges, such as launchpads or launchpools. ",
    "top_3_coins_id": [
      "mbg-by-multibank-group",
      "bitcastle-token",
      "safecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67462/small/X_icon.png",
      "https://coin-images.coingecko.com/coins/images/70260/small/bitcastle_Logo_RGB_Blue_03.png",
      "https://coin-images.coingecko.com/coins/images/67434/small/200x200_%281%29.png"
    ],
    "volume_24h": 34672606.749290794,
    "updated_at": "2026-01-02T09:35:53.502Z"
  },
  {
    "id": "impossible-launchpad",
    "name": "Impossible Finance Launchpad",
    "market_cap": 219743149.73903257,
    "market_cap_change_24h": 5.437008596222638,
    "content": "Impossible Finance Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "aethir",
      "carv",
      "idia"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/36179/small/logogram_circle_dark_green_vb_green_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/37689/small/CARV_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/17803/small/IDIA.png"
    ],
    "volume_24h": 19786420.95528098,
    "updated_at": "2026-01-02T09:35:58.948Z"
  },
  {
    "id": "fan-token",
    "name": "Fan Token",
    "market_cap": 215332118.02459273,
    "market_cap_change_24h": -7.04142701069309,
    "content": "Fan tokens let sporting organizations and other celebrities engage with their communities, where holders can access exclusive benefits.",
    "top_3_coins_id": [
      "og-fan-token",
      "santos-fc-fan-token",
      "lazio-fan-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11663/small/OG.png",
      "https://coin-images.coingecko.com/coins/images/21132/small/santos.png",
      "https://coin-images.coingecko.com/coins/images/19263/small/B4Lla6V6_400x400.png"
    ],
    "volume_24h": 73778852.88161764,
    "updated_at": "2026-01-02T09:35:52.552Z"
  },
  {
    "id": "yearn-yfi-partnerships-mergers",
    "name": "Yearn Ecosystem",
    "market_cap": 208574986.58542016,
    "market_cap_change_24h": 6.42540006489007,
    "content": "Interconnected platforms and services built around Yearn.\r\n",
    "top_3_coins_id": [
      "yearn-finance",
      "sushi",
      "xsushi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11849/small/yearn.jpg",
      "https://coin-images.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png",
      "https://coin-images.coingecko.com/coins/images/13725/small/xsushi.png"
    ],
    "volume_24h": 22470862.551383402,
    "updated_at": "2026-01-02T09:36:30.510Z"
  },
  {
    "id": "chinese-meme",
    "name": "Chinese Meme",
    "market_cap": 206978635.190421,
    "market_cap_change_24h": 1.564080589098061,
    "content": "Chinese meme coins are inspired by China memes, cultural elements, or internet phenomena.",
    "top_3_coins_id": [
      "bianrensheng",
      "hakimi",
      "dora-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69848/small/%E5%B8%81%E5%AE%89%E4%BA%BA%E7%94%9F.png",
      "https://coin-images.coingecko.com/coins/images/69928/small/zcslpjiz4jgzaot9e2f7ltpvgge9.",
      "https://coin-images.coingecko.com/coins/images/67443/small/IMG_2582.jpeg"
    ],
    "volume_24h": 20072064.474369366,
    "updated_at": "2026-01-02T09:37:06.620Z"
  },
  {
    "id": "xstocks-ecosystem",
    "name": "BackedFi xStocks Ecosystem",
    "market_cap": 202830628.39560255,
    "market_cap_change_24h": 2.6667761223089395,
    "content": "xStocks refers to the tokenized stocks and ETFs issued by BackedFi.",
    "top_3_coins_id": [
      "tesla-xstock",
      "circle-xstock",
      "nvidia-xstock"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55638/small/Ticker_TSLA__Company_Name_Tesla_Inc.__size_200x200_2x.png",
      "https://coin-images.coingecko.com/coins/images/66918/small/CRCLx.png",
      "https://coin-images.coingecko.com/coins/images/55633/small/Ticker_NVDA__Company_Name_NVIDIA_Corp__size_200x200_2x.png"
    ],
    "volume_24h": 55230571.80096206,
    "updated_at": "2026-01-02T09:35:28.823Z"
  },
  {
    "id": "rollups-as-a-service-raas",
    "name": "Rollups-as-a-Service (RaaS)",
    "market_cap": 198815892.76985738,
    "market_cap_change_24h": 7.18337297275786,
    "content": "Rollups-as-a-Service (RaaS) streamlines the deployment and maintenance of custom application-specific rollups by offering a simplified interface including no-code deployment options.",
    "top_3_coins_id": [
      "ankr",
      "altlayer",
      "caldera"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4324/small/Ankr_Blue_Symbol.png",
      "https://coin-images.coingecko.com/coins/images/34608/small/Logomark_200x200.png",
      "https://coin-images.coingecko.com/coins/images/54475/small/Token_Logo.png"
    ],
    "volume_24h": 34529440.78685001,
    "updated_at": "2026-01-02T09:36:17.521Z"
  },
  {
    "id": "arcade-games",
    "name": "Arcade Games",
    "market_cap": 195816378.5035614,
    "market_cap_change_24h": -23.97941626676911,
    "content": "Classic-style games with simple mechanics, high replayability, and score-based progression.",
    "top_3_coins_id": [
      "audiera",
      "pepecoin-2",
      "hamster-kombat"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70428/small/audiera.png",
      "https://coin-images.coingecko.com/coins/images/30219/small/pepecoin-icon_200x200.png",
      "https://coin-images.coingecko.com/coins/images/39102/small/hamster-removebg-preview.png"
    ],
    "volume_24h": 74962471.25531724,
    "updated_at": "2026-01-02T09:35:26.407Z"
  },
  {
    "id": "nftfi",
    "name": "NFTFi",
    "market_cap": 195407019.19269088,
    "market_cap_change_24h": 8.298313738881863,
    "content": "NFTFi combines NFTs with DeFi to provide financial utility and liquidity to NFTs.",
    "top_3_coins_id": [
      "blur",
      "punkstrategy",
      "synfutures"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28453/small/blur.png",
      "https://coin-images.coingecko.com/coins/images/69249/small/tokenworks.png",
      "https://coin-images.coingecko.com/coins/images/52186/small/synfutures_f_token_light_200.png"
    ],
    "volume_24h": 20800314.69938229,
    "updated_at": "2026-01-02T09:35:20.930Z"
  },
  {
    "id": "e-commerce",
    "name": "E-commerce",
    "market_cap": 187509845.90682697,
    "market_cap_change_24h": 2.8384668928535364,
    "content": "Tokens or projects that facilitate online shopping, digital marketplaces, and payment solutions within the e-commerce industry.",
    "top_3_coins_id": [
      "pay-coin",
      "optio",
      "pre-sp"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/9330/small/new_logo_square.png",
      "https://coin-images.coingecko.com/coins/images/54505/small/Optio_logo.png",
      "https://coin-images.coingecko.com/coins/images/68077/small/PSP_Logo.png"
    ],
    "volume_24h": 3045423.589379332,
    "updated_at": "2026-01-02T09:35:45.956Z"
  },
  {
    "id": "zoo-themed",
    "name": "Zoo-Themed",
    "market_cap": 181386135.5692386,
    "market_cap_change_24h": 9.254596157261929,
    "content": "Meme coins related to animals in the zoo.",
    "top_3_coins_id": [
      "peanut-the-squirrel",
      "moo-deng",
      "sudeng"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51301/small/Peanut_the_Squirrel.png",
      "https://coin-images.coingecko.com/coins/images/50264/small/MOODENG.jpg",
      "https://coin-images.coingecko.com/coins/images/50450/small/sudeng.png"
    ],
    "volume_24h": 81774369.9290934,
    "updated_at": "2026-01-02T09:35:17.629Z"
  },
  {
    "id": "tokenized-stock",
    "name": "Tokenized Stock",
    "market_cap": 178850413.55726302,
    "market_cap_change_24h": 2.4641941035863257,
    "content": "Tokenized stock refers to digital representation of stock on a blockchain platform.",
    "top_3_coins_id": [
      "tesla-xstock",
      "circle-xstock",
      "nvidia-xstock"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55638/small/Ticker_TSLA__Company_Name_Tesla_Inc.__size_200x200_2x.png",
      "https://coin-images.coingecko.com/coins/images/66918/small/CRCLx.png",
      "https://coin-images.coingecko.com/coins/images/55633/small/Ticker_NVDA__Company_Name_NVIDIA_Corp__size_200x200_2x.png"
    ],
    "volume_24h": 50901016.7988276,
    "updated_at": "2026-01-02T09:36:57.631Z"
  },
  {
    "id": "metagovernance",
    "name": "Metagovernance",
    "market_cap": 178326328.06609777,
    "market_cap_change_24h": 9.83272270594704,
    "content": "Metagovernance refers to projects or protocols that primarily hold DAO tokens and actively participates in the governance process of those DAOs.",
    "top_3_coins_id": [
      "convex-finance",
      "dinero-2",
      "aura-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15585/small/convex.png",
      "https://coin-images.coingecko.com/coins/images/39341/small/dinero.jpg",
      "https://coin-images.coingecko.com/coins/images/25942/small/logo.png"
    ],
    "volume_24h": 6979326.590406846,
    "updated_at": "2026-01-02T09:36:06.618Z"
  },
  {
    "id": "axie-infinity",
    "name": "Axie Infinity Ecosystem",
    "market_cap": 176941445.99700058,
    "market_cap_change_24h": 8.745641164166347,
    "content": "",
    "top_3_coins_id": [
      "axie-infinity",
      "smooth-love-potion"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png",
      "https://coin-images.coingecko.com/coins/images/10366/small/SLP.png"
    ],
    "volume_24h": 22425878.17256902,
    "updated_at": "2026-01-02T09:35:43.479Z"
  },
  {
    "id": "daomaker-ecosystem",
    "name": "DaoMaker Launchpad",
    "market_cap": 173551277.71171927,
    "market_cap_change_24h": 26.70831254138834,
    "content": "DaoMaker Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "victoria-vr",
      "clearpool",
      "my-neighbor-alice"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/21178/small/vr.png",
      "https://coin-images.coingecko.com/coins/images/19252/small/photo_2022-08-31_12.45.02.jpeg",
      "https://coin-images.coingecko.com/coins/images/14375/small/alice_logo.jpg"
    ],
    "volume_24h": 20523853.478563942,
    "updated_at": "2026-01-02T09:35:38.775Z"
  },
  {
    "id": "layer-3-l3",
    "name": "Layer 3 (L3)",
    "market_cap": 171585112.65476805,
    "market_cap_change_24h": 5.492502590579337,
    "content": "Layer 3 protocols are built on Layer 2, enabling hosting of application-specific decentralized applications while addressing issues such as scalability, interoperability and customization.",
    "top_3_coins_id": [
      "orbs",
      "degen-base",
      "xai-blockchain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4630/small/Orbs.jpg",
      "https://coin-images.coingecko.com/coins/images/34515/small/android-chrome-512x512.png",
      "https://coin-images.coingecko.com/coins/images/34258/small/round_icon_2048_px.png"
    ],
    "volume_24h": 28397502.231379766,
    "updated_at": "2026-01-02T09:36:03.560Z"
  },
  {
    "id": "music",
    "name": "Music",
    "market_cap": 170334992.78622743,
    "market_cap_change_24h": -5.801100692889771,
    "content": "Cryptocurrency projects that are related to music is aimed at disrupting the record publishing industry. The goal is to simplify the process of tracking, collecting, and distributing song royalties to musicians in a decentralized manner. Fans are also able to directly support their favorite artists directly without going through an intermediary.",
    "top_3_coins_id": [
      "ravedao",
      "audius",
      "limewire-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70544/small/coin.jpeg",
      "https://coin-images.coingecko.com/coins/images/12913/small/audio-token-asset_2x.png",
      "https://coin-images.coingecko.com/coins/images/30356/small/LimeWire_Logo_Icon_200x200_%281%29.png"
    ],
    "volume_24h": 37224321.49756992,
    "updated_at": "2026-01-02T09:36:07.782Z"
  },
  {
    "id": "breeding",
    "name": "Breeding",
    "market_cap": 152757643.53668532,
    "market_cap_change_24h": 9.783814359672547,
    "content": "Breeding games involve players using blockchain technology to breed unique digital creatures or items, represented as NFTs, creating offspring with potentially enhanced value and rarity.",
    "top_3_coins_id": [
      "axie-infinity",
      "frenpet",
      "honeyland-honey"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png",
      "https://coin-images.coingecko.com/coins/images/33022/small/token.png",
      "https://coin-images.coingecko.com/coins/images/29256/small/hxd-200x200.png"
    ],
    "volume_24h": 17598593.525918096,
    "updated_at": "2026-01-02T09:35:11.026Z"
  },
  {
    "id": "defi-index",
    "name": "DeFi Index",
    "market_cap": 150936390.4173089,
    "market_cap_change_24h": 2.748124757138003,
    "content": "A DeFi index is an indicator that tracks the performance of a group of DeFi cryptocurrencies.",
    "top_3_coins_id": [
      "mag7-ssi",
      "defi-ssi",
      "defipulse-index"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52962/small/mag7.png",
      "https://coin-images.coingecko.com/coins/images/53090/small/defi.png",
      "https://coin-images.coingecko.com/coins/images/12465/small/defi_pulse_index_set.png"
    ],
    "volume_24h": 929169.6705927262,
    "updated_at": "2026-01-02T09:35:41.033Z"
  },
  {
    "id": "olympus-pro",
    "name": "Olympus Pro Ecosystem",
    "market_cap": 150639282.68595356,
    "market_cap_change_24h": 1.6058876884477793,
    "content": "Olympus Pro designed to provide liquidity management solutions for DeFi protocols. They offers a service called \"bonds-as-a-service,\" which allows protocols to own their liquidity by offering discounted OHM tokens in exchange for liquidity provider (LP) tokens. This helps protocols to reduce their reliance on liquidity mining incentives and gain more control over their liquidity.",
    "top_3_coins_id": [
      "spell-token",
      "alchemix",
      "inverse-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15861/small/abracadabra-3.png",
      "https://coin-images.coingecko.com/coins/images/14113/small/Alchemix.png",
      "https://coin-images.coingecko.com/coins/images/14205/small/inverse_finance.jpg"
    ],
    "volume_24h": 18865171.923681073,
    "updated_at": "2026-01-02T09:36:12.203Z"
  },
  {
    "id": "compound-tokens",
    "name": "Compound Tokens",
    "market_cap": 149665642.57764253,
    "market_cap_change_24h": 2.6411651012726924,
    "content": "Compound Tokens are balance tokens on the Compound Finance Protocol which represents a lending balance on the Compound money market.",
    "top_3_coins_id": [
      "compound-ether",
      "compound-basic-attention-token",
      "cdai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10643/small/ceth.png",
      "https://coin-images.coingecko.com/coins/images/10645/small/cBAT1.JPG",
      "https://coin-images.coingecko.com/coins/images/9281/small/cDAI.png"
    ],
    "volume_24h": 753.7161804379418,
    "updated_at": "2026-01-02T09:35:35.407Z"
  },
  {
    "id": "retail",
    "name": "Retail",
    "market_cap": 149289456.26116475,
    "market_cap_change_24h": 2.2210615121495527,
    "content": "Retail involves the sale of goods and services to consumers for their personal use, rather than for resale on blockchain.",
    "top_3_coins_id": [
      "milk-alliance",
      "roam-token",
      "diamond-token-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11978/small/2.png",
      "https://coin-images.coingecko.com/coins/images/54737/small/roam-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/69133/small/IMG_20250424_111827_128.jpg"
    ],
    "volume_24h": 12245048.571288876,
    "updated_at": "2026-01-02T09:35:26.336Z"
  },
  {
    "id": "inscriptions",
    "name": "Inscriptions",
    "market_cap": 147475306.9330623,
    "market_cap_change_24h": 7.741330287849378,
    "content": "Inscriptions are metadata added to units of cryptocurrencies",
    "top_3_coins_id": [
      "ordinals",
      "sats-ordinals",
      "bellscoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30162/small/ordi.png",
      "https://coin-images.coingecko.com/coins/images/30666/small/_dD8qr3M_400x400.png",
      "https://coin-images.coingecko.com/coins/images/33822/small/IMG_6067.jpeg"
    ],
    "volume_24h": 30862892.27520229,
    "updated_at": "2026-01-02T09:36:06.860Z"
  },
  {
    "id": "energy",
    "name": "Energy",
    "market_cap": 142645067.168013,
    "market_cap_change_24h": 6.45974265803182,
    "content": "Projects focused on renewable energy, green technology, and sustainable practices within the cryptocurrency ecosystem.",
    "top_3_coins_id": [
      "energy-web-token",
      "power-ledger",
      "green"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10886/small/R9gQTJV__400x400.png",
      "https://coin-images.coingecko.com/coins/images/1104/small/Powerledger_Token_logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/67136/small/GREEN_logo_200_x_200.png"
    ],
    "volume_24h": 9683552.986502687,
    "updated_at": "2026-01-02T09:35:52.501Z"
  },
  {
    "id": "brc-20",
    "name": "BRC-20",
    "market_cap": 136485837.96658963,
    "market_cap_change_24h": 8.413041683346075,
    "content": "BRC-20 is a token standard on the Bitcoin blockchain that allows for the creation of tokens that represent ownership of assets. ",
    "top_3_coins_id": [
      "ordinals",
      "sats-ordinals",
      "trac"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30162/small/ordi.png",
      "https://coin-images.coingecko.com/coins/images/30666/small/_dD8qr3M_400x400.png",
      "https://coin-images.coingecko.com/coins/images/30288/small/Trac_Coingecko.png"
    ],
    "volume_24h": 30797177.182554487,
    "updated_at": "2026-01-02T09:35:13.119Z"
  },
  {
    "id": "eco-friendly",
    "name": "Regenerative Finance (ReFi)",
    "market_cap": 135678039.9604237,
    "market_cap_change_24h": 7.101263161141963,
    "content": "Regenerative finance (ReFi) aims to create economic systems that go beyond generating financial returns to focus on restoring and enhancing social, environmental, and economic well-being. ",
    "top_3_coins_id": [
      "energy-web-token",
      "dovu-2",
      "araracoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10886/small/R9gQTJV__400x400.png",
      "https://coin-images.coingecko.com/coins/images/31930/small/Dovu_Icon_Black_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/54852/small/logo_200_200_stxqsn.png"
    ],
    "volume_24h": 2698306.1963988966,
    "updated_at": "2026-01-02T09:36:18.845Z"
  },
  {
    "id": "massively-multiplayer-online-mmo",
    "name": "MMO",
    "market_cap": 131680952.61896187,
    "market_cap_change_24h": 1.9569635550482196,
    "content": "Online games that host large numbers of players.",
    "top_3_coins_id": [
      "big-time",
      "alien-worlds",
      "cornucopias"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32251/small/-6136155493475923781_121.jpg",
      "https://coin-images.coingecko.com/coins/images/14676/small/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
      "https://coin-images.coingecko.com/coins/images/21452/small/g56WwJDA_400x400.jpg"
    ],
    "volume_24h": 61518088.89038448,
    "updated_at": "2026-01-02T09:36:36.930Z"
  },
  {
    "id": "wojak-themed",
    "name": "Wojak-Themed",
    "market_cap": 127576791.63501488,
    "market_cap_change_24h": 5.036832410155958,
    "content": "Meme coins related to Wojak.",
    "top_3_coins_id": [
      "non-playable-coin",
      "wojak-4",
      "wojak"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31193/small/NPC_200x200.png",
      "https://coin-images.coingecko.com/coins/images/70552/small/o6zl61yh9k32fu3rimuoe4sxlfeq.",
      "https://coin-images.coingecko.com/coins/images/29856/small/wojak.png"
    ],
    "volume_24h": 9308403.906603534,
    "updated_at": "2026-01-02T09:36:35.881Z"
  },
  {
    "id": "runes",
    "name": "Runes",
    "market_cap": 126971748.5842741,
    "market_cap_change_24h": 6.230979312880018,
    "content": "Runes is a token standard on Bitcoin that improve the creation of fungible tokens on the blockchain.",
    "top_3_coins_id": [
      "dog-go-to-the-moon-rune",
      "magic-internet-money-runes",
      "liquidium-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37352/small/DOGGOTOTHEMOON.png",
      "https://coin-images.coingecko.com/coins/images/54456/small/MIM_LOGO_2.png",
      "https://coin-images.coingecko.com/coins/images/39308/small/Token_Symbol_256x.png"
    ],
    "volume_24h": 3009327.894550398,
    "updated_at": "2026-01-02T09:36:23.273Z"
  },
  {
    "id": "action-games",
    "name": "Action Games",
    "market_cap": 126239027.26570183,
    "market_cap_change_24h": 1.457390796403623,
    "content": "Fast-paced games that emphasize combat, reflexes, and real-time challenges.",
    "top_3_coins_id": [
      "wilder-world",
      "gods-unchained",
      "gunz"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15407/small/wld-logo.png",
      "https://coin-images.coingecko.com/coins/images/17139/small/10631.png",
      "https://coin-images.coingecko.com/coins/images/55027/small/gunz.jpg"
    ],
    "volume_24h": 23664061.08400737,
    "updated_at": "2026-01-02T09:36:53.380Z"
  },
  {
    "id": "tiktok-meme",
    "name": "TikTok Meme",
    "market_cap": 123203215.151328,
    "market_cap_change_24h": 8.490454661977868,
    "content": "TikTok Meme Coins are tokens inspired by viral TikTok trends. ",
    "top_3_coins_id": [
      "moo-deng",
      "chill-guy",
      "the-official-67-coin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50264/small/MOODENG.jpg",
      "https://coin-images.coingecko.com/coins/images/51746/small/Scherm%C2%ADafbeelding_2024-11-15_om_20.57.58.png",
      "https://coin-images.coingecko.com/coins/images/69386/small/dextools-67-pfp.png"
    ],
    "volume_24h": 37759871.31891323,
    "updated_at": "2026-01-02T09:36:13.269Z"
  },
  {
    "id": "bitcoin-meme",
    "name": "Bitcoin Meme",
    "market_cap": 119795659.97609344,
    "market_cap_change_24h": 6.688467958437988,
    "content": "Meme coins native to the Bitcoin network.",
    "top_3_coins_id": [
      "dog-go-to-the-moon-rune",
      "magic-internet-money-runes",
      "baby-bottle"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37352/small/DOGGOTOTHEMOON.png",
      "https://coin-images.coingecko.com/coins/images/54456/small/MIM_LOGO_2.png",
      "https://coin-images.coingecko.com/coins/images/69833/small/bott.png"
    ],
    "volume_24h": 2678916.617232451,
    "updated_at": "2026-01-02T09:36:51.294Z"
  },
  {
    "id": "tap-to-earn",
    "name": "Tap to Earn",
    "market_cap": 117680958.99033058,
    "market_cap_change_24h": 4.760225536894567,
    "content": "Tap-to-earn (T2E) combines simple and addictive gameplay with the potential to earn cryptocurrency. These games, often hosted on platforms like Telegram, allow users to earn digital assets by performing actions such as repeatedly tapping on a screen. ",
    "top_3_coins_id": [
      "notcoin",
      "catizen",
      "hamster-kombat"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33453/small/rFmThDiD_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/50236/small/cati.png",
      "https://coin-images.coingecko.com/coins/images/39102/small/hamster-removebg-preview.png"
    ],
    "volume_24h": 33998996.72316613,
    "updated_at": "2026-01-02T09:36:23.323Z"
  },
  {
    "id": "real-estate",
    "name": "Tokenized Real Estate",
    "market_cap": 113728216.48012564,
    "market_cap_change_24h": 5.931069073422554,
    "content": "Tokenized real estate in crypto refers to the integration of blockchain technology and cryptocurrencies into the real estate market. This can involve tokenizing real estate assets, which means dividing the ownership of a property into digital tokens that can be bought, sold, or traded on a blockchain. This allows for fractional ownership, where multiple investors can own a portion of a property.",
    "top_3_coins_id": [
      "propy",
      "elysia",
      "imo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/869/small/propy-pro-logo.png",
      "https://coin-images.coingecko.com/coins/images/10887/small/elysia_logo_200.png",
      "https://coin-images.coingecko.com/coins/images/14831/small/IMO_logo_rond_200.png"
    ],
    "volume_24h": 13111499.794482723,
    "updated_at": "2026-01-02T09:36:13.274Z"
  },
  {
    "id": "legal",
    "name": "Legal",
    "market_cap": 111425623.34929766,
    "market_cap_change_24h": 0.6324271422833118,
    "content": "Legal industry handles subjective disputes that cannot be solved by smart contracts.",
    "top_3_coins_id": [
      "law-blocks",
      "escoin-token",
      "vaiot"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26266/small/photo_6264996132874731595_y.jpg",
      "https://coin-images.coingecko.com/coins/images/13566/small/escoin-200.png",
      "https://coin-images.coingecko.com/coins/images/13981/small/VAIOT_logo.png"
    ],
    "volume_24h": 1069782.0602598742,
    "updated_at": "2026-01-02T09:35:59.105Z"
  },
  {
    "id": "liquid-staked-sui",
    "name": "Liquid Staked SUI",
    "market_cap": 111366696.74001382,
    "market_cap_change_24h": 6.876049736383805,
    "content": "Liquid staked SUI is a tokenized representation of staked Sui that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "haedal-staked-sui",
      "volo-staked-sui",
      "spring-staked-sui"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33512/small/hasui.png",
      "https://coin-images.coingecko.com/coins/images/33243/small/voloSUI_%283%29.png",
      "https://coin-images.coingecko.com/coins/images/51233/small/Token_%281%29.png"
    ],
    "volume_24h": 13436253.040724134,
    "updated_at": "2026-01-02T09:36:41.375Z"
  },
  {
    "id": "timefi",
    "name": "TimeFi",
    "market_cap": 105944859.383426,
    "market_cap_change_24h": 8.401726433402025,
    "content": "TimeFi is a blockchain-based approach to treating time as a monetizable asset through tokenized productivity, verifiable commitments, and AI-driven incentives.",
    "top_3_coins_id": [
      "pieverse"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68773/small/pieverse.png"
    ],
    "volume_24h": 29898235.591639176,
    "updated_at": "2026-01-02T09:35:44.594Z"
  },
  {
    "id": "game-studio",
    "name": "Game Studio",
    "market_cap": 103572009.43106936,
    "market_cap_change_24h": -11.8234786890578,
    "content": "A game studio develops video games using blockchain technologies, integrating NFTs, cryptocurrencies, and smart contracts to enable player ownership and the trading of in-game assets",
    "top_3_coins_id": [
      "power-protocol",
      "gods-unchained",
      "playsout"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70944/small/power.png",
      "https://coin-images.coingecko.com/coins/images/17139/small/10631.png",
      "https://coin-images.coingecko.com/coins/images/67765/small/plays.jpg"
    ],
    "volume_24h": 13326227.011103418,
    "updated_at": "2026-01-02T09:35:11.055Z"
  },
  {
    "id": "adventure-games",
    "name": "Adventure Games",
    "market_cap": 102511890.09945635,
    "market_cap_change_24h": 4.080361632545848,
    "content": "Adventure game is a video game genre where players embark on a journey in a narrative-driven world, solving puzzles, interacting with characters, and making decisions that can influence the outcome of the story. ",
    "top_3_coins_id": [
      "illuvium",
      "pepecoin-2",
      "aria-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14468/small/logo-200x200.png",
      "https://coin-images.coingecko.com/coins/images/30219/small/pepecoin-icon_200x200.png",
      "https://coin-images.coingecko.com/coins/images/68392/small/aria.png"
    ],
    "volume_24h": 9430791.115628088,
    "updated_at": "2026-01-02T09:35:16.651Z"
  },
  {
    "id": "capital-launchpad",
    "name": "Capital Launchpad",
    "market_cap": 97854923.23917127,
    "market_cap_change_24h": 1.3682455737441996,
    "content": "Capital Launchpad is a Web3 crowdfunding platform by Kaito that connects early-stage crypto projects with investors through a merit-based allocation system.",
    "top_3_coins_id": [
      "everlyn",
      "boundless",
      "limitless-3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68908/small/everlyn.png",
      "https://coin-images.coingecko.com/coins/images/68462/small/boundless.png",
      "https://coin-images.coingecko.com/coins/images/69506/small/limitless.png"
    ],
    "volume_24h": 21305364.553701792,
    "updated_at": "2026-01-02T09:36:30.519Z"
  },
  {
    "id": "ton-meme-coins",
    "name": "TON Meme",
    "market_cap": 97012991.49356896,
    "market_cap_change_24h": 9.083973166787986,
    "content": "Meme coins native to the TON network.",
    "top_3_coins_id": [
      "notcoin",
      "dogs-2",
      "not-pixel"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33453/small/rFmThDiD_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/39699/small/dogs_logo_200x200.png",
      "https://coin-images.coingecko.com/coins/images/53817/small/Pixel_logo.png"
    ],
    "volume_24h": 28303997.602031015,
    "updated_at": "2026-01-02T09:36:26.449Z"
  },
  {
    "id": "move-to-earn",
    "name": "Move To Earn",
    "market_cap": 97006141.0652149,
    "market_cap_change_24h": 1.035979029050078,
    "content": "The move-to-earn model is often implemented through mobile applications that use technologies such as GPS tracking to monitor users' physical activity. These apps then reward users with tradable tokens or NFTs based on the distance they cover or the number of steps they take.",
    "top_3_coins_id": [
      "stepn",
      "superwalk",
      "sweatcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23597/small/token-gmt-200x200.png",
      "https://coin-images.coingecko.com/coins/images/27186/small/GRND_3x.png",
      "https://coin-images.coingecko.com/coins/images/25057/small/Sweat_-_logo-nov-2025.png"
    ],
    "volume_24h": 15594914.985845348,
    "updated_at": "2026-01-02T09:36:52.346Z"
  },
  {
    "id": "strategy-games",
    "name": "Strategy Games",
    "market_cap": 94808840.12731372,
    "market_cap_change_24h": 7.11008780371906,
    "content": "Strategy game is a video game genre where players engage in planning, resource management, and decision-making to achieve specific objectives.",
    "top_3_coins_id": [
      "ix-token",
      "endurance",
      "arena-z"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/20927/small/IXT_LOGO_PNG_RGB_200X.png",
      "https://coin-images.coingecko.com/coins/images/33528/small/ACE.png",
      "https://coin-images.coingecko.com/coins/images/67345/small/logo_transparent_200x200.png"
    ],
    "volume_24h": 111192889.42804009,
    "updated_at": "2026-01-02T09:36:21.990Z"
  },
  {
    "id": "trading-bots",
    "name": "Trading Bots",
    "market_cap": 94157153.5319095,
    "market_cap_change_24h": 3.544450031650094,
    "content": "Trading bots are automated software programs that execute cryptocurrency trades based on predefined rules or algorithms. They analyze market data like price, volume, and order book activity to make buy or sell decisions without human intervention.",
    "top_3_coins_id": [
      "quantixai",
      "tradoor",
      "polycule"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/36166/small/200px_Qai.png",
      "https://coin-images.coingecko.com/coins/images/68862/small/tradoor.png",
      "https://coin-images.coingecko.com/coins/images/55932/small/pcule.jpg"
    ],
    "volume_24h": 25441664.7038059,
    "updated_at": "2026-01-02T09:35:14.228Z"
  },
  {
    "id": "healthcare",
    "name": "Healthcare",
    "market_cap": 93209088.23153336,
    "market_cap_change_24h": 0.8464083434303589,
    "content": "A coin or token that leverages blockchain technology to improve various aspects of the healthcare industry.",
    "top_3_coins_id": [
      "hippo-protocol",
      "medibloc",
      "babyboomtoken"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55508/small/hpo.png",
      "https://coin-images.coingecko.com/coins/images/1374/small/medibloc_basic.png",
      "https://coin-images.coingecko.com/coins/images/50996/small/BabyBoomToken_logo.png"
    ],
    "volume_24h": 1923764.6920654292,
    "updated_at": "2026-01-02T09:35:37.644Z"
  },
  {
    "id": "binance-megadrop",
    "name": "Binance Megadrop",
    "market_cap": 90859775.86978284,
    "market_cap_change_24h": 1.2433591692683081,
    "content": "Binance Megadrop is an airdrop program by Binance. It allows users to earn rewards by subscribing to BNB to Locked Products and completing tasks within their Binance Web3 Wallet.\r\n",
    "top_3_coins_id": [
      "lista",
      "bouncebit",
      "solv-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38068/small/lista.png",
      "https://coin-images.coingecko.com/coins/images/37144/small/bb.jpeg",
      "https://coin-images.coingecko.com/coins/images/27987/small/solv.jpg"
    ],
    "volume_24h": 27664777.554886106,
    "updated_at": "2026-01-02T09:35:51.426Z"
  },
  {
    "id": "commodity-backed-stablecoin",
    "name": "Commodity-backed Stablecoin",
    "market_cap": 85414269.98247667,
    "market_cap_change_24h": 0.8356240655208029,
    "content": "A commodity-backed stablecoin is a type of stablecoin designed to maintain a stable value by being pegged to a reserve of physical commodities such as gold.",
    "top_3_coins_id": [
      "pleasing-gold",
      "dorol",
      "quorium"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70395/small/%E9%BB%84%E9%87%91.png",
      "https://coin-images.coingecko.com/coins/images/68638/small/Dorol_200x200_logo.png",
      "https://coin-images.coingecko.com/coins/images/33597/small/Linked_in_Profile_Picture.png"
    ],
    "volume_24h": 202816.57745174097,
    "updated_at": "2026-01-02T09:35:33.269Z"
  },
  {
    "id": "hybrid-token-standards",
    "name": "Hybrid Token Standards",
    "market_cap": 84772813.13546124,
    "market_cap_change_24h": 8.73420004940449,
    "content": "Hybrid Token Standards allow tokens to have characteristics of both fungible assets and non-fungible tokens.",
    "top_3_coins_id": [
      "non-playable-coin",
      "pandora",
      "bozo-hybrid"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31193/small/NPC_200x200.png",
      "https://coin-images.coingecko.com/coins/images/34996/small/PandoraToken.png",
      "https://coin-images.coingecko.com/coins/images/34555/small/bozo.png"
    ],
    "volume_24h": 5553566.9084713105,
    "updated_at": "2026-01-02T09:35:17.626Z"
  },
  {
    "id": "parody-meme-coins",
    "name": "Parody Meme",
    "market_cap": 84139742.56312975,
    "market_cap_change_24h": 6.9569538612498425,
    "content": "Meme coins which are inspired by the names of well-known brands, individuals, or cultural icons.",
    "top_3_coins_id": [
      "troll-2",
      "bulla-3",
      "401jk"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55282/small/trolllogo.png",
      "https://coin-images.coingecko.com/coins/images/66398/small/hasb.png",
      "https://coin-images.coingecko.com/coins/images/68871/small/photo_2025-08-28_15-16-54.jpg"
    ],
    "volume_24h": 10482678.350570582,
    "updated_at": "2026-01-02T09:36:45.009Z"
  },
  {
    "id": "clanker-ecosystem",
    "name": "Clanker Ecosystem",
    "market_cap": 82751742.2448211,
    "market_cap_change_24h": 10.697183504952527,
    "content": "Clanker Ecosystem consists of tokens launched via Clanker, an autonomous memecoin launcher.",
    "top_3_coins_id": [
      "tokenbot-2",
      "bankercoin-2",
      "bracky"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51440/small/CLANKER.png",
      "https://coin-images.coingecko.com/coins/images/52626/small/bankr-static.png",
      "https://coin-images.coingecko.com/coins/images/67973/small/original.jpeg"
    ],
    "volume_24h": 16149415.068901036,
    "updated_at": "2026-01-02T09:36:45.920Z"
  },
  {
    "id": "farcaster-ecosystem",
    "name": "Farcaster Ecosystem",
    "market_cap": 81200954.85622773,
    "market_cap_change_24h": 4.445861373575181,
    "content": "It consists of native tokens on Farcaster Ecosystem.",
    "top_3_coins_id": [
      "degen-base",
      "the-doge-nft",
      "doginme"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34515/small/android-chrome-512x512.png",
      "https://coin-images.coingecko.com/coins/images/18111/small/Doge.png",
      "https://coin-images.coingecko.com/coins/images/35123/small/doginme-logo1-transparent200.png"
    ],
    "volume_24h": 4226763.481312692,
    "updated_at": "2026-01-02T09:36:51.289Z"
  },
  {
    "id": "marketing",
    "name": "Marketing",
    "market_cap": 80238086.1401179,
    "market_cap_change_24h": 2.6086378005846367,
    "content": "It combines the existing Web2 and Web3 marketing channels to identify the most valuable audiences and reward them through on and off-chain rewards.",
    "top_3_coins_id": [
      "cookie",
      "babyboomtoken",
      "layer3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38450/small/cookie_token_logo_200x200.png",
      "https://coin-images.coingecko.com/coins/images/50996/small/BabyBoomToken_logo.png",
      "https://coin-images.coingecko.com/coins/images/37768/small/Square.png"
    ],
    "volume_24h": 20971859.04564134,
    "updated_at": "2026-01-02T09:36:11.141Z"
  },
  {
    "id": "memorial-themed",
    "name": "Memorial Themed",
    "market_cap": 79165147.40989487,
    "market_cap_change_24h": 10.66910662388496,
    "content": "Meme coins dedicated to animals that died too soon or were tragically killed.",
    "top_3_coins_id": [
      "peanut-the-squirrel",
      "harambe-2",
      "first-convicted-raccon"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51301/small/Peanut_the_Squirrel.png",
      "https://coin-images.coingecko.com/coins/images/34668/small/haram_%281%29.jpg",
      "https://coin-images.coingecko.com/coins/images/51302/small/fred_pfp_200_transparent_v3.png"
    ],
    "volume_24h": 52955092.30612712,
    "updated_at": "2026-01-02T09:36:32.788Z"
  },
  {
    "id": "celebrity-themed-coins",
    "name": "Celebrity-Themed",
    "market_cap": 77283705.39335918,
    "market_cap_change_24h": 1.1699300482893504,
    "content": "Meme coins which are inspired by celebrity.",
    "top_3_coins_id": [
      "yzy",
      "bulla-3",
      "kekius-maximus"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68439/small/yzy.png",
      "https://coin-images.coingecko.com/coins/images/66398/small/hasb.png",
      "https://coin-images.coingecko.com/coins/images/52791/small/Untitled_design.png"
    ],
    "volume_24h": 4099535.8372312807,
    "updated_at": "2026-01-02T09:35:49.143Z"
  },
  {
    "id": "liquid-staked-apt",
    "name": "Liquid Staked APT\t",
    "market_cap": 76913446.89108863,
    "market_cap_change_24h": 8.227009303346728,
    "content": "Liquid staked APT is a tokenized representation of staked Aptos that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "hyperion-staked-aptos",
      "trufin-staked-apt",
      "thala-apt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67134/small/stapt.jpg",
      "https://coin-images.coingecko.com/coins/images/50362/small/truAPT-logo_2.png",
      "https://coin-images.coingecko.com/coins/images/33020/small/thAPT_Logomark.png"
    ],
    "volume_24h": 324774.1973320157,
    "updated_at": "2026-01-02T09:36:39.371Z"
  },
  {
    "id": "guild-scholarship",
    "name": "Guild and Scholarship",
    "market_cap": 73883375.03154065,
    "market_cap_change_24h": 4.572465599702691,
    "content": "Guilds are decentralized autonomous organizations (DAOs) that invests in NFTs like game assets and rent them out to players. Players who receive rented game items are known as scholars and can be said to receive a scholarship. Guilds are an important component in the play to earn (P2E) ecosystem as these games require an upfront investment capital for players to participate in.",
    "top_3_coins_id": [
      "yield-guild-games",
      "ancient8",
      "guildfi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/17358/small/Shield_Mark_-_Colored_-_Iridescent.png",
      "https://coin-images.coingecko.com/coins/images/39170/small/A8_Token-04_200x200.png",
      "https://coin-images.coingecko.com/coins/images/20933/small/guildfi-logo-200.png"
    ],
    "volume_24h": 12337931.536808603,
    "updated_at": "2026-01-02T09:36:06.859Z"
  },
  {
    "id": "poolz-finance-launchpad",
    "name": "Poolz Finance Launchpad",
    "market_cap": 72575337.43652585,
    "market_cap_change_24h": 2.055849014785619,
    "content": "Poolz Finance Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "chaingpt",
      "ix-swap",
      "soil"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29306/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/18069/small/IXS-ava-square_2x.png",
      "https://coin-images.coingecko.com/coins/images/32050/small/SOIL_sygnet_dark_blue.png"
    ],
    "volume_24h": 11927642.811261188,
    "updated_at": "2026-01-02T09:36:14.396Z"
  },
  {
    "id": "quest-to-earn",
    "name": "Quest-to-Earn",
    "market_cap": 70673921.93961926,
    "market_cap_change_24h": 2.848932297516362,
    "content": "Quest-to-Earn refers to a gamified system in which users complete specific tasks or challenges to earn rewards, which can be in the form of points, tokens, or other incentives.",
    "top_3_coins_id": [
      "project-galaxy",
      "layer3",
      "meeds-dao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/24530/small/galaxy.jpg",
      "https://coin-images.coingecko.com/coins/images/37768/small/Square.png",
      "https://coin-images.coingecko.com/coins/images/24281/small/meeds-logo-m-200-tr.png"
    ],
    "volume_24h": 6020897.406748003,
    "updated_at": "2026-01-02T09:36:34.842Z"
  },
  {
    "id": "metadao-launchpad",
    "name": "MetaDAO Launchpad",
    "market_cap": 70043990.7625638,
    "market_cap_change_24h": 6.511384594910945,
    "content": "MetaDAO Launchpad (https://metadao.fi/) is a Solana-based platform designed to facilitate decentralized project launches and funding, leveraging futarchy-based governance to align community and market incentives.",
    "top_3_coins_id": [
      "avici",
      "umbra",
      "solomon"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70082/small/avici.png",
      "https://coin-images.coingecko.com/coins/images/69818/small/umbra-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/70701/small/SOLO.png"
    ],
    "volume_24h": 4272572.044999103,
    "updated_at": "2026-01-02T09:35:34.291Z"
  },
  {
    "id": "sports-games",
    "name": "Sports Games",
    "market_cap": 68354160.3972532,
    "market_cap_change_24h": 0.05158087450741424,
    "content": "Sports game simulates the playing of real-world sports including sports such as football, badminton and basketball.",
    "top_3_coins_id": [
      "stepn",
      "powersnookercoin",
      "crown-by-third-time-games"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23597/small/token-gmt-200x200.png",
      "https://coin-images.coingecko.com/coins/images/66685/small/Token_Logo_%28200_x_200_px%29.png",
      "https://coin-images.coingecko.com/coins/images/30452/small/crown_200_transparent.png"
    ],
    "volume_24h": 12688509.477163915,
    "updated_at": "2026-01-02T09:36:25.336Z"
  },
  {
    "id": "desci-meme",
    "name": "Desci Meme",
    "market_cap": 67982946.9188863,
    "market_cap_change_24h": 0.4093689831456227,
    "content": "",
    "top_3_coins_id": [
      "pythia",
      "kekius-maximus",
      "bitchemical-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53301/small/PYTHIA-Coingecko.png",
      "https://coin-images.coingecko.com/coins/images/52791/small/Untitled_design.png",
      "https://coin-images.coingecko.com/coins/images/39578/small/bitchemical.png"
    ],
    "volume_24h": 2233476.418093334,
    "updated_at": "2026-01-02T09:36:31.882Z"
  },
  {
    "id": "discord-bots",
    "name": "Discord Bots",
    "market_cap": 67856177.6171942,
    "market_cap_change_24h": 1.1472426464080945,
    "content": "Discord bots are tools that automate tasks to the Discord server, making them more engaging and interactive for users.",
    "top_3_coins_id": [
      "chaingpt",
      "tokenfi",
      "paal-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29306/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/32507/small/MAIN_TokenFi_logo_icon.png",
      "https://coin-images.coingecko.com/coins/images/30815/small/Paal_New_Logo_%281%29.png"
    ],
    "volume_24h": 18106290.16854009,
    "updated_at": "2026-01-02T09:35:48.018Z"
  },
  {
    "id": "anime-themed-coins",
    "name": "Anime-Themed",
    "market_cap": 60705618.73343221,
    "market_cap_change_24h": 4.341939490207088,
    "content": "Meme coins which are inspired by anime.",
    "top_3_coins_id": [
      "anime",
      "wen-4",
      "wagmi-game-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53575/small/anime.jpg",
      "https://coin-images.coingecko.com/coins/images/34856/small/wen-logo-new.jpg",
      "https://coin-images.coingecko.com/coins/images/25906/small/WAGMI_DEFENSE_LOGO24_coingecko.png"
    ],
    "volume_24h": 18764902.4027712,
    "updated_at": "2026-01-02T09:35:28.575Z"
  },
  {
    "id": "believe-app-ecosystem",
    "name": "Believe.app Ecosystem",
    "market_cap": 59522481.850820206,
    "market_cap_change_24h": 5.299750835751058,
    "content": "Believe.app Ecosystem consists of tokens launched via believe.app.",
    "top_3_coins_id": [
      "kled-ai",
      "dupe",
      "ben-pasternak"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/56007/small/kled-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/55713/small/dupelogopercent.png",
      "https://coin-images.coingecko.com/coins/images/53916/small/launchcoin.jpg"
    ],
    "volume_24h": 10713874.650758421,
    "updated_at": "2026-01-02T09:35:03.555Z"
  },
  {
    "id": "trading-card-rwa-platform",
    "name": "Trading Card RWA Platform",
    "market_cap": 57445281.87353812,
    "market_cap_change_24h": -3.052948514427535,
    "content": "Trading Card RWA Platforms tokenize physical collectible cards (e.g., Pokémon, sports cards) on a blockchain. The physical cards are stored with a custodian or vault, and each blockchain token represents ownership of the real-world card. This enables features such as fractional ownership and global secondary trading. ",
    "top_3_coins_id": [
      "collect-on-fanable",
      "collector-crypt",
      "charred-treasures"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/71291/small/collect.png",
      "https://coin-images.coingecko.com/coins/images/68728/small/cards-logo.jpeg",
      "https://coin-images.coingecko.com/coins/images/71028/small/charred_200*200.png"
    ],
    "volume_24h": 14989549.338364933,
    "updated_at": "2026-01-02T09:35:49.125Z"
  },
  {
    "id": "augmented-reality",
    "name": "Augmented Reality",
    "market_cap": 54409739.563356325,
    "market_cap_change_24h": 6.55918269233289,
    "content": "Augmented Reality (AR) offers interactive experiences without disconnecting users from the real world, allowing them to interact with digital elements in a real-world context.",
    "top_3_coins_id": [
      "auki-labs",
      "mossland",
      "infinity-rising"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39811/small/COINGECKO-200-x-200_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/2374/small/Mossland_Symbol_Gradient.png",
      "https://coin-images.coingecko.com/coins/images/70697/small/InfinityRisingRISE-badge200x200.png"
    ],
    "volume_24h": 713060.4284924229,
    "updated_at": "2026-01-02T09:36:45.964Z"
  },
  {
    "id": "decentralized-social-media-desoc",
    "name": "Decentralized Social Media (DeSOC)",
    "market_cap": 52949204.96850823,
    "market_cap_change_24h": -0.01313242419245956,
    "content": "Decentralized Social Media (DeSOC) refers to social media platforms and protocols that operate without a central authority over user data, content, or infrastructure.",
    "top_3_coins_id": [
      "deso"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16310/small/deso-logo-refresh-white.png"
    ],
    "volume_24h": 24339.268768254315,
    "updated_at": "2026-01-02T09:35:27.523Z"
  },
  {
    "id": "charity",
    "name": "Charity",
    "market_cap": 48732824.086148664,
    "market_cap_change_24h": 3.05646494560514,
    "content": "Charity tokens and coins involves using cryptocurrencies to support charitable causes. ",
    "top_3_coins_id": [
      "araracoin",
      "ski-mask-dog",
      "giveback"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54852/small/logo_200_200_stxqsn.png",
      "https://coin-images.coingecko.com/coins/images/37195/small/32992128-F52F-4346-84CA-8E0C48F43606.jpeg",
      "https://coin-images.coingecko.com/coins/images/70326/small/E1BA6A55-7903-4659-BC96-09D4ABF0B851.PNG"
    ],
    "volume_24h": 2182226.4452176956,
    "updated_at": "2026-01-02T09:35:21.930Z"
  },
  {
    "id": "chaingpt-pad",
    "name": "ChainGPT Launchpad",
    "market_cap": 48653282.282951646,
    "market_cap_change_24h": 2.143811637465386,
    "content": "ChainGPT Lauchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "chaingpt",
      "solidus-aitech",
      "serenity-shield"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29306/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/22114/small/CMC_Logo_200x200.png",
      "https://coin-images.coingecko.com/coins/images/33744/small/LogoSerenity.png"
    ],
    "volume_24h": 12086873.471199973,
    "updated_at": "2026-01-02T09:35:22.939Z"
  },
  {
    "id": "tourism",
    "name": "Tourism",
    "market_cap": 42581648.936101824,
    "market_cap_change_24h": 1.8893835404082442,
    "content": "A coin or token that leverages blockchain technology to improve various aspects of the tourism industry.",
    "top_3_coins_id": [
      "concierge-io",
      "vow",
      "ado-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3014/small/AVA_Logo_160x160px_Black.png",
      "https://coin-images.coingecko.com/coins/images/18202/small/72Nd63R0_400x400.png",
      "https://coin-images.coingecko.com/coins/images/27346/small/ado-200x200.png"
    ],
    "volume_24h": 5291103.195814606,
    "updated_at": "2026-01-02T09:36:27.396Z"
  },
  {
    "id": "nft-strategy-flywheel",
    "name": "NFT Strategy Flywheel",
    "market_cap": 40716592.044567,
    "market_cap_change_24h": 22.86041756774227,
    "content": "The NFT Strategy Flywheel is a DeFi-NFT hybrid model that automates NFT accumulation and token burning using trading fees to drive continuous buy pressure and value accrual for token holders.",
    "top_3_coins_id": [
      "punkstrategy",
      "vibestrategy",
      "chimpstrategy"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69249/small/tokenworks.png",
      "https://coin-images.coingecko.com/coins/images/69924/small/tokenworks.png",
      "https://coin-images.coingecko.com/coins/images/70153/small/chmpstr.jpeg"
    ],
    "volume_24h": 1012001.5425405839,
    "updated_at": "2026-01-02T09:35:46.799Z"
  },
  {
    "id": "liquid-restaked-sol",
    "name": "Liquid Restaked SOL",
    "market_cap": 40572461.567512706,
    "market_cap_change_24h": 2.7495466682890375,
    "content": "Liquid Restaked SOL is a tokenized representation of restaked Ethereum that can be traded or used in various DeFi applications.",
    "top_3_coins_id": [
      "solayer-staked-sol",
      "renzo-restaked-sol",
      "kyros-restaked-sol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39933/small/Green_Back_01a_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/39705/small/ezSOL_Logo.png",
      "https://coin-images.coingecko.com/coins/images/51806/small/kySOL_Logo.png"
    ],
    "volume_24h": 193949.83400189158,
    "updated_at": "2026-01-02T09:35:31.962Z"
  },
  {
    "id": "jupiter-dtf",
    "name": "Jupiter DTF Launchpad",
    "market_cap": 40383645.16316141,
    "market_cap_change_24h": 0.4821833368744698,
    "content": "Jupiter Decentralized Token Formation (DTF) is a decentralized launchpad platform launched by Jupiter Exchange.",
    "top_3_coins_id": [
      "humidifi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70397/small/720oatTU_400x400.jpg"
    ],
    "volume_24h": 22590213.113873266,
    "updated_at": "2026-01-02T09:35:55.602Z"
  },
  {
    "id": "wormhole-assets",
    "name": "Wormhole Assets",
    "market_cap": 37835439.21986279,
    "market_cap_change_24h": 3.5432190380012356,
    "content": "The Wormhole project is a bidirectional, decentralized SPL token bridge between Solana and EVM chains.",
    "top_3_coins_id": [
      "wormhole-bridged-weth-monad",
      "wormhole-bridged-wsteth-bsc",
      "wormhole-bridged-hype"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70824/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/69610/small/wsteth.png",
      "https://coin-images.coingecko.com/coins/images/68481/small/hype.png"
    ],
    "volume_24h": 23285470.847756907,
    "updated_at": "2026-01-02T09:36:26.428Z"
  },
  {
    "id": "nftstrategy-ecosystem",
    "name": "NFTStrategy Ecosystem",
    "market_cap": 37312411.48090071,
    "market_cap_change_24h": 25.037936087598396,
    "content": "NFTStrategy is an automated protocol that converts crypto trading fees into buying and selling floor NFTs, creating a self-sustaining value loop for NFT collections.",
    "top_3_coins_id": [
      "punkstrategy",
      "vibestrategy",
      "chimpstrategy"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69249/small/tokenworks.png",
      "https://coin-images.coingecko.com/coins/images/69924/small/tokenworks.png",
      "https://coin-images.coingecko.com/coins/images/70153/small/chmpstr.jpeg"
    ],
    "volume_24h": 1001847.5531514363,
    "updated_at": "2026-01-02T09:35:18.662Z"
  },
  {
    "id": "ohm-fork",
    "name": "Ohm Fork",
    "market_cap": 36502076.22933401,
    "market_cap_change_24h": 4.242210365470324,
    "content": "An Ohm fork is a change to the underlying code of the Olympus DAO's OHM protocol that results in a split into a separate versions of the protocol.",
    "top_3_coins_id": [
      "snowbank",
      "wonderland",
      "klima-dao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/19947/small/sb.png",
      "https://coin-images.coingecko.com/coins/images/18126/small/time.PNG",
      "https://coin-images.coingecko.com/coins/images/19169/small/Klima-Token.png"
    ],
    "volume_24h": 2360.23910334401,
    "updated_at": "2026-01-02T09:36:07.860Z"
  },
  {
    "id": "sui-meme",
    "name": "Sui Meme",
    "market_cap": 35446217.9051787,
    "market_cap_change_24h": 0.5392428491982914,
    "content": "Meme coins native to the Sui network.",
    "top_3_coins_id": [
      "sudeng",
      "miu-2",
      "memefi-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50450/small/sudeng.png",
      "https://coin-images.coingecko.com/coins/images/54420/small/miu_200_blue.png",
      "https://coin-images.coingecko.com/coins/images/51175/small/memefi.png"
    ],
    "volume_24h": 8672122.399749663,
    "updated_at": "2026-01-02T09:36:40.426Z"
  },
  {
    "id": "shooting-games",
    "name": "Shooting Games",
    "market_cap": 35286901.22914165,
    "market_cap_change_24h": 1.7515183526690812,
    "content": "Shooting games allow players to engage in combat by shooting enemies and objects. They can be presented in various perspectives including first-person or third-person views.",
    "top_3_coins_id": [
      "gunz",
      "farcana",
      "artyfact"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55027/small/gunz.jpg",
      "https://coin-images.coingecko.com/coins/images/34690/small/2025-12-16_12.32.57.jpg",
      "https://coin-images.coingecko.com/coins/images/33879/small/arty.png"
    ],
    "volume_24h": 8241078.443164825,
    "updated_at": "2026-01-02T09:36:20.941Z"
  },
  {
    "id": "tokenized-exchange-traded-funds-etfs",
    "name": "Tokenized Exchange-Traded Funds (ETFs)",
    "market_cap": 32394102.457215313,
    "market_cap_change_24h": 4.092169794139389,
    "content": "Tokenized Exchange-Traded Funds (ETFs) refers to digital representation of exchange-traded funds such as SPY, GLD, TQQQ, XLK, VXUS on a blockchain platform.",
    "top_3_coins_id": [
      "sp500-xstock",
      "nasdaq-xstock",
      "gold-xstock"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66695/small/Ticker_SPX__Company_Name_SP500__size_200x200_2x.png",
      "https://coin-images.coingecko.com/coins/images/66696/small/QQQx.png",
      "https://coin-images.coingecko.com/coins/images/66699/small/Ticker_GLD__Company_Name_Gold__size_200x200_2x.png"
    ],
    "volume_24h": 3753009.5819216627,
    "updated_at": "2026-01-02T09:35:18.805Z"
  },
  {
    "id": "wall-street-bets-themed-coins",
    "name": "Wall Street Bets Themed",
    "market_cap": 32254789.89397752,
    "market_cap_change_24h": 10.923324958788792,
    "content": "Meme coins which are inspired by the popular subreddit r/WallStreetBets.",
    "top_3_coins_id": [
      "game-stop",
      "stonks-4",
      "gme"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37895/small/_GME_New_Logo.png",
      "https://coin-images.coingecko.com/coins/images/52124/small/hehe.0fe13131.png",
      "https://coin-images.coingecko.com/coins/images/34930/small/GMEstop_%281%29_%281%29.png"
    ],
    "volume_24h": 992419.3092326323,
    "updated_at": "2026-01-02T09:36:27.314Z"
  },
  {
    "id": "racing-games",
    "name": "Racing Games",
    "market_cap": 25303812.248397302,
    "market_cap_change_24h": 4.496191964537228,
    "content": "Racing game involves competing in races with various vehicles. These games can range from realistic simulations to arcade-style fast-paced action.",
    "top_3_coins_id": [
      "wilder-world",
      "kompete",
      "revv"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15407/small/wld-logo.png",
      "https://coin-images.coingecko.com/coins/images/24298/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/12373/small/REVV_TOKEN_Refined_2021_%281%29.png"
    ],
    "volume_24h": 641744.8288380394,
    "updated_at": "2026-01-02T09:36:16.509Z"
  },
  {
    "id": "leveraged-token",
    "name": "Leveraged Token",
    "market_cap": 25191084.834021527,
    "market_cap_change_24h": 8.422107528749184,
    "content": "Leveraged crypto token is a type of financial instrument hat allows traders to amplify their exposure to the price movements of an underlying cryptocurrency.",
    "top_3_coins_id": [
      "hylo-leveraged-sol",
      "eth-2x-flexible-leverage-index",
      "btc-2x-flexible-leverage-index"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70041/small/ni5u6yn4g5z7ne286emolousuqp3.webp",
      "https://coin-images.coingecko.com/coins/images/14392/small/ETH2x-FLI_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/15406/small/Copy_of_BTC2x-FLI_token_logo.png"
    ],
    "volume_24h": 122829.81281671871,
    "updated_at": "2026-01-02T09:36:02.643Z"
  },
  {
    "id": "fractionalized-nft",
    "name": "Fractionalized NFT",
    "market_cap": 23726533.671179224,
    "market_cap_change_24h": 13.084285616890371,
    "content": "NFT that is being divided into smaller pieces which have more affordable pieces.",
    "top_3_coins_id": [
      "the-doge-nft",
      "wen-4",
      "feisty-doge-nft"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/18111/small/Doge.png",
      "https://coin-images.coingecko.com/coins/images/34856/small/wen-logo-new.jpg",
      "https://coin-images.coingecko.com/coins/images/17834/small/doge-fractionalized.png"
    ],
    "volume_24h": 3586343.9901373307,
    "updated_at": "2026-01-02T09:35:55.647Z"
  },
  {
    "id": "virtual-reality",
    "name": "Virtual Reality",
    "market_cap": 21212848.07662693,
    "market_cap_change_24h": 1.3791945607406553,
    "content": "Virtual reality (VR) uses computer-generated environments to create a simulated experience for users.",
    "top_3_coins_id": [
      "paal-ai",
      "ceek",
      "somnium-space-cubes"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30815/small/Paal_New_Logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/2581/small/ceek-smart-vr-token-logo.png",
      "https://coin-images.coingecko.com/coins/images/10687/small/CUBE_icon.png"
    ],
    "volume_24h": 1555213.6264047704,
    "updated_at": "2026-01-02T09:36:30.734Z"
  },
  {
    "id": "moonshot-ecosystem",
    "name": "Moonshot Ecosystem",
    "market_cap": 20987703.755523033,
    "market_cap_change_24h": 18.88714096465695,
    "content": "Moonshot Ecosystem consists of tokens launched via https://moonshot.money/.",
    "top_3_coins_id": [
      "nobody-sausage",
      "memdex100",
      "chadette"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55425/small/IMG_3623.jpeg",
      "https://coin-images.coingecko.com/coins/images/53587/small/IMG_1387.jpeg",
      "https://coin-images.coingecko.com/coins/images/54633/small/GC_new_logo.png"
    ],
    "volume_24h": 1058321.5678157469,
    "updated_at": "2026-01-02T09:35:38.725Z"
  },
  {
    "id": "camelot-launchpad",
    "name": "Camelot Launchpad",
    "market_cap": 19954678.94586443,
    "market_cap_change_24h": 1.3899336089368133,
    "content": "Camelot Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "penpie",
      "camelot-token",
      "winr-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30760/small/PNP_Token.png",
      "https://coin-images.coingecko.com/coins/images/28416/small/vj5DIMhP_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/29340/small/WINR.png"
    ],
    "volume_24h": 675204.8449241618,
    "updated_at": "2026-01-02T09:35:36.376Z"
  },
  {
    "id": "mascot-themed",
    "name": "Mascot-Themed",
    "market_cap": 19897294.70212681,
    "market_cap_change_24h": 1.3435316265661919,
    "content": "Meme coins related to Mascot.",
    "top_3_coins_id": [
      "kekius-maximus",
      "frogevip",
      "vankedisi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52791/small/Untitled_design.png",
      "https://coin-images.coingecko.com/coins/images/33216/small/frog.jpeg",
      "https://coin-images.coingecko.com/coins/images/54957/small/vankedisi-logo.jpg"
    ],
    "volume_24h": 3589458.6587541625,
    "updated_at": "2026-01-02T09:36:36.923Z"
  },
  {
    "id": "tron-meme",
    "name": "TRON Meme",
    "market_cap": 17877300.50674149,
    "market_cap_change_24h": 1.8971948103956353,
    "content": "Meme coins native to the TRON network.",
    "top_3_coins_id": [
      "sundog",
      "puss",
      "tron-bull"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39752/small/SUNDOG.jpg",
      "https://coin-images.coingecko.com/coins/images/50865/small/puss.jpg",
      "https://coin-images.coingecko.com/coins/images/39893/small/Tron_Bull.png"
    ],
    "volume_24h": 5833535.181724345,
    "updated_at": "2026-01-02T09:36:52.360Z"
  },
  {
    "id": "jpy-stablecoin",
    "name": "JPY Stablecoin",
    "market_cap": 16596462.3074734,
    "market_cap_change_24h": 0.5730361471383915,
    "content": "A JPY stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Japanese yen.",
    "top_3_coins_id": [
      "jpycoin",
      "gyen",
      "convertible-jpy-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70314/small/JPYC_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/14191/small/icon_gyen_200_200.png",
      "https://coin-images.coingecko.com/coins/images/31356/small/CJPY_logo.png"
    ],
    "volume_24h": 124662.82941698267,
    "updated_at": "2026-01-02T09:36:05.671Z"
  },
  {
    "id": "token-2022",
    "name": "Solana Token-2022",
    "market_cap": 16151514.863624744,
    "market_cap_change_24h": 3.2320574034437213,
    "content": "Solana Token-2022 is a new token standard on Solana that provides additional fungible and non-fungible token functionality.",
    "top_3_coins_id": [
      "ai16z",
      "fluxbot",
      "spacex-prestocks-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51090/small/AI16Z.jpg",
      "https://coin-images.coingecko.com/coins/images/33018/small/fluxbot.jpeg",
      "https://coin-images.coingecko.com/coins/images/69481/small/spacex.png"
    ],
    "volume_24h": 1172552.8335336759,
    "updated_at": "2026-01-02T09:36:19.918Z"
  },
  {
    "id": "nft-lending-borrowing",
    "name": "NFT Lending/Borrowing",
    "market_cap": 15968880.617009247,
    "market_cap_change_24h": 4.511117490936427,
    "content": "Individuals can use their NFTs as collateral to secure loans, or lend out their NFTs to others in exchange for interest, creating liquidity without the need to sell the NFTs themselves.",
    "top_3_coins_id": [
      "alpha-quark-token",
      "paddle-finance",
      "vanilla-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12872/small/alpha_quark_logo.png",
      "https://coin-images.coingecko.com/coins/images/66168/small/Logo_Orange.png",
      "https://coin-images.coingecko.com/coins/images/31995/small/bum.jpg"
    ],
    "volume_24h": 2974943.282617342,
    "updated_at": "2026-01-02T09:35:24.160Z"
  },
  {
    "id": "tokensets",
    "name": "TokenSets Ecosystem",
    "market_cap": 14988040.550637864,
    "market_cap_change_24h": 4.294095848851317,
    "content": "Interconnected platforms and services built around TokenSets.",
    "top_3_coins_id": [
      "defipulse-index",
      "eth-2x-flexible-leverage-index",
      "btc-2x-flexible-leverage-index"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12465/small/defi_pulse_index_set.png",
      "https://coin-images.coingecko.com/coins/images/14392/small/ETH2x-FLI_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/15406/small/Copy_of_BTC2x-FLI_token_logo.png"
    ],
    "volume_24h": 38543.386085144586,
    "updated_at": "2026-01-02T09:36:27.432Z"
  },
  {
    "id": "nft-launchpad",
    "name": "NFT Launchpad",
    "market_cap": 13372550.838029822,
    "market_cap_change_24h": 4.660560475003741,
    "content": "Platforms that enable users to deploy and launch their own NFT projects.",
    "top_3_coins_id": [
      "book-2",
      "nomu",
      "bmx"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32590/small/stuff.jpg",
      "https://coin-images.coingecko.com/coins/images/70590/small/Token_200_x_200px.png",
      "https://coin-images.coingecko.com/coins/images/31699/small/bmx_white.png"
    ],
    "volume_24h": 94723.68838684162,
    "updated_at": "2026-01-02T09:36:39.378Z"
  },
  {
    "id": "sun-pump-ecosystem",
    "name": "Sun Pump Ecosystem",
    "market_cap": 12903703.70477746,
    "market_cap_change_24h": 2.256470769673524,
    "content": "Sun Pump Ecosystem consists of tokens launched via sunpump.meme.",
    "top_3_coins_id": [
      "sundog",
      "tron-bull",
      "tron-mascot"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39752/small/SUNDOG.jpg",
      "https://coin-images.coingecko.com/coins/images/39893/small/Tron_Bull.png",
      "https://coin-images.coingecko.com/coins/images/51788/small/png.png"
    ],
    "volume_24h": 4918144.269252774,
    "updated_at": "2026-01-02T09:36:48.166Z"
  },
  {
    "id": "sgd-stablcoin",
    "name": "SGD Stablcoin",
    "market_cap": 12755631.138145931,
    "market_cap_change_24h": 0.03897669884338748,
    "content": "A SGD stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Singapore dollar.",
    "top_3_coins_id": [
      "xsgd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12832/small/StraitsX_Singapore_Dollar_%28XSGD%29_Token_Logo.png"
    ],
    "volume_24h": 733804.4421025155,
    "updated_at": "2026-01-02T09:36:19.901Z"
  },
  {
    "id": "paal-ai",
    "name": "PAAL AI Launchpad",
    "market_cap": 11650031.0915746,
    "market_cap_change_24h": 2.276269318991874,
    "content": "Projects incubated by PAAL AI, an AI-centric ecosystem built using Custom Data Feed and LLMs.",
    "top_3_coins_id": [
      "paal-ai",
      "ait-protocol",
      "vaulttech"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30815/small/Paal_New_Logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/33962/small/ait-logo-200x200.png",
      "https://coin-images.coingecko.com/coins/images/32578/small/IMG_6957.jpeg"
    ],
    "volume_24h": 1176030.45501124,
    "updated_at": "2026-01-02T09:36:17.554Z"
  },
  {
    "id": "idr-stablecoin",
    "name": "IDR Stablecoin",
    "market_cap": 11626234.225181356,
    "market_cap_change_24h": 0.8230287682663577,
    "content": "A IDR stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Indonesian rupiah.",
    "top_3_coins_id": [
      "rupiah-token",
      "idrx",
      "straitsx-indonesia-rupiah"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/9441/small/57421944_1371636006308255_3647136573922738176_n.jpg",
      "https://coin-images.coingecko.com/coins/images/34883/small/IDRX_BLUE_COIN_200x200.png",
      "https://coin-images.coingecko.com/coins/images/21126/small/XIDR_Logo_256_X_256.png"
    ],
    "volume_24h": 34680.21135023112,
    "updated_at": "2026-01-02T09:36:01.381Z"
  },
  {
    "id": "realt-tokens",
    "name": "RealT Tokens",
    "market_cap": 9210311.73605613,
    "market_cap_change_24h": 8.462616451721086,
    "content": "",
    "top_3_coins_id": [
      "realtoken-ecosystem-governance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37785/small/REG_Logo_200x200.png"
    ],
    "volume_24h": 369.8161026092572,
    "updated_at": "2026-01-02T09:36:15.511Z"
  },
  {
    "id": "yield-tokenization-product",
    "name": "Yield Tokenization Product",
    "market_cap": 9166098.912834337,
    "market_cap_change_24h": -2.4245895401460724,
    "content": "Yield tokenization product refers to converting the expected future yield or returns from an asset into tradable tokens on a blockchain, allowing for the trading, management, and optimization of yield independently from the underlying asset.",
    "top_3_coins_id": [
      "liquid-hype-yield"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68444/small/liquidhype.png"
    ],
    "volume_24h": 158.06509844762587,
    "updated_at": "2026-01-02T09:36:38.209Z"
  },
  {
    "id": "gotchiverse",
    "name": "Gotchiverse",
    "market_cap": 9045399.021962445,
    "market_cap_change_24h": 4.498264090743848,
    "content": "Assets and tokens that are used in Gotchiverse, a metaverse game based on the Aavegotchi project.",
    "top_3_coins_id": [
      "aavegotchi",
      "gax-liquidity-token-reward"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12467/small/GHST.png",
      "https://coin-images.coingecko.com/coins/images/25790/small/gltr-token.png"
    ],
    "volume_24h": 1177637.259906051,
    "updated_at": "2026-01-02T09:35:58.040Z"
  },
  {
    "id": "zora-creator-coins",
    "name": "Zora Creator",
    "market_cap": 9036880.982360845,
    "market_cap_change_24h": 8.921740239074943,
    "content": "Zora Creator Coins are profile-level tokens on the Zora platform, a blockchain-based social network focused on the creator economy. Each Zora account has its own unique Creator Coin, represented by the user's username as the ticker symbol (e.g., $username).",
    "top_3_coins_id": [
      "jesse",
      "balajis",
      "kazonomics"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70790/small/jesse.png",
      "https://coin-images.coingecko.com/coins/images/68523/small/balajis-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/68810/small/kazonomics-logo.jpeg"
    ],
    "volume_24h": 3772127.3202779926,
    "updated_at": "2026-01-02T09:35:39.824Z"
  },
  {
    "id": "creatorbid-ecosystem",
    "name": "CreatorBid Ecosystem",
    "market_cap": 8476365.24594888,
    "market_cap_change_24h": -0.7198179910086757,
    "content": "CreatorBid Ecosystem consists of tokens launched via creator.bid.",
    "top_3_coins_id": [
      "draiftking",
      "sally-a1c",
      "aion-5100"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53423/small/Profile_Picture.png",
      "https://coin-images.coingecko.com/coins/images/54517/small/WhatsApp_Image_2025-02-20_at_07.33.46.jpeg",
      "https://coin-images.coingecko.com/coins/images/52808/small/l8DUQ6ns_400x400.jpg"
    ],
    "volume_24h": 33245.20766583574,
    "updated_at": "2026-01-02T09:36:32.836Z"
  },
  {
    "id": "country-themed-meme-coins",
    "name": "Country-Themed Meme",
    "market_cap": 7174527.832962568,
    "market_cap_change_24h": 3.706472175944147,
    "content": "Meme Coins which are inspired by countries but are not affiliated with any specific nation.",
    "top_3_coins_id": [
      "central-african-republic-meme",
      "american-coin",
      "france-coin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54297/small/car.jpg",
      "https://coin-images.coingecko.com/coins/images/37000/small/usacoin.jpg",
      "https://coin-images.coingecko.com/coins/images/37596/small/ezgif-5-1e3012d700.jpg"
    ],
    "volume_24h": 792593.4851945771,
    "updated_at": "2026-01-02T09:35:31.013Z"
  },
  {
    "id": "decentralized-lottery",
    "name": "Decentralized Lottery",
    "market_cap": 6891450.09230536,
    "market_cap_change_24h": 3.8401670238920422,
    "content": "A decentralized lottery is a blockchain-based lottery system that conducts draws through smart contracts.",
    "top_3_coins_id": [
      "rxr-coin",
      "pooltogether",
      "betrmint"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66577/small/rxr_200.png",
      "https://coin-images.coingecko.com/coins/images/14003/small/PoolTogether.png",
      "https://coin-images.coingecko.com/coins/images/68299/small/icon.png"
    ],
    "volume_24h": 2122970.3465134343,
    "updated_at": "2026-01-02T09:36:29.494Z"
  },
  {
    "id": "prestocks-ecosystem",
    "name": "PreStocks Ecosystem",
    "market_cap": 6539396.362178915,
    "market_cap_change_24h": -2.188109281435609,
    "content": "PreStocks Ecosystem consists of tokenized pre-IPO stocks offered by <a href=\"https://x.com/PreStocksFi\" target=\"_blank\">PreStocks</a>.",
    "top_3_coins_id": [
      "spacex-prestocks-2",
      "anthropic-prestocks-2",
      "xai-prestocks-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69481/small/spacex.png",
      "https://coin-images.coingecko.com/coins/images/69479/small/anthropic.png",
      "https://coin-images.coingecko.com/coins/images/69482/small/xai.png"
    ],
    "volume_24h": 172552.8282496139,
    "updated_at": "2026-01-02T09:36:49.189Z"
  },
  {
    "id": "market-making-solution",
    "name": "Market-Making Solution",
    "market_cap": 6420674.407076888,
    "market_cap_change_24h": -1.9299968638336928,
    "content": "A Market-Making Solution refers to a service that enhances liquidity in markets by consistently offering buy and sell orders.",
    "top_3_coins_id": [
      "human-protocol",
      "uptop",
      "milk-money"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16412/small/Nh7yr7Ly_400x400.png",
      "https://coin-images.coingecko.com/coins/images/66826/small/uptop.jpg",
      "https://coin-images.coingecko.com/coins/images/69180/small/MM_LOGO.jpeg"
    ],
    "volume_24h": 497208.69773859397,
    "updated_at": "2026-01-02T09:35:25.435Z"
  },
  {
    "id": "animal-racing",
    "name": "Animal Racing",
    "market_cap": 6011763.698680813,
    "market_cap_change_24h": -0.5074072925218339,
    "content": "Animal racing tokens are digital tokens used in virtual animal racing games.",
    "top_3_coins_id": [
      "crown-by-third-time-games",
      "derace",
      "defi-land"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30452/small/crown_200_transparent.png",
      "https://coin-images.coingecko.com/coins/images/17438/small/zkRace-logomark-border.png",
      "https://coin-images.coingecko.com/coins/images/18910/small/defilend.png"
    ],
    "volume_24h": 139327.3652027676,
    "updated_at": "2026-01-02T09:35:39.886Z"
  },
  {
    "id": "etf",
    "name": "ETF",
    "market_cap": 5509143.426432362,
    "market_cap_change_24h": 10.48858161181658,
    "content": "Exchange Traded Fund (ETF) is product that holds a basket of assets such as stocks, bonds, commodities, or crypto.",
    "top_3_coins_id": [
      "helios-blockchain",
      "matrixetf",
      "decentralized-etf"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/71304/small/logo32x32.png",
      "https://coin-images.coingecko.com/coins/images/18538/small/MDF.png",
      "https://coin-images.coingecko.com/coins/images/24232/small/DETF.png"
    ],
    "volume_24h": 2656686.746316243,
    "updated_at": "2026-01-02T09:35:03.468Z"
  },
  {
    "id": "bridged-frax",
    "name": "Bridged FRAX",
    "market_cap": 5446161.688384933,
    "market_cap_change_24h": 0.18759711573927562,
    "content": "Bridged FRAX refers to Wrapped FRAX that has been transferred from its native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "rainbow-bridged-frax-near-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53100/small/rainbow-bridged-frax-near-protocol.webp"
    ],
    "volume_24h": 62221.40008589594,
    "updated_at": "2026-01-02T09:36:37.367Z"
  },
  {
    "id": "gbp-stablecoin",
    "name": "GBP Stablecoin",
    "market_cap": 5286385.797552583,
    "market_cap_change_24h": 0.9371677628938884,
    "content": "A GBP stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the British pound sterling.",
    "top_3_coins_id": [
      "tokenised-gbp",
      "vnx-british-pound",
      "celo-british-pound"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70647/small/tgbp-square.png",
      "https://coin-images.coingecko.com/coins/images/55301/small/VGBP_2.png",
      "https://coin-images.coingecko.com/coins/images/55374/small/cGBP.png"
    ],
    "volume_24h": 9262.638026705872,
    "updated_at": "2026-01-02T09:35:56.825Z"
  },
  {
    "id": "cny-stablecoin",
    "name": "CNY Stablecoin",
    "market_cap": 5180500.974045219,
    "market_cap_change_24h": -3.082429144310189,
    "content": "A CNY stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Chinese Yuan Renminbi.",
    "top_3_coins_id": [
      "axcnh",
      "cnh-tether"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70634/small/AnchorX_logo_RGB-01.png",
      "https://coin-images.coingecko.com/coins/images/5251/small/cny-tether-logo.png"
    ],
    "volume_24h": 83.03091841150624,
    "updated_at": "2026-01-02T09:35:32.076Z"
  },
  {
    "id": "spl22",
    "name": "SPL22",
    "market_cap": 5177899.264511713,
    "market_cap_change_24h": 1.7550938578876112,
    "content": "SPL22 is a hybrid token extension of the Solana blockchain that combines the features of both fungible and non-fungible tokens. ",
    "top_3_coins_id": [
      "nvidia-rstock",
      "sp500-rstock",
      "solarba"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70646/small/NVDAr.png",
      "https://coin-images.coingecko.com/coins/images/70654/small/SPr.png",
      "https://coin-images.coingecko.com/coins/images/40149/small/44dBwRVu_400x400.jpg"
    ],
    "volume_24h": 230058.6811976768,
    "updated_at": "2026-01-02T09:36:19.922Z"
  },
  {
    "id": "cookie-launchpad",
    "name": "Cookie Launchpad",
    "market_cap": 5116677.743091596,
    "market_cap_change_24h": -37.44811033936075,
    "content": "Cookie Launchpad is a token sale platform operated by Cookie DAO that allocates participation opportunities in three pools: one for top users ranked by on-chain and social engagement ('capital mindshare' via Cookie Snaps), one for $COOKIE token stakers in higher tiers, and a public first-come-first-served pool. \r\n\r\n",
    "top_3_coins_id": [
      "vooi",
      "superform"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70365/small/VOOI_Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/70945/small/superform.png"
    ],
    "volume_24h": 10317589.438618612,
    "updated_at": "2026-01-02T09:35:02.341Z"
  },
  {
    "id": "fighting-games",
    "name": "Fighting Games",
    "market_cap": 4913232.737806731,
    "market_cap_change_24h": -2.4949829268499193,
    "content": "Fighting game centered around combat between two or more number of characters.",
    "top_3_coins_id": [
      "karate-combat",
      "katana-inu",
      "playermon"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30384/small/karate.jpg",
      "https://coin-images.coingecko.com/coins/images/21872/small/Katana_Inu512.png",
      "https://coin-images.coingecko.com/coins/images/20682/small/eALRa3rZ_400x400.png"
    ],
    "volume_24h": 582162.48694916,
    "updated_at": "2026-01-02T09:35:54.588Z"
  },
  {
    "id": "reddit-points",
    "name": "Reddit Points",
    "market_cap": 4715506.727119158,
    "market_cap_change_24h": 4.70655120945961,
    "content": "Reddit Community Points are blockchain tokens that are owned and controlled by a specific Reddit community. With these point tokens, a community member can own a piece of their favorite subreddit. The points can be earned through contributions in the community such as post creation, comments, and content moderations.",
    "top_3_coins_id": [
      "moon",
      "donut",
      "brick"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/11222/small/Moons.png",
      "https://coin-images.coingecko.com/coins/images/7538/small/DONUT_PNG.png",
      "https://coin-images.coingecko.com/coins/images/11223/small/Brick.png"
    ],
    "volume_24h": 4462.496512733165,
    "updated_at": "2026-01-02T09:36:16.500Z"
  },
  {
    "id": "farming-as-a-service-faas",
    "name": "Farming-as-a-Service (FaaS)",
    "market_cap": 4496471.180234266,
    "market_cap_change_24h": -0.1940478872492415,
    "content": "Farming-as-a Service simplifies the process of yield farming by handling the technical aspects, such as choosing the right liquidity pools, managing the staking or lending process, and optimizing the yield.",
    "top_3_coins_id": [
      "digits-dao",
      "multiverse-capital",
      "mozaic"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23551/small/Logo-Digits-DAO-Icon-01.jpg",
      "https://coin-images.coingecko.com/coins/images/21172/small/mvc.PNG",
      "https://coin-images.coingecko.com/coins/images/30100/small/Main_Logo_1-200x200jpg.jpg"
    ],
    "volume_24h": 1154.56316078741,
    "updated_at": "2026-01-02T09:35:57.982Z"
  },
  {
    "id": "recruitment-solutions",
    "name": "Recruitment",
    "market_cap": 4364375.99890946,
    "market_cap_change_24h": 2.789068729936179,
    "content": "Recruitment solutions designed to streamline and optimize the process of sourcing, screening, and hiring candidates for businesses. ",
    "top_3_coins_id": [
      "bondex",
      "project-with",
      "quasacoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38909/small/BDXN.jpg",
      "https://coin-images.coingecko.com/coins/images/9182/small/2_0C4zaAE66q6I_k4uBmgqkw.png",
      "https://coin-images.coingecko.com/coins/images/21965/small/coin_200.png"
    ],
    "volume_24h": 1825675.2577567906,
    "updated_at": "2026-01-02T09:36:14.443Z"
  },
  {
    "id": "bridged-wbnb",
    "name": "Bridged WBNB",
    "market_cap": 4347390.108783545,
    "market_cap_change_24h": 0.3397517075267302,
    "content": "Bridged WBNB refers to Wrapped BNB that has been transferred from its native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "bridged-wbnb",
      "opbnb-bridged-wbnb-opbnb",
      "multichain-bridged-wbnb-energi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53070/small/wrapped_bnb.png",
      "https://coin-images.coingecko.com/coins/images/53120/small/wrapped_bnb.png",
      "https://coin-images.coingecko.com/coins/images/53080/small/wrapped_bnb.png"
    ],
    "volume_24h": 3055.113737778335,
    "updated_at": "2026-01-02T09:36:38.314Z"
  },
  {
    "id": "erc-404",
    "name": "ERC 404",
    "market_cap": 3395392.4350742046,
    "market_cap_change_24h": 27.628872149999,
    "content": "ERC-404 is an experimental token standard that aims to bridge fungible tokens and NFTs to enable liquidity and fractionalization.",
    "top_3_coins_id": [
      "pandora",
      "defrogs",
      "pundi-x-purse"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34996/small/PandoraToken.png",
      "https://coin-images.coingecko.com/coins/images/35080/small/defrogs.jpeg",
      "https://coin-images.coingecko.com/coins/images/20419/small/HobiV7k__400x400.jpg"
    ],
    "volume_24h": 60931.56351590042,
    "updated_at": "2026-01-02T09:35:50.202Z"
  },
  {
    "id": "bagsapp-ecosystem",
    "name": "BagsApp Ecosystem",
    "market_cap": 3191473.641854951,
    "market_cap_change_24h": 1.177363296786695,
    "content": "BagsApp Ecosystem consists of tokens launched via bags.fm.",
    "top_3_coins_id": [
      "concentric-industries",
      "pentagon-pizza-watch",
      "ellie"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68454/small/6be5f8d0-fa1b-417d-8675-85658939d7e9.jpeg",
      "https://coin-images.coingecko.com/coins/images/69255/small/PPW_logo.png",
      "https://coin-images.coingecko.com/coins/images/70890/small/gbgugekkhakzu0o749erf2p3xta4."
    ],
    "volume_24h": 106075.68120198791,
    "updated_at": "2026-01-02T09:36:01.329Z"
  },
  {
    "id": "privacy-focused-browser",
    "name": "Privacy-focused browser",
    "market_cap": 2940529.8604622525,
    "market_cap_change_24h": -4.297439788225719,
    "content": "A privacy browser is a browser built or hardened to block trackers, ads, fingerprinting, and data leaks by default, keeping your activity more private from websites and advertisers.",
    "top_3_coins_id": [
      "presearch",
      "macro-2",
      "zer0-knowledge-browser"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1299/small/presearch.png",
      "https://coin-images.coingecko.com/coins/images/70519/small/macro_logo_purple.jpg",
      "https://coin-images.coingecko.com/coins/images/71297/small/20251224_220304.png"
    ],
    "volume_24h": 5472.2941159986585,
    "updated_at": "2026-01-02T09:36:56.479Z"
  },
  {
    "id": "krw-stablecoin",
    "name": "KRW Stablecoin",
    "market_cap": 1492680.2518684806,
    "market_cap_change_24h": 0.018391767575767392,
    "content": "A KRW stablecoin is a type of cryptocurrency that is designed to maintain a stable value by being pegged to the Korean won.",
    "top_3_coins_id": [
      "krwt",
      "krwo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69864/small/KRWT_Coin_%28200x200px%29.png",
      "https://coin-images.coingecko.com/coins/images/54799/small/KRWO-Common.png"
    ],
    "volume_24h": 34067.00724411841,
    "updated_at": "2026-01-02T09:36:03.613Z"
  },
  {
    "id": "pump-fun-creator",
    "name": "Pump.fun Creator",
    "market_cap": 1445557.5429293832,
    "market_cap_change_24h": 6.94215317466431,
    "content": "Pump.fun creator tokens are Solana-based memecoins tied to influencers, blending streaming culture with DeFi.",
    "top_3_coins_id": [
      "aqc",
      "mitch",
      "100xdarren"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69535/small/aqc.jpg",
      "https://coin-images.coingecko.com/coins/images/68873/small/butytvxivo6a8x8hp5z74941enfn.jpg",
      "https://coin-images.coingecko.com/coins/images/69397/small/100xDarren_PFP.jpg"
    ],
    "volume_24h": 149375.41516059425,
    "updated_at": "2026-01-02T09:35:45.793Z"
  },
  {
    "id": "christmas-themed",
    "name": "Christmas Themed",
    "market_cap": 1290362.7468692712,
    "market_cap_change_24h": -6.301361994856763,
    "content": "Meme coins themed around Christmas, inspired by holiday traditions, symbols, and celebrations.",
    "top_3_coins_id": [
      "rizzmas",
      "bepe-3",
      "santa-hat"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52180/small/Rizz_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/71256/small/2jhtnnaseiohl0eithx0htq378q3.",
      "https://coin-images.coingecko.com/coins/images/52170/small/SANTAHAT200X200.jpg"
    ],
    "volume_24h": 992052.3838897825,
    "updated_at": "2026-01-02T09:36:33.821Z"
  },
  {
    "id": "zodiac-themed",
    "name": "Zodiac-Themed",
    "market_cap": 1041890.4199313688,
    "market_cap_change_24h": 4.823464947246,
    "content": "Meme coins related to zodiac signs.",
    "top_3_coins_id": [
      "gemini-2",
      "taurus-2",
      "libra-4"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51149/small/gemini.webp",
      "https://coin-images.coingecko.com/coins/images/51155/small/taurus.webp",
      "https://coin-images.coingecko.com/coins/images/51151/small/libra.webp"
    ],
    "volume_24h": 1750.6339744992056,
    "updated_at": "2026-01-02T09:36:38.324Z"
  },
  {
    "id": "drc-20",
    "name": "DRC-20",
    "market_cap": 1012562.421934693,
    "market_cap_change_24h": -1.1514015637023616,
    "content": "DRC-20 is a token standard on the Dogecoin blockchain that allows for the creation of tokens that represent ownership of assets. ",
    "top_3_coins_id": [
      "dogi",
      "dogebits-drc-20",
      "fiwb-doginals"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33170/small/DOGI.jpg",
      "https://coin-images.coingecko.com/coins/images/36300/small/DBIT.png",
      "https://coin-images.coingecko.com/coins/images/34058/small/1111.jpg"
    ],
    "volume_24h": 100.36591408275527,
    "updated_at": "2026-01-02T09:35:47.847Z"
  },
  {
    "id": "aarna-vault-tokens",
    "name": "aarna Vault Tokens",
    "market_cap": 885948.029456749,
    "market_cap_change_24h": 0.5849814533645916,
    "content": "aarna Vault Tokens are vault-specific ERC-20 tokens representing shares in aarnâ's tokenized vaults. Users deposit stablecoins like USDC/USDT into AI-managed or yield-optimizing vaults and receive these tokens in return, which track the vault's net asset value (NAV).",
    "top_3_coins_id": [
      "aarna-atvptmax",
      "aarna-atv111",
      "aarna-atv-usdc-ethereum"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70963/small/atvPTmax_pendle.png",
      "https://coin-images.coingecko.com/coins/images/67612/small/atv111_ethereum.png",
      "https://coin-images.coingecko.com/coins/images/67895/small/atvUSDC_ethereum.png"
    ],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:36:42.538Z"
  },
  {
    "id": "daos-fun-ecosystem",
    "name": "daos.fun Ecosystem",
    "market_cap": 805721.4016031653,
    "market_cap_change_24h": 1.2573032392353185,
    "content": "daos.fun Ecosystem consists of tokens that have active hedge funds on daos.fun.",
    "top_3_coins_id": [
      "big-pharmai",
      "ai16zeliza",
      "aimonica-brands"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52800/small/newprofilepic.png",
      "https://coin-images.coingecko.com/coins/images/51824/small/ai16.jpg",
      "https://coin-images.coingecko.com/coins/images/52526/small/PFP_%281%29.png"
    ],
    "volume_24h": 171292.0963004334,
    "updated_at": "2026-01-02T09:35:37.642Z"
  },
  {
    "id": "pump-science-ecosystem",
    "name": "Pump Science Ecosystem",
    "market_cap": 723837.4301020103,
    "market_cap_change_24h": 6.10536789586036,
    "content": "Pump Science Ecosystem consists of tokens launched via pump.science.",
    "top_3_coins_id": [
      "rifampicin",
      "urolithin-a",
      "pinealon"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51719/small/rif.png",
      "https://coin-images.coingecko.com/coins/images/51721/small/URO.png",
      "https://coin-images.coingecko.com/coins/images/68529/small/signal-2025-08-20-000146_002.png"
    ],
    "volume_24h": 314262.17212315864,
    "updated_at": "2026-01-02T09:36:41.686Z"
  },
  {
    "id": "nft-index",
    "name": "NFT Index",
    "market_cap": 717613.9886302873,
    "market_cap_change_24h": 8.61473111439624,
    "content": "A NFT index is an indicator that tracks the performance of a group of NFT cryptocurrencies.",
    "top_3_coins_id": [
      "metaverse-index",
      "ownershipcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14684/small/MVI_logo.png",
      "https://coin-images.coingecko.com/coins/images/69173/small/oc_logo_200x200.png"
    ],
    "volume_24h": 6407.512901057484,
    "updated_at": "2026-01-02T09:36:04.468Z"
  },
  {
    "id": "kommunitas",
    "name": "Kommunitas Launchpad",
    "market_cap": 667501.6299149337,
    "market_cap_change_24h": -15.775510058262174,
    "content": "Kommunitas Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "affyn",
      "okratech-token",
      "outer-ring"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23275/small/fyn.png",
      "https://coin-images.coingecko.com/coins/images/18352/small/fav.png",
      "https://coin-images.coingecko.com/coins/images/24059/small/GQ.png"
    ],
    "volume_24h": 251730.5596772301,
    "updated_at": "2026-01-02T09:36:00.299Z"
  },
  {
    "id": "emoji-themed",
    "name": "Emoji-Themed",
    "market_cap": 551236.1904596548,
    "market_cap_change_24h": 1.6451914342087295,
    "content": "Meme coins related to emoji.",
    "top_3_coins_id": [
      "lol-3",
      "dog-emoji-on-solana",
      "magnet-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50433/small/2024-08-28_11.38.56.jpg",
      "https://coin-images.coingecko.com/coins/images/50586/small/DLScRnWofxiYGqnvZWGy9Gt98MPqKdznaK4TRukxpump.png",
      "https://coin-images.coingecko.com/coins/images/50718/small/magnet.jpg"
    ],
    "volume_24h": 613.5775368969328,
    "updated_at": "2026-01-02T09:36:42.756Z"
  },
  {
    "id": "duck-themed-coins",
    "name": "Duck-Themed",
    "market_cap": 488948.34364708903,
    "market_cap_change_24h": -2.061317844349597,
    "content": "Meme coins which are inspired by duck.",
    "top_3_coins_id": [
      "duckcoin",
      "gugo",
      "harold"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37626/small/DuckCoin.png",
      "https://coin-images.coingecko.com/coins/images/67081/small/2kleSOZDHRsCDbyZ.png",
      "https://coin-images.coingecko.com/coins/images/36698/small/2024-03-27_20.34.08.jpg"
    ],
    "volume_24h": 3356.4610982803433,
    "updated_at": "2026-01-02T09:36:10.048Z"
  },
  {
    "id": "flaunch-ecosystem",
    "name": "Flaunch Ecosystem",
    "market_cap": 334901.4707341304,
    "market_cap_change_24h": 0.4470073859735703,
    "content": "Flaunch Ecosystem consists of tokens launched via flaunch.gg.",
    "top_3_coins_id": [
      "flaunchy"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54175/small/flaunchy.jpeg"
    ],
    "volume_24h": 15.219558696967903,
    "updated_at": "2026-01-02T09:36:35.920Z"
  },
  {
    "id": "time-fun-ecosystem",
    "name": "Time.fun Ecosystem",
    "market_cap": 267369.84310846217,
    "market_cap_change_24h": -5.028608176865017,
    "content": "Time.fun Ecosystem consists of tokens launched via time.fun.",
    "top_3_coins_id": [
      "toly-s-minutes",
      "ansem-s-minutes",
      "degenping"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54593/small/tolys-minutes-logo.webp",
      "https://coin-images.coingecko.com/coins/images/56080/small/ansempng.png",
      "https://coin-images.coingecko.com/coins/images/66596/small/degenping.png"
    ],
    "volume_24h": 1627.5410038143077,
    "updated_at": "2026-01-02T09:35:13.079Z"
  },
  {
    "id": "bridged-wavax",
    "name": "Bridged WAVAX",
    "market_cap": 264390.3099215349,
    "market_cap_change_24h": 3.8981930936192835,
    "content": "Bridged WAVAX refers to Wrapped AVAX that has been transferred from its native blockchain to a different blockchain through \"bridging\".",
    "top_3_coins_id": [
      "bridged-wavax",
      "celer-bridged-wavax-linea",
      "multichain-bridged-wavax-fantom"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53010/small/avax.png",
      "https://coin-images.coingecko.com/coins/images/53094/small/celer-bridged-wavax-linea.png",
      "https://coin-images.coingecko.com/coins/images/53012/small/avax.png"
    ],
    "volume_24h": 686.5248035591594,
    "updated_at": "2026-01-02T09:36:34.889Z"
  },
  {
    "id": "farming-games",
    "name": "Farming Games",
    "market_cap": 188941.40523497332,
    "market_cap_change_24h": 0.17179977949751774,
    "content": "Farming game allows players to simulate farming life, focusing on activities such as planting and harvesting crops, raising livestock, and managing resources.",
    "top_3_coins_id": [
      "moani",
      "ponzimon",
      "for-loot-and-glory"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39979/small/MOANI_200x200.png",
      "https://coin-images.coingecko.com/coins/images/67672/small/22ewi536quq729w87pqephiq8r4t.",
      "https://coin-images.coingecko.com/coins/images/20726/small/token_logo.ico"
    ],
    "volume_24h": 2510.713204955772,
    "updated_at": "2026-01-02T09:35:56.818Z"
  },
  {
    "id": "spore-fun-ecosystem",
    "name": "Spore.fun Ecosystem",
    "market_cap": 176789.80195465914,
    "market_cap_change_24h": 4.153870163676421,
    "content": "Spore.fun Ecosystem consists of tokens launched via spore.fun.",
    "top_3_coins_id": [
      "spore-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53063/small/spore_avatar-logo.png"
    ],
    "volume_24h": 81949.87421205029,
    "updated_at": "2026-01-02T09:36:39.306Z"
  },
  {
    "id": "sticker-themed-coin",
    "name": "Sticker-Themed Coins",
    "market_cap": 174264.8025792833,
    "market_cap_change_24h": 18.579983414388906,
    "content": "Meme coins inspired by Telegram Sticker Packs",
    "top_3_coins_id": [
      "paper-plane",
      "utya",
      "cubigator"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/36066/small/1000005445.jpg",
      "https://coin-images.coingecko.com/coins/images/37227/small/photo_2024-04-15_18.03.55.jpeg",
      "https://coin-images.coingecko.com/coins/images/37357/small/451E46E2-1574-4B3F-93DC-F0F7E4376E4F.png"
    ],
    "volume_24h": 28071.171699231807,
    "updated_at": "2026-01-02T09:36:20.949Z"
  },
  {
    "id": "erc20i",
    "name": "ERC20i",
    "market_cap": 114987.38437387088,
    "market_cap_change_24h": 1.6042138591403516,
    "content": "ERC20i is a token standard on Base blockchain that extends the capabilities of ERC-20 tokens by adding native inscriptions.",
    "top_3_coins_id": [
      "froggi",
      "suissma-ai-by-virtuals",
      "traceva"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67544/small/froggi_token_logo.png",
      "https://coin-images.coingecko.com/coins/images/55383/small/_SUISS_Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/69104/small/WhatsApp_Image_2025-09-09_at_00.44.47.jpeg"
    ],
    "volume_24h": 3105.5015905926957,
    "updated_at": "2026-01-02T09:35:50.139Z"
  },
  {
    "id": "stx-city-ecosystem",
    "name": "STX.CITY Ecosystem",
    "market_cap": 84242.16652039038,
    "market_cap_change_24h": 5.890546270606037,
    "content": "STX.CITY Ecosystem consists of tokens launched via STX.CITY.",
    "top_3_coins_id": [
      "flat-earth",
      "skullcoin",
      "wen-5"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50914/small/IMG_0386.jpeg",
      "https://coin-images.coingecko.com/coins/images/40046/small/crypto-logo.png",
      "https://coin-images.coingecko.com/coins/images/50966/small/wen-logo.png"
    ],
    "volume_24h": 115.8216811504218,
    "updated_at": "2026-01-02T09:36:33.824Z"
  },
  {
    "id": "dn-404",
    "name": " DN-404",
    "market_cap": 38637.378935927365,
    "market_cap_change_24h": 858.4894105718096,
    "content": "The \"Divisible NFT\" standard (DN-404) aims to be a hybrid of ERC20 and ERC721 that could act as an NFT with native fractionalization built in.",
    "top_3_coins_id": [
      "bonsai-token",
      "shadowladys-dn404",
      "asterix"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35884/small/bonsaiToken.png",
      "https://coin-images.coingecko.com/coins/images/35243/small/fixed_logo.png",
      "https://coin-images.coingecko.com/coins/images/35257/small/Asterix_Logo_200x200.png"
    ],
    "volume_24h": 981.3940863143118,
    "updated_at": "2026-01-02T09:35:51.229Z"
  },
  {
    "id": "yearn-vault-tokens",
    "name": "Yearn Vault Tokens",
    "market_cap": 12774.023013217547,
    "market_cap_change_24h": 1.7810392913879474,
    "content": "Yearn Vault Tokens (yVault Token), is a type of token that represents a user's share in a Yearn Vault.",
    "top_3_coins_id": [
      "bearn-bera",
      "usdc-yvault",
      "staked-yearn-crv-vault"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69282/small/ybera.png",
      "https://coin-images.coingecko.com/coins/images/28779/small/yvUSDC-128-0xe2F6b9773BF3A015E2aA70741Bde1498bdB9425b.png",
      "https://coin-images.coingecko.com/coins/images/27623/small/st-yCRV-128-0x27B5739e22ad9033bcBf192059122d163b60349D.png"
    ],
    "volume_24h": 9097.337475303442,
    "updated_at": "2026-01-02T09:36:29.491Z"
  },
  {
    "id": "hyperxpad-launchpad",
    "name": "HyperXpad Launchpad",
    "market_cap": 11628.585423956616,
    "market_cap_change_24h": 2.3697367312070305,
    "content": "HyperXpad Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "codecraft-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53745/small/ccailogo1.png"
    ],
    "volume_24h": 6.161191624580483,
    "updated_at": "2026-01-02T09:36:00.315Z"
  },
  {
    "id": "nft-amm",
    "name": "NFT AMM",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "A Decentralized exchange model adapted for NFTs, which leverages liquidity pools to facilitate the trading of NFTs without the need for a traditional order book.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:23.116Z"
  },
  {
    "id": "nft-aggregator",
    "name": "NFT Aggregator",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "NFT aggregators work by pulling together listings, sales data, and other relevant information from multiple NFT marketplaces into one unified interface.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:19.739Z"
  },
  {
    "id": "opinions-fun-ecosystem",
    "name": "Opinions.fun Ecosystem",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "The Opinions.fun Ecosystem consists of tokens launched through Opinions.fun.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:16.562Z"
  },
  {
    "id": "atomicals-arc-20",
    "name": "Atomicals (ARC-20)",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "ARC-20 is a token standard on the Bitcoin blockchain that allows for the creation of fungible tokens, also known as colored coins.",
    "top_3_coins_id": [
      "coloredbitcoin-arc-20"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50439/small/K_2nunVb_400x400-removebg-preview.png"
    ],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:42.306Z"
  },
  {
    "id": "learn-to-earn",
    "name": "Learn to Earn",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "Learn to Earn project allows users to earn cryptocurrency rewards by completing lessons, watching videos, and passing quizzes about blockchain, specific tokens, or Web3 concepts.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:18.770Z"
  },
  {
    "id": "tower-defense-games",
    "name": "Tower Defense Games",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "A tower defense game is a strategy game where players build and place defensive structures or \"towers\" to stop enemies from reaching the base. ",
    "top_3_coins_id": [
      "heroes-td"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/20953/small/htd.png"
    ],
    "volume_24h": 39.92170680625582,
    "updated_at": "2026-01-02T09:36:31.533Z"
  },
  {
    "id": "asc-20",
    "name": "ASC-20",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "ASC-20 is a token standard on the Avalanche blockchain that allows for the creation of tokens that represent ownership of assets.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:52.356Z"
  },
  {
    "id": "dinari-ecosystem",
    "name": "Dinari Ecosystem",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "The Dinari Ecosystem comprises tokens tokenized by Dinari.",
    "top_3_coins_id": [
      "dinari-meta-dshare",
      "dinari-nvda-dshares",
      "dinari-aapl-dshares"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32394/small/token-icon.png",
      "https://coin-images.coingecko.com/coins/images/32401/small/token-icon.png",
      "https://coin-images.coingecko.com/coins/images/32393/small/token-icon.png"
    ],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:36:41.688Z"
  },
  {
    "id": "friend-tech",
    "name": "Friend.tech Ecosystem",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "Interconnected platforms and services built around Friend.tech.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:55.639Z"
  },
  {
    "id": "flooring-protocol",
    "name": "Floor Protocol Tokens",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "Floor Protocol is a fractionalized NFT platform. It allows the fragmentation of NFTs from prominent collections into μTokens, which can then be traded like any other cryptocurrency.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:56.886Z"
  },
  {
    "id": "index-coop-metaverse-index",
    "name": "Index Coop Metaverse Index",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "The Metaverse Index (MVI) is designed to capture the trend of entertainment, social activity and business moving to take place in virtual economies, powered by NFTs and blockchain technology.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:59.236Z"
  },
  {
    "id": "coinlist-launchpad",
    "name": "CoinList Launchpad",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "CoinList is a platform specializes in compliant token launches for new projects.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:01.185Z"
  },
  {
    "id": "puzzle-games",
    "name": " Puzzle Games",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "A puzzle game challenges players to solve problems and use logic or creativity to progress. These games often involve tasks like pattern recognition, spatial reasoning, wordplay, or strategic planning.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:36:45.910Z"
  },
  {
    "id": "gate-fun-ecosystem",
    "name": "Gate Fun Ecosystem",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "Gate Fun Ecosystem consists of tokens launched via Gate Fun.",
    "top_3_coins_id": [
      "gmeme",
      "gdog-2",
      "open-sesame"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70602/small/gmeme-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/70603/small/gdog-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/70604/small/open-sesame-logo.png"
    ],
    "volume_24h": 0.0,
    "updated_at": "2026-01-02T09:35:00.185Z"
  },
  {
    "id": "bitstarters-launchpad",
    "name": "BitStarters Launchpad",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "BitStarters Launchpad is a platform for crypto projects to hold Initial DEX Offerings (IDOs). Participants are able to gain early access to public and special token sales on the platform.",
    "top_3_coins_id": [
      "sugar-kingdom-odyssey",
      "r-games"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/36077/small/Copia_de_SKO-Sugar_token_7.10.43%E2%80%AFp.%C2%A0m..png",
      "https://coin-images.coingecko.com/coins/images/36501/small/2023-04-20_11.42.52.jpg"
    ],
    "volume_24h": 12448.73129147295,
    "updated_at": "2026-01-02T09:35:06.615Z"
  },
  {
    "id": "src-20",
    "name": "SRC-20",
    "market_cap": 0.0,
    "market_cap_change_24h": 0,
    "content": "The SRC-20 standard issues fungible tokens on the Bitcoin blockchain, attaching data via UTXOs for immutable and non-prunable storage.",
    "top_3_coins_id": [
      "kevin-2",
      "stampmap",
      "sato"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34918/small/logo_Kevin.JPG",
      "https://coin-images.coingecko.com/coins/images/34847/small/StampMap_logo__STMAP.png",
      "https://coin-images.coingecko.com/coins/images/34854/small/SATO.png"
    ],
    "volume_24h": 74440.45964527021,
    "updated_at": "2026-01-02T09:36:21.963Z"
  },
  {
    "id": "ethereum-ecosystem",
    "name": "Ethereum Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ethereum",
      "tether",
      "binancecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "binance-smart-chain",
    "name": "BNB Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "BNB Chain is an alternative blockchain that is similar to Ethereum, capable of hosting smart contracts and decentralized applications. It was launched by Binance in September 2020 as the Binance Smart Chain, and relaunched in Feburary 2022 as BNB Chain. BNB uses the Proof-of-Staked-Authority model which has allowed for low transaction fees and higher throughput. \r\n\r\nCompared to Ethereum which would usually cost hundreds to make a few transactions, BNB only charges less than a few dollars. BNB supports the BEP-20 token format, which is essentially the same format as ERC-20 but on a different chain, and transaction fees are paid in Binance’s native exchange token, BNB.",
    "top_3_coins_id": [
      "binancecoin",
      "wrapped-bitcoin",
      "wrapped-beacon-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/30061/small/wbeth-icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "solana-ecosystem",
    "name": "Solana Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Solana is a general purpose blockchain similar to Ethereum. The underlying architecture is different, such that developers have to write applications using Rust instead of Solidity or Vyper. However, this may soon change with the introduction of the Neon EVM solution on Solana. End user applications as of now include decentralized finance (DeFi), non-fungible tokens (NFT), marketplaces, games, and more. One of its biggest features is its scalability in which Solana is able to process over 700,000 transactions per second. Its high throughput capability appeals to high frequency traders, which is spearheaded by FTX and Alameda Research. The first use case for DeFi applications on Solana is Serum, built by the team behind FTX.",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "solana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/4128/small/solana.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "base-ecosystem",
    "name": "Base Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "wrapped-eeth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "polygon-ecosystem",
    "name": "Polygon Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Polygon, formerly known as Matic, was originally meant to be a Layer-2 scaling solution for Ethereum to improve transaction throughput and speed. However, it has since become more popular as a stand-alone blockchain, with its own native projects and decentralized applications. Major DeFi protocols such as Aave and Curve have also found second homes on Polygon. Unlike Ethereum, Polygon operates on Proof-of-Stake (PoS) in which network participants can stake the network’s native MATIC tokens to validate transactions and participate in voting and other governance decisions. Polygon also hosts its own bridge that allows users to transfer assets from Ethereum to Polygon and vice versa.",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "usdt0"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "arbitrum-ecosystem",
    "name": "Arbitrum Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "usds",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/39926/small/usds.webp",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "avalanche-ecosystem",
    "name": "Avalanche Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Avalanche is a smart contract platform that allows users to create their own multi-purpose blockchains or decentralized applications (dApps). Their mainnet was launched in September 2020 and has since become a major hub of activity for DeFi and NFTs. In 2021, they announced their Avalanche Rush incentives program to introduce more applications and to promote further growth of their ecosystem. The Avalanche chain is centered around 3 main blockchains - the P-Chain, X-Chain and C-Chain. The C-Chain is Avalanche’s EVM implementation, which hosts various applications and smart contracts. Users can access Avalanche through centralized exchanges, the official Avalanche bridge or via Celer’s cBridge.",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "wrapped-bitcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "fantom-ecosystem",
    "name": "Fantom Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "FANTOM is a new DAG-based smart contract platform that intends to solve the scalability issues of existing public distributed ledger technologies.\r\nThe platform intends to distinguish itself from the traditional block ledger-based storage infrastructure by attempting to employ an improved version of existing DAG-based protocols. Fantom adopts a new protocol known as the “Lachesis Protocol” to maintain consensus. This protocol is intended to be integrated into the Fantom Opera Chain. The aim is to allow applications built on Fantom to enjoy instant transactions and near zero transaction costs for all users.\r\n",
    "top_3_coins_id": [
      "chainlink",
      "aave",
      "nexo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png",
      "https://coin-images.coingecko.com/coins/images/3695/small/CG-nexo-token-200x200_2x.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "optimism-ecosystem",
    "name": "Optimism Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "wrapped-eeth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ton-ecosystem",
    "name": "TON Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Protocols built on The Open Network (TON), a blockchain designed using technology from Telegram. ",
    "top_3_coins_id": [
      "tether",
      "ethena-usde",
      "the-open-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/17980/small/photo_2024-09-10_17.09.00.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sui-ecosystem",
    "name": "Sui Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "sui"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/26375/small/sui-ocean-square.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xdai-ecosystem",
    "name": "Gnosis Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Formerly the xDai Chain, The Gnosis chain is a Layer 2 scaling solution for Ethereum but uses a different consensus algorithm - Proof of Stake (PoS) and Proof of Stake DAO (POSDAO). It is designed to be more efficient than Ethereum, with higher transaction throughput (70 transactions/second) and has a much lower transaction fee.",
    "top_3_coins_id": [
      "chainlink",
      "uniswap",
      "gho"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/30663/small/gho-token-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "cronos-ecosystem",
    "name": "Cronos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "loaded-lions",
      "cronos-bridged-usdc-cronos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/54686/small/_LION_Token_Artwork.png",
      "https://coin-images.coingecko.com/coins/images/35227/small/USDC.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "osmosis-ecosytem",
    "name": "Osmosis Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "chainlink",
      "cosmos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "tron-ecosystem",
    "name": "Tron Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "tron"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/1094/small/tron-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "chiliz-ecosystem",
    "name": "Chiliz Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chiliz",
      "og-fan-token",
      "as-roma-fan-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/8834/small/CHZ_Token_updated.png",
      "https://coin-images.coingecko.com/coins/images/11663/small/OG.png",
      "https://coin-images.coingecko.com/coins/images/11688/small/ASR.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "blast-ecosystem",
    "name": "Blast Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "chainlink",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "cardano-ecosystem",
    "name": "Cardano Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cardano",
      "midnight-3",
      "fetch-ai"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/975/small/cardano.png",
      "https://coin-images.coingecko.com/coins/images/71015/small/midnight.png",
      "https://coin-images.coingecko.com/coins/images/5681/small/ASI.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bitcoin-ecosystem",
    "name": "Bitcoin Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bitcoin",
      "dog-go-to-the-moon-rune",
      "ordinals"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
      "https://coin-images.coingecko.com/coins/images/37352/small/DOGGOTOTHEMOON.png",
      "https://coin-images.coingecko.com/coins/images/30162/small/ordi.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bittensor-ecosystem",
    "name": "Bittensor Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Interconnected platforms and services built around Bittensor.",
    "top_3_coins_id": [
      "chainlink",
      "bittensor",
      "chutes"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/28452/small/ARUsPeNQ_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/66308/small/chutes.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sonic-ecosystem",
    "name": "Sonic Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "wrapped-eeth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "harmony-ecosystem",
    "name": "Harmony Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Harmony is a blockchain platform that is designed to act as a bridge between scalability and interoperability. Its focus is on processing speed and validation of blocks. It can be used to create decentralized applications (DApps), and is currently focused on random state sharding. This will then allow the creation of blocks within seconds.",
    "top_3_coins_id": [
      "chainlink",
      "uniswap",
      "aave"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hyperevm-ecosystem",
    "name": "HyperEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-eeth",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "energi-ecosystem",
    "name": "Energi Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "uniswap",
      "aave"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "linea-ecosystem",
    "name": "Linea Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "chainlink",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "klaytn-ecosystem",
    "name": "Kaia Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Kaia is a blockchain platform developed by Ground X, a subsidiary of Kakao. It emphasizes scalability, user-friendliness, and enterprise integration for decentralized applications. The Klay token is used within the ecosystem for all platform transactions, as well as other blockchain applications.",
    "top_3_coins_id": [
      "tether",
      "chainlink",
      "stargate-bridged-usdc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "near-protocol-ecosystem",
    "name": "Near Protocol Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "NEAR is a sharded, developer-friendly, proof-of-stake public blockchain. It is designed to compete with Ethereum by providing a similar experience with decentralized applications and smart contracts, but with lower fees and higher throughput. The blockchain’s native token, NEAR, is used to pay for transactions and storing data on the blockchain. Smart contract developers receive a portion of the transaction fees generated by their contracts, while the remainder is burnt. This creates deflationary pressure on NEAR, making it more valuable as more transactions are performed.",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "berachain-ecosystem",
    "name": "Berachain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Berachain is an EVM-compatible blockchain built on Proof-of-Liquidity consensus. ",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "wrapped-eeth",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mantle-ecosystem",
    "name": "Mantle Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "ethena-usde",
      "usdt0"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "aptos-ecosystem",
    "name": "Aptos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "wrapped-bitcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xrp-ledger-ecosystem",
    "name": "XRP Ledger Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ripple",
      "usd-coin",
      "ripple-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/39651/small/RLUSD_200x200_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "abstract-ecosystem",
    "name": "Abstract Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "pudgy-penguins",
      "frax-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/52622/small/PUDGY_PENGUINS_PENGU_PFP.png",
      "https://coin-images.coingecko.com/coins/images/53963/small/frxUSD.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hedera-ecosystem",
    "name": "Hedera Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bitcichain-ecosystem",
    "name": "Bitcichain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "spain-national-fan-token",
      "brazil-fan-token",
      "bitcicoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/18827/small/SNFT.png",
      "https://coin-images.coingecko.com/coins/images/18081/small/BFT.png",
      "https://coin-images.coingecko.com/coins/images/13816/small/output-onlinepngtools.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "algorand-ecosystem",
    "name": "Algorand Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "algorand",
      "folks"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/4380/small/download.png",
      "https://coin-images.coingecko.com/coins/images/70268/small/1000331462.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "scroll-ecosystem",
    "name": "Scroll Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Scroll is a Layer 2 network that aims to extend Ethereum's capabilities through zero knowledge (ZK) tech and EVM compatibility.",
    "top_3_coins_id": [
      "wrapped-eeth",
      "chainlink",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "celo-ecosystem",
    "name": "Celo Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether",
      "usd-coin",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "cosmos-ecosystem",
    "name": "Cosmos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Cosmos focuses on blockchain interoperability, working towards the vision of building the “Internet of Blockchains.”",
    "top_3_coins_id": [
      "cosmos",
      "injective-protocol",
      "celestia"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/12882/small/Other_200x200.png",
      "https://coin-images.coingecko.com/coins/images/31967/small/tia.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "metis-ecosystem",
    "name": "Metis Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "ethena-usde",
      "ethena-staked-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "plume-network-ecosystem",
    "name": "Plume Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "usd1-wlfi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/54977/small/USD1_1000x1000_transparent.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "tezos-ecosystem",
    "name": "Tezos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether",
      "tezos",
      "stacy-staked-xtz"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/976/small/Tezos-logo.png",
      "https://coin-images.coingecko.com/coins/images/66203/small/stXTZ_token_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hyperliquid-ecosystem",
    "name": "Hyperliquid Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ethena-usde",
      "hyperliquid",
      "usdt0"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/50882/small/hyperliquid.jpg",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "moonriver-ecosystem",
    "name": "Moonriver Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "frax"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/13422/small/LFRAX.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sei-v2-ecosystem",
    "name": "Sei Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-bitcoin",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "stellar-ecosystem",
    "name": "Stellar Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "stellar",
      "paypal-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/100/small/fmpFRHHQ_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/31212/small/PYUSD_Token_Logo_2x.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "multiversx-ecosystem",
    "name": "MultiversX Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "elrond-erd-2",
      "wrapped-elrond",
      "maiar-dex"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12335/small/egld-token-logo.png",
      "https://coin-images.coingecko.com/coins/images/22255/small/wrapped_elrond.jpg",
      "https://coin-images.coingecko.com/coins/images/20657/small/MEX-icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sora-ecosystem",
    "name": "Sora Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "leo-token",
      "uniswap"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/8418/small/leo-token.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "x-layer-ecosystem",
    "name": "X Layer Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "ethena-usde",
      "usdt0"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "starknet-ecosystem",
    "name": "Starknet Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "paypal-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/31212/small/PYUSD_Token_Logo_2x.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "core-ecosystem",
    "name": "Core Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "agora-dollar",
      "wrapped-core"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/39284/small/AUSD_1024px.png",
      "https://coin-images.coingecko.com/coins/images/29276/small/wcore.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "internet-computer-ecosystem",
    "name": "Internet Computer Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "internet-computer",
      "chain-key-bitcoin",
      "gold-dao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png",
      "https://coin-images.coingecko.com/coins/images/33818/small/01_ckBTC_Token_HEX__4x.png",
      "https://coin-images.coingecko.com/coins/images/37649/small/Gold_DAO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "dot-ecosystem",
    "name": "Polkadot Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Polkadot is a blockchain protocol designed to support multiple purpose-built blockchains under one unified network. Polkadot’s infrastructure begins with the relay chain, which acts as the central chain. Each chain that runs on Polkadot is called a parachain as they run parallel to the main relay chain, and is built on top of the relay chain. Besides parachains, projects can participate in the Polkadot ecosystem for a shorter fixed period of time through parathreads. Blockchains built on top of Polkadot’s own relay chain are also interoperable with blockchains that have vastly different technology stacks such as Ethereum and Bitcoin through bridges.",
    "top_3_coins_id": [
      "polkadot",
      "origintrail",
      "kusama"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12171/small/polkadot.jpg",
      "https://coin-images.coingecko.com/coins/images/1877/small/TRAC.jpg",
      "https://coin-images.coingecko.com/coins/images/9568/small/m4zRhP5e_400x400.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mode-ecosystem",
    "name": "Mode Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "chainlink",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "aurora-ecosystem",
    "name": "Aurora Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "frax",
      "frax-usd",
      "bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13422/small/LFRAX.png",
      "https://coin-images.coingecko.com/coins/images/53963/small/frxUSD.png",
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ronin-ecosystem",
    "name": "Ronin Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Protocols that are built on the Ronin network, an EVM-compatible blockchain designed for games.",
    "top_3_coins_id": [
      "chainlink",
      "rocket-pool-eth",
      "axie-infinity"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/20764/small/reth.png",
      "https://coin-images.coingecko.com/coins/images/13029/small/axie_infinity_logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "manta-network-ecosystem",
    "name": "Manta Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Protocols that are built on the Manta network, an EVM-compatible ZK-application platform.",
    "top_3_coins_id": [
      "ethena-usde",
      "ethena-staked-usde",
      "ethena"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png",
      "https://coin-images.coingecko.com/coins/images/36530/small/ethena.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "terra-ecosystem",
    "name": "Terra Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Terra is a blockchain network that builds on the Tendermint consensus (Proof-of-Stake) and the Cosmos SDK toolkit. Terra’s network token is LUNA which powers the entire ecosystem. Unlike most blockchains, Terra’s ecosystem includes a native algorithmic stablecoin, TerraUSD (UST). A decentralized network with its own decentralized currency is a very attractive thesis for both users and developers. More dApps are being built on Terra, especially DeFi protocols which are now commonly known as TeFi.",
    "top_3_coins_id": [
      "weth",
      "cosmos",
      "injective-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2518/small/weth.png",
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/12882/small/Other_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "archway-ecosystem",
    "name": "Archway Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cosmos",
      "akash-network",
      "cudos"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/12785/small/akash-logo.png",
      "https://coin-images.coingecko.com/coins/images/13651/small/CudosIconTransparent.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "stacks-ecosystem",
    "name": "Stacks Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "blockstack",
      "sbtc-2",
      "wrapped-stx-velar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2069/small/Stacks_Logo_png.png",
      "https://coin-images.coingecko.com/coins/images/54285/small/sbtc-logo-orange-bg-white-circle-1000px_2.png",
      "https://coin-images.coingecko.com/coins/images/38934/small/wstx.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "monad-ecosystem",
    "name": "Monad Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-steth",
      "wrapped-bitcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "plasma-ecosystem",
    "name": "Plasma Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "chainlink",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kava-ecosystem",
    "name": "Kava Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether",
      "ethena-usde",
      "ethena-staked-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/325/small/Tether.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "unichain-ecosystem",
    "name": "Unichain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-steth",
      "wrapped-bitcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/18834/small/wstETH.png",
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "huobi-eco-chain-ecosystem",
    "name": "Huobi ECO Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "uniswap",
      "aave"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12504/small/uniswap-logo.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kaspa-ecosystem",
    "name": "Kaspa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "kaspa",
      "nacho-the-kat",
      "kaspy"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25751/small/kaspa-icon-exchanges.png",
      "https://coin-images.coingecko.com/coins/images/50921/small/NACHO_best_final_200.png",
      "https://coin-images.coingecko.com/coins/images/50816/small/kaspy_logo_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xdc-ecosystem",
    "name": "XDC Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "falcon-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/54558/small/ff_200_X_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "fuse-ecosystem",
    "name": "Fuse Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "dogelon-mars"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/14962/small/6GxcPRo3_400x400.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "viction-ecosystem",
    "name": "Viction Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bridged-weth",
      "coin98",
      "wrapped-viction"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/17117/small/logo.png",
      "https://coin-images.coingecko.com/coins/images/53427/small/viction.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "polygon-zkevm-ecosystem",
    "name": "Polygon zkEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "pancakeswap-token",
      "frax-ether"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/28284/small/frxETH_icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "fraxtal-ecosystem",
    "name": "Fraxtal Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "ethena-usde",
      "ethena-staked-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "soneium-ecosystem",
    "name": "Soneium Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "chainlink",
      "solv-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/36800/small/solvBTC.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "iotex-ecosystem",
    "name": "IoTeX Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "universal-btc",
      "mimatic",
      "wmatic"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39599/small/uniBTC_200px.png",
      "https://coin-images.coingecko.com/coins/images/15264/small/mimatic-red.png",
      "https://coin-images.coingecko.com/coins/images/14073/small/matic.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ink-ecosystem",
    "name": "Ink Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "wrapped-eeth",
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "injective-ecosystem",
    "name": "Injective Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "agora-dollar",
      "zignaly",
      "injective-bridged-usdt-injective"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39284/small/AUSD_1024px.png",
      "https://coin-images.coingecko.com/coins/images/14796/small/zig.jpg",
      "https://coin-images.coingecko.com/coins/images/68489/small/usdt.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "terra-classic-ecosystem",
    "name": "Terra Classic Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "terrausd",
      "juris-protocol",
      "mirror-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12681/small/UST.png",
      "https://coin-images.coingecko.com/coins/images/52955/small/UNJMnP-F_400x400_%281%29.jpg",
      "https://coin-images.coingecko.com/coins/images/13295/small/mirror_logo_transparent.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "merlin-chain-ecosystem",
    "name": "Merlin Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "solv-btc",
      "merlin-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/36800/small/solvBTC.png",
      "https://coin-images.coingecko.com/coins/images/37118/small/merlin.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "flare-network-ecosystem",
    "name": "Flare Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usdt0",
      "wrapped-flare",
      "flare-bridged-xrp-flare"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/28705/small/flare.png",
      "https://coin-images.coingecko.com/coins/images/69731/small/fxrp.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "world-chain-ecosystem",
    "name": "World Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usd-coin",
      "chainlink",
      "worldcoin-wld"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/6319/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/31069/small/worldcoin.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "radix-ecosystem",
    "name": "Radix Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "radix",
      "hyperlane-usd-coin",
      "hyperlane-bridged-wbtc-radix"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4374/small/6266da240f9ff5b6237a154c_Radix-Icon-256x256.png",
      "https://coin-images.coingecko.com/coins/images/71040/small/hUSDC.png",
      "https://coin-images.coingecko.com/coins/images/71091/small/hBTC.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "secret-ecosystem",
    "name": "Secret Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "injective-protocol",
      "celestia",
      "axelar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12882/small/Other_200x200.png",
      "https://coin-images.coingecko.com/coins/images/31967/small/tia.jpg",
      "https://coin-images.coingecko.com/coins/images/27277/small/V-65_xQ1_400x400.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zetachain-ecosystem",
    "name": "ZetaChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Zetachain is a Proof of Stake (PoS) blockchain built on the Cosmos SDK and Tendermint PBFT consensus engine. It is designed to facilitate fast transactions and instant finality across interconnected blockchains.",
    "top_3_coins_id": [
      "universal-btc",
      "zetachain",
      "zetachain-bridged-usdc-eth-zetachain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39599/small/uniBTC_200px.png",
      "https://coin-images.coingecko.com/coins/images/26718/small/Twitter_icon.png",
      "https://coin-images.coingecko.com/coins/images/35422/small/USDC.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "canto-ecosystem",
    "name": "Canto Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cosmos",
      "fbomb",
      "tarot-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/24109/small/fBomb_Brandmark_BlackBlue_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/31800/small/TAROT.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zilliqa-ecosystem",
    "name": "Zilliqa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": null,
    "top_3_coins_id": [
      "xsgd",
      "xcad-network",
      "switcheo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12832/small/StraitsX_Singapore_Dollar_%28XSGD%29_Token_Logo.png",
      "https://coin-images.coingecko.com/coins/images/15857/small/xcad_logo.jpg",
      "https://coin-images.coingecko.com/coins/images/3645/small/SWTH_Symbol_Origin.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ethereumpow-ecosystem",
    "name": "EthereumPoW Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ethereum-pow-iou",
      "xen-crypto",
      "bridged-usdt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26997/small/logo-clear.png",
      "https://coin-images.coingecko.com/coins/images/27713/small/Xen.jpeg",
      "https://coin-images.coingecko.com/coins/images/35001/small/logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "rootstock-ecosystem",
    "name": "Rootstock Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "usdt0",
      "solv-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/36800/small/solvBTC.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kardiachain-ecosystem",
    "name": "KardiaChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bridged-weth",
      "kardiachain",
      "my-defi-pet"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/7942/small/profile_pic_scaled.png",
      "https://coin-images.coingecko.com/coins/images/15321/small/mydefi.PNG"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "shibarium",
    "name": "Shibarium Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "bone-shibaswap",
      "og-roaring-kitty"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/16916/small/bone_icon.png",
      "https://coin-images.coingecko.com/coins/images/37954/small/ROARINGKITTY.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "milkomeda-cardano-ecosystem",
    "name": "Milkomeda (Cardano) Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "bridged-weth",
      "mimatic"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/15264/small/mimatic-red.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "telos-ecosystem",
    "name": "Telos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "stargate-bridged-usdc",
      "stargate-bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "apechain-ecosystem",
    "name": "ApeChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "wrapped-apecoin",
      "apecoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/50913/small/apecoin.jpg",
      "https://coin-images.coingecko.com/coins/images/24383/small/APECOIN.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "astar-ecosystem",
    "name": "Astar Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "wmatic",
      "origin-dollar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/14073/small/matic.png",
      "https://coin-images.coingecko.com/coins/images/12589/small/ousd-logo-200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "katana-ecosystem",
    "name": "Katana Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "jito-staked-sol",
      "lombard-staked-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/28046/small/JitoSOL-200.png",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "dogechain-ecosystem",
    "name": "Dogechain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "quickswap",
      "wrapped-wdoge",
      "doge-eat-doge"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25393/small/quickswap.png",
      "https://coin-images.coingecko.com/coins/images/26884/small/hb8hQIWP_400x400.jpeg",
      "https://coin-images.coingecko.com/coins/images/26878/small/omnom.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "etherlink-ecosystem",
    "name": "Etherlink Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "lombard-staked-btc",
      "curve-dao-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png",
      "https://coin-images.coingecko.com/coins/images/12124/small/Curve.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "velas-ecosystem",
    "name": "Velas Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bridged-weth",
      "wmatic",
      "bridged-wbnb"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/14073/small/matic.png",
      "https://coin-images.coingecko.com/coins/images/53070/small/wrapped_bnb.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bob-network-ecosystem",
    "name": "BOB Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "chainlink",
      "ignition-fbtc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/39182/small/Function_Token_%282%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "evmos-ecosystem",
    "name": "Evmos Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cosmos",
      "frax",
      "frax-share"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/13422/small/LFRAX.png",
      "https://coin-images.coingecko.com/coins/images/13423/small/frax.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "skale-ecosystem",
    "name": "Skale Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "skale",
      "unipoly",
      "roco-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13245/small/SKALE_token_300x300.png",
      "https://coin-images.coingecko.com/coins/images/32510/small/20231018_231410.png",
      "https://coin-images.coingecko.com/coins/images/19234/small/86109466.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "opbnb-ecosystem",
    "name": "opBNB Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "pancakeswap-token",
      "venus"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12632/small/pancakeswap-cake-logo_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/12677/small/XVS_Token.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "swellchain-ecosystem",
    "name": "Swellchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bitcoin",
      "wrapped-eeth",
      "ethena-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7598/small/WBTCLOGO.png",
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "cronos-zkevm-ecosystem",
    "name": "Cronos zkEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "agentfun-ai",
      "fulcrom"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/52133/small/AIFUN_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/29684/small/FUL_Token_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "immutable-ecosystem",
    "name": "Immutable zkEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "agora-dollar",
      "immutable-x",
      "gods-unchained"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39284/small/AUSD_1024px.png",
      "https://coin-images.coingecko.com/coins/images/17233/small/immutableX-symbol-BLK-RGB.png",
      "https://coin-images.coingecko.com/coins/images/17139/small/10631.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "meter-ecosystem",
    "name": "Meter Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bridged-weth",
      "moonriver",
      "bridged-wbnb"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39723/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/17984/small/Moonriver_MOVR_ICON.png",
      "https://coin-images.coingecko.com/coins/images/53070/small/wrapped_bnb.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "iota-evm-ecosystem",
    "name": "IOTA EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "iota",
      "stargate-bridged-usdc",
      "stargate-bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/692/small/IOTA_Thumbnail_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "waves-ecosystem",
    "name": "Waves Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "neutrino",
      "rome-stablecoin",
      "unit0"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10117/small/XTN.png",
      "https://coin-images.coingecko.com/coins/images/55694/small/Logo.png",
      "https://coin-images.coingecko.com/coins/images/51237/small/200%D1%85200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "flow-evm-ecosystem",
    "name": "Flow EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "flow-bridged-pyusd-flow"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/54418/small/USDF_Logo_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "neon-ecosystem",
    "name": "Neon Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Neon is an on-chain solution that brings native Ethereum Virtual Machine (EVM) dApps to the Solana network without any reconfiguration.",
    "top_3_coins_id": [
      "jito-staked-sol",
      "bonk",
      "pyth-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28046/small/JitoSOL-200.png",
      "https://coin-images.coingecko.com/coins/images/28600/small/bonk.jpg",
      "https://coin-images.coingecko.com/coins/images/31924/small/pyth.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "arbitrum-nova-ecosystem",
    "name": "Arbitrum Nova Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "arbitrum",
      "arbitrum-bridged-weth-arbitrum-nova",
      "moon"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/16547/small/arb.jpg",
      "https://coin-images.coingecko.com/coins/images/39697/small/weth.png",
      "https://coin-images.coingecko.com/coins/images/11222/small/Moons.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "story-ecosystem",
    "name": "Story Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "story-2",
      "stargate-bridged-usdc",
      "stargate-bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54035/small/Transparent_bg.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hemi-ecosystem",
    "name": "Hemi Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "satoshi-stablecoin",
      "bedrock-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/37760/small/Instagram_post_-_25.png",
      "https://coin-images.coingecko.com/coins/images/53039/small/brBTC_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hydration-ecosystem",
    "name": "Hydration Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "aave",
      "sky"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png",
      "https://coin-images.coingecko.com/coins/images/39925/small/sky.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "oasys-ecosystem",
    "name": "Oasys Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "battle-of-three-kingdoms",
      "wrapped-oas",
      "oasys-bridged-usdc-oasys"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/66558/small/sgc.png",
      "https://coin-images.coingecko.com/coins/images/28493/small/Oasys_OAS_Token_Black_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/54976/small/usdc.e.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "tac-ecosystem",
    "name": "TAC Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "lombard-staked-btc",
      "resolv-usr"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png",
      "https://coin-images.coingecko.com/coins/images/40008/small/USR_LOGO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "conflux-ecosystem",
    "name": "Conflux Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usdt0",
      "axcnh",
      "shui-cfx"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/70634/small/AnchorX_logo_RGB-01.png",
      "https://coin-images.coingecko.com/coins/images/35446/small/sCFX.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "wemix-ecosystem",
    "name": "WEMIX Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "wemix-token",
      "wemix-dollar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/12998/small/wemixcoin_color_200.png",
      "https://coin-images.coingecko.com/coins/images/28637/small/wemix_dollar.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kujira-ecosystem",
    "name": "Kujira Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "graviton",
      "racoon",
      "yum"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/24818/small/Graviton_-_Blue_200x200i.png",
      "https://coin-images.coingecko.com/coins/images/25037/small/rac_200x200.png",
      "https://coin-images.coingecko.com/coins/images/39116/small/yum.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "peaq-ecosystem",
    "name": "Peaq Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-weth",
      "auki-labs",
      "airtor-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/39811/small/COINGECKO-200-x-200_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/29690/small/AirTor.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lisk-ecosystem",
    "name": "Lisk Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "tellor",
      "lisk"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/9644/small/TRB-New_Logo.png",
      "https://coin-images.coingecko.com/coins/images/385/small/Lisk_logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "beam-ecosystem",
    "name": "Beam Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "exosama-network",
      "beam-bridged-usdc-beam",
      "wrapped-merit-circle"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28308/small/Small.png",
      "https://coin-images.coingecko.com/coins/images/33200/small/USDC.png",
      "https://coin-images.coingecko.com/coins/images/33068/small/wbeam_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "eclipse-ecosystem",
    "name": "Eclipse Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "eclipse-3",
      "eclipse-bridged-usdc-eclipse",
      "staked-bitz"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54958/small/image_%2832%29.png",
      "https://coin-images.coingecko.com/coins/images/52591/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/68292/small/icon_sBITZ.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "morph-l2-ecosystem",
    "name": "Morph L2 Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "ethena-usde",
      "ethena-staked-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ergo-ecosystem",
    "name": "Ergo Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ergone",
      "comet-token",
      "paideia"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35624/small/1000334311.png",
      "https://coin-images.coingecko.com/coins/images/34841/small/_chou.png",
      "https://coin-images.coingecko.com/coins/images/34122/small/Twitter_Icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "oasis-emerald-ecosystem",
    "name": "Oasis Emerald Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tether-usd-wormhole",
      "avalanche-wormhole",
      "sol-wormhole"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/22881/small/USDTso_wh_small.png",
      "https://coin-images.coingecko.com/coins/images/22943/small/AVAX_wh_small.png",
      "https://coin-images.coingecko.com/coins/images/22876/small/SOL_wh_small.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bitlayer-ecosystem",
    "name": "Bitlayer Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "satoshi-stablecoin",
      "bedrock-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/37760/small/Instagram_post_-_25.png",
      "https://coin-images.coingecko.com/coins/images/53039/small/brBTC_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lightlink-ecosystem",
    "name": "LightLink Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "lightlink",
      "amped-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/35357/small/lightlink-ticker-200.png",
      "https://coin-images.coingecko.com/coins/images/37421/small/AmpedLogoTrans-200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "okt-chain-ecosystem",
    "name": "OKT Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "okb",
      "radio-caca",
      "o3-swap"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4463/small/WeChat_Image_20220118095654.png",
      "https://coin-images.coingecko.com/coins/images/17841/small/ez44_BSs_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/15460/small/o3.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bittorrent-ecosystem",
    "name": "BitTorrent Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usdd",
      "bittorrent",
      "prospective"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25380/small/UUSD.jpg",
      "https://coin-images.coingecko.com/coins/images/22457/small/btt_logo.png",
      "https://coin-images.coingecko.com/coins/images/68749/small/2_Logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zircuit-ecosystem",
    "name": "Zircuit Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "ethena-usde",
      "ethena-staked-usde"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/33613/small/usde.png",
      "https://coin-images.coingecko.com/coins/images/33669/small/sUSDe-Symbol-Color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "heco-chain-ecosystem",
    "name": "HECO Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": null,
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zedxion-ecosystem",
    "name": "Zedxion Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-zedxion",
      "zedxion-bridged-usdt-zedxion",
      "bitcoin-bridged-zed20"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38099/small/wzedx.png",
      "https://coin-images.coingecko.com/coins/images/66516/small/usdt.jpg",
      "https://coin-images.coingecko.com/coins/images/38101/small/btc-z.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kadena-ecosystem",
    "name": "Kadena Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Kadena is a scalable Proof of Work blockchain built using the Pact smart contract language. It aims to build a scalable and developer-friendly public blockchain with a level of security on-par with Bitcoin.",
    "top_3_coins_id": [
      "kadena",
      "ktoshi",
      "the-brothers-dao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3693/small/4uC_GVak_400x400.png",
      "https://coin-images.coingecko.com/coins/images/55655/small/coingecko_image_200x.png",
      "https://coin-images.coingecko.com/coins/images/51743/small/BRO_192_192%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "oec-ecosystem",
    "name": "OEC Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "songbird-ecosystem",
    "name": "Songbird Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "hex-trust-usdx",
      "wrapped-songbird",
      "pangolin-songbird"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38997/small/USDX.png",
      "https://coin-images.coingecko.com/coins/images/28770/small/songbird.jpeg",
      "https://coin-images.coingecko.com/coins/images/27383/small/PSB_token.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "boba-network-ecosystem",
    "name": "Boba Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "frax",
      "across-protocol",
      "mimatic"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13422/small/LFRAX.png",
      "https://coin-images.coingecko.com/coins/images/28161/small/across-200x200.png",
      "https://coin-images.coingecko.com/coins/images/15264/small/mimatic-red.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zora-ecosystem",
    "name": "Zora Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "zora",
      "zora-bridged-weth-zora-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/54693/small/zora.jpg",
      "https://coin-images.coingecko.com/coins/images/35811/small/zora-bridged-weth.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "syscoin-nevm-ecosystem",
    "name": "Syscoin NEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "mimatic",
      "superdapp"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/15264/small/mimatic-red.png",
      "https://coin-images.coingecko.com/coins/images/33093/small/ZLbQFe1j_400x400.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "re-al-ecosystem",
    "name": "Re.al Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "wanchain-ecosystem",
    "name": "Wanchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wanbtc",
      "wanusdt",
      "wanusdc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23615/small/download-4.png",
      "https://coin-images.coingecko.com/coins/images/23605/small/download-1.png",
      "https://coin-images.coingecko.com/coins/images/23606/small/download-2.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "neo-ecosystem",
    "name": "NEO Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "gas",
      "red-pulse"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/858/small/GAS_512_512.png",
      "https://coin-images.coingecko.com/coins/images/1074/small/phoenix-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "theta-ecosystem",
    "name": "Theta Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "theta-token",
      "thetadrop",
      "bridged-wbnb"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2538/small/theta-token-logo.png",
      "https://coin-images.coingecko.com/coins/images/23319/small/tdrop_pf_square_reverse.png",
      "https://coin-images.coingecko.com/coins/images/53070/small/wrapped_bnb.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kucoin-community-chain-ecosystem",
    "name": "Kucoin Community Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "kucoin-bridged-usdt-kucoin-community-chain",
      "kcc-bridged-weth-kucoin-community-chain",
      "kucoin-bridged-usdc-kucoin-community-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35024/small/USDT.png",
      "https://coin-images.coingecko.com/coins/images/39712/small/WETH.PNG",
      "https://coin-images.coingecko.com/coins/images/35225/small/USDC.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "massa-ecosystem",
    "name": "Massa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "massa",
      "purrfect-universe",
      "massa-bridged-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29379/small/Massa_Brand_Red.png",
      "https://coin-images.coingecko.com/coins/images/55351/small/charlie.webp",
      "https://coin-images.coingecko.com/coins/images/69330/small/bitcoin-btc-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "elastos-smart-contract-chain-ecosystem",
    "name": "Elastos Smart Contract Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "huobi-token",
      "husd",
      "elk-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2822/small/huobi-token-logo.png",
      "https://coin-images.coingecko.com/coins/images/9567/small/HUSD.jpg",
      "https://coin-images.coingecko.com/coins/images/17813/small/elk.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ethereum-classic-ecosystem",
    "name": "Ethereum Classic Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "shiba-classic",
      "wrapped-ether",
      "wetc-hebeswap"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/27241/small/1BED03B1-D87F-4E91-B24F-CDED9309D003.jpeg",
      "https://coin-images.coingecko.com/coins/images/26639/small/wrapped-ether.png",
      "https://coin-images.coingecko.com/coins/images/27126/small/1321.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "corn-ecosystem",
    "name": "Corn Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "usdt0",
      "lombard-staked-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/39969/small/LBTC_Logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "step-network-ecosystem",
    "name": "Step Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "dao-maker",
      "step-app-fitfi",
      "xcad-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13915/small/4.jpg",
      "https://coin-images.coingecko.com/coins/images/25015/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/15857/small/xcad_logo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "wax-ecosystem",
    "name": "Wax Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wax",
      "alien-worlds",
      "wax-bridged-usdc-wax"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1372/small/WAX_Coin_Tickers_P_512px.png",
      "https://coin-images.coingecko.com/coins/images/14676/small/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
      "https://coin-images.coingecko.com/coins/images/68288/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "degen-ecosystem",
    "name": "Degen Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-weth",
      "wrapped-degen",
      "degenswap"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/36809/small/wdegen.jpeg",
      "https://coin-images.coingecko.com/coins/images/36801/small/degenswap.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "goat-ecosystem",
    "name": "Goat Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "goat-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/69522/small/goated.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hydra-ecosystem",
    "name": "Hydra Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "lockchain",
      "changex",
      "wrapped-hydra"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1357/small/LOC_Transparent_New.png",
      "https://coin-images.coingecko.com/coins/images/26487/small/blue-logo-200_x200-v0.2.png",
      "https://coin-images.coingecko.com/coins/images/27391/small/Logo_Hydra_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "thundercore-ecosystem",
    "name": "ThunderCore Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "thundercore-bridged-usdt-thundercore",
      "thundercore-bridged-wbtc-thundercore",
      "thundercore-bridged-usdc-thundercore"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35057/small/USDT.jpg",
      "https://coin-images.coingecko.com/coins/images/39590/small/wbtc.png",
      "https://coin-images.coingecko.com/coins/images/35325/small/USDC.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bouncebit-ecosystem",
    "name": "BounceBit Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bouncebit-usd-2",
      "bouncebit-btc",
      "wrapped-bouncebit"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/70894/small/BBUSD_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/37985/small/bbtc_icon.png",
      "https://coin-images.coingecko.com/coins/images/37948/small/BounceBit_Logo_White.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "saga-ecosystem",
    "name": "Saga Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "saga-2",
      "wrapped-saga",
      "mustang"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/25691/small/zcPXETKs_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/54884/small/saga.jpg",
      "https://coin-images.coingecko.com/coins/images/70999/small/mustang-icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "movement-ecosystem",
    "name": "Movement Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "frax-usd",
      "movement",
      "movement-bridged-usdc-movement"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53963/small/frxUSD.png",
      "https://coin-images.coingecko.com/coins/images/39345/small/movement-testnet-token.png",
      "https://coin-images.coingecko.com/coins/images/66245/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "shimmerevm-ecosystem",
    "name": "ShimmerEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "shimmerbridge-bridged-usdt-shimmerevm",
      "shimmer",
      "shimmersea-lum"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35550/small/usdt.jpeg",
      "https://coin-images.coingecko.com/coins/images/27286/small/shimmer_mark_transparent_200x200.png",
      "https://coin-images.coingecko.com/coins/images/32429/small/lum.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bsquared-network-ecosystem",
    "name": "BSquared Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "satoshi-stablecoin",
      "universal-btc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/37760/small/Instagram_post_-_25.png",
      "https://coin-images.coingecko.com/coins/images/39599/small/uniBTC_200px.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "superseed-ecosystem",
    "name": "Superseed Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "stargate-bridged-usdc",
      "openusdt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/54815/small/ousdt.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "haven1-ecosystem",
    "name": "Haven1 Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "haven1",
      "haven1-bridged-wrapped-eth",
      "haven1-bridged-staked-eth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28771/small/haven1-colored-symbol_2x_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/67184/small/eth_logo_200x200.png",
      "https://coin-images.coingecko.com/coins/images/67205/small/eth_logo_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bitrock-ecosystem",
    "name": "Bitrock Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "flow-ecosystem",
    "name": "Flow Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "flow",
      "flovatar-dust"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/13446/small/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png",
      "https://coin-images.coingecko.com/coins/images/32697/small/Logo_Icon_Pink_Purple_Roundel.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kroma-ecosystem",
    "name": "Kroma Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "edu-chain-ecosystem",
    "name": "EDU Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "wrapped-edu",
      "edu-chain-bridged-usdc-edu-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/54753/small/edu.jpg",
      "https://coin-images.coingecko.com/coins/images/54754/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "alephium-ecosystem",
    "name": "Alephium Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "alephium",
      "alphbanx",
      "elexium"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/21598/small/Alephium-Logo-round.png",
      "https://coin-images.coingecko.com/coins/images/53048/small/CG_-_ABX_Logo_mark_%28white_background%29_-_200px.png",
      "https://coin-images.coingecko.com/coins/images/51762/small/EX.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "juno-ecosystem",
    "name": "Juno Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "juno-network",
      "white-whale",
      "backbone-labs-staked-juno"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/19249/small/Juno_Logo_%28Salmon%29_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/21628/small/whale.png",
      "https://coin-images.coingecko.com/coins/images/34618/small/bJUNO.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "vechain-ecosystem",
    "name": "VeChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "vechain",
      "vethor-token",
      "vebetterdao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1167/small/VET.png",
      "https://coin-images.coingecko.com/coins/images/5230/small/VTHO_Circle_Crop__Reference_.png",
      "https://coin-images.coingecko.com/coins/images/52286/small/B3TR_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "smartbch-ecosystem",
    "name": "SmartBCH Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-bch",
      "wojak-finance",
      "law"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/21386/small/0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04.png",
      "https://coin-images.coingecko.com/coins/images/18823/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/21468/small/0x0b00366fBF7037E9d75E4A569ab27dAB84759302.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "taraxa-ecosystem",
    "name": "Taraxa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "taraxa",
      "meridian-mst",
      "wrapped-tara"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4372/small/just_logo_dark_background.png",
      "https://coin-images.coingecko.com/coins/images/34343/small/Meridian_Icon.png",
      "https://coin-images.coingecko.com/coins/images/54337/small/taraxa.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "gravity-alpha-ecosystem",
    "name": "Gravity Alpha Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "g-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/39200/small/gravity.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sanko-ecosystem",
    "name": "Sanko Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "dream-machine-token",
      "sanko-bridged-usdc-sanko",
      "wrapped-dmt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30505/small/dmt.png",
      "https://coin-images.coingecko.com/coins/images/38467/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/38465/small/dmt.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "laika-ecosystem",
    "name": "Laika Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "laikachain",
      "laika-bridged-wdoge-laika"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39364/small/logo_laika.jpg",
      "https://coin-images.coingecko.com/coins/images/51907/small/wdoge.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "shido-network-ecosystem",
    "name": "Shido Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "shido-2",
      "kensei",
      "wrapped-shido"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/32070/small/SHIDO.png",
      "https://coin-images.coingecko.com/coins/images/55210/small/kensei.jpg",
      "https://coin-images.coingecko.com/coins/images/54250/small/shido.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "memecore-ecosystem",
    "name": "MemeCore Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "memecore",
      "memetern",
      "wrapped-m"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53247/small/square-bg-transparent.png",
      "https://coin-images.coingecko.com/coins/images/68065/small/memetern-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/68026/small/memecore.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bitgert-ecosystem",
    "name": "Bitgert Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bitrise-token",
      "sphynx-labs-bae5b42e-5e37-4607-8691-b56d3a5f344c",
      "icecream"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/17388/small/200x200.png",
      "https://coin-images.coingecko.com/coins/images/30142/small/photo_2023-05-03_21.44.17.jpeg",
      "https://coin-images.coingecko.com/coins/images/26237/small/icecream.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "gatelayer-ecosystem",
    "name": "GateLayer Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "gatechain-token",
      "gmeme",
      "gdog-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/8183/small/200X200.png",
      "https://coin-images.coingecko.com/coins/images/70602/small/gmeme-logo.jpg",
      "https://coin-images.coingecko.com/coins/images/70603/small/gdog-logo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lukso-ecosystem",
    "name": "Lukso Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "lukso-token-2",
      "stakingverse-staked-lyx",
      "chillwhales"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31010/small/LYX.png",
      "https://coin-images.coingecko.com/coins/images/66353/small/icon_gradient_transparant.png",
      "https://coin-images.coingecko.com/coins/images/36835/small/chilllogo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "q-mainnet-ecosystem",
    "name": "Q Mainnet Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "vnx-swiss-franc",
      "vnx-euro",
      "elk-finance"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/29547/small/VNXCHF_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/29351/small/VNXEUR_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/17813/small/elk.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zklink-nova-ecosystem",
    "name": "zkLink Nova Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "zklink",
      "nova-usdc",
      "nova-tether-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34982/small/Logo1.png",
      "https://coin-images.coingecko.com/coins/images/37599/small/usdc.png",
      "https://coin-images.coingecko.com/coins/images/37603/small/USDT.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "astar-zkevm-ecosystem",
    "name": "Astar zkEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bonsai-coin",
      "stakestone-ether"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39273/small/1000007690.png",
      "https://coin-images.coingecko.com/coins/images/33103/small/200_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bevm-ecosystem",
    "name": "BEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "satoshi-stablecoin",
      "bido-staked-bitcoin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37760/small/Instagram_post_-_25.png",
      "https://coin-images.coingecko.com/coins/images/37285/small/image.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "oraichain-ecosystem",
    "name": "Oraichain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "max-2",
      "airight",
      "och"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52378/small/btc.png",
      "https://coin-images.coingecko.com/coins/images/16428/small/alright.PNG",
      "https://coin-images.coingecko.com/coins/images/34236/small/orchai_logo_white_copy_4x-8_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "airdao-ecosystem",
    "name": "AirDAO Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "amber",
      "airdao-old"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1041/small/Ascendia_Coins.png",
      "https://coin-images.coingecko.com/coins/images/71109/small/airdao_400x400.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mint-ecosystem",
    "name": "Mint Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "mint-blockchain",
      "smart-layer-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/54653/small/Mint_logo_200*200.png",
      "https://coin-images.coingecko.com/coins/images/35397/small/sln.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "duckchain-ecosystem",
    "name": "DuckChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "universal-btc",
      "duckchain-token",
      "wrapped-ton"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39599/small/uniBTC_200px.png",
      "https://coin-images.coingecko.com/coins/images/53624/small/11111_2x-8.png",
      "https://coin-images.coingecko.com/coins/images/52464/small/toncoin.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "initia-ecosystem",
    "name": "Initia Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-eeth",
      "initia",
      "initia-bridged-usdc-initia"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33033/small/weETH.png",
      "https://coin-images.coingecko.com/coins/images/40138/small/initia_symbol_white.png",
      "https://coin-images.coingecko.com/coins/images/66981/small/usd-coin-usdc-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "dfk-chain-ecosystem",
    "name": "DFK Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "synapse-bridged-usdc-elastos",
      "defi-kingdoms-crystal",
      "xjewel"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35320/small/USDC.jpg",
      "https://coin-images.coingecko.com/coins/images/24741/small/DFK_Crystal_Token_Logo.351435c0.png",
      "https://coin-images.coingecko.com/coins/images/24830/small/jewel.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "oasis-sapphire-ecosystem",
    "name": "Oasis Sapphire Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "accumulated-finance-staked-rose"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51115/small/strose.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "redbelly-network-ecosystem",
    "name": "Redbelly Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "redbelly-network-token",
      "wrapped-rbnt",
      "redbelly-bridged-usdt-redbelly"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34372/small/RBNT.jpg",
      "https://coin-images.coingecko.com/coins/images/67048/small/redbelly.jpg",
      "https://coin-images.coingecko.com/coins/images/67049/small/usdt.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "units-network-ecosystem",
    "name": "Unit0 Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-unit0",
      "units-network-bridged-usdt-units-network",
      "koala-governance-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52720/small/unit0.jpg",
      "https://coin-images.coingecko.com/coins/images/52719/small/usdt.jpg",
      "https://coin-images.coingecko.com/coins/images/70533/small/KoalaToken_Gold_256x.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "nibiru-ecosystem",
    "name": "Nibiru Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "liquid-staked-nibi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/71050/small/stnibi-logo-circle-500x500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "migaloo-ecosystem",
    "name": "Migaloo Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "white-whale",
      "racoon",
      "eris-amplified-mnta"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/21628/small/whale.png",
      "https://coin-images.coingecko.com/coins/images/25037/small/rac_200x200.png",
      "https://coin-images.coingecko.com/coins/images/34617/small/ampmnta.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "besc-hyperchain-ecosystem",
    "name": "BESC HyperChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-besc-2",
      "besc-money",
      "milestone-millions-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68170/small/IMG_20250811_025232_632.png",
      "https://coin-images.coingecko.com/coins/images/68696/small/1000005686.jpg",
      "https://coin-images.coingecko.com/coins/images/70583/small/MSMIL_DexScreener_500x500-2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "somnia-ecosystem",
    "name": "Somnia Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-weth",
      "wrapped-somi"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/69031/small/somi.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "glue-ecosystem",
    "name": "Glue Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "glue",
      "stargate-bridged-usdc",
      "stargate-bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54538/small/GlueLogo200px.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "botanix-ecosystem",
    "name": "Botanix Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "stargate-bridged-usdc",
      "stargate-bridged-weth"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mantra-ecosystem",
    "name": "Mantra Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cosmos",
      "ondo-us-dollar-yield",
      "mantra-dao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1481/small/cosmos_hub.png",
      "https://coin-images.coingecko.com/coins/images/31700/small/usdy_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/12151/small/OM_Token.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "areum-network-ecosystem",
    "name": "Areum Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "areon-bridged-usdt-areon-network",
      "pandarea",
      "wrapped-area"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39431/small/usdt.jpeg",
      "https://coin-images.coingecko.com/coins/images/38686/small/image.png",
      "https://coin-images.coingecko.com/coins/images/38729/small/Areum_Logo_%2814%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hela-ecosystem",
    "name": "HeLa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "hela-usd",
      "wrapped-hlusd",
      "hela-usdc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/38325/small/Hela_Logo_HLUSD_Thumbnail-05_%282%29.png",
      "https://coin-images.coingecko.com/coins/images/54462/small/hlusd.jpg",
      "https://coin-images.coingecko.com/coins/images/54463/small/hlusd.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "0g-ecosystem",
    "name": "0g Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-weth",
      "gimo-staked-0g",
      "wrapped-0g"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69466/small/weth_2.jpg",
      "https://coin-images.coingecko.com/coins/images/69802/small/0g.png",
      "https://coin-images.coingecko.com/coins/images/69681/small/0g.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "venom-ecosystem",
    "name": "Venom Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "venom",
      "dragonz",
      "wrapped-venom"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28660/small/Venom_Icon.png",
      "https://coin-images.coingecko.com/coins/images/55047/small/logo_token.png",
      "https://coin-images.coingecko.com/coins/images/39353/small/wvenom_200%D1%85200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "rss3-vsl-ecosystem",
    "name": "RSS3 VSL Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "rss3",
      "wrapped-rss3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23575/small/rss3.jpeg",
      "https://coin-images.coingecko.com/coins/images/52451/small/rss3.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "parex-network-ecosystem",
    "name": "Parex Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "parex",
      "wrapped-parex"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/23650/small/cmc.png",
      "https://coin-images.coingecko.com/coins/images/71146/small/parex.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bahamut-ecosystem",
    "name": "Bahamut Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "fasttoken",
      "symbiosis-bridged-usdt-bahamut",
      "symbiosis-bridged-usdc-bahamut"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/28478/small/lightenicon_200x200.png",
      "https://coin-images.coingecko.com/coins/images/37934/small/usdt_%281%29.png",
      "https://coin-images.coingecko.com/coins/images/37936/small/USDC.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "eos-ecosystem",
    "name": "EOS Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "effect-network",
      "dapp"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/3012/small/logomark_effect-network.png",
      "https://coin-images.coingecko.com/coins/images/8116/small/dapp-logo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mezo-ecosystem",
    "name": "Mezo Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "mezo-wrapped-btc",
      "mezo-bridged-usdc-mezo",
      "mezo-bridged-usdt-mezo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68244/small/btc.png",
      "https://coin-images.coingecko.com/coins/images/68245/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/68246/small/usdt.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "pundi-aifx-omnilayer-ecosystem",
    "name": "Pundi AIFX Omnilayer Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": " ",
    "top_3_coins_id": [
      "pundi-x-2",
      "wrapped-pundi-aifx",
      "bridged-wrapped-ether-pundi-aifx-omnilayer"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14571/small/vDyefsXq_400x400.jpg",
      "https://coin-images.coingecko.com/coins/images/54679/small/pundiai.png",
      "https://coin-images.coingecko.com/coins/images/54680/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "humanode-ecosystem",
    "name": "Humanode Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-ehmnd",
      "humanode",
      "bridged-usdc-chainport"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33234/small/ehmnd.png",
      "https://coin-images.coingecko.com/coins/images/29645/small/humanode.jpg",
      "https://coin-images.coingecko.com/coins/images/33889/small/usdc.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "artela-ecosystem",
    "name": "Artela Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "inevm-ecosystem",
    "name": "inEVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "dackieswap"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/30752/small/dackieswap_large.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "vanar-chain-ecosystem",
    "name": "Vanar Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "vanar-chain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33466/small/apple-touch-icon.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "electroneum-ecosystem",
    "name": "Electroneum Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-electroneum",
      "electroswap",
      "dynamo"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54785/small/electroneum.jpg",
      "https://coin-images.coingecko.com/coins/images/54787/small/bolt.jpg",
      "https://coin-images.coingecko.com/coins/images/54788/small/dynamo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zero-network-ecosystem",
    "name": "Zero Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "zero-network-bridged-usdc-zero-network",
      "colony-2",
      "zero-network-bridged-weth-zero-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55137/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/55091/small/logo_200x200_3.png",
      "https://coin-images.coingecko.com/coins/images/55136/small/weth_2.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ziliqa-evm-ecosystem",
    "name": "Ziliqa EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "kalijo",
      "wrapped-zil",
      "zilliqa-evm-bridged-usdc-zilliqa-evm"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50912/small/SEED_200x200.png",
      "https://coin-images.coingecko.com/coins/images/55280/small/ziliqa.jpg",
      "https://coin-images.coingecko.com/coins/images/55281/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "provenance-ecosystem",
    "name": "Provenance Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "figure-heloc",
      "hash-2",
      "ylds"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68480/small/figure.png",
      "https://coin-images.coingecko.com/coins/images/66154/small/Hastra_Icon.png",
      "https://coin-images.coingecko.com/coins/images/66486/small/Frame_5589.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "vana-ecosystem",
    "name": "Vana Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "vana",
      "wrapped-vana",
      "stargate-bridged-usdc-vana"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51404/small/logo.png",
      "https://coin-images.coingecko.com/coins/images/53256/small/vana.jpg",
      "https://coin-images.coingecko.com/coins/images/53255/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ql1-ecosystem",
    "name": "QL1 Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "qusdt",
      "wrapped-qom",
      "teh-fund"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52913/small/usdt.jpg",
      "https://coin-images.coingecko.com/coins/images/50469/small/qom_logo.png",
      "https://coin-images.coingecko.com/coins/images/28969/small/IMG_20230203_091543_056.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mantra-evm-ecosystem",
    "name": "Mantra EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "hyperlane-bridged-usdc-mantra-evm",
      "mantra-usd",
      "wrapped-om"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/71257/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/71237/small/mantraUSD_token.png",
      "https://coin-images.coingecko.com/coins/images/71258/small/mantra.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "galachain-ecosystem",
    "name": "GalaChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "gala",
      "gala-music"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png",
      "https://coin-images.coingecko.com/coins/images/33472/small/gmusic.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "larissa-ecosystem",
    "name": "Larissa Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "wrapped-lrs",
      "lrsnode"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54570/small/larissa.jpg",
      "https://coin-images.coingecko.com/coins/images/54571/small/lrsn.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zano-ecosystem",
    "name": "Zano Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "zano",
      "freedom-dollar"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/8370/small/Icon-App-512x512.png",
      "https://coin-images.coingecko.com/coins/images/55500/small/logo-color.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "hashkey-chain-ecosystem",
    "name": "HashKey Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "hashkey-bridged-usdt-hashkey",
      "wrapped-hsk"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/68266/small/usdt.jpg",
      "https://coin-images.coingecko.com/coins/images/68265/small/hsk.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sx-rollup-ecosystem",
    "name": "SX Rollup Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "sx-network-2",
      "sx-rollup-bridged-usdc-sx-rollup"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34934/small/sx-ntework.jpeg",
      "https://coin-images.coingecko.com/coins/images/55171/small/usdc.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "stable-ecosystem",
    "name": "Stable Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "usdt0",
      "stable-2",
      "tether-gold-tokens"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53705/small/usdt0.jpg",
      "https://coin-images.coingecko.com/coins/images/69242/small/stable-logotype-framed-square-light.png",
      "https://coin-images.coingecko.com/coins/images/66560/small/XAUt0_Token_Icon_Gold.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "genesys-network-ecosystem",
    "name": "Genesys Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "shitcats",
      "wrapped-gsys-bluelotusdao"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/52100/small/logo_1.png",
      "https://coin-images.coingecko.com/coins/images/38670/small/gsys.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "superposition-ecosystem",
    "name": "Superposition Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "bridged-weth-superposition",
      "bridged-btc-superposition"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/69591/small/bridged-weth-superposition.jpeg",
      "https://coin-images.coingecko.com/coins/images/69590/small/bridged-btc-superposition.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "endurance-ecosystem",
    "name": "Endurance Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "endurance",
      "primeace",
      "wrapped-ace"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/33528/small/ACE.png",
      "https://coin-images.coingecko.com/coins/images/38810/small/peACE_200.png",
      "https://coin-images.coingecko.com/coins/images/38870/small/WACE_200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "proof-of-memes-ecosystem",
    "name": "Proof of Memes Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "astrospaces-io",
      "proof-of-gorila",
      "wizard-token-8fc587d7-4b79-4f5a-89c9-475f528c6d47"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/22394/small/logo.jpg",
      "https://coin-images.coingecko.com/coins/images/28649/small/nav1.png",
      "https://coin-images.coingecko.com/coins/images/28710/small/wizt-logo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "saakuru-ecosystem",
    "name": "Saakuru Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "saakuru-labs",
      "wrapped-oasys"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/37058/small/saakuru.jpeg",
      "https://coin-images.coingecko.com/coins/images/38983/small/WOAS-White.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "deepbrain-chain-ecosystem",
    "name": "DeepBrain Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "deepbrain-chain",
      "deeplink-protocol"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/2057/small/DeepBrainChain.png",
      "https://coin-images.coingecko.com/coins/images/54848/small/DLC_logo_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "edgeware-ecosystem",
    "name": "Edgeware Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xai-ecosystem",
    "name": "XAI Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "xai-blockchain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/34258/small/round_icon_2048_px.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "defiverse-ecosystem",
    "name": "Defiverse Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "graphlinq-ecosystem",
    "name": "GraphLinq Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "graphlinq-wrapped-eth",
      "wrapped-glq"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50929/small/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-10-03_%D0%B2_18.14.24.png",
      "https://coin-images.coingecko.com/coins/images/50508/small/Logo_Dex_4_correct_.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "henesys-ecosystem",
    "name": "Henesys Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "nexpace"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/55703/small/wk63iOZz_400x400.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ancient8-ecosystem",
    "name": "Ancient8 Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ancient8",
      "hairy-the-bene"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39170/small/A8_Token-04_200x200.png",
      "https://coin-images.coingecko.com/coins/images/37900/small/HAIRY_LOGO_400x400.jpeg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "cyber-ecosystem",
    "name": "Cyber Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cyberconnect",
      "wild-goat-coin-2"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/31274/small/token.png",
      "https://coin-images.coingecko.com/coins/images/37966/small/COIN_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lens-ecosystem",
    "name": "Lens Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink",
      "bonsai-token"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png",
      "https://coin-images.coingecko.com/coins/images/35884/small/bonsaiToken.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "haqq-network-ecosystem",
    "name": "Haqq Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stride-staked-islm"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/39349/small/0x12fEFEAc0568503F7C0D934c149f29a42B05C48f.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "supra-ecosystem",
    "name": "Supra Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "supra",
      "spike-3"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/35836/small/photo_2024-03-09_19-25-08.jpg",
      "https://coin-images.coingecko.com/coins/images/71035/small/coin_spike.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xone-ecosystem",
    "name": "Xone Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "xone-bridged-usdt-xone",
      "wrapped-xoc"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69311/small/USDT.png",
      "https://coin-images.coingecko.com/coins/images/69310/small/xone.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "iota-ecosystem",
    "name": "IOTA Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "staked-iota",
      "virtue-usd"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/67320/small/stiota.png",
      "https://coin-images.coingecko.com/coins/images/67321/small/vusd.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "rari-ecosystem",
    "name": "Rari Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "stargate-bridged-usdc",
      "stargate-bridged-usdt"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69316/small/usdc.jpg",
      "https://coin-images.coingecko.com/coins/images/70631/small/usdt.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "apex-chain-ecosystem",
    "name": "Apex Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "Apex Chain is a gas-free blockchain, powered by the Omnia token.",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "aelf-ecosystem",
    "name": "Aelf Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "aelf"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/1371/small/aelf-logo.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bittensor-evm-ecosystem",
    "name": "Bittensor EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chainlink"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/877/small/Chainlink_Logo_500.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "boba-bnb-ecosystem",
    "name": "Boba BNB Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "alienx-ecosystem",
    "name": "AlienX Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "alienxchain"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/51011/small/aix.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "carrchain-ecosystem",
    "name": "CarrChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "carnomaly"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/14403/small/tcjOTKE3_400x400.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "mainnetz-ecosystem",
    "name": "Mainnetz Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "bayblon-genesis-ecosystem",
    "name": "Bayblon Genesis Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "cube-staked-baby"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55164/small/cBABY.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "8bit-chain-ecosystem",
    "name": "8Bit Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "defimetachain-ecosystem",
    "name": "DefiMetaChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "crypto-factor"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/68989/small/token_logo_official_blue_200x200.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "reactive-network-ecosystem",
    "name": "Reactive Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "reactive-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54415/small/Symbol_ColorBlack_H32_%281%29.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "voi-network-ecosystem",
    "name": "Voi Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "voi-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/50410/small/PRIMARY_Voi_Logo_White_on_Purple_Background.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "chromia-ecosystem",
    "name": "Chromia Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "chromaway"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/5000/small/Chromia.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "onchain-ecosystem",
    "name": "Onchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "onchain-coin"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/40107/small/onchain.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "titanchain-ecosystem",
    "name": "Titanchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "tokenize-xchange"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/4984/small/TKX_-_Logo_-_RGB-15.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "quai-network-ecosystem",
    "name": "Quai Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "quai-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/27928/small/QuaiLogoFinal.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xrpl-evm-ecosystem",
    "name": "XRPL EVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "midas-xrp"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/69548/small/Capture-2025-09-26-164413.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "beamprivacy-ecosystem",
    "name": "BeamPrivacy Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "beam"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/7339/small/BEAM.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "sonic-svm-ecosystem",
    "name": "Sonic SVM Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "sonic-svm"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/53061/small/Token.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "loopring-ecosystem",
    "name": "Loopring Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "loopring"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/913/small/LRC.png"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "codex-ecosystem",
    "name": "Codex Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "bilira"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/10119/small/JBs9jiXO_400x400.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "graphite-network-ecosystem",
    "name": "Graphite Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "graphite-network"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/54587/small/Logo.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ultron-ecosystem",
    "name": "Ultron Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "ultron"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/26977/small/ULTRON-Profile-Pic.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "elysium-ecosystem",
    "name": "Elysium Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "gunz-ecosystem",
    "name": "GUNZ Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [
      "gunz"
    ],
    "top_3_coins": [
      "https://coin-images.coingecko.com/coins/images/55027/small/gunz.jpg"
    ],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "zenon-ecosystem",
    "name": "Zenon Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "icb-network-ecosystem",
    "name": "ICB Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "celer-network",
    "name": "Celer Network",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "tenet-ecosystem",
    "name": "Tenet Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "qubic-chain-ecosystem",
    "name": "Qubic Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "eventum-ecosystem",
    "name": "Eventum Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "coti-ecosystem",
    "name": "COTI Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "redstone-ecosystem",
    "name": "Redstone Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "platon-network-ecosystem",
    "name": "PlatON Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "combo-ecosystem",
    "name": "Combo Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "vyvo-smart-chain-ecosystem",
    "name": "Vyvo Smart Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "alveychain-ecosystem",
    "name": "Alveychain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lung-ecosystem",
    "name": "Lung Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "multivac-ecosystem",
    "name": "MultiVAC Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "ham-ecosystem",
    "name": "Ham Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "winr-ecosystem",
    "name": "Winr Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "playa3ull-games-ecosystem",
    "name": "PLAYA3ULL Games Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "nahmii-ecosystem",
    "name": "Nahmii Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "uton-ecosystem",
    "name": "UTON Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "dmex-ecosystem",
    "name": "DMEX Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "jibchain-ecosystem",
    "name": "Jibchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "kinto-ecosystem",
    "name": "Kinto Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "megaeth-ecosystem",
    "name": "MegaETH Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "qitmeer-network-ecosystem",
    "name": "Qitmeer Network Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "odyssey-ecosystem",
    "name": "Odyssey Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "xt-smart-chain-ecosystem",
    "name": "XT Smart Chain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "omnia-ecosystem",
    "name": "Omnia Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "moonchain-ecosystem",
    "name": "Moonchain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "enuls-ecosystem",
    "name": "ENULS Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "crossfi-ecosystem",
    "name": "CrossFi Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "lamina1-ecosystem",
    "name": "Lamina1 Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  },
  {
    "id": "maxxchain-ecosystem",
    "name": "MaxxChain Ecosystem",
    "market_cap": null,
    "market_cap_change_24h": null,
    "content": "",
    "top_3_coins_id": [],
    "top_3_coins": [],
    "volume_24h": null,
    "updated_at": null
  }
]