import { useState, useEffect } from 'react';

interface EditableData {
  [key: string]: any;
}

export const useEditableData = (section: string, initialData: EditableData = {}) => {
  const storageKey = `cube-pulse-${section}`;
  
  const [data, setData] = useState<EditableData>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data, storageKey]);

  const updateField = (field: string, value: any) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateMultipleFields = (updates: EditableData) => {
    setData(prev => ({
      ...prev,
      ...updates
    }));
  };

  const resetData = () => {
    setData(initialData);
    localStorage.removeItem(storageKey);
  };

  const saveData = () => {
    setIsEditing(false);
  };

  const cancelEdit = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setData(JSON.parse(saved));
    }
    setIsEditing(false);
  };

  return {
    data,
    isEditing,
    setIsEditing,
    updateField,
    updateMultipleFields,
    resetData,
    saveData,
    cancelEdit
  };
};
