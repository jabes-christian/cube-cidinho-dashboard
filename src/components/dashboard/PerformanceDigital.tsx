import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const performanceData = [
  { name: "Jan", alcance: 45000, engajamento: 2800, seguidores: 15000 },
  { name: "Fev", alcance: 52000, engajamento: 3200, seguidores: 18500 },
  { name: "Mar", alcance: 48000, engajamento: 2950, seguidores: 22000 },
  { name: "Abr", alcance: 61000, engajamento: 3800, seguidores: 26800 },
  { name: "Mai", alcance: 58000, engajamento: 3600, seguidores: 31200 },
  { name: "Jun", alcance: 67000, engajamento: 4200, seguidores: 35900 },
];

const macroregioesData = [
  { regiao: "Norte", votos: 23 },
  { regiao: "Leste", votos: 19 },
  { regiao: "Centro-Sul", votos: 31 },
  { regiao: "Oeste", votos: 28 },
  { regiao: "Capital", votos: 35 },
];

export function PerformanceDigital() {
  return (
    <div className="space-y-6">
      {/* Header with main KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">77%</div>
            <div className="text-sm opacity-90">SCORE CUBE</div>
            <div className="text-xs mt-1">Meta: aumento de 5% Score Cube mensal acumulado</div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">MONITORAMENTO</div>
            <div className="text-xs mt-1">Análise contínua</div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">FONTES ATIVAS</div>
            <div className="text-xs mt-1">Monitoramento completo</div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-2">TEMPO REAL</div>
            <div className="text-sm text-muted-foreground">ATUALIZAÇÕES</div>
            <div className="text-xs mt-1">Dados em tempo real</div>
          </div>
        </Card>
      </div>

      {/* Metas da Campanha */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">METAS DA CAMPANHA</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="text-primary font-medium mb-2">ALCANCE DIGITAL</div>
            <div className="text-xs text-muted-foreground mb-2">META: 100 milhões mensais</div>
            <Progress value={68} className="mb-2" />
            <div className="text-sm font-medium">68% concluído</div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4">
            <div className="text-primary font-medium mb-2">ENGAJAMENTO TOTAL</div>
            <div className="text-xs text-muted-foreground mb-2">META: 10M seguidores</div>
            <Progress value={45} className="mb-2" />
            <div className="text-sm font-medium">45% concluído</div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4">
            <div className="text-primary font-medium mb-2">SEGUIDORES INSTAGRAM</div>
            <div className="text-xs text-muted-foreground mb-2">META: 15M cadastros</div>
            <Progress value={78} className="mb-2" />
            <div className="text-sm font-medium">78% concluído</div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4">
            <div className="text-primary font-medium mb-2">AVALIAÇÃO DE DESEMPENHO</div>
            <div className="text-xs text-muted-foreground mb-2">META: 100% Mato Grosso</div>
            <Progress value={74} className="mb-2" />
            <div className="text-sm font-medium">74% concluído</div>
          </div>
        </div>
      </Card>

      {/* Performance Digital Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">Performance Digital - Últimos 30 dias</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="alcance" stroke="hsl(var(--chart-1))" strokeWidth={2} />
              <Line type="monotone" dataKey="engajamento" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              <Line type="monotone" dataKey="seguidores" stroke="hsl(var(--chart-3))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Macrorregiões Mato Grosso */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">MACRORREGIÕES MATO GROSSO</h3>
        <p className="text-sm text-muted-foreground mb-4">Objetivo: modelar a 1ª campanha de Mauro Mendes</p>
        
        {/* Mapa placeholder - seria substituído por mapa real */}
        <div className="bg-primary/10 rounded-lg h-64 flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="w-32 h-32 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">MT</span>
            </div>
            <p className="text-muted-foreground">Mapa das Macrorregiões</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {macroregioesData.map((item, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{item.votos}%</div>
              <div className="text-sm text-muted-foreground">{item.regiao}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}