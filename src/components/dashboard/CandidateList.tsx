import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";

import { useState } from "react";

type Candidate = {
  name: string;
  partido: string;
  engajamento: number;
  alcance: number;
  performance: number;
  tendencia: "up" | "down";
};

type CandidateListProps = {
  candidates: Candidate[];
  onUpdateCandidates: (newCandidates: Candidate[]) => void;
  isEditing: boolean;
  isAdmin: boolean;
};

export function CandidateList({ candidates, onUpdateCandidates, isEditing, isAdmin }: CandidateListProps) {
  const [newCandidate, setNewCandidate] = useState<Partial<Candidate>>({});

  const addCandidate = () => {
    if (newCandidate.name && newCandidate.partido) {
      onUpdateCandidates([...candidates, { ...newCandidate, engajamento: newCandidate.engajamento ?? 0, alcance: newCandidate.alcance ?? 0, performance: newCandidate.performance ?? 0, tendencia: newCandidate.tendencia ?? "up" } as Candidate]);
      setNewCandidate({});
    }
  };

  const deleteCandidate = (index: number) => {
    const updated = candidates.filter((_, i) => i !== index);
    onUpdateCandidates(updated);
  };

  const updateCandidate = (index: number, field: keyof Candidate, value: any) => {
    const updated = [...candidates];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateCandidates(updated);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {candidates.map((candidate, index) => (
        <Card key={index} className={`p-4 ${index === 0 ? 'border-primary bg-primary/5' : ''}`}>
          <div className="text-center mb-4 flex justify-between items-start">
            {isEditing && isAdmin ? (
              <Input
                value={candidate.name}
                onChange={(e) => updateCandidate(index, 'name', e.target.value)}
                className="font-bold text-primary"
              />
            ) : (
              <h3 className="font-bold text-primary">{candidate.name}</h3>
            )}
            {isEditing && isAdmin && (
              <Button variant="ghost" size="sm" onClick={() => deleteCandidate(index)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            )}
          </div>
          
          <div className="mb-4">
            {isEditing && isAdmin ? (
              <Input
                value={candidate.partido}
                onChange={(e) => updateCandidate(index, 'partido', e.target.value)}
              />
            ) : (
              <Badge variant="outline" className="mt-1">{candidate.partido}</Badge>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Engajamento</span>
                {isEditing && isAdmin ? (
                  <Input
                    type="number"
                    value={candidate.engajamento}
                    onChange={(e) => updateCandidate(index, 'engajamento', Number(e.target.value))}
                    className="w-20"
                  />
                ) : (
                  <span className="font-medium">{candidate.engajamento}%</span>
                )}
              </div>
              <Progress value={candidate.engajamento} />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Alcance</span>
                {isEditing && isAdmin ? (
                  <Input
                    type="number"
                    value={candidate.alcance}
                    onChange={(e) => updateCandidate(index, 'alcance', Number(e.target.value))}
                    className="w-20"
                  />
                ) : (
                  <span className="font-medium">{candidate.alcance}%</span>
                )}
              </div>
              <Progress value={candidate.alcance} />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Performance</span>
                {isEditing && isAdmin ? (
                  <Input
                    type="number"
                    value={candidate.performance}
                    onChange={(e) => updateCandidate(index, 'performance', Number(e.target.value))}
                    className="w-20"
                  />
                ) : (
                  <span className="font-medium">{candidate.performance}%</span>
                )}
              </div>
              <Progress value={candidate.performance} />
            </div>

            <div className="flex items-center justify-center pt-2">
              {isEditing && isAdmin ? (
                <Select value={candidate.tendencia} onValueChange={(value) => updateCandidate(index, 'tendencia', value as "up" | "down")}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="up">Up</SelectItem>
                    <SelectItem value="down">Down</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                candidate.tendencia === "up" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )
              )}
            </div>
          </div>
        </Card>
      ))}
      {isEditing && isAdmin && (
        <Card className="p-4 border-dashed">
          <div className="text-center mb-4">
            <h3 className="font-bold text-muted-foreground">Novo Candidato</h3>
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Nome"
              value={newCandidate.name ?? ''}
              onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
            />
            <Input
              placeholder="Partido"
              value={newCandidate.partido ?? ''}
              onChange={(e) => setNewCandidate({ ...newCandidate, partido: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Engajamento"
              value={newCandidate.engajamento ?? ''}
              onChange={(e) => setNewCandidate({ ...newCandidate, engajamento: Number(e.target.value) })}
            />
            <Input
              type="number"
              placeholder="Alcance"
              value={newCandidate.alcance ?? ''}
              onChange={(e) => setNewCandidate({ ...newCandidate, alcance: Number(e.target.value) })}
            />
            <Input
              type="number"
              placeholder="Performance"
              value={newCandidate.performance ?? ''}
              onChange={(e) => setNewCandidate({ ...newCandidate, performance: Number(e.target.value) })}
            />
            <Select onValueChange={(value) => setNewCandidate({ ...newCandidate, tendencia: value as "up" | "down" })}>
              <SelectTrigger>
                <SelectValue placeholder="Tendência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="up">Up</SelectItem>
                <SelectItem value="down">Down</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addCandidate} className="w-full">
              <Plus className="h-4 w-4 mr-2" /> Adicionar
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}