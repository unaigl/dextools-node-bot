

const alerts = [
  {
    chain: "ether",
    coingecko: "https://www.coingecko.com/es/monedas/bitcoin",
    symbol: "BTC", // WBTC
    pool: "0xcbcdf9626bc03e24f779434178a73a0b4bad62ed",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC
    buyPrice_USD: "",
    highTarget: 45000,
    lowTarget: 35000,
    emailSend: false
  },
  {
    chain: "arbitrum",
    coingecko: "https://www.coingecko.com/es/monedas/spartadex",
    symbol: "SPARTA",
    pool: "0x4993e9d7c2c76760ac1cbd1674d44152a59daaed",
    address: "0x11f98c7e42a367dab4f200d2fdc460fb445ce9a8",
    buyPrice_USD: "",
    highTarget: 1,
    lowTarget: 0,
  },
  {
    chain: "bsc",
    coingecko: "https://www.coingecko.com/es/monedas/woonkly-power",
    symbol: "WOOP",
    pool: "0x2ae94a6c768d59f5ddc25bd7f12c7cbe1d51dc04",
    address: "0x8b303d5bbfbbf46f1a4d9741e491e06986894e18",
    buyPrice_USD: "",
    highTarget: 0.013,
    lowTarget: 0,
  },
  {
    chain: "bsc",
    coingecko: "https://www.coingecko.com/es/monedas/kubic",
    symbol: "KUBIC",
    pool: "0xe46fe35b0b670833e10a2a9a02c924d85e2aa942",
    address: "0x92dd5b17bdacbbe3868a09be5a3df93032c29ddb",
    buyPrice_USD: "",
    highTarget: 0.0003,
    lowTarget: 0,
  },
  {
    chain: "bsc",
    coingecko: "https://www.coingecko.com/es/monedas/pig-finance",
    symbol: "PIG",
    pool: "0x51dcaf423fe39f620a13379cd26821cf8d433308",
    address: "0x8850d2c68c632e3b258e612abaa8fada7e6958e5",
    buyPrice_USD: "",
    highTarget: 0.00000003,
    lowTarget: 0,
  },
  {
    chain: "polygon",
    coingecko: "https://www.coingecko.com/es/monedas/endblock",
    symbol: "END",
    pool: "0xe3185fd50e850439cdf1082b3c00bdc043d8c5d3",
    address: "0x0c087f8d6a1f14f71bb7cc7e1b061ca297af7555",
    buyPrice_USD: "",
    highTarget: 1.1,
    lowTarget: 0,
  },
  {
    chain: "polygon",
    coingecko: "https://www.coingecko.com/es/monedas/medieval-empires",
    symbol: "MEE",
    pool: "0x7e00fdce3ef6d3de0650f98dff5d267cd51ca577",
    address: "0xeb7eab87837f4dad1bb80856db9e4506fc441f3d",
    buyPrice_USD: "",
    highTarget: 0.01,
    lowTarget: 0,
  },
  {
    chain: "polygon",
    coingecko: "https://www.coingecko.com/es/monedas/synergy-land-token",
    symbol: "SNG",
    pool: "0x35f8b497e201a2c7ae641d386162b10f772b65db",
    address: "0xad9f61563b104281b14322fec8b42eb67711bf68",
    buyPrice_USD: "",
    highTarget: 0.11,
    lowTarget: 0,
  },
  {
    chain: "polygon",
    coingecko: "https://www.coingecko.com/es/monedas/fabwelt",
    symbol: "WELT",
    pool: "0x55e49f32fbba12aa360eec55200dafd1ac47aaed",
    address: "0x23e8b6a3f6891254988b84da3738d2bfe5e703b9",
    buyPrice_USD: "",
    highTarget: 0.02,
    lowTarget: 0,
  },
  {
    chain: "solana",
    coingecko: "https://www.coingecko.com/es/monedas/elumia",
    symbol: "ELU",
    pool: "HFDuu77A4ChRQW3Q91GqZpNH3rtucd9hDUqCTXGGUTrN",
    address: "4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6",
    buyPrice_USD: "",
    highTarget: 0.013,
    lowTarget: 0,
  },
  {
    chain: "ether",
    coingecko: "https://www.coingecko.com/es/monedas/wall-street-memes",
    symbol: "WSM",
    pool: "0xacfc50ec5fe0fd039e83380b8ab343b77a49704f",
    address: "0xb62e45c3df611dce236a6ddc7a493d79f9dfadef",
    buyPrice_USD: "",
    highTarget: 0.1,
    lowTarget: 0,
  },
  {
    chain: "ether",
    coingecko: "https://www.coingecko.com/es/monedas/pepe",
    symbol: "PEPE",
    pool: "0xa43fe16908251ee70ef74718545e4fe6c5ccec9f",
    address: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    buyPrice_USD: "",
    highTarget: 0.000005,
    lowTarget: 0,
    pocentajeVolumen: "1,5 %",
  }, {
    chain: "ether",
    coingecko: "https://www.coingecko.com/es/monedas/grok-2",
    symbol: "$GROK",
    pool: "0x69c66beafb06674db41b22cfc50c34a93b8d82a2",
    address: "0x8390a1da07e376ef7add4be859ba74fb83aa02d5",
    buyPrice_USD: "",
    highTarget: 0.04,
    lowTarget: 0,
  }, {
    chain: "bsc",
    coingecko: "https://www.coingecko.com/es/monedas/games-for-a-living",
    symbol: "GFAL",
    pool: "0xb3db5f4f4dbdb6d75aa7c2dce23ecd2d1b557a54",
    address: "0x47c454ca6be2f6def6f32b638c80f91c9c3c5949",
    buyPrice_USD: "",
    highTarget: 0.2,
    lowTarget: 0,
  },
];

module.exports = { alerts };
