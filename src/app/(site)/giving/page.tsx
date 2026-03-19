import Image from "next/image";

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900">
          Tithes & Offerings
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Thank you for your generosity and support of The Well Bible Church.
        </p>

      </div>

      {/* CONTENT */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            How to Give
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700 text-lg">
            <li>1. Click “Giving Page” below</li>
            <li>2. Select “Ofrenda The Well”</li>
            <li>3. Enter your amount</li>
            <li>4. Complete your donation</li>
          </ul>

          <a
            href="https://familiasemilla.churchcenter.com/giving"
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Open Giving Page
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">

            <div className="text-sm text-gray-500 mb-4 font-semibold">
              Scan to Give
            </div>

            <div className="relative w-[220px] h-[220px] mx-auto">

              <Image
                src="/qr-tithes.png"
                alt="QR Code Giving"
                fill
                className="object-contain"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}