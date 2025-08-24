import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function AnalisePostsSentimentos() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">ANÁLISE DE POSTS E SENTIMENTOS</h2>
        <p className="text-muted-foreground">Dados serão alimentados por Apify/Sentimonitor</p>
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
              Esta seção será automaticamente preenchida com análises de posts e sentimentos 
              coletados via Apify ou Sentimonitor.
            </p>
          </div>
          <div className="pt-4">
            <div className="bg-muted/30 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-xs text-muted-foreground">
                <strong>Fontes previstas:</strong><br />
                • Apify para Instagram<br />
                • Sentimonitor para análises<br />
                • Análise de sentimento automática<br />
                • Performance de posts em tempo real
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
