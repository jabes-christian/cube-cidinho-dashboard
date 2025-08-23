import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  isAdmin: boolean;
  type?: "text" | "textarea" | "number";
  placeholder?: string;
  className?: string;
  multiline?: boolean;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onChange,
  isEditing,
  isAdmin,
  type = "text",
  placeholder,
  className,
  multiline = false
}) => {
  const [localValue, setLocalValue] = useState(value);

  // Sincronizar o valor local quando o valor externo mudar
  useEffect(() => {
    if (!isEditing) {
      setLocalValue(value);
    }
  }, [value, isEditing]);

  const handleSave = () => {
    onChange(localValue);
  };

  const handleCancel = () => {
    setLocalValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleBlur = () => {
    if (localValue !== value) {
      handleSave();
    }
  };

  if (!isAdmin || !isEditing) {
    return (
      <div className={cn("space-y-2", className)}>
        {label && (
          <Label className="text-sm font-medium text-muted-foreground">
            {label}
          </Label>
        )}
        <div className="p-3 bg-muted rounded-md min-h-[40px] flex items-center">
          <span className="text-sm">
            {value || <span className="text-muted-foreground">Não informado</span>}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label className="text-sm font-medium text-muted-foreground">
          {label}
        </Label>
      )}
      {multiline ? (
        <Textarea
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="min-h-[100px]"
        />
      ) : (
        <Input
          type={type}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
