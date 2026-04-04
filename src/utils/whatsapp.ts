const WA_NUMBER = "6281234567890"; // Ganti dengan nomor WA asli

export function buildWAUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWA(message: string): void {
  window.open(buildWAUrl(message), "_blank", "noopener,noreferrer");
}

export const WA_MESSAGES = {
  general: "Halo RentalKita! Saya ingin menanyakan informasi sewa mobil.",
  booking: (car?: string, startDate?: string, endDate?: string, location?: string) => {
    let msg = "Halo RentalKita! Saya ingin memesan mobil.\n\n";
    if (car) msg += `🚗 Kendaraan: ${car}\n`;
    if (location) msg += `📍 Lokasi: ${location}\n`;
    if (startDate) msg += `📅 Tanggal Mulai: ${startDate}\n`;
    if (endDate) msg += `📅 Tanggal Selesai: ${endDate}\n`;
    msg += "\nMohon informasikan ketersediaan dan harganya. Terima kasih!";
    return msg;
  },
  fleet: (carName: string) =>
    `Halo RentalKita! Saya tertarik untuk menyewa *${carName}*. Bisa bantu saya untuk booking? 🙏`,
  promo: () =>
    "Halo RentalKita! Saya ingin menggunakan promo *WEEKEND30*. Bisakah Anda bantu saya untuk melakukan booking? 🎉",
  airport: () =>
    "Halo RentalKita! Saya membutuhkan layanan *Antar-Jemput Bandara*. Mohon informasikan ketersediaan dan harganya. ✈️",
  corporate: () =>
    "Halo RentalKita! Perusahaan kami tertarik untuk menggunakan layanan *Sewa Corporate*. Bisa minta penawaran terbaik? 🏢",
};
