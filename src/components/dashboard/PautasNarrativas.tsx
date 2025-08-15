import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, TrendingUp, AlertCircle, MapPin } from "lucide-react";

export function PautasNarrativas() {
  const pautasPopulacao = [
    { tema: "Emprego", categoria: "Desenvolvimento", relevancia: 95, sentimento: 85 },
    { tema: "Educação", categoria: "Desenvolvimento", relevancia: 92, sentimento: 67 },
    { tema: "Segurança", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 },
    { tema: "Saúde", categoria: "Essencial", relevancia: 67, sentimento: 85 },
    { tema: "Meio Ambiente", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 },
    { tema: "Estradas", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 }
  ];

  const narrativasDominantes = [
    {
      titulo: "MT precisa de mais parcerias significativas",
      subtitulo: "32 de anos fontes ligadas",
      porcentagem: 90,
      descricao: "Saúde, Educação, economia"
    },
    {
      titulo: "Educação técnica como solução para o futuro",
      subtitulo: "18 de anos estudantes da região",
      porcentagem: 88,
      descricao: "Interiorização, Qualificação"
    },
    {
      titulo: "Recomendação",
      subtitulo: "Manter criação de conteúdo baseado na faceta",
      porcentagem: null,
      descricao: "Educação técnica - economia"
    },
    {
      titulo: "Segurança e prioridade nas periferias",
      subtitulo: "26 à 45 anos",
      porcentagem: 67,
      descricao: "Recursos, Sociedade"
    }
  ];

  const sentimentoRegiao = [
    { cidade: "Cuiabá", positivo: 74, neutro: 16, negativo: 10 },
    { cidade: "Rondonópolis", positivo: 68, neutro: 22, negativo: 10 },
    { cidade: "Norte do MT", positivo: 71, neutro: 18, negativo: 11 },
    { cidade: "Oeste do MT", positivo: 69, neutro: 20, negativo: 11 },
    { cidade: "Sul do MT", positivo: 65, neutro: 24, negativo: 11 }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Desenvolvimento": return "bg-primary text-primary-foreground";
      case "Essencial": return "bg-success text-success-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Pautas e Narrativas</h1>
        <p className="text-muted-foreground">
          Inteligência estratégica baseada na opinião política, sentimentos média e mídia digital em MT
        </p>
      </div>

      {/* Principais Pautas da População MT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Principais Pautas da População MT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pautasPopulacao.map((pauta, index) => (
              <Card key={index} className="bg-primary text-primary-foreground">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{pauta.tema}</h3>
                      <Badge className={getCategoriaColor(pauta.categoria)}>
                        {pauta.categoria}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Relevância</span>
                        <span>{pauta.relevancia}%</span>
                      </div>
                      <Progress value={pauta.relevancia} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sentimento</span>
                        <span>{pauta.sentimento}%</span>
                      </div>
                      <Progress value={pauta.sentimento} className="h-2" />
                    </div>
                    
                    <div className="text-xs">
                      <p>Região da Pesquisa</p>
                      <p className="font-medium">Todo MT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análise de Narrativas Dominantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Análise de Narrativas Dominantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {narrativasDominantes.map((narrativa, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">{narrativa.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{narrativa.subtitulo}</p>
                  <div className="flex flex-wrap gap-2">
                    {narrativa.descricao.split(', ').map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {narrativa.titulo.includes("Recomendação") && (
                    <div className="flex items-center gap-2 text-warning">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Agir em cima da sua área de conhecimento</span>
                    </div>
                  )}
                </div>
                {narrativa.porcentagem && (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{narrativa.porcentagem}%</div>
                    <div className="text-xs text-muted-foreground">Força</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sentimento por Região */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Sentimento por Região
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sentimentoRegiao.map((local, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{local.cidade}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-success">{local.positivo}%</span>
                    <span className="text-muted-foreground">{local.neutro}%</span>
                    <span className="text-destructive">{local.negativo}%</span>
                  </div>
                </div>
                <div className="flex w-full h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-success" 
                    style={{ width: `${local.positivo}%` }}
                  />
                  <div 
                    className="bg-muted" 
                    style={{ width: `${local.neutro}%` }}
                  />
                  <div 
                    className="bg-destructive" 
                    style={{ width: `${local.negativo}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded" />
              <span>Positivo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded" />
              <span>Neutro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded" />
              <span>Negativo</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}