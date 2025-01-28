import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";

export const Footer = () => (
  <div className="space-y-4 p-8 text-white">
    <h3>risimn7@gmail.com</h3>
    <div className="flex gap-4">
      <FaSquareGithub />
      <FaSquareXTwitter />
      <FaLinkedin />
      <FaSquareUpwork />
    </div>
  </div>
);
