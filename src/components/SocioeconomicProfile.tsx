import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useEditableData } from '../hooks/useEditableData';
import { useAuth } from '../contexts/AuthContext';

type SocioeconomicItem = {
  class: string;
  percentage: number;
};

type SocioeconomicData = SocioeconomicItem[];

const SocioeconomicProfile: React.FC = () => {
  const { isAdmin } = useAuth();
  const { data, updateData, isEditing } = useEditableData<SocioeconomicData>('socioeconomicProfile', []);

  const [newClass, setNewClass] = useState('');
  const [newPercentage, setNewPercentage] = useState(0);

  const addItem = () => {
    if (newClass && newPercentage > 0) {
      updateData([...data, { class: newClass, percentage: newPercentage }]);
      setNewClass('');
      setNewPercentage(0);
    }
  };

  const updateItem = (index: number, field: 'class' | 'percentage', value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    updateData(updated);
  };

  const deleteItem = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    updateData(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Perfil Socioeconômico</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {isEditing ? (
                <>
                  <Input
                    value={item.class}
                    onChange={(e) => updateItem(index, 'class', e.target.value)}
                    placeholder="Classe"
                  />
                  <Input
                    type="number"
                    value={item.percentage}
                    onChange={(e) => updateItem(index, 'percentage', parseFloat(e.target.value))}
                    placeholder="Porcentagem"
                  />
                  <Button variant="destructive" onClick={() => deleteItem(index)}>Excluir</Button>
                </>
              ) : (
                <p>{item.class}: {item.percentage}%</p>
              )}
            </div>
          ))}
          {isEditing && isAdmin && (
            <div className="flex space-x-4">
              <Input
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
                placeholder="Nova Classe"
              />
              <Input
                type="number"
                value={newPercentage}
                onChange={(e) => setNewPercentage(parseFloat(e.target.value))}
                placeholder="Porcentagem"
              />
              <Button onClick={addItem}>Adicionar</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocioeconomicProfile;