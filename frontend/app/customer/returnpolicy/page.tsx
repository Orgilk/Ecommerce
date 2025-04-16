"use client";

import Link from "next/link";

export default function ReturnExchangePolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-orange-800 text-center mb-8">
          Буцаалт / Солилтын Бодлого
        </h1>

        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          Бид таны онлайн худалдан авалтын туршлагыг таатай, хялбар болгохын
          төлөө ажилладаг! Худалдан авалт хийхийн өмнө доорх нөхцөл, болзлыг
          анхааралтай уншина уу. Та худалдан авалт хийснээр эдгээр нөхцөлийг
          хүлээн зөвшөөрсөн гэж үзнэ.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Ерөнхий Буцаалтын Бодлого
            </h2>
            <p className="text-gray-700">
              Барааг хүлээн авснаас хойш 7 хоногийн дотор буцаах боломжтой.
              Бараа гэмтэлтэй эсвэл буруу размертэй ирсэн тохиолдолд мөнгийг
              буцаана. Бусад тохиолдолд 90 хоногийн хугацаатай зээлийн баримт
              (credit note) олгоно.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Буцаах Үйл Явц
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Хүргэлт хийгдсэнээс хойш 7 хоногийн дотор бидэнтэй холбогдоно
                уу:{" "}
                <a
                  href="tel:+919314966969"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  (+976) 8849251028
                </a>{" "}
                эсвэл{" "}
                <a className="text-orange-600 hover:text-orange-700 underline">
                  pharmacy@gmail.com
                </a>
              </li>
              <li>
                Захиалгын дугаар, хүргэлтийн дугаар, шалтгааныг мэдээлнэ үү.
              </li>
              <li>
                Барааг манай хаяг руу илгээнэ эсвэл ₮200 хүргэлтийн хураамжтай
                буцаан авах хүсэлт гаргаж болно.
              </li>
              <li>Бараа илгээж буй бичлэг хийхийг зөвлөж байна.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Буцаалтын Мөнгөний Бодлого
            </h2>
            <p className="text-gray-700">
              Зөвшөөрөгдсөн буцаалтын мөнгийг 7–10 ажлын өдрийн дотор шилжүүлнэ.
              Бусад тохиолдолд 90 хоногийн хугацаатай зээлийн баримт өгнө.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Солилтын Бодлого
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Солилт зөвхөн размер таарахгүй тохиолдолд, бараа хүлээн авснаас
                хойш 15 хоногийн дотор хийгдэнэ.
              </li>
              <li>Хүссэн размер байхгүй бол зээлийн баримт олгоно.</li>
              <li>Нэг захиалга тутамд нэг удаа солих боломжтой.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Захиалга Цуцлах Бодлого
            </h2>
            <p className="text-gray-700">
              Захиалгыг зөвхөн 24 цагийн дотор цуцлах боломжтой. Бидэнтэй холбоо
              барина уу:{" "}
              <a
                href="tel:+918849251028"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                (+976) 8849251028
              </a>{" "}
              эсвэл{" "}
              <a
                href="mailto:jayvegad10@gmail.com"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                pharmacy0@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              Хүргэлтийн Хаяг
            </h2>
            <address className="not-italic text-gray-700">
              Улаанбаатар хот, Баянгүл дүүрэг,
              <br />
              xx-р хороо, xx-р гудамж,
              <br />
              xx-р байр 101 тоот
              <br />
              Шуудангийн код: 302006
              <br />
              Утас: (+976) 8849251028 / 9016482643 / 9106709922
              <br />
              Имэйл:{" "}
              <a className="underline text-red-500">pharmacy0@gmail.com</a>
            </address>
          </div>
        </section>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-orange-700 mb-4">
            Шууд Холбогдох Холбоосууд
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                className="text-orange-600 hover:text-orange-800 underline"
                href="/shipping-policy"
              >
                Хүргэлтийн Бодлого
              </Link>
            </li>
            <li>
              <Link
                className="text-orange-600 hover:text-orange-800 underline"
                href="/track-your-order"
              >
                Захиалгаа Хянах
              </Link>
            </li>
            <li>
              <Link
                className="text-orange-600 hover:text-orange-800 underline"
                href="/faq"
              >
                Түгээмэл Асуултууд
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </footer>
    </div>
  );
}
