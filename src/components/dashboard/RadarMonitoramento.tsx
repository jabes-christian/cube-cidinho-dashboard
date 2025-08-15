import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, TrendingUp, AlertCircle } from "lucide-react";

const monitoringData = [
  { time: "00:00", mentions: 120, sentiment: 0.7 },
  { time: "04:00", mentions: 85, sentiment: 0.6 },
  { time: "08:00", mentions: 340, sentiment: 0.8 },
  { time: "12:00", mentions: 560, sentiment: 0.75 },
  { time: "16:00", mentions: 420, sentiment: 0.65 },
  { time: "20:00", mentions: 680, sentiment: 0.8 },
];

const recentNews = [
  {
    id: 1,
    site: "Portal MT",
    title: "Cidinho Santos fala sobre sua responsabilidade de ser o Presidente do Conselho da Rota do Oeste",
    type: "POSITIVA",
    time: "2h atrás"
  },
  {
    id: 2,
    site: "G1 MT",
    title: "Cidinho Santos fala sobre sua responsabilidade de ser o Presidente do Conselho da Rota do Oeste",
    type: "POSITIVA", 
    time: "3h atrás"
  },
  {
    id: 3,
    site: "RDNEWS",
    title: "Cidinho Santos fala sobre sua responsabilidade de ser o Presidente do Conselho da Rota do Oeste",
    type: "POSITIVA",
    time: "4h atrás"
  },
  {
    id: 4,
    site: "Folha MT",
    title: "Cidinho Santos fala sobre sua responsabilidade de ser o Presidente do Conselho da Rota do Oeste", 
    type: "POSITIVA",
    time: "5h atrás"
  }
];

const palavrasChave = [
  "Infraestrutura", "Agricultura", "Agro", "Exportação", "Rota do Oeste",
  "Reforma Tributária", "Negócios"
];

export function RadarMonitoramento() {
  return (
    <div className="space-y-6">
      {/* Header com estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">MONITORAMENTO</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm opacity-90">FONTES ATIVAS</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">TEMPO REAL</div>
              <div className="text-sm opacity-90">ATUALIZAÇÕES</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Gráfico de Menções em Tempo Real */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">Evolução - Últimas 24h</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monitoringData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="mentions" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Feed de Notícias em Tempo Real */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-primary">FEED NOTÍCIAS EM TEMPO REAL</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-success/10 text-success border-success">TODAS</Badge>
            <Badge variant="outline" className="bg-success/10 text-success border-success">POSITIVAS</Badge>
            <Badge variant="outline" className="bg-muted/10 text-muted-foreground">NEUTRAS</Badge>
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">NEGATIVAS</Badge>
          </div>
        </div>

        <div className="space-y-4">
          {recentNews.map((news) => (
            <div key={news.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full mt-3 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm">{news.site}</span>
                  <Badge 
                    variant="outline" 
                    className="bg-success/10 text-success border-success text-xs"
                  >
                    {news.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{news.title}</p>
                <span className="text-xs text-muted-foreground">{news.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Palavras Mais Mencionadas */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">PALAVRAS MAIS MENCIONADAS</h3>
        <div className="flex flex-wrap gap-2">
          {palavrasChave.map((palavra, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="bg-primary/10 text-primary border-primary px-3 py-1"
            >
              {palavra}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}