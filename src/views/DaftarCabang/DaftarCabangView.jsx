import { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/FormInputs/Input/Input";
import IcSearch from "../../assets/icons/mdi_magnify.svg";
import CardCabangSmall from "../../components/Cards/Cabang/Small/CardCabangSmall";
import axios from "axios";

export default function DaftarCabangView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("https://my-json-server.typicode.com/gamakusumah/demo")
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <Heading>
        <Heading.Title>Daftar Cabang</Heading.Title>
        <Heading.Subtitle>
          Pilih salah satu cabang untuk melihat aktivitas melalui sistem
          informasi
        </Heading.Subtitle>
      </Heading>
      <div className="mt-9 mb-14">
        <Input type="text" placeholder="Cari cabang" icon={IcSearch} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <CardCabangSmall nama="Klinik Bandung" email="" />
      </div>
      <div>{data}</div>
    </main>
  );
}
