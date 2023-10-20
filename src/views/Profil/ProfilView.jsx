import { useState } from "react";
import CardProfileDetail from "../../components/Cards/Profiles/Detail/CardProfileDetail";
import CardFormInformasi from "../../components/Cards/Profiles/FormInformasi/CardFormInformasi";
import CardProfilePrimary from "../../components/Cards/Profiles/Primary/CardProfilePrimary";
import Heading from "../../components/Heading/Heading";
import LayoutDashboard from "../../layout/LayoutDashboard";
import LayoutMain from "../../layout/LayoutMain";

import ButtonPrimary from "../../components/Buttons/Primary/ButtonPrimary";
import CardFormPengaturanAkun from "../../components/Cards/Profiles/FormPengaturanAkun/CardFormPengaturanAkun";
import Text from "../../components/Text/Text";

import IcSearch from "../../assets/icons/mdi_clipboard-search-outline.svg";
import IcCog from "../../assets/icons/mdi_cog.svg";
import IcArrow from "../../assets/icons/mdi_chevron-rightBlack.svg";

export default function ProfilView() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main>
      <LayoutMain>
        <LayoutMain.Head>
          <LayoutMain.HeadLeft>
            <Heading>
              <Heading.Title>Profil Akun</Heading.Title>
              <Heading.Subtitle>
                Lihat profil dan kelola data akun
              </Heading.Subtitle>
            </Heading>
          </LayoutMain.HeadLeft>
          <LayoutMain.HeadRight>
            <div className="w-full border-b border-bw50 grid grid-cols-3">
              <button
                className={`px-[14px] py-3 text-body-3 font-bold text-bw50 flex items-center ${
                  isOpen && "btn-active"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={IcSearch}
                  alt="Informasi Pribadi Icon"
                  className="mr-3"
                />
                Informasi Pribadi
              </button>
              <button
                className={`px-[14px] py-3 text-body-3 font-bold text-bw50 fill-bw50 flex items-center ${
                  !isOpen && "btn-active"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={IcCog} alt="Pengaturan Akun Icon" className="mr-3" />
                Pengaturan Akun
              </button>
            </div>
          </LayoutMain.HeadRight>
        </LayoutMain.Head>

        <LayoutMain.Body>
          <LayoutMain.BodyLeft>
            <CardProfilePrimary />
          </LayoutMain.BodyLeft>
          <LayoutMain.BodyRight>
            {isOpen ? (
              <div className="grid gap-6">
                <CardProfileDetail />
                <CardFormInformasi />
              </div>
            ) : (
              <div className="flex flex-col space-y-6 h-full">
                <div className="card px-14 pt-6 pb-[18px] flex items-center justify-between">
                  <Text size="3" type="bold">
                    Ubah kode akses
                  </Text>
                  <button type="button">
                    <img src={IcArrow} alt="Arrow Icon" />
                  </button>
                </div>
                <div className="card px-14 pt-6 pb-[18px] flex items-center justify-between">
                  <Text size="3" type="bold">
                    Ubah password
                  </Text>
                  <button type="button">
                    <img src={IcArrow} alt="Arrow Icon" />
                  </button>
                </div>
                <CardFormPengaturanAkun />
              </div>
            )}
          </LayoutMain.BodyRight>
        </LayoutMain.Body>
      </LayoutMain>
      <div className="grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="mt-[52px] flex items-center justify-center col-span-8">
          <ButtonPrimary type="submit" size="reguler" color="primary">
            Simpan
          </ButtonPrimary>
        </div>
      </div>
    </main>
  );
}
