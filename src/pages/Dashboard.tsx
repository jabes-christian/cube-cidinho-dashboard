import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { PerformanceDigital } from "@/components/dashboard/PerformanceDigital";
import { RadarMonitoramento } from "@/components/dashboard/RadarMonitoramento";
import { MapeamentoConcorrentes } from "@/components/dashboard/MapeamentoConcorrentes";
import { AnalisePostsSentimentos } from "@/components/dashboard/AnalisePostsSentimentos";

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
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Estratégia Digital</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "insights":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Insights Táticos</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "projecao":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Projeção de Cenários</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "pautas":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Pautas + Narrativas</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "termometro":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Termômetro Popular</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "observatorio":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Observatório Social</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
      case "base":
        return <div className="p-8 text-center"><h2 className="text-2xl font-bold text-primary">Base Eleitoral</h2><p className="text-muted-foreground mt-2">Em desenvolvimento...</p></div>;
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