import { useBookStats } from "../../hooks/useBookStats";

// Halaman statistik buku
const Stats = () => {
  const { total, owned, reading, wishlist } = useBookStats(); // fetch data dri book hook

  return (
    <div className="stats-page">
      <h1>Statistik Buku</h1>

      <ul className="stats-list">
        <li> Total Buku: {total}</li>
        <li> Buku yang dimiliki: {owned}</li>
        <li> Buku yang lagi Dibaca: {reading}</li>
        <li> Your wishlist: {wishlist}</li>
      </ul>
    </div>
  );
};

export default Stats;
