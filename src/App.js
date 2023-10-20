import { Routes, Route, useNavigate } from "react-router-dom";
import ProfilView from "./views/Profil/ProfilView";
import LayoutDashboard from "./layout/LayoutDashboard";
import DaftarCabangView from "./views/DaftarCabang/DaftarCabangView";
import PenjualanView from "./views/Dashboard/Penjualan/PenjualanView";

function App() {
  return (
    <LayoutDashboard>
      <Routes>
        <Route path="/penjualan" element={<PenjualanView />} />
        <Route path="/profil" element={<ProfilView />} />
        <Route path="/daftar-cabang" element={<DaftarCabangView />} />
      </Routes>
    </LayoutDashboard>
  );
}

export default App;
