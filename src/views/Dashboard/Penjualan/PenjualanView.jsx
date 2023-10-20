import React from "react";
import Heading from "../../../components/Heading/Heading";
import CardTotal from "../../../components/Cards/Total/CardTotal";
import IcAccount from "../../../assets/icons/mdi_account-groupMango.svg";
import IcPackage from "../../../assets/icons/mdi_package-variant-closedMango.svg";
import IcQueue from "../../../assets/icons/mdi_human-queue.svg";
import IcCart from "../../../assets/icons/mdi_cartMango.svg";
import IcPercent from "../../../assets/icons/mdi_brightness-percentMango.svg";
import Text from "../../../components/Text/Text";
import Table from "../../../components/Table/Table";

export default function PenjualanView() {
  return (
    <div>
      <Heading>
        <Heading.Title>Performa Klinik Cabang Bandung</Heading.Title>
        <Heading.Subtitle>
          Lihat performa dan lihat laporan klinik
        </Heading.Subtitle>
      </Heading>

      <div className="mt-12 grid gap-9">
        {/* Totals */}
        <div className="grid grid-cols-4 gap-6">
          <CardTotal value="500" label="Pasien di bulan ini" icon={IcAccount} />
          <CardTotal
            value="241"
            label="Stok habis bulan ini"
            icon={IcPackage}
          />
          <CardTotal
            value="23"
            label="Pasien menunggu hari ini"
            icon={IcQueue}
          />
          <CardTotal value="350" label="Transaksi di bulan ini" icon={IcCart} />
        </div>
        {/* Daftar Promo Klinik */}
        <div className="card px-9 pt-9 pb-14">
          {/* Heading */}
          <div className="flex items-center">
            <div className="w-[72px] h-[72px] rounded-xl bg-mango/[0.16] flex items-center justify-center mr-6">
              <img src={IcPercent} alt="Card Icon" />
            </div>
            <div>
              <Text size="1" type="bold">
                Daftar Promo Klinik
              </Text>
              <Text size="3" type="normal">
                Promo-promo yang sedang berlangsung
              </Text>
            </div>
          </div>
          {/* Table */}
          <Table />
        </div>
      </div>
    </div>
  );
}
