import { Card } from "@/components/ui/card";
import { EditableField } from "@/components/ui/EditableField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

import { LucideIcon } from "lucide-react";

type SwotItem = string;

type SwotSectionProps = {
  title: string;
  icon: LucideIcon;
  color: string;
  items: SwotItem[];
  onUpdateItems: (newItems: SwotItem[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function SwotSection({ title, icon: Icon, color, items, onUpdateItems, isEditing, isAdmin }: SwotSectionProps) {
  const addItem = () => {
    onUpdateItems([...items, "Novo item"]);
  };

  const deleteItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    onUpdateItems(updated);
  };

  const updateItem = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = value;
    onUpdateItems(updated);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5" style={{ color }} />
        <h3 className="text-lg font-semibold" style={{ color }}>{title}</h3>
        {isEditing && isAdmin && (
          <Button variant="ghost" size="sm" onClick={addItem}>
            <Plus className="h-4 w-4" />
          </Button>
        )}
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: color }}></div>
            <EditableField
              label=""
              value={item}
              onChange={(value) => updateItem(index, value)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              className="flex-1"
            />
            {isEditing && isAdmin && (
              <Button variant="ghost" size="sm" onClick={() => deleteItem(index)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}