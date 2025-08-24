import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, AlertTriangle, Target, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

export function InsightsTaticos() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("insights", {
    titulo: "Insights Táticos",
    descricao: "Análise estratégica e recomendações baseadas em dados de performance digital",
    insight1_titulo: "Para consolidar novos candidatos na Gestão Cuidativa",
    insight1_descricao: "apresente-se com um conteúdo focado em novos ideários, sempre baseado na tradição liberal democrática.",
    insight2_titulo: "Para atrair mais mulheres em Cuiabá",
    insight2_descricao: "apresente-se com propostas baseadas em políticas para empreendedorismo e equidade de impostos entre seus principais conteúdos.",
    insight3_titulo: "Sobre Cuidar de estar priorizado",
    insight3_descricao: "sobre a pauta presente no Ranking do AmplifikaMT da UE TaM para que conheçam a proposta da candidatura Paulo Soethe.",
    insight4_titulo: "Cuidar crui um posicionamento urgente sobre a prisão de Bolsonaro",
    insight4_descricao: ""
  });
  const insights = [
    {
      id: 1,
      titulo: data.insight1_titulo,
      descricao: data.insight1_descricao,
      prioridade: "alta",
      categoria: "Posicionamento"
    },
    {
      id: 2,
      titulo: data.insight2_titulo,
      descricao: data.insight2_descricao,
      prioridade: "alta",
      categoria: "Público-Alvo"
    },
    {
      id: 3,
      titulo: data.insight3_titulo,
      descricao: data.insight3_descricao,
      prioridade: "media",
      categoria: "Comunicação"
    },
    {
      id: 4,
      titulo: data.insight4_titulo,
      descricao: data.insight4_descricao,
      prioridade: "critica",
      categoria: "Crise"
    }
  ];

  const metricas = [
    { label: "Taxa de Engajamento", valor: "12.5%", tendencia: "up", variacao: "+2.3%" },
    { label: "Alcance Orgânico", valor: "45.2K", tendencia: "up", variacao: "+8.1%" },
    { label: "Menções Positivas", valor: "78%", tendencia: "down", variacao: "-1.2%" },
    { label: "Share of Voice", valor: "34%", tendencia: "up", variacao: "+5.4%" }
  ];

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "alta": return "bg-primary text-primary-foreground";
      case "media": return "bg-warning text-warning-foreground";
      case "critica": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getPrioridadeIcon = (prioridade: string) => {
    switch (prioridade) {
      case "alta": return <Target className="h-4 w-4" />;
      case "media": return <Lightbulb className="h-4 w-4" />;
      case "critica": return <AlertTriangle className="h-4 w-4" />;
      default: return <TrendingUp className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <EditableField
            label="Título"
            value={data.titulo}
            onChange={(value) => updateField('titulo', value)}
            isEditing={isEditing}
            isAdmin={isAdmin}
            className="text-3xl font-bold text-primary mb-2"
            placeholder="Título da seção"
          />
          <EditableField
            label="Descrição"
            value={data.descricao}
            onChange={(value) => updateField('descricao', value)}
            isEditing={isEditing}
            isAdmin={isAdmin}
            multiline
            className="text-muted-foreground"
            placeholder="Descrição da seção"
          />
        </div>
        {isAdmin && (
          <EditButtons
            isEditing={isEditing}
            isAdmin={isAdmin}
            onEdit={() => setIsEditing(true)}
            onSave={saveData}
            onCancel={cancelEdit}
            onReset={resetData}
          />
        )}
      </div>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricas.map((metrica, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metrica.label}</p>
                  <p className="text-2xl font-bold">{metrica.valor}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metrica.tendencia === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  <TrendingUp className={`h-4 w-4 ${metrica.tendencia === 'down' ? 'rotate-180' : ''}`} />
                  {metrica.variacao}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Insights Principais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Insights Táticos
            <Badge variant="secondary" className="ml-auto">4</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getPrioridadeColor(insight.prioridade)}>
                        {getPrioridadeIcon(insight.prioridade)}
                        {insight.prioridade.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">{insight.categoria}</Badge>
                    </div>
                    <EditableField
                      label={`Título do Insight ${insight.id}`}
                      value={insight.titulo}
                      onChange={(value) => updateField(`insight${insight.id}_titulo`, value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="font-semibold text-foreground"
                      placeholder={`Título do insight ${insight.id}`}
                    />
                    <EditableField
                      label={`Descrição do Insight ${insight.id}`}
                      value={insight.descricao}
                      onChange={(value) => updateField(`insight${insight.id}_descricao`, value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      multiline
                      className="text-sm text-muted-foreground"
                      placeholder={`Descrição do insight ${insight.id}`}
                    />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recomendações Rápidas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-success">Oportunidades Identificadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Crescimento no Interior</p>
                <p className="text-xs text-muted-foreground">Aumento de 23% nas interações em cidades do interior</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Engajamento Feminino</p>
                <p className="text-xs text-muted-foreground">Pautas sobre empreendedorismo têm alta receptividade</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Horário Nobre</p>
                <p className="text-xs text-muted-foreground">Posts entre 19h-21h têm 40% mais engajamento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Atenção Necessária</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Questões Sensíveis</p>
                <p className="text-xs text-muted-foreground">Temas econômicos geram debate polarizado</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Concorrência Ativa</p>
                <p className="text-xs text-muted-foreground">Rivais aumentaram presença digital em 15%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Fake News</p>
                <p className="text-xs text-muted-foreground">Detectadas 3 narrativas falsas em circulação</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
