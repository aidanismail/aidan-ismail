import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f0e7db] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* Angka 404 Raksasa */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-8xl font-black text-stone-600 mb-4 tracking-tighter"
        >
          404
        </motion.h1>

        {/* Judul & Deskripsi */}
        <h2 className="text-2xl font-bold text-stone-600  mb-4">
          Halaman tidak ditemukan
        </h2>

        <p className="text-stone-500 dark:text-stone-400 mb-10 max-w-sm mx-auto leading-relaxed text-sm">
          Sepertinya kamu tersesat. Halaman yang kamu cari mungkin sudah
          dipindahkan atau tidak pernah ada.
        </p>

        {/* Tombol Kembali dengan warna aksen ungu */}

        <Link
          to="/"
          className="inline-flex items-center justify-center text-sky-700 gap-3 w-fit px-4 py-2 rounded-lg hover:bg-sky-100  font-bold transition-colors"
        >
          <span>Kembali</span>
        </Link>
      </motion.div>
    </main>
  );
}

export default NotFound;
