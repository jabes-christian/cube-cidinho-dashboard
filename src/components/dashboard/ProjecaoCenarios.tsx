import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { CheckCircle, AlertTriangle, TrendingUp, Users, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditableData } from "@/hooks/useEditableData";
import { EditButtons } from "@/components/ui/EditButtons";
import { EditableField } from "@/components/ui/EditableField";
import { EditableList } from "@/components/ui/EditableList";
import { EditableChart } from "@/components/ui/EditableChart";
import { EditableTable } from "@/components/ui/EditableTable";

export function ProjecaoCenarios() {
  const { isAdmin } = useAuth();
  const { data, isEditing, setIsEditing, updateField, saveData, cancelEdit, resetData } = useEditableData("projecao", {
      titulo: "Projeção de Cenários",
      descricao: "Análise detalhada da viabilidade e cenários competitivos para a eleição de Governo",
      ponto1: "Forte presença digital e engajamento jovem",
      ponto2: "Propostas inovadoras para educação e tecnologia",
      ponto3: "Histórico de transparência e liderança",
      ponto4: "Apoio consolidado no interior do estado",
      desafio1: "Primeira candidatura ao Governo",
      desafio2: "Necessidade de maior base do Estado",
      desafio3: "Competição com políticos tradicionais",
      desafio4: "Recursos da campanha limitados",
      probabilidade: "42",
      votosProjetados: "650.000",
      cenarios: [
        { nome: "Otimista", percentual: 50, cor: "bg-success", descricao: "Cenários atentos aos momentos para aproveitamento" },
        { nome: "Realista", percentual: 43, cor: "bg-warning", descricao: "Manutenção do crescimento atual" },
        { nome: "Pessimista", percentual: 35, cor: "bg-destructive", descricao: "Amplo crescimento dos rivais" }
      ],
      concorrentes: [
        { nome: "OTÁVIO PIVETTA", votos: "325.000" },
        { nome: "WELLINGTON FAGUNDES", votos: "280.000" },
        { nome: "MAX RUSSI", votos: "195.000" }
      ],
      competitividade: [
        { regiao: "Cuiabá e Região Metropolitana", cuiaba: 45, norte: 25, centro: 20, oeste: 19, max: 19 },
        { regiao: "Norte do Estado", cuiaba: 40, norte: 25, centro: 20, oeste: 19, max: 19 },
        { regiao: "Sul do Estado", cuiaba: 45, norte: 20, centro: 23, oeste: 19, max: 19 },
        { regiao: "Leste do Estado", cuiaba: 40, norte: 20, centro: 20, oeste: 23, max: 19 },
        { regiao: "Oeste do Estado", cuiaba: 45, norte: 20, centro: 20, oeste: 23, max: 19 }
      ],
      evolucaoIntencoes: [
        { mes: "Jan", cidinho: 28, otavio: 32, wellington: 25, max: 15 },
        { mes: "Fev", cidinho: 31, otavio: 30, wellington: 24, max: 15 },
        { mes: "Mar", cidinho: 35, otavio: 29, wellington: 23, max: 13 },
        { mes: "Abr", cidinho: 38, otavio: 28, wellington: 22, max: 12 },
        { mes: "Mai", cidinho: 42, otavio: 27, wellington: 21, max: 10 },
        { mes: "Jun", cidinho: 45, otavio: 26, wellington: 20, max: 9 }
      ]
    }, isAdmin);

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informações do Candidato */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
              <Users className="h-5 w-5" />
              CIDINHO SANTOS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  PONTOS FORTES
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-success">•</span>
                    <EditableField
                      label=""
                      value={data.ponto1}
                      onChange={(value) => updateField("ponto1", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-success">•</span>
                    <EditableField
                      label=""
                      value={data.ponto2}
                      onChange={(value) => updateField("ponto2", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-success">•</span>
                    <EditableField
                      label=""
                      value={data.ponto3}
                      onChange={(value) => updateField("ponto3", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-success">•</span>
                    <EditableField
                      label=""
                      value={data.ponto4}
                      onChange={(value) => updateField("ponto4", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-warning mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  DESAFIOS A SEREM SUPERADOS
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <EditableField
                      label=""
                      value={data.desafio1}
                      onChange={(value) => updateField("desafio1", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <EditableField
                      label=""
                      value={data.desafio2}
                      onChange={(value) => updateField("desafio2", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <EditableField
                      label=""
                      value={data.desafio3}
                      onChange={(value) => updateField("desafio3", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <EditableField
                      label=""
                      value={data.desafio4}
                      onChange={(value) => updateField("desafio4", value)}
                      isEditing={isEditing}
                      isAdmin={isAdmin}
                      className="flex-1"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Probabilidade de Eleição */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-lg font-semibold text-primary mb-2">PROBABILIDADE DE ELEIÇÃO</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <EditableField
              value={data.probabilidade}
              onChange={(value) => updateField("probabilidade", value)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              className="text-6xl font-bold text-primary mb-2"
            />
            <p className="text-sm text-muted-foreground">Baseado em tendências atuais</p>
          </CardContent>
        </Card>
      </div>

      {/* Votos Projetados */}
      <Card>
        <CardHeader>
          <CardTitle>VOTOS PROJETADOS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <EditableField
              value={data.votosProjetados}
              onChange={(value) => updateField("votosProjetados", value)}
              isEditing={isEditing}
              isAdmin={isAdmin}
              className="text-4xl font-bold text-primary"
            />
            <p className="text-muted-foreground">votos estimados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {data.concorrentes.map((concorrente, index) => (
              <Card key={index} className="bg-muted">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm mb-2">{concorrente.nome}</h3>
                  <div className="text-xl font-bold">{concorrente.votos}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projeção de Cenários */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            PROJEÇÃO DE CENÁRIOS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.cenarios.map((cenario, index) => (
              <div key={index} className="text-center space-y-3">
                <h3 className="font-semibold">{cenario.nome.toUpperCase()}</h3>
                <div className="text-3xl font-bold">{cenario.percentual}%</div>
                <div className={`w-full h-2 rounded-full ${cenario.cor}`} />
                <p className="text-xs text-muted-foreground">{cenario.descricao}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ranking de Competitividade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            RANKING DE COMPETITIVIDADE POR REGIÃO MT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Região</th>
                  <th className="text-center p-2">Cuiabá</th>
                  <th className="text-center p-2">Otávio</th>
                  <th className="text-center p-2">Wellington</th>
                  <th className="text-center p-2">Max</th>
                </tr>
              </thead>
              <tbody>
                {data.competitividade.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{item.regiao}</td>
                    <td className="text-center p-2">{item.cuiaba}%</td>
                    <td className="text-center p-2">{item.norte}%</td>
                    <td className="text-center p-2">{item.centro}%</td>
                    <td className="text-center p-2">{item.max}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Evolução das Intenções de Voto */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução das Intenções de Voto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.evolucaoIntencoes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cidinho" stroke="hsl(var(--primary))" strokeWidth={3} name="Cidinho Santos" />
                <Line type="monotone" dataKey="otavio" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Otávio Pivetta" />
                <Line type="monotone" dataKey="wellington" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Wellington Fagundes" />
                <Line type="monotone" dataKey="max" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Max Russi" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
