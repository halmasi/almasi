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
      title: "Instagram",
      link: "https://instagram.com/h2almasi",
      icon: FaSquareInstagram,
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
      title: "YouTube",
      link: "https://instagram.com/h2almasi",
      icon: FaYoutube,
    },
    {
      id: 5,
      title: "SoundCloud",
      link: "https://instagram.com/h2almasi",
      icon: FaSoundcloud,
    },
    {
      id: 6,
      title: "Spotify",
      link: "https://instagram.com/h2almasi",
      icon: FaSpotify,
    },
    {
      id: 7,
      title: "Telegram",
      link: "https://instagram.com/h2almasi",
      icon: FaTelegram,
    },
    {
      id: 8,
      title: "X",
      link: "https://instagram.com/h2almasi",
      icon: FaSquareXTwitter,
    },
  ];

  return (
    <ul className="flex flex-col w-full justify-between">
      <li className="text-gray-200 text-center p-5">
        <strong>Social Medias</strong>
      </li>
      {socials.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="flex flex-col items-center w-full px-7 md:px-10"
        >
          <li className="flex flex-row items-center justify-between text-gray-200 transition-colors duration-150 hover:text-gray-200/50 text-lx w-full border-b border-gray-100/20">
            <item.icon className="m-5 text-2xl" />
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
