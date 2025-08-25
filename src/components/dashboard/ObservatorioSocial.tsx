import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Globe, TrendingUp, Users, MessageCircle, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

export function ObservatorioSocial() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("observatorio", {
    titulo: "Observatório Social",
    descricao: "Monitoramento dos movimentos sociais, tendências e engajamento digital"
  }, isAdmin);

  const dadosEngajamento = [
    { mes: "Jan", seguidores: 12000, interacoes: 8500, alcance: 45000 },
    { mes: "Fev", seguidores: 13500, interacoes: 9200, alcance: 52000 },
    { mes: "Mar", seguidores: 15200, interacoes: 11800, alcance: 63000 },
    { mes: "Abr", seguidores: 17800, interacoes: 14200, alcance: 78000 },
    { mes: "Mai", seguidores: 21500, interacoes: 18500, alcance: 95000 },
    { mes: "Jun", seguidores: 25300, interacoes: 22800, alcance: 118000 }
  ];

  const demografiaSeguidores = [
    { idade: "18-24", valor: 23, cor: "#FF6B35" },
    { idade: "25-34", valor: 32, cor: "#F7931E" },
    { idade: "35-44", valor: 28, cor: "#FFD23F" },
    { idade: "45-54", valor: 12, cor: "#06FFA5" },
    { idade: "55+", valor: 5, cor: "#4ECDC4" }
  ];

  const movimentosSociais = [
    {
      movimento: "Movimento dos Pequenos Agricultores",
      relevancia: 85,
      sentimento: "positivo",
      engajamento: "alto",
      descricao: "Forte apoio às propostas de crédito rural e tecnificação"
    },
    {
      movimento: "Coletivo Mulheres do Agronegócio",
      relevancia: 78,
      sentimento: "positivo",
      engajamento: "alto",
      descricao: "Aprovação das políticas de incentivo ao empreendedorismo"
    },
    {
      movimento: "Sindicato dos Trabalhadores Rurais",
      relevancia: 92,
      sentimento: "neutro",
      engajamento: "médio",
      descricao: "Aguardando detalhamento das propostas trabalhistas"
    },
    {
      movimento: "Movimento Estudantil Universitário",
      relevancia: 65,
      sentimento: "positivo",
      engajamento: "alto",
      descricao: "Interesse nas propostas de educação técnica e inovação"
    }
  ];

  const tendenciasTemas = [
    { tema: "Sustentabilidade Ambiental", crescimento: 156, status: "emergente" },
    { tema: "Agricultura Digital", crescimento: 89, status: "crescente" },
    { tema: "Economia Circular", crescimento: 203, status: "viral" },
    { tema: "Educação Técnica", crescimento: 67, status: "estável" },
    { tema: "Turismo Ecológico", crescimento: 134, status: "emergente" }
  ];

  const eventosSociais = [
    {
      evento: "Feira do Produtor Rural",
      data: "15/07/2024",
      participacao: "Confirmada",
      impacto: "Alto",
      publico: "2.500 pessoas"
    },
    {
      evento: "Seminário de Inovação Tecnológica",
      data: "22/07/2024",
      participacao: "Palestrante",
      impacto: "Médio",
      publico: "800 pessoas"
    },
    {
      evento: "Encontro de Cooperativas",
      data: "05/08/2024",
      participacao: "Convidado",
      impacto: "Alto",
      publico: "1.200 pessoas"
    }
  ];

  const getSentimentoColor = (sentimento: string) => {
    switch (sentimento) {
      case "positivo": return "text-success";
      case "negativo": return "text-destructive";
      case "neutro": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "viral": return "text-primary";
      case "emergente": return "text-success";
      case "crescente": return "text-warning";
      case "estável": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Observatório Social</h1>
        <p className="text-muted-foreground">
          Monitoramento dos movimentos sociais, tendências e engajamento digital
        </p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Seguidores</p>
                <p className="text-2xl font-bold">25.3K</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-sm text-success mt-2">
              <TrendingUp className="h-4 w-4" />
              +18% este mês
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Engajamento</p>
                <p className="text-2xl font-bold">22.8K</p>
              </div>
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-sm text-success mt-2">
              <TrendingUp className="h-4 w-4" />
              +23% este mês
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Alcance Total</p>
                <p className="text-2xl font-bold">118K</p>
              </div>
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-sm text-success mt-2">
              <TrendingUp className="h-4 w-4" />
              +24% este mês
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Engajamento</p>
                <p className="text-2xl font-bold">9.2%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-1 text-sm text-success mt-2">
              <TrendingUp className="h-4 w-4" />
              +1.3% este mês
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolução do Engajamento */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução do Engajamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosEngajamento}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="seguidores" stroke="hsl(var(--primary))" strokeWidth={2} name="Seguidores" />
                  <Line type="monotone" dataKey="interacoes" stroke="hsl(var(--success))" strokeWidth={2} name="Interações" />
                  <Line type="monotone" dataKey="alcance" stroke="hsl(var(--warning))" strokeWidth={2} name="Alcance" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Demografia dos Seguidores */}
        <Card>
          <CardHeader>
            <CardTitle>Demografia dos Seguidores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demografiaSeguidores}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="valor"
                    label={({ idade, valor }) => `${idade}: ${valor}%`}
                  >
                    {demografiaSeguidores.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Movimentos Sociais Relevantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Movimentos Sociais Relevantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {movimentosSociais.map((movimento, index) => (
            <div key={index} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{movimento.movimento}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{movimento.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getSentimentoColor(movimento.sentimento)}>
                      {movimento.sentimento}
                    </Badge>
                    <Badge variant="outline">
                      Engajamento {movimento.engajamento}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{movimento.relevancia}%</div>
                  <div className="text-xs text-muted-foreground">Relevância</div>
                </div>
              </div>
              <Progress value={movimento.relevancia} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tendências de Temas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Tendências de Temas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tendenciasTemas.map((tendencia, index) => (
              <Card key={index} className="bg-muted">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{tendencia.tema}</h3>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${getStatusColor(tendencia.status)}`}>
                        {tendencia.status.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1 text-success">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-bold">+{tendencia.crescimento}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Agenda de Eventos Sociais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Agenda de Eventos Sociais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {eventosSociais.map((evento, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{evento.evento}</h3>
                  <p className="text-sm text-muted-foreground">{evento.data}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Badge variant="outline">{evento.participacao}</Badge>
                  <Badge className={evento.impacto === 'Alto' ? 'bg-primary' : 'bg-secondary'}>
                    Impacto {evento.impacto}
                  </Badge>
                  <span className="text-muted-foreground">{evento.publico}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
