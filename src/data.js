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
    icon: <FaUserFriends />,
  },
  {
    id: 5,
    url: "/auth",
    text: "Join waitlist",
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
    header: "Cost of Entry",
    paragraph:
      "Get the chance to co-own fractions of real estate properties by investing a minimum of 100USDT.",
  },
  {
    id: 2,
    icon: <FaHouseUser className="about-icons" />,
    header: "Property Appreciation",
    paragraph:
      "Earn our asset backed tokens in value as property appreciates year-on-year.",
  },
  {
    id: 3,
    icon: <FaCommentDollar className="about-icons" />,
    header: "Rental Income",
    paragraph: "Earn rental income and withdraw/sell off whenever you want to.",
  },
  {
    id: 4,
    icon: <FaBuffer className="about-icons" />,
    header: "Decentralized Governance",
    paragraph:
      "Token holders vote on property decisions through our governance system. Decisions range from rental increment to repair requests and more. The majority, 51%, decide on what should be done & relayed to the property management for execution.",
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
