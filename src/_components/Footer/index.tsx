import React from 'react';
import Link from 'next/link';
import { links } from '@/constant';
import SocialMedia from '../SocialMedia';
import ContactDetails from '../ContactDetails';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white font-sans tracking-wide border-t border-gray-300 font-bold ">

      <div className="py-14 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo and Description */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <Logo/>
            <p className="text-[#0a4275] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-[#0a4275]">Navigation</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={`/${link.href}`} className="text-[#0a4275] hover:text-[#08355e] text-sm" passHref>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-[#0a4275]">Follow Us</h4>
            <SocialMedia />
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-8 text-[#0a4275]">Contact Us</h4>
            <ContactDetails sib='text-[#0a4275] text-sm' fatehr='space-y-4' />
          </div>
        </div>
      </div>

      {/* Horizontal Line Divider */}

      {/* Footer Bottom */}
      <div className="text-center py-5 bg-[#08355e]">
        <p className="text-gray-300 text-sm">© ReadymadeUI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
