import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareUpwork,
} from "react-icons/fa6";

export const Footer = () => (
  <div className="space-y-4 p-8 text-white">
    <h3>risimn7@gmail.com</h3>
    <div className="flex gap-4">
      <a href="https://github.com/risicoding/">
        <FaSquareGithub />
      </a>
      <a href="https://www.x.com/risi_ksh">
        <FaSquareXTwitter />
      </a>

      <a href="https://www.upwork.com/freelancers/~0186ba60fcac542940">
        <FaSquareUpwork />
      </a>
    </div>
  </div>
);
