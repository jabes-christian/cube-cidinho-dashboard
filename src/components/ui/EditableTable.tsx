import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from 'lucide-react';

type Row = Record<string, any>;

interface EditableTableProps {
  data: Row[];
  onUpdate: (newData: Row[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
}

export function EditableTable({ data, onUpdate, isEditing, isAdmin }: EditableTableProps) {
  if (!isEditing || !isAdmin) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              {Object.keys(data[0] || {}).map((key) => (
                <th key={key} className="text-left p-2">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b">
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="p-2">{value}%</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const handleChange = (rowIndex: number, field: string, value: string) => {
    const newData = [...data];
    newData[rowIndex] = { ...newData[rowIndex], [field]: value };
    onUpdate(newData);
  };

  const addRow = () => {
    const newRow = Object.keys(data[0] || {}).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    onUpdate([...data, newRow]);
  };

  const removeRow = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onUpdate(newData);
  };

  return (
    <div className="space-y-4">
      <table className="w-full">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((field) => (
                <td key={field}>
                  <Input
                    value={row[field]}
                    onChange={(e) => handleChange(rowIndex, field, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <Button variant="destructive" onClick={() => removeRow(rowIndex)}>
                  <Trash2 />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={addRow}>
        <Plus /> Adicionar Linha
      </Button>
    </div>
  );
}