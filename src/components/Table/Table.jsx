export default function Table() {
  return (
    <table className="table-auto w-full bg-white text-body-3 text-bw ">
      <thead>
        <tr className="bg-bw15">
          <th className="table-cell">#</th>
          <th className="table-cell">Nama Promo</th>
          <th className="table-cell">Besaran Promo</th>
          <th className="table-cell">Periode</th>
          <th className="table-cell">Kode Promo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table-cell">1</td>
          <td className="table-cell">Promo all treatment</td>
          <td className="table-cell">15%</td>
          <td className="table-cell">12/5/2022 - 30/5/2022</td>
          <td className="table-cell">TREATMENT</td>
        </tr>
        <tr>
          <td className="table-cell">2</td>
          <td className="table-cell">Promo Skincare</td>
          <td className="table-cell">25%</td>
          <td className="table-cell">30/5/2022 - 30/6/2022</td>
          <td className="table-cell">SKINCARE</td>
        </tr>
        <tr>
          <td className="table-cell">3</td>
          <td className="table-cell">Buy 1 Get 2</td>
          <td className="table-cell">Gratis Produk</td>
          <td className="table-cell">21/6/2022 - 05/7/2022</td>
          <td className="table-cell">FREE</td>
        </tr>
        <tr>
          <td className="table-cell">4</td>
          <td className="table-cell">Promo Toner</td>
          <td className="table-cell">45%</td>
          <td className="table-cell">01/7/2022 - 30/8/2022</td>
          <td className="table-cell">TONER</td>
        </tr>
      </tbody>
    </table>
  );
}
