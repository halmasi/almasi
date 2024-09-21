import Link from "next/link";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaYoutube,
  FaSoundcloud,
  FaSpotify,
  FaSquareXTwitter,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";

export default function SocialLinks() {
  const socials = [
    {
      id: 1,
      title: "YouTube",
      link: "https://instagram.com/h2almasi",
      icon: FaYoutube,
    },
    {
      id: 2,
      title: "LinkedIn",
      link: "https://instagram.com/h2almasi",
      icon: FaLinkedin,
    },
    {
      id: 3,
      title: "GitHub",
      link: "https://instagram.com/h2almasi",
      icon: FaGithub,
    },
    {
      id: 4,
      title: "Instagram",
      link: "https://instagram.com/h2almasi",
      icon: FaSquareInstagram,
    },
    // {
    //   id: 5,
    //   title: "SoundCloud",
    //   link: "https://instagram.com/h2almasi",
    //   icon: FaSoundcloud,
    // },
    // {
    //   id: 6,
    //   title: "Spotify",
    //   link: "https://instagram.com/h2almasi",
    //   icon: FaSpotify,
    // },
    {
      id: 7,
      title: "Telegram",
      link: "https://instagram.com/h2almasi",
      icon: FaTelegram,
    },
    // {
    //   id: 8,
    //   title: "X",
    //   link: "https://instagram.com/h2almasi",
    //   icon: FaSquareXTwitter,
    // },
  ];

  return (
    <ul className="grid grid-flow-col-dense">
      {socials.map((item) => (
        <Link title={item.title} key={item.id} href={item.link}>
          <li className=" text-gray-200 transition-colors duration-150 hover:text-gray-200/50 text-lg">
            <item.icon className="m-1 lg:m-5 text-2xl" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
