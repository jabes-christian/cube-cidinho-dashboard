import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";

export function EstrategiaDigital() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("estrategia", {
    titulo: "Estratégia Digital",
    descricao: "Análise estratégica baseada na opinião pública e nas mídias sociais",
    tema1: "Desenvolvimento do Campo",
    tema2: "Tecnologia de MT",
    tema3: "Agricultura Familiar",
    tema4: "Turismo Ecológico",
    temaSensivel1: "Reforma Tributária Estadual",
    temaSensivel2: "Concessões de Serviços",
    temaSensivel3: "Mineração vs Pequenos Produtores",
    temaSensivel4: "FETAG MT",
    estrategia1: "Situação Estratégica para a MT",
    estrategia2: "Educação Inovadora",
    estrategia3: "Saúde Humanizada",
    acao1_1: "Foco em sustentabilidade para o agro",
    acao1_2: "Criar parcerias",
    acao1_3: "Unir cooperativas",
    acao1_4: "Fortalecer a região",
    acao1_5: "Mensagens sobre desenvolvimento local",
    acao2_1: "Tecnologia na educação para a região agrícola",
    acao2_2: "Parcerias",
    acao2_3: "Institutos federais",
    acao2_4: "Educação continuada",
    acao2_5: "Sistema de bolsa de estudos",
    acao3_1: "Telemedicina para regiões rurais e urbanas",
    acao3_2: "Grupos prioritários",
    acao3_3: "Unidades de atenção",
    acao3_4: "Médicos sem fronteiras",
    acao3_5: "Parcerias e grupos especiais"
  });





  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {!isEditing ? (
            <>
              <h1 className="text-3xl font-bold text-primary mb-2">{data.titulo}</h1>
              <p className="text-muted-foreground">{data.descricao}</p>
            </>
          ) : (
            <>
              <EditableField
                label="Título da Seção"
                value={data.titulo}
                onChange={(value) => updateField("titulo", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
                className="mb-2"
              />
              <EditableField
                label="Descrição"
                value={data.descricao}
                onChange={(value) => updateField("descricao", value)}
                isEditing={isEditing}
                isAdmin={isAdmin}
              />
            </>
          )}
        </div>
        <EditButtons
          isEditing={isEditing}
          isAdmin={isAdmin}
          onEdit={() => setIsEditing(true)}
          onSave={saveData}
          onCancel={cancelEdit}
          onReset={resetData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temas Emergentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <CheckCircle className="h-5 w-5" />
              Temas Emergentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.tema1}
                  onChange={(value) => updateField("tema1", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-success">85%</span>
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full transition-all duration-300" style={{ width: "85%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.tema2}
                  onChange={(value) => updateField("tema2", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-success">81%</span>
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full transition-all duration-300" style={{ width: "81%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.tema3}
                  onChange={(value) => updateField("tema3", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-warning">79%</span>
                  <CheckCircle className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full transition-all duration-300" style={{ width: "79%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.tema4}
                  onChange={(value) => updateField("tema4", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-warning">68%</span>
                  <CheckCircle className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full transition-all duration-300" style={{ width: "68%" }} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Temas Sensíveis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Temas Sensíveis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.temaSensivel1}
                  onChange={(value) => updateField("temaSensivel1", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-accent">76%</span>
                  <AlertTriangle className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full transition-all duration-300" style={{ width: "76%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.temaSensivel2}
                  onChange={(value) => updateField("temaSensivel2", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-accent">71%</span>
                  <AlertTriangle className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full transition-all duration-300" style={{ width: "71%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.temaSensivel3}
                  onChange={(value) => updateField("temaSensivel3", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-destructive">74%</span>
                  <TrendingDown className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full transition-all duration-300" style={{ width: "74%" }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <EditableField
                  label=""
                  value={data.temaSensivel4}
                  onChange={(value) => updateField("temaSensivel4", value)}
                  isEditing={isEditing}
                  isAdmin={isAdmin}
                  className="flex-1"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-accent">78%</span>
                  <AlertTriangle className="h-4 w-4" />
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full transition-all duration-300" style={{ width: "78%" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estratégias de Comunicação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Estratégia de Comunicação por Pauta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <EditableField
                    label=""
                    value={data.estrategia1}
                    onChange={(value) => updateField("estrategia1", value)}
                    isEditing={isEditing}
                    isAdmin={isAdmin}
                    className="flex-1"
                  />
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    90%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: "90%" }} />
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1">
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao1_1}
                      onChange={(value) => updateField("acao1_1", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao1_2}
                      onChange={(value) => updateField("acao1_2", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao1_3}
                      onChange={(value) => updateField("acao1_3", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao1_4}
                      onChange={(value) => updateField("acao1_4", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao1_5}
                      onChange={(value) => updateField("acao1_5", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <EditableField
                    label=""
                    value={data.estrategia2}
                    onChange={(value) => updateField("estrategia2", value)}
                    isEditing={isEditing}
                    isAdmin={isAdmin}
                    className="flex-1"
                  />
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    85%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: "85%" }} />
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1">
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao2_1}
                      onChange={(value) => updateField("acao2_1", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao2_2}
                      onChange={(value) => updateField("acao2_2", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao2_3}
                      onChange={(value) => updateField("acao2_3", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao2_4}
                      onChange={(value) => updateField("acao2_4", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao2_5}
                      onChange={(value) => updateField("acao2_5", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <EditableField
                    label=""
                    value={data.estrategia3}
                    onChange={(value) => updateField("estrategia3", value)}
                    isEditing={isEditing}
                    isAdmin={isAdmin}
                    className="flex-1"
                  />
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    77%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: "77%" }} />
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1">
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao3_1}
                      onChange={(value) => updateField("acao3_1", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao3_2}
                      onChange={(value) => updateField("acao3_2", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao3_3}
                      onChange={(value) => updateField("acao3_3", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao3_4}
                      onChange={(value) => updateField("acao3_4", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-xs flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <EditableField
                      label=""
                      value={data.acao3_5}
                      onChange={(value) => updateField("acao3_5", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
