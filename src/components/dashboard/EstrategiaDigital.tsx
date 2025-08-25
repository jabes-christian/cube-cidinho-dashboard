import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";
import { EmergingThemes } from "./EmergingThemes";
import { SensitiveThemes } from "./SensitiveThemes";
import { CommunicationStrategies } from "./CommunicationStrategies";

export function EstrategiaDigital() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("estrategia", {
    titulo: "Estratégia Digital",
    descricao: "Análise estratégica baseada na opinião pública e nas mídias sociais",
    emergingThemes: [
      { name: "Desenvolvimento do Campo", percentage: 85, trend: "up" },
      { name: "Tecnologia de MT", percentage: 81, trend: "up" },
      { name: "Agricultura Familiar", percentage: 79, trend: "stable" },
      { name: "Turismo Ecológico", percentage: 68, trend: "stable" }
    ],
    sensitiveThemes: [
      { name: "Reforma Tributária Estadual", percentage: 76, trend: "alert" },
      { name: "Concessões de Serviços", percentage: 71, trend: "alert" },
      { name: "Mineração vs Pequenos Produtores", percentage: 74, trend: "down" },
      { name: "FETAG MT", percentage: 78, trend: "alert" }
    ],
    communicationStrategies: [
      {
        name: "Situação Estratégica para a MT",
        percentage: 90,
        actions: [
          "Foco em sustentabilidade para o agro",
          "Criar parcerias",
          "Unir cooperativas",
          "Fortalecer a região",
          "Mensagens sobre desenvolvimento local"
        ]
      },
      {
        name: "Educação Inovadora",
        percentage: 85,
        actions: [
          "Tecnologia na educação para a região agrícola",
          "Parcerias",
          "Institutos federais",
          "Educação continuada",
          "Sistema de bolsa de estudos"
        ]
      },
      {
        name: "Saúde Humanizada",
        percentage: 77,
        actions: [
          "Telemedicina para regiões rurais e urbanas",
          "Grupos prioritários",
          "Unidades de atenção",
          "Médicos sem fronteiras",
          "Parcerias e grupos especiais"
        ]
      }
    ]
  }, isAdmin);

  const updateEmergingThemes = (newThemes) => updateField("emergingThemes", newThemes);
  const updateSensitiveThemes = (newThemes) => updateField("sensitiveThemes", newThemes);
  const updateCommunicationStrategies = (newStrategies) => updateField("communicationStrategies", newStrategies);





  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {!isEditing ? (
            <>
              <h1 className="text-3xl font-bold text-primary mb-2">{data.titulo}</h1>
              <p className="text-muted-foreground">{data.descricao}</p>
            </>
          ) : (
            <>
              <EditableField
                label="Título da Seção"
                value={data.titulo}
                onChange={(value) => updateField("titulo", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="mb-2"
              />
              <EditableField
                label="Descrição"
                value={data.descricao}
                onChange={(value) => updateField("descricao", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
              />
            </>
          )}
        </div>
        <EditButtons
          isEditing={isEditing}
          isAdmin={isAdmin}
          onEdit={() => setIsEditing(true)}
          onSave={saveData}
          onCancel={cancelEdit}
          onReset={resetData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmergingThemes
          themes={data.emergingThemes}
          onUpdateThemes={updateEmergingThemes}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
        <SensitiveThemes
          themes={data.sensitiveThemes}
          onUpdateThemes={updateSensitiveThemes}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />
      </div>

      <CommunicationStrategies
        strategies={data.communicationStrategies}
        onUpdateStrategies={updateCommunicationStrategies}
        isEditing={isEditing}
        isAdmin={isAdmin}
      />
    </div>
  );
}
