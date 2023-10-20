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

  const getData = () => {
    axios
      .get("http://localhost:8000/branchs")
      .then((res) => {
        setData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
        {data.map((cabang, i) => (
          <CardCabangSmall nama={cabang.name} email={cabang.email} key={i} />
        ))}
      </div>
    </div>
  );
}
