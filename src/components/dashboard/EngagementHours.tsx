import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type HourItem = { hora: string; engajamento: number };

type EngagementHoursProps = {
  items: HourItem[];
  onUpdateItems: (newItems: HourItem[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function EngagementHours({ items, onUpdateItems, isEditing, isAdmin }: EngagementHoursProps) {
  const addItem = () => {
    onUpdateItems([...items, { hora: "Nova Hora", engajamento: 0 }]);
  };

  const updateItem = (index: number, field: keyof HourItem, value: string | number) => {
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
        <CardTitle>Horários de Maior Engajamento</CardTitle>
        {isAdmin && isEditing && <Button onClick={addItem}>Adicionar Horário</Button>}
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={items}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="engajamento" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {isEditing && isAdmin && (
          <div className="space-y-2 mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={item.hora}
                  onChange={(e) => updateItem(index, "hora", e.target.value)}
                  className="w-32"
                />
                <Input
                  type="number"
                  value={item.engajamento}
                  onChange={(e) => updateItem(index, "engajamento", parseInt(e.target.value))}
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