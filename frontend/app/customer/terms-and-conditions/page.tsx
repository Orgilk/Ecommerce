import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen text-gray-900 p-6">
      <Head>
        <title>Үйлчилгээний Нөхцөл - Jaipuriadaah</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8 border-gray-200">
        <h1 className="text-4xl text-red-600 font-extrabold mb-8 text-center">
          Үйлчилгээний Нөхцөл
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Та Jaipuriadaah.com вэбсайтыг ("үйлчилгээ") ашиглахаасаа өмнө эдгээр
          үйлчилгээний нөхцөл ("нөхцөл", "үйлчилгээний нөхцөл")-тэй сайтар
          танилцана уу.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              1. Бүтээгдэхүүний Дүрслэл
            </h2>
            <p className="text-gray-700">
              Бид бүтээгдэхүүний өнгийг аль болох үнэн зөв харуулахыг хичээсэн.
              Гэвч дэлгэцийн ялгаанаас шалтгаалан өнгө яг ижил байж чадахгүйг
              анхаарна уу.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              2. Хэрэглэгчийн Нас Батламж
            </h2>
            <p className="text-gray-700">
              Хэрэглэгч нь 18 нас хүрсэн эсвэл эцэг эх, хууль ёсны асран
              хамгаалагчийн зөвшөөрөлтэй гэдгээ баталж байна.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              3. Захиалга Цуцлалт
            </h2>
            <p className="text-gray-700">
              Jaipuriadaah нь үнэ буруу эсвэл бусад шалтгаанаар захиалгыг цуцлах
              эрхтэй. Ийм тохиолдолд төлбөрийг буцаан олгож, хэрэглэгчид
              мэдэгдэнэ.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              4. Нууцлалын Бодлого
            </h2>
            <p className="text-gray-700">
              Хэрэглэгчийн мэдээллийг хэрхэн хадгалж, ашигладаг талаар{" "}
              <a
                href="/privacy-policy"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                Нууцлалын Бодлого
              </a>{" "}
              хэсгээс дэлгэрэнгүй уншина уу.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              5. Зохиогчийн Эрх
            </h2>
            <p className="text-gray-700">
              Энэхүү вэбсайтад нийтлэгдсэн бүх агуулга (дижитал таталт, зураг,
              текст, график, лого гэх мэт) нь Jaipuriadaah-ийн өмч бөгөөд олон
              улсын зохиогчийн эрхийн хуулиар хамгаалагдсан.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              6. Харилцаа Холбоо
            </h2>
            <p className="text-gray-700">
              Энэ вэбсайтыг ашигласнаар та биднээс цахим шуудан болон вэбсайтаар
              дамжуулан мэдээлэл хүлээн авахыг зөвшөөрч байна.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              7. Хуулийн Зохицуулалт
            </h2>
            <p className="text-gray-700">
              Энэхүү вэбсайтад зочилсноор та энэхүү нөхцөлийг Энэтхэг улсын
              хуулиар зохицуулагдахыг зөвшөөрч байна.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              8. Маргаан
            </h2>
            <p className="text-gray-700">
              Энэ вэбсайтад холбогдох аливаа маргааныг Энэтхэгийн муж эсвэл
              холбооны шүүхээр шийдвэрлэнэ.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              9. Хэрэглэгчийн Агуулга
            </h2>
            <p className="text-gray-700">
              Зочид ёс бус, хууль бус, гүтгэлгийн шинжтэй, хортой агуулга
              нийтлэхгүй байх үүрэгтэй. Бид ийм агуулгыг устгах эрхтэй.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-500 border-red-500 pb-2">
              10. Хэрэглэгчийн Бүртгэл
            </h2>
            <p className="text-gray-700">
              Хэрэв та бүртгэл үүсгэсэн бол өөрийн бүртгэлийн нууцлалыг
              хамгаалах хариуцлагатай. Шаардлагатай тохиолдолд бид бүртгэлийг
              цуцлах эрхтэй.
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
