import { Button } from "@/components/ui/button";
import { Save, X, Edit, RotateCcw } from "lucide-react";

interface EditButtonsProps {
  isEditing: boolean;
  isAdmin: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onReset?: () => void;
  className?: string;
}

export const EditButtons: React.FC<EditButtonsProps> = ({
  isEditing,
  isAdmin,
  onEdit,
  onSave,
  onCancel,
  onReset,
  className = ""
}) => {
  if (!isAdmin) return null;

  return (
    <div className={`flex gap-2 ${className}`}>
      {!isEditing ? (
        <Button
          variant="outline"
          size="sm"
          onClick={onEdit}
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          Editar
        </Button>
      ) : (
        <>
          <Button
            size="sm"
            onClick={onSave}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Salvar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCancel}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Cancelar
          </Button>
          {onReset && (
            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Resetar
            </Button>
          )}
        </>
      )}
    </div>
  );
};
