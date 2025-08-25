import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useEditableData } from '../hooks/useEditableData';
import { useAuth } from '../contexts/AuthContext';

type InterestItem = {
  interest: string;
  percentage: number;
};

type InterestsData = InterestItem[];

const Interests: React.FC = () => {
  const { isAdmin } = useAuth();
  const { data, updateData, isEditing } = useEditableData<InterestsData>('interests', []);

  const [newInterest, setNewInterest] = useState('');
  const [newPercentage, setNewPercentage] = useState(0);

  const addItem = () => {
    if (newInterest && newPercentage > 0) {
      updateData([...data, { interest: newInterest, percentage: newPercentage }]);
      setNewInterest('');
      setNewPercentage(0);
    }
  };

  const updateItem = (index: number, field: 'interest' | 'percentage', value: string | number) => {
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
        <CardTitle>Interesses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {isEditing ? (
                <>
                  <Input
                    value={item.interest}
                    onChange={(e) => updateItem(index, 'interest', e.target.value)}
                    placeholder="Interesse"
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
                <p>{item.interest}: {item.percentage}%</p>
              )}
            </div>
          ))}
          {isEditing && isAdmin && (
            <div className="flex space-x-4">
              <Input
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                placeholder="Novo Interesse"
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

export default Interests;