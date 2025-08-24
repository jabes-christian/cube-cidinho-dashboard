import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Users, Target } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

const candidatesData = [
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
];

const performanceComparativa = [
  { mes: "Jan", cidinho: 45, concorrente1: 35, concorrente2: 25 },
  { mes: "Fev", cidinho: 52, concorrente1: 38, concorrente2: 30 },
  { mes: "Mar", cidinho: 48, concorrente1: 42, concorrente2: 28 },
  { mes: "Abr", cidinho: 61, concorrente1: 45, concorrente2: 32 },
  { mes: "Mai", cidinho: 58, concorrente1: 48, concorrente2: 35 },
  { mes: "Jun", cidinho: 67, concorrente1: 52, concorrente2: 38 },
];



export function MapeamentoConcorrentes() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("mapeamento", {
    titulo: "MAPEAMENTO CONCORRENTES",
    descricao: "Análise comparativa de performance digital e posicionamento político",
    forca1: "Maior engajamento digital entre jovens",
    forca2: "Propostas concretas para desenvolvimento",
    forca3: "Histórica experiência em gestão empresarial",
    forca4: "Crescimento consistente nas pesquisas",
    fraqueza1: "Menor penetração digital nas regiões",
    fraqueza2: "Necessidade de ampliar base aliada",
    fraqueza3: "Recursos financeiros limitados",
    fraqueza4: "Dificuldade de acesso em alguns segmentos",
    oportunidade1: "Potencial crescimento (15% ao mês)",
    oportunidade2: "Crescimento em redes sociais",
    oportunidade3: "Possibilidade com público atual",
    oportunidade4: "Novos apoios regionais",
    ameaca1: "Máquina pública dos concorrentes",
    ameaca2: "Fake news e desinformação",
    ameaca3: "Polarização política nacional",
    ameaca4: "Recursos financeiros limitados"
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            {!isEditing ? (
              <>
                <h2 className="text-2xl font-bold text-primary mb-2">{data.titulo}</h2>
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
                  className="text-center"
                />
                <EditableField
                  label="Descrição"
                  value={data.descricao}
                  onChange={(value) => updateField("descricao", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="text-center"
                />
              </>
            )}
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

      {/* Cards dos Candidatos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {candidatesData.map((candidate, index) => (
          <Card key={index} className={`p-4 ${index === 0 ? 'border-primary bg-primary/5' : ''}`}>
            <div className="text-center mb-4">
              <h3 className="font-bold text-primary">{candidate.name}</h3>
              <Badge variant="outline" className="mt-1">{candidate.partido}</Badge>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Engajamento</span>
                  <span className="font-medium">{candidate.engajamento}%</span>
                </div>
                <Progress value={candidate.engajamento} />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Alcance</span>
                  <span className="font-medium">{candidate.alcance}%</span>
                </div>
                <Progress value={candidate.alcance} />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Performance</span>
                  <span className="font-medium">{candidate.performance}%</span>
                </div>
                <Progress value={candidate.performance} />
              </div>

              <div className="flex items-center justify-center pt-2">
                {candidate.tendencia === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Performance Comparativa */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">Performance Digital Comparativa</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceComparativa}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cidinho" fill="hsl(var(--chart-1))" name="Cidinho Santos" />
              <Bar dataKey="concorrente1" fill="hsl(var(--chart-2))" name="Concorrente 1" />
              <Bar dataKey="concorrente2" fill="hsl(var(--chart-3))" name="Concorrente 2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Análise SWOT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-success" />
            <h3 className="text-lg font-semibold text-success">FORÇAS</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.forca1}
                onChange={(value) => updateField("forca1", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.forca2}
                onChange={(value) => updateField("forca2", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.forca3}
                onChange={(value) => updateField("forca3", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.forca4}
                onChange={(value) => updateField("forca4", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-warning" />
            <h3 className="text-lg font-semibold text-warning">FRAQUEZAS</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.fraqueza1}
                onChange={(value) => updateField("fraqueza1", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.fraqueza2}
                onChange={(value) => updateField("fraqueza2", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.fraqueza3}
                onChange={(value) => updateField("fraqueza3", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.fraqueza4}
                onChange={(value) => updateField("fraqueza4", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-primary">OPORTUNIDADES</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.oportunidade1}
                onChange={(value) => updateField("oportunidade1", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.oportunidade2}
                onChange={(value) => updateField("oportunidade2", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.oportunidade3}
                onChange={(value) => updateField("oportunidade3", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.oportunidade4}
                onChange={(value) => updateField("oportunidade4", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-destructive" />
            <h3 className="text-lg font-semibold text-destructive">AMEAÇAS</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.ameaca1}
                onChange={(value) => updateField("ameaca1", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.ameaca2}
                onChange={(value) => updateField("ameaca2", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.ameaca3}
                onChange={(value) => updateField("ameaca3", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
              <EditableField
                label=""
                value={data.ameaca4}
                onChange={(value) => updateField("ameaca4", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
