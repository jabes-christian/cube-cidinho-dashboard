import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function RadarMonitoramento() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">RADAR DE MONITORAMENTO</h2>
        <p className="text-muted-foreground">Dados serão alimentados por RSS.app em tempo real</p>
      </div>

      {/* Placeholder para dados da API */}
      <Card className="p-8">
        <div className="text-center space-y-4">
          <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              Aguardando Integração da API
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Esta seção será automaticamente preenchida com dados de monitoramento 
              em tempo real coletados via RSS.app e outras fontes de notícias.
            </p>
          </div>
          <div className="pt-4">
            <div className="bg-muted/30 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-xs text-muted-foreground">
                <strong>Fontes previstas:</strong><br />
                • RSS.app para notícias<br />
                • Monitoramento 24/7<br />
                • Análise de sentimento<br />
                • Palavras-chave em trending
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}