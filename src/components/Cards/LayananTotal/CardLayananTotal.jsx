import Text from "../../Text/Text";
import IcAuto from "../../../assets/icons/mdi_autorenew.svg";

export default function CardLayananTotal() {
  return (
    <div className="card p-9 col-span-4">
      {/* Heading */}
      <div className="flex items-center mb-9">
        <div className="w-[72px] h-[72px] rounded-xl bg-mango/[0.16] flex items-center justify-center mr-6">
          <img src={IcAuto} alt="Card Icon" />
        </div>
        <div>
          <Text size="2" type="bold">
            Layanan Terlaris
          </Text>
        </div>
      </div>
      <div className="grid gap-6">
        {/* Item */}
        <div>
          <div className="flex items-center justify-between">
            <Text size="3" type="normal">
              Produk : 213 pcs
            </Text>
            <Text size="3" type="normal">
              50%
            </Text>
          </div>
          <div className="w-full bg-bw35 rounded-full h-2">
            <div className="bg-mango h-2 rounded-full w-[50%]"></div>
          </div>
        </div>
        {/* Item */}
        <div>
          <div className="flex items-center justify-between">
            <Text size="3" type="normal">
              Perawatan : 213 Pasien
            </Text>
            <Text size="3" type="normal">
              16%
            </Text>
          </div>
          <div className="w-full bg-bw35 rounded-full h-2">
            <div className="bg-mango h-2 rounded-full w-[16%]"></div>
          </div>
        </div>
        {/* Item */}
        <div>
          <div className="flex items-center justify-between">
            <Text size="3" type="normal">
              Paket Perawatan : 176 Pasien
            </Text>
            <Text size="3" type="normal">
              14%
            </Text>
          </div>
          <div className="w-full bg-bw35 rounded-full h-2">
            <div className="bg-mango h-2 rounded-full w-[14%]"></div>
          </div>
        </div>
        {/* Item */}
        <div>
          <div className="flex items-center justify-between">
            <Text size="3" type="normal">
              Konsultasi : 113 Pasien
            </Text>
            <Text size="3" type="normal">
              10%
            </Text>
          </div>
          <div className="w-full bg-bw35 rounded-full h-2">
            <div className="bg-mango h-2 rounded-full w-[10%]"></div>
          </div>
        </div>
        {/* Item */}
        <div>
          <div className="flex items-center justify-between">
            <Text size="3" type="normal">
              Tindakan : 113 Pasien
            </Text>
            <Text size="3" type="normal">
              10%
            </Text>
          </div>
          <div className="w-full bg-bw35 rounded-full h-2">
            <div className="bg-mango h-2 rounded-full w-[10%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
