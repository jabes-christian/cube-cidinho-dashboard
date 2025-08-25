import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type GenderItem = { genero: string; porcentagem: number; cor: string };

type GenderDistributionProps = {
  items: GenderItem[];
  onUpdateItems: (newItems: GenderItem[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function GenderDistribution({ items, onUpdateItems, isEditing, isAdmin }: GenderDistributionProps) {
  const addItem = () => {
    onUpdateItems([...items, { genero: "Novo Gênero", porcentagem: 0, cor: "#000000" }]);
  };

  const updateItem = (index: number, field: keyof GenderItem, value: string | number) => {
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
        <CardTitle>Distribuição por Gênero</CardTitle>
        {isAdmin && isEditing && <Button onClick={addItem}>Adicionar Gênero</Button>}
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={items}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="porcentagem"
                label={({ genero, porcentagem }) => `${genero}: ${porcentagem}%`}
              >
                {items.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.cor} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {isEditing && isAdmin && (
          <div className="space-y-2 mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={item.genero}
                  onChange={(e) => updateItem(index, "genero", e.target.value)}
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
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}