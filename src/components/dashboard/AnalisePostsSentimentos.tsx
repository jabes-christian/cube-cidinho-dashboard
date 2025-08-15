import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { ThumbsUp, ThumbsDown, Minus, MessageSquare } from "lucide-react";

const sentimentData = [
  { name: "Positivo", value: 15, color: "#10B981" },
  { name: "Neutro", value: 3, color: "#F59E0B" },
  { name: "Negativo", value: 2, color: "#EF4444" }
];

const sentimentTrend = [
  { date: "01/08", positivo: 65, neutro: 25, negativo: 10 },
  { date: "08/08", positivo: 70, neutro: 20, negativo: 10 },
  { date: "15/08", positivo: 75, neutro: 18, negativo: 7 },
  { date: "22/08", positivo: 78, neutro: 17, negativo: 5 },
  { date: "29/08", positivo: 80, neutro: 15, negativo: 5 },
];

const topPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "Post 01",
    likes: 2800,
    comments: 340,
    shares: 120,
    sentiment: "positivo",
    engagement: 95
  },
  {
    id: 2,
    platform: "Facebook", 
    content: "Post 02",
    likes: 2400,
    comments: 280,
    shares: 95,
    sentiment: "positivo",
    engagement: 88
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Post 03", 
    likes: 2100,
    comments: 220,
    shares: 80,
    sentiment: "positivo",
    engagement: 82
  }
];

const performanceRegiao = [
  { regiao: "Norte", engajamento: 78, alcance: 85, conversao: 68 },
  { regiao: "Leste", engajamento: 82, alcance: 78, conversao: 75 },
  { regiao: "Centro-Sul", engajamento: 88, alcance: 92, conversao: 85 },
  { regiao: "Oeste", engajamento: 75, alcance: 80, conversao: 70 },
  { regiao: "Capital", engajamento: 95, alcance: 98, conversao: 92 },
];

export function AnalisePostsSentimentos() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">ANÁLISE DE POSTS E SENTIMENTOS</h2>
        <p className="text-muted-foreground">Análise detalhada de performance e sentimento dos conteúdos</p>
      </div>

      {/* Métricas de Sentimento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-success/10 border-success">
          <div className="flex items-center gap-3">
            <ThumbsUp className="h-8 w-8 text-success" />
            <div>
              <div className="text-2xl font-bold text-success">-28%</div>
              <div className="text-sm text-muted-foreground">Análise de Sentimento</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary">2.8K</div>
              <div className="text-sm text-muted-foreground">Total de Posts</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <ThumbsUp className="h-8 w-8 text-success" />
            <div>
              <div className="text-2xl font-bold text-success">15</div>
              <div className="text-sm text-muted-foreground">Positivos</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Minus className="h-8 w-8 text-warning" />
            <div>
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Neutros</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Análise de Sentimento e Evolução */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6 text-primary">Análise de Sentimento</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {sentimentData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6 text-primary">Evolução do Sentimento</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sentimentTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="positivo" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="neutro" stroke="#F59E0B" strokeWidth={2} />
                <Line type="monotone" dataKey="negativo" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Melhores Desempenhos */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">MELHORES DESEMPENHOS NAS POSTAGENS</h3>
        <div className="space-y-4">
          {topPosts.map((post, index) => (
            <div key={post.id} className="bg-primary/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {post.platform}
                  </Badge>
                  <span className="font-medium">{post.content}</span>
                  <Badge 
                    variant="outline" 
                    className="bg-success/10 text-success border-success"
                  >
                    {post.sentiment.toUpperCase()}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{post.engagement}%</div>
                  <div className="text-xs text-muted-foreground">SCORE</div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium">{post.likes}</div>
                  <div className="text-muted-foreground">Curtidas</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{post.comments}</div>
                  <div className="text-muted-foreground">Comentários</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{post.shares}</div>
                  <div className="text-muted-foreground">Compartilhamentos</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{post.engagement}%</div>
                  <div className="text-muted-foreground">Engajamento</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance por Região */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 text-primary">Performance por Região - Mapa de Calor</h3>
        <div className="space-y-4">
          {performanceRegiao.map((regiao, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 items-center">
              <div className="font-medium">{regiao.regiao}</div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Engajamento</span>
                  <span className="font-medium">{regiao.engajamento}%</span>
                </div>
                <Progress value={regiao.engajamento} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Alcance</span>
                  <span className="font-medium">{regiao.alcance}%</span>
                </div>
                <Progress value={regiao.alcance} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Conversão</span>
                  <span className="font-medium">{regiao.conversao}%</span>
                </div>
                <Progress value={regiao.conversao} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}