import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
export default function LayoutDashboard(props) {
  return (
    <div className="pl-[420px] pt-32">
      <Sidebar />
      <Topbar />
      <main className="bg-bw15 px-16 py-14 min-h-screen">{props.children}</main>
    </div>
  );
}
