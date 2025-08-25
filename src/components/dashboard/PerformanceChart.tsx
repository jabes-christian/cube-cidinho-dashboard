import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

import { useState } from "react";

type PerformanceData = {
  mes: string;
  cidinho: number;
  concorrente1: number;
  concorrente2: number;
};

type PerformanceChartProps = {
  data: PerformanceData[];
  onUpdateData: (newData: PerformanceData[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function PerformanceChart({ data, onUpdateData, isEditing, isAdmin }: PerformanceChartProps) {
  const [newEntry, setNewEntry] = useState<Partial<PerformanceData>>({});

  const addEntry = () => {
    if (newEntry.mes) {
      onUpdateData([...data, { mes: newEntry.mes, cidinho: newEntry.cidinho ?? 0, concorrente1: newEntry.concorrente1 ?? 0, concorrente2: newEntry.concorrente2 ?? 0 }]);
      setNewEntry({});
    }
  };

  const deleteEntry = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onUpdateData(updated);
  };

  const updateEntry = (index: number, field: keyof PerformanceData, value: any) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: field === 'mes' ? value : Number(value) };
    onUpdateData(updated);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6 text-primary">Performance Digital Comparativa</h3>
      <div className="h-80 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cidinho" fill="hsl(var(--chart-1))" name="Cidinho Santos" />
            <Bar dataKey="concorrente1" fill="hsl(var(--chart-2))" name="Concorrente 1" />
            <Bar dataKey="concorrente2" fill="hsl(var(--chart-3))" name="Concorrente 2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {isEditing && isAdmin && (
        <div className="space-y-4">
          {data.map((entry, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input
                value={entry.mes}
                onChange={(e) => updateEntry(index, 'mes', e.target.value)}
                placeholder="Mês"
                className="w-24"
              />
              <Input
                type="number"
                value={entry.cidinho}
                onChange={(e) => updateEntry(index, 'cidinho', e.target.value)}
                placeholder="Cidinho"
                className="w-24"
              />
              <Input
                type="number"
                value={entry.concorrente1}
                onChange={(e) => updateEntry(index, 'concorrente1', e.target.value)}
                placeholder="Conc. 1"
                className="w-24"
              />
              <Input
                type="number"
                value={entry.concorrente2}
                onChange={(e) => updateEntry(index, 'concorrente2', e.target.value)}
                placeholder="Conc. 2"
                className="w-24"
              />
              <Button variant="ghost" size="sm" onClick={() => deleteEntry(index)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Mês"
              value={newEntry.mes ?? ''}
              onChange={(e) => setNewEntry({ ...newEntry, mes: e.target.value })}
              className="w-24"
            />
            <Input
              type="number"
              placeholder="Cidinho"
              value={newEntry.cidinho ?? ''}
              onChange={(e) => setNewEntry({ ...newEntry, cidinho: Number(e.target.value) })}
              className="w-24"
            />
            <Input
              type="number"
              placeholder="Conc. 1"
              value={newEntry.concorrente1 ?? ''}
              onChange={(e) => setNewEntry({ ...newEntry, concorrente1: Number(e.target.value) })}
              className="w-24"
            />
            <Input
              type="number"
              placeholder="Conc. 2"
              value={newEntry.concorrente2 ?? ''}
              onChange={(e) => setNewEntry({ ...newEntry, concorrente2: Number(e.target.value) })}
              className="w-24"
            />
            <Button onClick={addEntry}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}