import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaInstagram,
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
    id: 3,
    url: "/properties",
    text: "properties",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/learn",
    text: "learn",
  },
  {
    id: 5,
    url: "/",
    text: "Login|SignUp",
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
