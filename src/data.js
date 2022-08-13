import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaInstagram,
  FaCoins,
  FaHouseUser,
  FaCommentDollar,
  FaBuffer,
  FaInfoCircle,
  FaMoneyCheckAlt,
  FaBimobject,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    url: "/auth",
    text: "Join waitlist",
    icon: <FaUserFriends />,
  },
  {
    id: 4,
    url: "/learn",
    text: "Learn More",
    icon: <FaBimobject />,
  },
];

export const social = [
  {
    id: 1,
    url: "/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "/",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "/",
    icon: <FaInstagram />,
  },
];
export const aboutData = [
  {
    id: 1,
    icon: <FaCoins className="about-icons" />,
    header: "Use Crypto or Fiat",
    paragraph:
      "Own tokenized real estate assets by purchasng fractions with stablecoins or your local currency. The number of tokens you own represents the amount of ownership you have in that real estate asset.",
  },
  {
    id: 2,
    icon: <FaCoins className="about-icons" />,
    header: "Low Buy-in Price",
    paragraph:
      "Each property ownership is divided into blocks of equity, making the cost of entry cheaper.",
  },
  {
    id: 3,
    icon: <FaMoneyCheckAlt className="about-icons" />,
    header: "Buy or Sell 24/7",
    paragraph:
      "Instantly swap our security tokens, P2P exchanges will be available to retail investors, and an automatic market maker (AMM), ensuring liquidity is always available on the platform. you can sell off whenever, with none of the traditional limitations.",
  },
  {
    id: 4,
    icon: <FaHouseUser className="about-icons" />,
    header: "Class-A Properties",
    paragraph:
      "Our properties include high rise residential buildings, commercial spaces, warehouses, and skyscrapers.",
  },

  {
    id: 5,
    icon: <FaCommentDollar className="about-icons" />,
    header: "Rental Payouts",
    paragraph:
      "Earn yields as Rental income is collected and distributed to your wallet address.",
  },
  {
    id: 6,
    icon: <FaHouseUser className="about-icons" />,
    header: "Property Appreciation",
    paragraph:
      "Earn our asset backed tokens in value as property appreciates year-on-year.",
  },
  {
    id: 7,
    icon: <FaBuffer className="about-icons" />,
    header: "Decentralized Governance",
    paragraph:
      "Token holders vote on property decisions through our decentralized governance system. Decisions range from rental increment to repair requests and more. The majority, 51%, decide on what should be done & relayed to the property management for execution.",
  },
];
export const blogData = [
  {
    id: 1,
    header: "Unique Tokens",
    paragraph:
      "Ownership of properties is distributed across a finite number of representative tokens. Based on token share, owners collect revenue from rent, and vote on property decisions.",
  },
  {
    id: 2,
    header: "Property management",
    paragraph:
      " Blockplot Properties have a property management company managing the property on Token owners behalf. The property management company sources tenants, collects rent, and manages repairs, so the diverse group of Token owners do not have to.",
  },
];

export const FAQ = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "Blockplot is a dedicated team of engineers, designers, developers and business partners in the real estate space with a vision of making real estate ownership available to anyone. At blockplot, we aim to bridge the gaps between real estate and blockchain technology.",
  },
  {
    id: 2,
    question: "What is Blockplot?",
    answer:
      "Blockplot is a platform that tokenizes ownership of real estate assets. You can become a partial holder of commercial properties by owning blocks of Properties (tokens) on our platform and receive similar returns as if you owned regular real estate including but not limited to: rental income, appreciation of the asset, and a say in the management of the property.",
  },
  {
    id: 3,
    question: "How does tokenizing real estate work?",
    answer:
      "Each property is vetted for legitimacy, rental income, and operating management, before construction. Blockplot will act as the facilitator of transferring equity from the property’s owning company to a new LLC. The equities will then be split into the ‘blocks’ (tokens) on the Blockchain. These tokens will solely represent the amount of ownership you have in the LLC, Which in essence gives you ownership of the real estate asset.",
  },
  {
    id: 4,
    question: "What form of currency can I use to purchase Blockplot tokens?",
    answer:
      "You can purchase Blockplot tokens with a debit card, USDTether (USDT), BinanceUSD (BUSD), and other stable cryptocurrencies.",
  },
  {
    id: 5,
    question: "How can I cash out my block tokens?",
    answer:
      "In the future, Blockplot will utilize an Automatic Market Maker (AMM) to ensure liquidity is always available on the platform.",
  },
  {
    id: 6,
    question: "How often is rent paid out?",
    answer: "Rent is paid out monthly.",
  },
  {
    id: 7,
    question: "Who can participate?",
    answer:
      "Anyone can participate globally, Just fill out your basic information and start owning! Ownership of tokens makes you a partner in LLC.",
  },
  {
    id: 8,
    question: "What are the KYC requirements?",
    answer:
      "We ask that you provide us with your full name, a visible picture of your government-issued ID, and the ID number.",
  },
  {
    id: 9,
    question:
      "What is the maximum number of tokens I can purchase in each property?",
    answer:
      "For each property, the maximum number of tokens each investor can own is 10%. This limit is in place for Governance reasons to ensure a fair voting system.",
  },
  {
    id: 10,
    question: "Can I invest under an Entity like an LLC?",
    answer: "Not at this time, though we may support this in the future.",
  },
  {
    id: 11,
    question:
      "How does Blockplot ensure a smooth selling experience during extreme market conditions?",

    answer:
      "All the tokens on Blockplot's platform are backed by real assets, i.e the physical properties. Therefore, there would never be an insolvency issue. Furthermore, all the rental income available is already in the bank accounts of their respective properties, so rental payouts will always be solvent and liquid. However, We are using a portion of our operating cash to provide liquidity for users who may need liquidity on short notice. The tokens are then re-sold to new users on the marketplace, replenishing this liquidity pool. If sell-backs might exceed the normal liquidity pool we dedicated to token buy-backs, a queue system will be implemented. It will be operated on a first-come-first-out basis. As tokens that are purchased back from this queue are re-sold successfully on the marketplace, the replenished funds will be used to purchase more sell-backs from users further down in the queue until the queue ends, or until sell-back requests return to the normal operating baseline.",
  },
  {
    id: 12,
    question: "How can I track the performance of my property?",
    answer:
      "All owners have their dashboard, called Assets Overview, where you can see how many tokens you hold and their current principal value, which will adjust automatically each quarter starting after the token offering is complete. You will be able to see income added to your account along with records of historical transactions.",
  },
];
