"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Youtube, Linkedin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const categories = [
  { title: "Тариа", href: "/bestsellers?category=Тариа" },
  { title: "Эм", href: "/bestsellers?category=Эм" },
  {
    title: "Нэг удаагийн хэрэгсэл",
    href: "/bestsellers?category=Нэг%20удаагийн%20хэрэгсэл",
  },
  {
    title: "Захиалгат хэрэгсэл",
    href: "/bestsellers?category=Захиалгат%20хэрэгсэл",
  },
];

const basePath = "/customer";
const information = [
  { title: "Бидний тухай", href: "/aboutus" },
  { title: "Aдмин ", href: "/admin" },
  { title: "Солих,буцаах", href: `${basePath}/returnpolicy` },
  { title: "Захиалгаа удирдах", href: `/trackyourorder` },
  { title: "Нууцлалын бодлого", href: `${basePath}/privacypolicy` },
  { title: "Дүрэм,журам", href: `${basePath}/terms-and-conditions` },
  {
    title: "Бүтээгдэхүүнийг тохируулах",
    href: `${basePath}/customize-products`,
  },
  { title: "Цуцлах бодлого", href: `${basePath}/cancellation-policy` },
  { title: "Хүргэлтийн бодлого", href: `${basePath}/shipping-policy` },
];

const socialLinks = [
  { icon: Github, href: "https://github.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://www.youtube.com" },
  { icon: Linkedin, href: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-10 mb-10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/footer/f3.jpg"
          alt="Traditional pattern background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#f8f3ed]/80" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-52">
            {/* Categories Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Төрлүүд
              </h3>
              <ul className="space-y-2">
                {categories.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Мэдээлэл
              </h3>
              <ul className="space-y-2">
                {information.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Бидэнтэй холбогдох
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-800">
                  Email{" "}
                  <a
                    href="mailto:contact@rajwadiposhak.com"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    contact@rajwadiposhak.com
                  </a>
                </p>
                <p className="text-gray-800">
                  Call{" "}
                  <a
                    href="tel:+918849251028"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    +976 99999999
                  </a>
                  <br />
                  (10:00 AM to 6:00 PM, Mon-Sat)
                </p>
                <div className="flex space-x-5 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-orange-200/50 text-center text-gray-800"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
