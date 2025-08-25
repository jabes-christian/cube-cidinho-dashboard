import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { EditableField } from "@/components/ui/EditableField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

type Theme = {
  name: string;
  percentage: number;
  trend: 'up' | 'stable';
};

type EmergingThemesProps = {
  themes: Theme[];
  onUpdateThemes: (newThemes: Theme[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function EmergingThemes({ themes, onUpdateThemes, isEditing, isAdmin }: EmergingThemesProps) {
  const addTheme = () => {
    onUpdateThemes([...themes, { name: "Novo Tema", percentage: 0, trend: "stable" }]);
  };

  const deleteTheme = (index: number) => {
    onUpdateThemes(themes.filter((_, i) => i !== index));
  };

  const updateTheme = (index: number, field: keyof Theme, value: any) => {
    const updated = [...themes];
    updated[index] = { ...updated[index], [field]: field === 'percentage' ? Number(value) : value };
    onUpdateThemes(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-success">
          <CheckCircle className="h-5 w-5" />
          Temas Emergentes
          {isEditing && isAdmin && (
            <Button variant="ghost" size="sm" onClick={addTheme}>
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {themes.map((theme, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              <EditableField
                value={theme.name}
                onChange={(value) => updateTheme(index, 'name', value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
              <Input
                type="number"
                value={theme.percentage}
                onChange={(e) => updateTheme(index, 'percentage', e.target.value)}
                disabled={!isEditing || !isAdmin}
                className="w-20"
              />
              <select
                value={theme.trend}
                onChange={(e) => updateTheme(index, 'trend', e.target.value)}
                disabled={!isEditing || !isAdmin}
                className="w-24"
              >
                <option value="up">Up</option>
                <option value="stable">Stable</option>
              </select>
              {isEditing && isAdmin && (
                <Button variant="ghost" size="sm" onClick={() => deleteTheme(index)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              )}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: `${theme.percentage}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}