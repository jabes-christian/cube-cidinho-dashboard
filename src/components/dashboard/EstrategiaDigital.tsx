import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export function EstrategiaDigital() {
  const temasEmergentes = [
    { tema: "Desenvolvimento do Campo", porcentagem: 85, status: "alta" },
    { tema: "Tecnologia de MT", porcentagem: 81, status: "alta" },
    { tema: "Agricultura Familiar", porcentagem: 79, status: "media" },
    { tema: "Turismo Ecológico", porcentagem: 68, status: "media" }
  ];

  const temasSensiveis = [
    { tema: "Reforma Tributária Estadual", porcentagem: 76, status: "atencao" },
    { tema: "Concessões de Serviços", porcentagem: 71, status: "atencao" },
    { tema: "Mineração vs Pequenos Produtores", porcentagem: 74, status: "critico" },
    { tema: "FETAG MT", porcentagem: 78, status: "atencao" }
  ];

  const estrategias = [
    {
      titulo: "Situação Estratégica para a MT",
      progresso: 90,
      acoes: [
        "Foco em sustentabilidade para o agro",
        "Criar parcerias",
        "Unir cooperativas",
        "Fortalecer a região",
        "Mensagens sobre desenvolvimento local"
      ]
    },
    {
      titulo: "Educação Inovadora",
      progresso: 85,
      acoes: [
        "Tecnologia na educação para a região agrícola",
        "Parcerias",
        "Institutos federais",
        "Educação continuada",
        "Sistema de bolsa de estudos"
      ]
    },
    {
      titulo: "Saúde Humanizada",
      progresso: 77,
      acoes: [
        "Telemedicina para regiões rurais e urbanas",
        "Grupos prioritários",
        "Unidades de atenção",
        "Médicos sem fronteiras",
        "Parcerias e grupos especiais"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "alta": return "text-success";
      case "media": return "text-warning";
      case "atencao": return "text-accent";
      case "critico": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "alta": return <TrendingUp className="h-4 w-4" />;
      case "media": return <CheckCircle className="h-4 w-4" />;
      case "atencao": return <AlertTriangle className="h-4 w-4" />;
      case "critico": return <TrendingDown className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Estratégia Digital</h1>
        <p className="text-muted-foreground">
          Análise estratégica baseada na opinião pública e nas mídias sociais
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temas Emergentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <CheckCircle className="h-5 w-5" />
              Temas Emergentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {temasEmergentes.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.tema}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${getStatusColor(item.status)}`}>
                      {item.porcentagem}%
                    </span>
                    {getStatusIcon(item.status)}
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.porcentagem}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Temas Sensíveis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Temas Sensíveis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {temasSensiveis.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.tema}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${getStatusColor(item.status)}`}>
                      {item.porcentagem}%
                    </span>
                    {getStatusIcon(item.status)}
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-destructive h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.porcentagem}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Estratégias de Comunicação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Estratégia de Comunicação por Pauta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {estrategias.map((estrategia, index) => (
              <div key={index} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">{estrategia.titulo}</h3>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {estrategia.progresso}%
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${estrategia.progresso}%` }}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Ações prioritárias:</p>
                  <ul className="space-y-1">
                    {estrategia.acoes.map((acao, acoesIndex) => (
                      <li key={acoesIndex} className="text-xs flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{acao}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}