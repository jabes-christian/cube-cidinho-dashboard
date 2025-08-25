import { useState, useEffect } from 'react';

interface EditableData {
  [key: string]: any;
}

export const useEditableData = (section: string, initialData: EditableData = {}, isAdmin: boolean) => {
  const storageKey = `cube-pulse-${section}`;
  
  const [data, setData] = useState<EditableData>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData;
  });

  const [isEditing, setIsEditingState] = useState(false);
  const setIsEditing = (value: boolean) => {
    if (value && !isAdmin) return;
    setIsEditingState(value);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data, storageKey]);

  const updateField = (field: string, value: any) => {
    if (!isAdmin) return;
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateMultipleFields = (updates: EditableData) => {
    if (!isAdmin) return;
    setData(prev => ({
      ...prev,
      ...updates
    }));
  };

  const resetData = () => {
    if (!isAdmin) return;
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
