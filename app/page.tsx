"use client";



import Image from "next/image";
import { QR } from "./QR";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-500">
      <h1 className="text-xl font-semibold mb-4 text-white">Scan the QR code</h1>

      <div className="w-full max-w-xs border-4 border-white rounded-xl shadow-xl p-2 bg-white">
        <Image
          src="/rams-qr.png"
          alt="QR Code"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      <a href={QR.scan} target="_blank" rel="noopener noreferrer">
        <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Get PDF
        </button>
      </a>
    </div>
  );
}
