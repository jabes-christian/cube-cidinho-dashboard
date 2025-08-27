import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, TrendingUp, AlertCircle, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";
import { EditableList } from "@/components/ui/EditableList";
import { EditableTable } from "@/components/ui/EditableTable";

export function PautasNarrativas() {
  const { isAdmin } = useAuth();
  const initialData = {
    titulo: "Pautas e Narrativas",
    descricao: "Inteligência estratégica baseada na opinião política, sentimentos média e mídia digital em MT",
    pautasPopulacao: [
      { tema: "Emprego", categoria: "Desenvolvimento", relevancia: 95, sentimento: 85 },
      { tema: "Educação", categoria: "Desenvolvimento", relevancia: 92, sentimento: 67 },
      { tema: "Segurança", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 },
      { tema: "Saúde", categoria: "Essencial", relevancia: 67, sentimento: 85 },
      { tema: "Meio Ambiente", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 },
      { tema: "Estradas", categoria: "Desenvolvimento", relevancia: 85, sentimento: 85 }
    ],
    narrativasDominantes: [
      {
        titulo: "MT precisa de mais parcerias significativas",
        subtitulo: "32 de anos fontes ligadas",
        porcentagem: 90,
        descricao: "Saúde, Educação, economia"
      },
      {
        titulo: "Educação técnica como solução para o futuro",
        subtitulo: "18 de anos estudantes da região",
        porcentagem: 88,
        descricao: "Interiorização, Qualificação"
      },
      {
        titulo: "Recomendação",
        subtitulo: "Manter criação de conteúdo baseado na faceta",
        porcentagem: null,
        descricao: "Educação técnica - economia"
      },
      {
        titulo: "Segurança e prioridade nas periferias",
        subtitulo: "26 à 45 anos",
        porcentagem: 67,
        descricao: "Recursos, Sociedade"
      }
    ],
    sentimentoRegiao: [
      { cidade: "Cuiabá", positivo: 74, neutro: 16, negativo: 10 },
      { cidade: "Rondonópolis", positivo: 68, neutro: 22, negativo: 10 },
      { cidade: "Norte do MT", positivo: 71, neutro: 18, negativo: 11 },
      { cidade: "Oeste do MT", positivo: 69, neutro: 20, negativo: 11 },
      { cidade: "Sul do MT", positivo: 65, neutro: 24, negativo: 11 }
    ]
  };
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("pautas", initialData, isAdmin);

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Desenvolvimento": return "bg-primary text-primary-foreground";
      case "Essencial": return "bg-success text-success-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <EditableField
            label=""
            value={data.titulo}
            onChange={(value) => updateField("titulo", value)}
            isEditing={isEditing}
            isAdmin={isAdmin}
            className="text-2xl font-bold text-primary mb-2 text-center"
          />
          <EditableField
            label=""
            value={data.descricao}
            onChange={(value) => updateField("descricao", value)}
            isEditing={isEditing}
            isAdmin={isAdmin}
            multiline
            className="text-center"
          />
        </div>
        <div className="flex-1 flex justify-end">
          <EditButtons
            isEditing={isEditing}
            isAdmin={isAdmin}
            onEdit={() => setIsEditing(true)}
            onSave={saveData}
            onCancel={cancelEdit}
            onReset={resetData}
          />
        </div>
      </div>

      {/* Principais Pautas da População MT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
            <FileText className="h-5 w-5" />
            Principais Pautas da População MT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr justify-items-center w-full mx-auto">
            <EditableList
              items={data.pautasPopulacao}
              onUpdate={(updatedItems) => updateField('pautasPopulacao', updatedItems)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              renderItem={(item, index) => (
                <Card key={index} className="bg-primary text-primary-foreground p-4">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <EditableField
                          value={item.tema}
                          onChange={(value) => {
                            const updated = [...data.pautasPopulacao];
                            updated[index].tema = value;
                            updateField('pautasPopulacao', updated);
                          }}
                          isEditing={isEditing}
                          className="font-semibold"
                        />
                        <Badge className={getCategoriaColor(item.categoria)}>
                          <EditableField
                            value={item.categoria}
                            onChange={(value) => {
                              const updated = [...data.pautasPopulacao];
                              updated[index].categoria = value;
                              updateField('pautasPopulacao', updated);
                            }}
                            isEditing={isEditing}
                          />
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Relevância</span>
                          <EditableField
                            value={`${item.relevancia}%`}
                            onChange={(value) => {
                              const updated = [...data.pautasPopulacao];
                              updated[index].relevancia = parseInt(value);
                              updateField('pautasPopulacao', updated);
                            }}
                            isEditing={isEditing}
                          />
                        </div>
                        <Progress value={item.relevancia} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Sentimento</span>
                          <EditableField
                            value={`${item.sentimento}%`}
                            onChange={(value) => {
                              const updated = [...data.pautasPopulacao];
                              updated[index].sentimento = parseInt(value);
                              updateField('pautasPopulacao', updated);
                            }}
                            isEditing={isEditing}
                          />
                        </div>
                        <Progress value={item.sentimento} className="h-2" />
                      </div>
                      <div className="text-xs">
                        <p>Região da Pesquisa</p>
                        <p className="font-medium">Todo MT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Análise de Narrativas Dominantes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
            <TrendingUp className="h-5 w-5" />
            Análise de Narrativas Dominantes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <EditableList
              items={data.narrativasDominantes}
              onUpdate={(updatedItems) => updateField('narrativasDominantes', updatedItems)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              renderItem={(item, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <EditableField
                        value={item.titulo}
                        onChange={(value) => {
                          const updated = [...data.narrativasDominantes];
                          updated[index].titulo = value;
                          updateField('narrativasDominantes', updated);
                        }}
                        isEditing={isEditing}
                        className="text-lg font-semibold text-primary"
                      />
                      <EditableField
                        value={item.subtitulo}
                        onChange={(value) => {
                          const updated = [...data.narrativasDominantes];
                          updated[index].subtitulo = value;
                          updateField('narrativasDominantes', updated);
                        }}
                        isEditing={isEditing}
                        className="text-sm text-muted-foreground"
                      />
                      <div className="flex flex-wrap gap-2">
                        {item.descricao.split(', ').map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            <EditableField
                              value={tag}
                              onChange={(value) => {
                                const updated = [...data.narrativasDominantes];
                                const tags = updated[index].descricao.split(', ');
                                tags[tagIndex] = value;
                                updated[index].descricao = tags.join(', ');
                                updateField('narrativasDominantes', updated);
                              }}
                              isEditing={isEditing}
                            />
                          </Badge>
                        ))}
                      </div>
                      {item.titulo.includes("Recomendação") && (
                        <div className="flex items-center gap-2 text-warning">
                          <AlertCircle className="h-4 w-4" />
                          <EditableField
                            value="Agir em cima da sua área de conhecimento"
                            onChange={(value) => { /* Lógica se necessário */ }}
                            isEditing={isEditing}
                            className="text-sm"
                          />
                        </div>
                      )}
                    </div>
                    {item.porcentagem && (
                      <div className="text-right">
                        <EditableField
                          value={`${item.porcentagem}%`}
                          onChange={(value) => {
                            const updated = [...data.narrativasDominantes];
                            updated[index].porcentagem = parseInt(value);
                            updateField('narrativasDominantes', updated);
                          }}
                          isEditing={isEditing}
                          className="text-2xl font-bold text-primary"
                        />
                        <div className="text-xs text-muted-foreground">Força</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            />
        </CardContent>
      </Card>

      {/* Sentimento por Região */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
            <MapPin className="h-5 w-5" />
            Sentimento por Região
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <EditableTable
              data={data.sentimentoRegiao}
              columns={[
                { key: 'cidade', label: 'Cidade' },
                { key: 'positivo', label: 'Positivo' },
                { key: 'neutro', label: 'Neutro' },
                { key: 'negativo', label: 'Negativo' }
              ]}
              onUpdate={(key, index, value) => {
                const updated = [...data.sentimentoRegiao];
                updated[index][key] = key === 'cidade' ? value : parseInt(value);
                updateField('sentimentoRegiao', updated);
              }}
              isEditing={isEditing}
              renderRow={(row, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <EditableField
                      value={row.cidade}
                      onChange={(value) => {
                        const updated = [...data.sentimentoRegiao];
                        updated[index].cidade = value;
                        updateField('sentimentoRegiao', updated);
                      }}
                      isEditing={isEditing}
                      className="font-medium"
                    />
                    <div className="flex items-center gap-4 text-sm">
                      <EditableField
                        value={`${row.positivo}%`}
                        onChange={(value) => {
                          const updated = [...data.sentimentoRegiao];
                          updated[index].positivo = parseInt(value);
                          updateField('sentimentoRegiao', updated);
                        }}
                        isEditing={isEditing}
                        className="text-success"
                      />
                      <EditableField
                        value={`${row.neutro}%`}
                        onChange={(value) => {
                          const updated = [...data.sentimentoRegiao];
                          updated[index].neutro = parseInt(value);
                          updateField('sentimentoRegiao', updated);
                        }}
                        isEditing={isEditing}
                        className="text-muted-foreground"
                      />
                      <EditableField
                        value={`${row.negativo}%`}
                        onChange={(value) => {
                          const updated = [...data.sentimentoRegiao];
                          updated[index].negativo = parseInt(value);
                          updateField('sentimentoRegiao', updated);
                        }}
                        isEditing={isEditing}
                        className="text-destructive"
                      />
                    </div>
                  </div>
                  <div className="flex w-full h-3 rounded-full overflow-hidden">
                    <div className="bg-success" style={{ width: `${row.positivo}%` }} />
                    <div className="bg-muted" style={{ width: `${row.neutro}%` }} />
                    <div className="bg-destructive" style={{ width: `${row.negativo}%` }} />
                  </div>
                </div>
              )}
            />
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded" />
              <span>Positivo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded" />
              <span>Neutro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded" />
              <span>Negativo</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
