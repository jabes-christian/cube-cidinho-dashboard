import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type InvestmentData = {
  orcamentoTotal: string;
  resultadoObtido: string;
  novosSeg: string;
  alcanceVisual: string;
};

type PaidTrafficInvestmentProps = {
  data: InvestmentData;
  onUpdateData: (newData: InvestmentData) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function PaidTrafficInvestment({ data, onUpdateData, isEditing, isAdmin }: PaidTrafficInvestmentProps) {
  const updateField = (field: keyof InvestmentData, value: string) => {
    onUpdateData({ ...data, [field]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investimento em Tráfego Pago</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Orçamento Total</p>
            {isEditing && isAdmin ? (
              <Input
                value={data.orcamentoTotal}
                onChange={(e) => updateField("orcamentoTotal", e.target.value)}
              />
            ) : (
              <p className="text-2xl font-bold text-primary">{data.orcamentoTotal}</p>
            )}
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Resultado Obtido</p>
            {isEditing && isAdmin ? (
              <Input
                value={data.resultadoObtido}
                onChange={(e) => updateField("resultadoObtido", e.target.value)}
              />
            ) : (
              <p className="text-2xl font-bold text-success">{data.resultadoObtido}</p>
            )}
          </div>
          <div className="text-center space-y-2 p-4 bg-primary text-primary-foreground rounded-lg">
            {isEditing && isAdmin ? (
              <Input
                value={data.novosSeg}
                onChange={(e) => updateField("novosSeg", e.target.value)}
                className="text-sm opacity-90 bg-transparent border-none"
              />
            ) : (
              <p className="text-sm opacity-90">{data.novosSeg}</p>
            )}
            <p className="font-semibold">+12.500</p> {/* Este valor pode precisar de edição separada se necessário */}
          </div>
          <div className="text-center space-y-2 p-4 bg-primary text-primary-foreground rounded-lg">
            {isEditing && isAdmin ? (
              <Input
                value={data.alcanceVisual}
                onChange={(e) => updateField("alcanceVisual", e.target.value)}
                className="text-sm opacity-90 bg-transparent border-none"
              />
            ) : (
              <p className="text-sm opacity-90">{data.alcanceVisual}</p>
            )}
            <p className="font-semibold">2.8M</p> {/* Este valor pode precisar de edição separada se necessário */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}