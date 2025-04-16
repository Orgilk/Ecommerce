"use client";

import Link from "next/link";

export default function CustomOrderPolicy() {
  return (
    <div className="bg-red-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-red-800 text-center mb-8">
          Захиалах бүтээгдэхүүн
        </h1>

        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          Бид таны өгсөн хэмжээсийн дагуу хувцас захиалгаар хийж өгдөг. Энэ нь
          нэмэлтээр 500 рупигийн зардалтай. Захиалгат бараанд бэлэн мөнгөөр
          хүргэлт хийх боломжгүй.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Захиалгат бүтээгдэхүүний төлбөрийн нөхцөл
            </h2>
            <p className="text-gray-700">
              3XL хэмжээтэй бүтээгдэхүүний хувьд доод тал нь 25%-ийн урьдчилгаа
              төлбөр шаардлагатай. Харин нэмэлт хэмжээ буюу 4XL, 5XL, 6XL-ийн
              хувьд бүрэн төлбөрийг урьдчилан төлнө. 3XL болон түүнээс дээш
              хэмжээтэй эсвэл захиалгаар хийсэн (Made To Order) бүтээгдэхүүнд
              буцаалт, мөнгө нөхөн төлөх, солих нөхцөл үйлчлэхгүй.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Буцаалт / Солих нөхцөл
            </h2>
            <p className="text-gray-700">
              Захиалгат бүтээгдэхүүн буцаах, солих боломжгүй. Захиалга өгөхөөс
              өмнө хэмжээс болон загвараа сайтар нягтална уу.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Захиалгаар хийлгэхийн тулд холбогдох
            </h2>
            <p className="text-gray-700">
              Хэрвээ та хувцсаа өөрийн хэмжээгээр захиалгаар хийлгэхийг хүсвэл
              дараах хаягуудаар бидэнтэй холбогдоно уу:{" "}
              <a className="text-red-600 hover:text-red-700 underline">
                pharmacy@gmail.com
              </a>{" "}
              эсвэл WhatsApp дугаараар{" "}
              <a
                href="tel:+918078619508"
                className="text-red-600 hover:text-red-700 underline"
              >
                +976 8078619508
              </a>{" "}
              /{" "}
              <a
                href="tel:+91701484290"
                className="text-red-600 hover:text-red-700 underline"
              >
                +976 701484290
              </a>{" "}
              мөн Instagram хаягаар{" "}
              <a
                className="text-red-600 hover:text-red-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pharmacy
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-red-700 mb-4">
            Тусламжийн холбоосууд
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                className="text-red-600 hover:text-red-800 underline"
                href="/shipping-policy"
              >
                Хүргэлтийн нөхцөл
              </Link>
            </li>
            <li>
              <Link
                className="text-red-600 hover:text-red-800 underline"
                href="/track-your-order"
              >
                Захиалгын явцыг хянах
              </Link>
            </li>
            <li>
              <Link
                className="text-red-600 hover:text-red-800 underline"
                href="/faq"
              >
                Түгээмэл асуултууд
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-red-100 py-6 mt-12">
        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()}Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </footer>
    </div>
  );
}
