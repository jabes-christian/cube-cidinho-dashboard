import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DataPoint = Record<string, any>;

interface EditableChartProps {
  data: DataPoint[];
  onUpdate: (newData: DataPoint[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
}

export function EditableChart({ data, onUpdate, isEditing, isAdmin }: EditableChartProps) {
  if (!isEditing || !isAdmin) {
    return (
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cidinho" stroke="hsl(var(--primary))" strokeWidth={3} name="Cidinho Santos" />
            <Line type="monotone" dataKey="otavio" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Otávio Pivetta" />
            <Line type="monotone" dataKey="wellington" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Wellington Fagundes" />
            <Line type="monotone" dataKey="max" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Max Russi" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  const handleChange = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onUpdate(newData);
  };

  const addPoint = () => {
    const newPoint = { mes: '', cidinho: '', otavio: '', wellington: '', max: '' };
    onUpdate([...data, newPoint]);
  };

  const removePoint = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onUpdate(newData);
  };

  return (
    <div className="space-y-4">
      {data.map((point, index) => (
        <div key={index} className="flex space-x-2">
          <Input
            value={point.mes}
            onChange={(e) => handleChange(index, 'mes', e.target.value)}
            placeholder="Mês"
          />
          <Input
            value={point.cidinho}
            onChange={(e) => handleChange(index, 'cidinho', e.target.value)}
            placeholder="Cidinho"
          />
          <Input
            value={point.otavio}
            onChange={(e) => handleChange(index, 'otavio', e.target.value)}
            placeholder="Otavio"
          />
          <Input
            value={point.wellington}
            onChange={(e) => handleChange(index, 'wellington', e.target.value)}
            placeholder="Wellington"
          />
          <Input
            value={point.max}
            onChange={(e) => handleChange(index, 'max', e.target.value)}
            placeholder="Max"
          />
          <Button variant="destructive" onClick={() => removePoint(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button onClick={addPoint}>
        <Plus className="h-4 w-4 mr-2" /> Adicionar Ponto
      </Button>
    </div>
  );
}