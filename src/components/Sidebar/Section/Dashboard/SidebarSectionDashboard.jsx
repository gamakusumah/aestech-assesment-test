import React from "react";
import SidebarSection from "../SidebarSection";
import Graph from "../../../../assets/icons/mdi_graph.svg";
import Chart from "../../../../assets/icons/mdi_chart-pie.svg";
import Cart from "../../../../assets/icons/mdi_cart.svg";
import Finance from "../../../../assets/icons/mdi_finance.svg";

export default function SidebarSectionDashboard() {
  return (
    <SidebarSection title="Dashboard">
      <SidebarSection.Item link="#" icon={Graph}>
        CRM
      </SidebarSection.Item>
      <SidebarSection.Item link="#" icon={Chart}>
        Analisis
      </SidebarSection.Item>
      <SidebarSection.Item link="#" icon={Cart}>
        Penjualan
      </SidebarSection.Item>
      <SidebarSection.Item link="#" icon={Finance}>
        Eksekutif
      </SidebarSection.Item>
    </SidebarSection>
  );
}
