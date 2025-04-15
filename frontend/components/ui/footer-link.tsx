"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { Sparkles } from "lucide-react";

export function RedesignedLinkPreviewDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.3, 1],
      rotate: [0, 90, 180, 360],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const gradientText =
    "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text";

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-t from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="relative mb-10">
        <motion.h1
          variants={itemVariants}
          className={`text-4xl md:text-6xl font-bold text-center mb-6 ${gradientText}`}
        >
          PHARMACY
          <motion.span
            variants={sparkleVariants}
            animate="animate"
            className="inline-block ml-3"
          >
            <Sparkles className="w-9 h-9 text-yellow-500" />
          </motion.span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300"
        >
          Эмнэлэг,эмийн сангуудад чанартай бараанууд түгээнэ
        </motion.p>
      </motion.div>

      {/* About Cards */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl"
      >
        {[
          {
            img: "/corosal/experience.jpg",
            title: "5+ жилийн туршлага",
            text: "Бид 5 гаруй жилийн турш эмнэлэгийн салбарт үйл ажиллагаа явуулж байна.",
          },
          {
            img: "/corosal/pharma.jpg",
            title: "Мэргэжлийн эмч,эм зүйч",
            text: "Манай баг нь мэргэжлийн, туршлагатай эмч,эм зүйч нараас бүрдэнэ.",
          },
          {
            img: "/corosal/well.webp",
            title: "Чанартай үйлчилгээ",
            text: "Бид хэрэглэгч бүрт хамгийн чанартай, найдвартай үйлчилгээг үзүүлэхийг эрхэм зорилгоо болгодог.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-5xl text-center"
      >
        {[
          { num: "5000+", desc: "Сэтгэл ханамжтай хэрэглэгчид" },
          { num: "5", desc: "Үйлчилгээний чиглэл" },
          { num: "4+", desc: "Мэргэжлийн эм зүйч" },
          { num: "10-18/7", desc: "Үйлчилгээний цаг" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-extrabold text-blue-500 dark:text-blue-300">
              {stat.num}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={itemVariants}
        className="mt-16 w-full max-w-6xl text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-indigo-600 dark:text-indigo-300">
          Манай удирдлага
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Бат",
              role: "Гүйцэтгэх захирал",
              img: "/corosal/user1.png",
            },
            {
              name: "Болд",
              role: "Захирал",
              img: "/corosal/user2.png",
            },
            {
              name: "Цэцэг",
              role: "Ахлах эм зүйч",
              img: "/corosal/user3.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Address Section */}
      <motion.div
        variants={itemVariants}
        className="relative p-8 rounded-xl bg-white dark:bg-gray-800 shadow-2xl transition-shadow duration-300 mt-20 w-full max-w-4xl mx-auto text-center"
      >
        <motion.h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
          Манай хаяг
        </motion.h3>
        <motion.p className="text-gray-700 dark:text-gray-200 mb-6">
          Улаанбаатар хот, Баянгүл дүүрэг, xx-р хороо, xx-р гудамж, xx-р байр
          101 тоот
        </motion.p>
        <motion.img
          src="/corosal/building.jpeg" // Make sure this image exists in your public/assets folder
          className="w-full h-64 object-cover rounded-lg shadow-md"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Final Message */}
      <motion.div
        variants={itemVariants}
        className="text-center space-y-8 mt-14"
      >
        <motion.p
          className="text-2xl font-semibold text-green-600 dark:text-green-400"
          whileHover={{ scale: 1.07 }}
        >
          Таны эрүүл мэндийн төлөө.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-4"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              rotateZ: [0, 15, -15, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl"
          >
            ❤️
          </motion.span>
          <span className="text-red-500 dark:text-red-400 font-medium">
            Таны дэмжлэг бидэнд урам дэм өгдөг!
          </span>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer variants={itemVariants} className="mt-16 text-center">
        <motion.p
          className="italic text-gray-600 dark:text-gray-400"
          whileHover={{ color: "#6D28D9", scale: 1.1 }}
        ></motion.p>
      </motion.footer>
    </motion.div>
  );
}

export default RedesignedLinkPreviewDemo;
