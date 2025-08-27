import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from 'lucide-react';

type Item = Record<string, any>;

interface EditableListProps {
  items: Item[];
  onUpdate: (newItems: Item[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
  renderItem?: (item: Item) => React.ReactNode;
}

export function EditableList({ items, onUpdate, isEditing, isAdmin, renderItem }: EditableListProps) {
  if (!isEditing || !isAdmin) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index}>
            {renderItem ? renderItem(item) : <pre>{JSON.stringify(item)}</pre>}
          </div>
        ))}
      </div>
    );
  }

  const handleChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    onUpdate(newItems);
  };

  const addItem = () => {
    onUpdate([...items, {}]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onUpdate(newItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border p-4 rounded-md">
          {Object.keys(item).map((field) => (
            <Input
              key={field}
              value={item[field]}
              onChange={(e) => handleChange(index, field, e.target.value)}
              placeholder={field}
              className="mb-2"
            />
          ))}
          <Button variant="destructive" onClick={() => removeItem(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button onClick={addItem}>
        <Plus className="h-4 w-4 mr-2" /> Adicionar Item
      </Button>
    </div>
  );
}