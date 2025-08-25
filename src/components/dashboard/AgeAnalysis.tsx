import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type AgeItem = { faixa: string; porcentagem: number; cor: string };

type AgeAnalysisProps = {
  items: AgeItem[];
  onUpdateItems: (newItems: AgeItem[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function AgeAnalysis({ items, onUpdateItems, isEditing, isAdmin }: AgeAnalysisProps) {
  const addItem = () => {
    onUpdateItems([...items, { faixa: "Nova Faixa", porcentagem: 0, cor: "#000000" }]);
  };

  const updateItem = (index: number, field: keyof AgeItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    onUpdateItems(newItems);
  };

  const deleteItem = (index: number) => {
    onUpdateItems(items.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise por Idade</CardTitle>
        {isAdmin && isEditing && <Button onClick={addItem}>Adicionar Faixa</Button>}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                {isEditing && isAdmin ? (
                  <>
                    <Input
                      value={item.faixa}
                      onChange={(e) => updateItem(index, "faixa", e.target.value)}
                      className="w-32"
                    />
                    <Input
                      type="number"
                      value={item.porcentagem}
                      onChange={(e) => updateItem(index, "porcentagem", parseInt(e.target.value))}
                      className="w-20"
                    />
                    <Input
                      type="color"
                      value={item.cor}
                      onChange={(e) => updateItem(index, "cor", e.target.value)}
                      className="w-20"
                    />
                    <Button variant="ghost" onClick={() => deleteItem(index)}><X size={16} /></Button>
                  </>
                ) : (
                  <>
                    <span className="font-medium">{item.faixa} anos</span>
                    <span className="font-bold">{item.porcentagem}%</span>
                  </>
                )}
              </div>
              <Progress value={item.porcentagem} className="h-2" style={{ backgroundColor: item.cor }} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}