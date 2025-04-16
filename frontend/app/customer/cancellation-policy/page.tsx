import Head from "next/head";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen text-gray-900 p-6">
      <Head>
        <title>Захиалга цуцлах бодлого </title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8">
        <h1 className="text-4xl text-red-600 font-extrabold mb-8 text-center">
          Захиалга цуцлах бодлого
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Бид заримдаа төлөвлөгөө өөрчлөгдөж болохыг ойлгодог. Тиймээс бид
          захиалгаа цуцлахтай холбоотой дараах бодлогыг баримталдаг.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              1. Цуцлах хугацаа
            </h2>
            <p className="text-gray-700">
              Захиалгаа өгснөөс хойш 24 цагийн дотор цуцлах боломжтой.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              2. Мөнгө буцаалтын шимтгэл
            </h2>
            <p className="text-gray-700">
              Хэрэв төлбөртэй захиалгыг цуцалсны дараа мөнгийг буцаах бол 2%
              хэмжээтэй төлбөрийн гарцын шимтгэл нийт дүнгээс хасагдана гэдгийг
              анхаарна уу.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              3. Манай амлалт
            </h2>
            <p className="text-gray-700">
              Бид таны онлайн худалдан авалтын туршлагыг аль болох энгийн,
              асуудалгүй, таатай байлгахыг зорьдог.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              4. Харилцагчийн үйлчилгээтэй холбогдох
            </h2>
            <p className="text-gray-700">
              Хэрэв захиалгаа цуцлахтай холбоотой тусламж хэрэгтэй бол дараах
              байдлаар бидэнтэй холбогдоно уу:
            </p>
            <ul className="list-inside list-disc text-gray-700">
              <li>
                Имэйл: <span className="text-blue-500">orgio111@gmail.com</span>
              </li>
              <li>
                Утас: <span className="text-blue-500">+976 80007155</span>{" "}
                (Даваа-Баасан, 10:00 - 18:00)
              </li>
            </ul>
            <p className="text-gray-700">
              Манай найрсаг, туршлагатай баг танд захиалгаа цуцлахад туслахад
              бэлэн байна.
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </footer>
      </div>
    </div>
  );
}
