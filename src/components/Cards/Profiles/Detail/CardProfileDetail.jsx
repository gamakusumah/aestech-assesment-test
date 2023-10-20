import Text from "../../../Text/Text";

export default function CardProfileDetail() {
  return (
    <div className="card px-14 py-12">
      <table className="text-left">
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              ID Pegawai
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              KRYWN-00239-2309
            </Text>
          </td>
        </tr>
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              Nama Pegawai
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              Anggy Juniarto
            </Text>
          </td>
        </tr>
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              Jenis Kelamin
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              Pria
            </Text>
          </td>
        </tr>
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              Tanggal Lahir
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              06/09/1992
            </Text>
          </td>
        </tr>
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              Posisi
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              Dokter
            </Text>
          </td>
        </tr>
        <tr className="h-10">
          <th className="pr-9">
            <Text size="4" type="bold">
              Klinik Cabang
            </Text>
          </th>
          <td>
            <Text size="4" type="normal">
              Klinik Cabang Bandung
            </Text>
          </td>
        </tr>
      </table>
    </div>
  );
}
