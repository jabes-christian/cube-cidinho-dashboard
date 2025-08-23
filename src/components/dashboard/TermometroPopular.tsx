import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Thermometer, TrendingUp, MessageSquare, Heart, Share2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

export function TermometroPopular() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("termometro", {
    titulo: "Termômetro Popular",
    descricao: "Análise em tempo real da percepção popular nas redes sociais no MT",
    mencao1: "Impressionante proposta científica e suporte para liderança no desenvolvimento da região! Cuidador Santos é uma pessoa que inspira confiança.",
    mencao2: "Sobre a obra científica trabalho inspirado para liderança no desenvolvimento da região! Cuidador Santos é uma pessoa que inspira confiança.",
    mencao3: "Cuidador Santos traz perspectivas frescas e inovadoras para o cenário político local. Suas propostas são bem estruturadas."
  });

  const scorePopular = 85;
  const totalMencoes = 3515;

  const nivelTermometro = [
    { nivel: "Excelente", min: 100, cor: "text-success" },
    { nivel: "Muito Bom", min: 75, cor: "text-success" },
    { nivel: "Bom", min: 50, cor: "text-warning" },
    { nivel: "Regular", min: 25, cor: "text-warning" },
    { nivel: "Crítico", min: 0, cor: "text-destructive" }
  ];

  const distribuicaoMencoes = [
    { plataforma: "Instagram", porcentagem: 35, mencoes: "1.230" },
    { plataforma: "Facebook", porcentagem: 30, mencoes: "1.055" },
    { plataforma: "TikTok", porcentagem: 18, mencoes: "632" },
    { plataforma: "X", porcentagem: 10, mencoes: "352" },
    { plataforma: "YouTube", porcentagem: 5, mencoes: "176" },
    { plataforma: "Real", porcentagem: 2, mencoes: "70" }
  ];

  const mencoesRelevantes = [
    {
      usuario: "@jornalista1",
      conteudo: "Impressionante proposta científica e suporte para liderança no desenvolvimento da região! Cuidador Santos é uma pessoa que inspira confiança.",
      interacoes: { curtidas: 156, compartilhamentos: 89 },
      sentimento: "positivo"
    },
    {
      usuario: "@jornalista2",
      conteudo: "Sobre a obra científica trabalho inspirado para liderança no desenvolvimento da região! Cuidador Santos é uma pessoa que inspira confiança.",
      interacoes: { curtidas: 234, compartilhamentos: 156 },
      sentimento: "positivo"
    },
    {
      usuario: "@influenciadorlocal",
      conteudo: "Cuidador Santos traz perspectivas frescas e inovadoras para o cenário político local. Suas propostas são bem estruturadas.",
      interacoes: { curtidas: 89, compartilhamentos: 45 },
      sentimento: "positivo"
    },
    {
      usuario: "@moradorcuiaba",
      conteudo: "Esperando para ver as propostas implementadas na prática. Por enquanto são só palavras bonitas.",
      interacoes: { curtidas: 23, compartilhamentos: 12 },
      sentimento: "neutro"
    },
    {
      usuario: "@empresariomt",
      conteudo: "Economia não se faz com discurso, se faz com experiência e conhecimento técnico comprovado.",
      interacoes: { curtidas: 67, compartilhamentos: 34 },
      sentimento: "negativo"
    }
  ];

  const comentariosRelevantes = [
    {
      usuario: "@influenciadorlocal",
      conteudo: "Grande entrevista, fiquei surpresa com a propriedade que ele tem ao falar sobre o agronegócio, turismo e sustentabilidade para MT",
      interacoes: { curtidas: 245, compartilhamentos: 123 },
      sentimento: "positivo"
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

  const getSentimentoBadge = (sentimento: string) => {
    switch (sentimento) {
      case "positivo": return "bg-success text-success-foreground";
      case "negativo": return "bg-destructive text-destructive-foreground";
      case "neutro": return "bg-warning text-warning-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getNivelAtual = () => {
    return nivelTermometro.find(n => scorePopular >= n.min) || nivelTermometro[nivelTermometro.length - 1];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <EditableField
            label=""
            value={data.titulo}
            onChange={(value) => updateField("titulo", value)}
            isEditing={isEditing}
            isAdmin={isAdmin()}
            className="text-center"
          />
          <EditableField
            label=""
            value={data.descricao}
            onChange={(value) => updateField("descricao", value)}
            isEditing={isEditing}
            isAdmin={isAdmin()}
            multiline
            className="text-center"
          />
        </div>
        <div className="flex-1 flex justify-end">
          <EditButtons
            isEditing={isEditing}
            isAdmin={isAdmin()}
            onEdit={() => setIsEditing(true)}
            onSave={saveData}
            onCancel={cancelEdit}
            onReset={resetData}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Popular */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Score Popular
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="relative">
              <div className="text-6xl font-bold text-primary">{scorePopular}%</div>
              <div className={`text-lg font-medium ${getNivelAtual().cor}`}>
                {getNivelAtual().nivel}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total de menções</span>
                <span className="font-bold">{totalMencoes.toLocaleString()}</span>
              </div>
              <Progress value={scorePopular} className="h-3" />
            </div>

            <div className="space-y-1 text-xs text-left">
              {nivelTermometro.map((nivel, index) => (
                <div key={index} className="flex justify-between">
                  <span className={nivel.cor}>{nivel.nivel}</span>
                  <span>{nivel.min}+</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distribuição de Menções */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Distribuição de Menções
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {distribuicaoMencoes.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{item.plataforma}</span>
                    <span className="text-sm font-bold">{item.porcentagem}%</span>
                  </div>
                  <Progress value={item.porcentagem} className="h-2" />
                  <div className="text-xs text-muted-foreground">{item.mencoes} menções</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Menções Recentes Relevantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Menções Recentes Relevantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mencoesRelevantes.map((mencao, index) => (
            <div key={index} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{mencao.usuario}</span>
                    <Badge className={getSentimentoBadge(mencao.sentimento)}>
                      {mencao.sentimento}
                    </Badge>
                  </div>
                  <p className="text-sm">{mencao.conteudo}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {mencao.interacoes.curtidas}
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  {mencao.interacoes.compartilhamentos}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Comentários Mais Relevantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comentários Mais Relevantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {comentariosRelevantes.map((comentario, index) => (
            <div key={index} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{comentario.usuario}</span>
                    <Badge className={getSentimentoBadge(comentario.sentimento)}>
                      {comentario.sentimento}
                    </Badge>
                  </div>
                  <p className="text-sm">{comentario.conteudo}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {comentario.interacoes.curtidas}
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  {comentario.interacoes.compartilhamentos}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}