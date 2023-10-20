import IcBell from "../../../assets/icons/mdi_bell.svg";
import IcBellGray from "../../../assets/icons/mdi_bellGray.svg";
import Text from "../../Text/Text";
import { useState } from "react";

export default function DropdownNotifikasi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <img src={IcBell} alt="Notifikasi Icon" />
      </button>

      {isOpen && (
        <div className="card p-0 card-dropdown w-[561px] -left-64">
          <div className="px-14 pt-9">
            <Text size="2" type="bold">
              Notifikasi
            </Text>
          </div>
          <ul className="mt-4">
            <a href="">
              <li className="h-[100px] pl-[53px] pr-9 flex items-center justify-between hover:bg-mango/[0.16]">
                <div className="flex items-center">
                  <div className="w-14 h-14 mr-6 bg-bw50/[0.16] rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={IcBellGray} alt="Notifikasi Icon" />
                  </div>
                  <div>
                    <Text size="2" type="bold">
                      Pembayaran Berhasil!
                    </Text>
                    <Text size="4" type="normal">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </div>
                </div>
                <Text size="4" type="normal">
                  20 Jun
                </Text>
              </li>
            </a>
            <a href="">
              <li className="h-[100px] pl-[53px] pr-9 flex items-center justify-between hover:bg-mango/[0.16]">
                <div className="flex items-center">
                  <div className="w-14 h-14 mr-6 bg-bw50/[0.16] rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={IcBellGray} alt="Notifikasi Icon" />
                  </div>
                  <div>
                    <Text size="2" type="bold">
                      Aktivasi akun berhasil!
                    </Text>
                    <Text size="4" type="normal">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </div>
                </div>
                <Text size="4" type="normal">
                  20 Jun
                </Text>
              </li>
            </a>
            <a href="">
              <li className="h-[100px] pl-[53px] pr-9 flex items-center justify-between hover:bg-mango/[0.16]">
                <div className="flex items-center">
                  <div className="w-14 h-14 mr-6 bg-bw50/[0.16] rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={IcBellGray} alt="Notifikasi Icon" />
                  </div>
                  <div>
                    <Text size="2" type="bold">
                      Akun anda kadaluarsa!
                    </Text>
                    <Text size="4" type="normal">
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </div>
                </div>
                <Text size="4" type="normal">
                  20 Jun
                </Text>
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
