import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, MapPin, Clock, DollarSign, Target } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

export function BaseEleitoral() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("base", {
    titulo: "Base Eleitoral",
    descricao: "Análise detalhada do público-alvo e segmentação da base eleitoral"
  });

  const analisePublicoAlvo = [
    { faixa: "18-24", porcentagem: 22, cor: "#FF6B35" },
    { faixa: "25-34", porcentagem: 28, cor: "#F7931E" },
    { faixa: "35-44", porcentagem: 24, cor: "#FFD23F" },
    { faixa: "45-54", porcentagem: 16, cor: "#06FFA5" },
    { faixa: "55-64", porcentagem: 8, cor: "#4ECDC4" },
    { faixa: "65+", porcentagem: 2, cor: "#95E1D3" }
  ];

  const genero = [
    { genero: "Feminino", porcentagem: 54, cor: "#FF6B35" },
    { genero: "Masculino", porcentagem: 46, cor: "#F7931E" }
  ];

  const horarioEngajamento = [
    { hora: "06h", engajamento: 12 },
    { hora: "08h", engajamento: 25 },
    { hora: "10h", engajamento: 35 },
    { hora: "12h", engajamento: 45 },
    { hora: "14h", engajamento: 38 },
    { hora: "16h", engajamento: 52 },
    { hora: "18h", engajamento: 68 },
    { hora: "20h", engajamento: 85 },
    { hora: "22h", engajamento: 62 },
    { hora: "00h", engajamento: 28 }
  ];

  const investimentoTrafegoPago = {
    orcamentoTotal: "R$ 150.000,00",
    resultadoObtido: "R$ 100.000,00",
    novosSeg: "Novos Seguidores",
    alcanceVisual: "Alcance Visualizações"
  };

  const segmentacaoGeografica = [
    { regiao: "Cuiabá", porcentagem: 35, populacao: "650.000" },
    { regiao: "Várzea Grande", porcentagem: 18, populacao: "290.000" },
    { regiao: "Rondonópolis", porcentagem: 12, populacao: "220.000" },
    { regiao: "Sinop", porcentagem: 8, populacao: "140.000" },
    { regiao: "Tangará da Serra", porcentagem: 6, populacao: "105.000" },
    { regiao: "Cáceres", porcentagem: 4, populacao: "90.000" },
    { regiao: "Barra do Garças", porcentagem: 4, populacao: "60.000" },
    { regiao: "Interior Geral", porcentagem: 13, populacao: "800.000" }
  ];

  const perfilSocioeconomico = [
    { classe: "Classe A", porcentagem: 8, renda: "R$ 15.000+" },
    { classe: "Classe B", porcentagem: 22, renda: "R$ 5.000 - R$ 15.000" },
    { classe: "Classe C", porcentagem: 48, renda: "R$ 2.000 - R$ 5.000" },
    { classe: "Classe D", porcentagem: 18, renda: "R$ 1.000 - R$ 2.000" },
    { classe: "Classe E", porcentagem: 4, renda: "Até R$ 1.000" }
  ];

  const interesses = [
    { tema: "Agronegócio", porcentagem: 78 },
    { tema: "Educação", porcentagem: 65 },
    { tema: "Tecnologia", porcentagem: 58 },
    { tema: "Meio Ambiente", porcentagem: 52 },
    { tema: "Economia", porcentagem: 48 },
    { tema: "Saúde", porcentagem: 45 },
    { tema: "Infraestrutura", porcentagem: 42 },
    { tema: "Segurança", porcentagem: 38 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Base Eleitoral</h1>
        <p className="text-muted-foreground">
          Análise detalhada do público-alvo e segmentação da base eleitoral
        </p>
      </div>

      {/* Análise Demográfica */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Análise por Idade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analisePublicoAlvo.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.faixa} anos</span>
                    <span className="font-bold">{item.porcentagem}%</span>
                  </div>
                  <Progress value={item.porcentagem} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Distribuição por Gênero
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genero}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="porcentagem"
                    label={({ genero, porcentagem }) => `${genero}: ${porcentagem}%`}
                  >
                    {genero.map((entry, index) => (
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

      {/* Horários de Maior Engajamento */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Horários de Maior Engajamento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={horarioEngajamento}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engajamento" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Investimento em Tráfego Pago */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Investimento em Tráfego Pago
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Orçamento Total</p>
              <p className="text-2xl font-bold text-primary">{investimentoTrafegoPago.orcamentoTotal}</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Resultado Obtido</p>
              <p className="text-2xl font-bold text-success">{investimentoTrafegoPago.resultadoObtido}</p>
            </div>
            <div className="text-center space-y-2 p-4 bg-primary text-primary-foreground rounded-lg">
              <p className="text-sm opacity-90">{investimentoTrafegoPago.novosSeg}</p>
              <p className="font-semibold">+12.500</p>
            </div>
            <div className="text-center space-y-2 p-4 bg-primary text-primary-foreground rounded-lg">
              <p className="text-sm opacity-90">{investimentoTrafegoPago.alcanceVisual}</p>
              <p className="font-semibold">2.8M</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Segmentação Geográfica */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Segmentação Geográfica
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {segmentacaoGeografica.map((item, index) => (
              <div key={index} className="space-y-2 p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.regiao}</span>
                  <div className="text-right">
                    <div className="font-bold text-primary">{item.porcentagem}%</div>
                    <div className="text-xs text-muted-foreground">{item.populacao} hab.</div>
                  </div>
                </div>
                <Progress value={item.porcentagem} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Perfil Socioeconômico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Perfil Socioeconômico
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {perfilSocioeconomico.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{item.classe}</span>
                    <span className="text-sm text-muted-foreground ml-2">({item.renda})</span>
                  </div>
                  <span className="font-bold">{item.porcentagem}%</span>
                </div>
                <Progress value={item.porcentagem} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Principais Interesses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Principais Interesses da Base
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interesses.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.tema}</span>
                  <span className="font-bold text-primary">{item.porcentagem}%</span>
                </div>
                <Progress value={item.porcentagem} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}