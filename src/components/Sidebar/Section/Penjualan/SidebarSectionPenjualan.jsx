import React from "react";
import SidebarSection from "../SidebarSection";
import IcChartLine from "../../../../assets/icons/mdi_chart-line.svg";
import IcAccount from "../../../../assets/icons/mdi_account-group.svg";
import IcCog from "../../../../assets/icons/mdi_cog2.svg";
import IcDb from "../../../../assets/icons/mdi_database.svg";
import IcChart from "../../../../assets/icons/mdi_file-chart-outline.svg";
import IcCart from "../../../../assets/icons/mdi_cart-arrow-down.svg";
import IcCReceipt from "../../../../assets/icons/mdi_receipt.svg";

export default function SidebarSectionPenjualan() {
  return (
    <SidebarSection title="Penjualan" icon={IcChartLine}>
      <SidebarSection.Item link="#" icon={IcAccount}>
        Pengunjung
      </SidebarSection.Item>
      <SidebarSection.Item link="#" icon={IcCart}>
        Pesanan Online
      </SidebarSection.Item>
      <SidebarSection.Item link="#" icon={IcCReceipt}>
        Faktur
      </SidebarSection.Item>
      <SidebarSection.Dropdown title="Data Master" icon={IcDb}>
        <SidebarSection.DropdownItem>Daftar Menu</SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>Tambah Menu</SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>
          Daftar Kategori
        </SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>
          Tambah Kategori
        </SidebarSection.DropdownItem>
      </SidebarSection.Dropdown>
      <SidebarSection.Dropdown title="Laporan" icon={IcChart}>
        <SidebarSection.DropdownItem>
          Rincian Penjualan
        </SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>
          Rekap Penjualan
        </SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>Pasien</SidebarSection.DropdownItem>
        <SidebarSection.DropdownItem>
          Perkategori Menu
        </SidebarSection.DropdownItem>
      </SidebarSection.Dropdown>
      <SidebarSection.Item link="#" icon={IcCog}>
        Pengaturan
      </SidebarSection.Item>
    </SidebarSection>
  );
}
