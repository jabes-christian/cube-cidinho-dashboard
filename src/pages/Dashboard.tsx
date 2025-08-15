import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { PerformanceDigital } from "@/components/dashboard/PerformanceDigital";
import { RadarMonitoramento } from "@/components/dashboard/RadarMonitoramento";
import { MapeamentoConcorrentes } from "@/components/dashboard/MapeamentoConcorrentes";
import { AnalisePostsSentimentos } from "@/components/dashboard/AnalisePostsSentimentos";
import { EstrategiaDigital } from "@/components/dashboard/EstrategiaDigital";
import { InsightsTaticos } from "@/components/dashboard/InsightsTaticos";
import { ProjecaoCenarios } from "@/components/dashboard/ProjecaoCenarios";
import { PautasNarrativas } from "@/components/dashboard/PautasNarrativas";
import { TermometroPopular } from "@/components/dashboard/TermometroPopular";
import { ObservatorioSocial } from "@/components/dashboard/ObservatorioSocial";
import { BaseEleitoral } from "@/components/dashboard/BaseEleitoral";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <PerformanceDigital />;
      case "radar":
        return <RadarMonitoramento />;
      case "mapeamento":
        return <MapeamentoConcorrentes />;
      case "analise":
        return <AnalisePostsSentimentos />;
      case "estrategia":
        return <EstrategiaDigital />;
      case "insights":
        return <InsightsTaticos />;
      case "projecao":
        return <ProjecaoCenarios />;
      case "pautas":
        return <PautasNarrativas />;
      case "termometro":
        return <TermometroPopular />;
      case "observatorio":
        return <ObservatorioSocial />;
      case "base":
        return <BaseEleitoral />;
      case "configuracoes":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Configurações</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      default:
        return <PerformanceDigital />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}