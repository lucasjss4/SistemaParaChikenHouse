import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Download, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Reports() {
  const feedConsumptionData = [
    { day: 'Seg', amount: 441 },
    { day: 'Ter', amount: 438 },
    { day: 'Qua', amount: 445 },
    { day: 'Qui', amount: 442 },
    { day: 'Sex', amount: 440 },
    { day: 'Sáb', amount: 435 },
    { day: 'Dom', amount: 433 },
  ];

  const energyConsumptionData = [
    { day: 'Seg', kwh: 148 },
    { day: 'Ter', kwh: 145 },
    { day: 'Qua', kwh: 150 },
    { day: 'Qui', kwh: 147 },
    { day: 'Sex', kwh: 145 },
    { day: 'Sáb', kwh: 143 },
    { day: 'Dom', kwh: 142 },
  ];

  const feedingTimesData = [
    { time: '08:00', granja_a: 45, granja_b: 42, granja_c: 46, granja_d: 47 },
    { time: '12:00', granja_a: 50, granja_b: 48, granja_c: 52, granja_d: 55 },
    { time: '18:00', granja_a: 48, granja_b: 45, granja_c: 49, granja_d: 53 },
  ];

  const handleDownloadReport = (type: string) => {
    alert(`Relatório de ${type} será baixado em formato PDF`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1>Relatórios</h1>
            <p className="text-gray-600 mt-1">Análise detalhada de consumo e operações</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Última semana</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList>
          <TabsTrigger value="feed">Consumo de Ração</TabsTrigger>
          <TabsTrigger value="energy">Consumo de Energia</TabsTrigger>
          <TabsTrigger value="schedule">Horários de Alimentação</TabsTrigger>
        </TabsList>

        {/* Feed Consumption Report */}
        <TabsContent value="feed" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Consumo de Ração - Última Semana</CardTitle>
                  <CardDescription>Quantidade diária de ração distribuída (kg)</CardDescription>
                </div>
                <Button onClick={() => handleDownloadReport('Consumo de Ração')} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={feedConsumptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#f59e0b" name="Ração (kg)" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Média Diária</p>
                  <p className="text-gray-900 mt-1">440 kg</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Semanal</p>
                  <p className="text-gray-900 mt-1">3,074 kg</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Maior Consumo</p>
                  <p className="text-gray-900 mt-1">445 kg (Qua)</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Menor Consumo</p>
                  <p className="text-gray-900 mt-1">433 kg (Dom)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análise por Granja</CardTitle>
              <CardDescription>Consumo médio diário de cada granja</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Granja A', 'Granja B', 'Granja C', 'Granja D'].map((granja, index) => {
                  const consumption = [117, 105, 112, 125][index];
                  const percentage = (consumption / 440) * 100;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900">{granja}</span>
                        <span className="text-gray-600">{consumption} kg/dia ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-600 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Energy Consumption Report */}
        <TabsContent value="energy" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Consumo de Energia - Última Semana</CardTitle>
                  <CardDescription>Energia utilizada para iluminação (kWh)</CardDescription>
                </div>
                <Button onClick={() => handleDownloadReport('Consumo de Energia')} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={energyConsumptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="kwh" stroke="#3b82f6" name="Consumo (kWh)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Média Diária</p>
                  <p className="text-gray-900 mt-1">145.7 kWh</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Semanal</p>
                  <p className="text-gray-900 mt-1">1,020 kWh</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Custo Estimado</p>
                  <p className="text-gray-900 mt-1">R$ 612</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Horas de Operação</p>
                  <p className="text-gray-900 mt-1">14h/dia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalhamento de Uso</CardTitle>
              <CardDescription>Horários de maior e menor consumo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <p className="text-sm text-gray-600">Horário de Pico</p>
                  <p className="text-gray-900 mt-1">06:00 - 20:00</p>
                  <p className="text-sm text-gray-600 mt-3">Consumo médio</p>
                  <p className="text-gray-900">12 kWh/hora</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <p className="text-sm text-gray-600">Período Inativo</p>
                  <p className="text-gray-900 mt-1">20:00 - 06:00</p>
                  <p className="text-sm text-gray-600 mt-3">Economia</p>
                  <p className="text-gray-900">120 kWh/semana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feeding Schedule Report */}
        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Horários de Alimentação</CardTitle>
                  <CardDescription>Distribuição de ração por horário e granja (kg)</CardDescription>
                </div>
                <Button onClick={() => handleDownloadReport('Horários de Alimentação')} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={feedingTimesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="granja_a" fill="#f59e0b" name="Granja A" />
                  <Bar dataKey="granja_b" fill="#3b82f6" name="Granja B" />
                  <Bar dataKey="granja_c" fill="#10b981" name="Granja C" />
                  <Bar dataKey="granja_d" fill="#8b5cf6" name="Granja D" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">1ª Refeição (08:00)</p>
                  <p className="text-gray-900 mt-1">180 kg total</p>
                  <p className="text-xs text-gray-500 mt-1">40.8% do consumo diário</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">2ª Refeição (12:00)</p>
                  <p className="text-gray-900 mt-1">205 kg total</p>
                  <p className="text-xs text-gray-500 mt-1">46.6% do consumo diário</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">3ª Refeição (18:00)</p>
                  <p className="text-gray-900 mt-1">195 kg total</p>
                  <p className="text-xs text-gray-500 mt-1">44.3% do consumo diário</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo de Alimentação</CardTitle>
              <CardDescription>Estatísticas gerais do período</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Total de Distribuições</p>
                    <p className="text-gray-900 mt-1">21 distribuições esta semana</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                    <p className="text-gray-900 mt-1">100% - Todas as distribuições completadas</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Pontualidade</p>
                    <p className="text-gray-900 mt-1">98.5% - Dentro do horário programado</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
