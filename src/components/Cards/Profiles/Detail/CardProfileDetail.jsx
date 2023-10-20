import Text from "../../../Text/Text";

export default function CardProfileDetail(props) {
  const { data } = props;

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
              {data.id}
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
              {data.fullname}
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
              {data.gender}
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
              {data.date_of_birth}
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
              {data.position}
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
              Klinik Cabang {data.branch.name}
            </Text>
          </td>
        </tr>
      </table>
    </div>
  );
}
