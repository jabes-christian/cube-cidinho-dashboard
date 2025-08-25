import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { EditableField } from "@/components/ui/EditableField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";

type Action = string;

type Strategy = {
  name: string;
  percentage: number;
  actions: Action[];
};

type CommunicationStrategiesProps = {
  strategies: Strategy[];
  onUpdateStrategies: (newStrategies: Strategy[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function CommunicationStrategies({ strategies, onUpdateStrategies, isEditing, isAdmin }: CommunicationStrategiesProps) {
  const addStrategy = () => {
    onUpdateStrategies([...strategies, { name: "Nova Estratégia", percentage: 0, actions: [] }]);
  };

  const deleteStrategy = (index: number) => {
    onUpdateStrategies(strategies.filter((_, i) => i !== index));
  };

  const updateStrategy = (index: number, field: 'name' | 'percentage', value: any) => {
    const updated = [...strategies];
    updated[index] = { ...updated[index], [field]: field === 'percentage' ? Number(value) : value };
    onUpdateStrategies(updated);
  };

  const addAction = (stratIndex: number) => {
    const updated = [...strategies];
    updated[stratIndex].actions = [...updated[stratIndex].actions, "Nova Ação"];
    onUpdateStrategies(updated);
  };

  const deleteAction = (stratIndex: number, actionIndex: number) => {
    const updated = [...strategies];
    updated[stratIndex].actions = updated[stratIndex].actions.filter((_, i) => i !== actionIndex);
    onUpdateStrategies(updated);
  };

  const updateAction = (stratIndex: number, actionIndex: number, value: string) => {
    const updated = [...strategies];
    updated[stratIndex].actions[actionIndex] = value;
    onUpdateStrategies(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Estratégia de Comunicação por Pauta
          {isEditing && isAdmin && (
            <Button variant="ghost" size="sm" onClick={addStrategy}>
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, stratIndex) => (
          <div key={stratIndex} className="space-y-4">
            <div className="flex items-center gap-2">
              <EditableField
                value={strategy.name}
                onChange={(value) => updateStrategy(stratIndex, 'name', value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="flex-1"
              />
              <Input
                type="number"
                value={strategy.percentage}
                onChange={(e) => updateStrategy(stratIndex, 'percentage', e.target.value)}
                disabled={!isEditing || !isAdmin}
                className="w-20"
              />
              {isEditing && isAdmin && (
                <Button variant="ghost" size="sm" onClick={() => deleteStrategy(stratIndex)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              )}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${strategy.percentage}%` }} />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground mb-2">Ações prioritárias:</p>
              <ul className="space-y-1">
                {strategy.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      value={action}
                      onChange={(value) => updateAction(stratIndex, actionIndex, value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                    {isEditing && isAdmin && (
                      <Button variant="ghost" size="sm" onClick={() => deleteAction(stratIndex, actionIndex)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
              {isEditing && isAdmin && (
                <Button variant="ghost" size="sm" onClick={() => addAction(stratIndex)}>
                  <Plus className="h-4 w-4" /> Adicionar Ação
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}