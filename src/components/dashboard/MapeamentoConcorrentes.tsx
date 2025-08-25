import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";
import { CandidateList } from "./CandidateList";
import { PerformanceChart } from "./PerformanceChart";
import { SwotSection } from "./SwotSection";
import { Target, AlertTriangle, Star, ShieldAlert } from "lucide-react";

const initialData = {
  titulo: "MAPEAMENTO CONCORRENTES",
  descricao: "Análise comparativa de performance digital e posicionamento político",
  candidates: [
    {
      name: "CIDINHO SANTOS",
      partido: "UB",
      engajamento: 89,
      alcance: 92,
      performance: 88,
      tendencia: "up"
    },
    {
      name: "GIANVOTTO PISSATTA",
      partido: "PL",
      engajamento: 65,
      alcance: 70,
      performance: 67,
      tendencia: "down"
    },
    {
      name: "WELLINGTON J",
      partido: "PT",
      engajamento: 58,
      alcance: 62,
      performance: 60,
      tendencia: "up"
    },
    {
      name: "MAE ZUELI",
      partido: "PSOL",
      engajamento: 45,
      alcance: 48,
      performance: 46,
      tendencia: "down"
    }
  ],
  performance: [
    { mes: "Jan", cidinho: 45, concorrente1: 35, concorrente2: 25 },
    { mes: "Fev", cidinho: 52, concorrente1: 38, concorrente2: 30 },
    { mes: "Mar", cidinho: 48, concorrente1: 42, concorrente2: 28 },
    { mes: "Abr", cidinho: 61, concorrente1: 45, concorrente2: 32 },
    { mes: "Mai", cidinho: 58, concorrente1: 48, concorrente2: 35 },
    { mes: "Jun", cidinho: 67, concorrente1: 52, concorrente2: 38 }
  ],
  forcas: [
    "Maior engajamento digital entre jovens",
    "Propostas concretas para desenvolvimento",
    "Histórica experiência em gestão empresarial",
    "Crescimento consistente nas pesquisas"
  ],
  fraquezas: [
    "Menor penetração digital nas regiões",
    "Necessidade de ampliar base aliada",
    "Recursos financeiros limitados",
    "Dificuldade de acesso em alguns segmentos"
  ],
  oportunidades: [
    "Potencial crescimento (15% ao mês)",
    "Crescimento em redes sociais",
    "Possibilidade com público atual",
    "Novos apoios regionais"
  ],
  ameacas: [
    "Máquina pública dos concorrentes",
    "Fake news e desinformação",
    "Polarização política nacional",
    "Recursos financeiros limitados"
  ]
};

export function MapeamentoConcorrentes() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("mapeamento", initialData, isAdmin);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <EditableField
              label="Título da Seção"
              value={data.titulo}
              onChange={(value) => updateField("titulo", value)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              className="text-2xl font-bold text-primary mb-2"
            />
            <EditableField
              label="Descrição"
              value={data.descricao}
              onChange={(value) => updateField("descricao", value)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              className="text-muted-foreground"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <EditButtons
              isEditing={isEditing}
              isAdmin={isAdmin}
              onEdit={() => setIsEditing(true)}
              onSave={saveData}
              onCancel={cancelEdit}
              onReset={resetData}
            />
          </div>
        </div>
      </div>

      {/* Lista de Candidatos */}
      <CandidateList
        candidates={data.candidates}
        onUpdateCandidates={(newCandidates) => updateField("candidates", newCandidates)}
        isEditing={isEditing}
        isAdmin={isAdmin}
      />

      {/* Performance Comparativa */}
      <PerformanceChart
        data={data.performance}
        onUpdateData={(newData) => updateField("performance", newData)}
        isEditing={isEditing}
        isAdmin={isAdmin}
      />

      {/* Análise SWOT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SwotSection
          title="FORÇAS"
          icon={Star}
          color="hsl(var(--success))"
          items={data.forcas}
          onUpdateItems={(newItems) => updateField("forcas", newItems)}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
        <SwotSection
          title="FRAQUEZAS"
          icon={AlertTriangle}
          color="hsl(var(--warning))"
          items={data.fraquezas}
          onUpdateItems={(newItems) => updateField("fraquezas", newItems)}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
        <SwotSection
          title="OPORTUNIDADES"
          icon={Target}
          color="hsl(var(--info))"
          items={data.oportunidades}
          onUpdateItems={(newItems) => updateField("oportunidades", newItems)}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
        <SwotSection
          title="AMEAÇAS"
          icon={ShieldAlert}
          color="hsl(var(--destructive))"
          items={data.ameacas}
          onUpdateItems={(newItems) => updateField("ameacas", newItems)}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
}
