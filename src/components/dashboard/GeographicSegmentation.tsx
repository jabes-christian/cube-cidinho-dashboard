import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type GeoItem = { regiao: string; porcentagem: number; populacao: string };

type GeographicSegmentationProps = {
  items: GeoItem[];
  onUpdateItems: (newItems: GeoItem[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function GeographicSegmentation({ items, onUpdateItems, isEditing, isAdmin }: GeographicSegmentationProps) {
  const addItem = () => {
    onUpdateItems([...items, { regiao: "Nova Região", porcentagem: 0, populacao: "0" }]);
  };

  const updateItem = (index: number, field: keyof GeoItem, value: string | number) => {
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
        <CardTitle>Segmentação Geográfica</CardTitle>
        {isAdmin && isEditing && <Button onClick={addItem}>Adicionar Região</Button>}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="space-y-2 p-3 border border-border rounded-lg">
              {isEditing && isAdmin ? (
                <>
                  <Input
                    value={item.regiao}
                    onChange={(e) => updateItem(index, "regiao", e.target.value)}
                  />
                  <Input
                    type="number"
                    value={item.porcentagem}
                    onChange={(e) => updateItem(index, "porcentagem", parseInt(e.target.value))}
                    placeholder="Porcentagem"
                  />
                  <Input
                    value={item.populacao}
                    onChange={(e) => updateItem(index, "populacao", e.target.value)}
                    placeholder="População"
                  />
                  <Button variant="ghost" onClick={() => deleteItem(index)}><X size={16} /></Button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.regiao}</span>
                    <div className="text-right">
                      <div className="font-bold text-primary">{item.porcentagem}%</div>
                      <div className="text-xs text-muted-foreground">{item.populacao} hab.</div>
                    </div>
                  </div>
                  <Progress value={item.porcentagem} className="h-2" />
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}