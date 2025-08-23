import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function PerformanceDigital() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">DESEMPENHO DIGITAL</h2>
        <p className="text-muted-foreground">Dados serão alimentados por web scraping via APIs</p>
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
              Esta seção será automaticamente preenchida com dados de performance digital 
              coletados via web scraping em tempo real.
            </p>
          </div>
          <div className="pt-4">
            <div className="bg-muted/30 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-xs text-muted-foreground">
                <strong>Fontes previstas:</strong><br />
                • Métricas de redes sociais<br />
                • KPIs de engajamento<br />
                • Score Cube em tempo real<br />
                • Metas da campanha
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}