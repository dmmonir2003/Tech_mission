import {
  MapPin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp, FaWhatsappSquare, FaYoutube } from "react-icons/fa";

export default function TopHeader() {
  return (
    // <div className="w-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white overflow-hidden">
    //   <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
    //     {/* Contact Info - Hidden on mobile */}
    //     <div className="hidden md:flex items-center gap-x-8 text-sm">
    //       <div className="flex items-center gap-2">
    //         <MapPin className="h-4 w-4" />
    //         <span>Dhaka, Bangladesh</span>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <Mail className="h-4 w-4" />
    //         <span>office.techmission@gmail.com</span>
    //       </div>
    //     </div>

    //     {/* Social Icons */}
    //     <div className="flex items-center gap-4 ml-auto">
    //       <Link
    //         href="https://www.facebook.com/techmissionglobe"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="Facebook"
    //       >
    //         <Facebook className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
    //       </Link>
    //       <Link
    //         href="https://www.linkedin.com/company/techmissionglobe/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="LinkedIn"
    //       >
    //         <Linkedin className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
    //       </Link>

    //       <Link
    //         href="https://wa.me/8801838801853?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="WhatsApp"
    //       >
    //         <FaWhatsapp className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
    //       </Link>
    //       <Link
    //         href="https://x.com/TechMissio93153?t=cQtGopkqyutrhRAQAyKS9w&s=08"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="Twitter"
    //       >
    //         <Twitter className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
    //       </Link>
    //       <Link
    //         href="https://www.youtube.com/@techmissionglove"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         aria-label="YouTube"
    //       >
    //         <FaYoutube className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500 text-white overflow-hidden">
      <div className="container mx-auto flex h-10 items-center justify-between px-4 md:px-6">
        {/* Contact Info - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-x-8 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>office.techmission@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 ml-auto">
          <Link
            href="https://www.facebook.com/techmissionglobe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/techmissionglobe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link>

          <Link
            href="https://wa.me/8801838801853?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link>
          {/* <Link
            href="https://x.com/TechMissio93153?t=cQtGopkqyutrhRAQAyKS9w&s=08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link> */}
          {/* <Link
            href="https://www.youtube.com/@techmissionglove"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="h-5 w-5 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
