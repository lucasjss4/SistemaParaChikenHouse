import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Lightbulb, UtensilsCrossed, AlertCircle, CheckCircle, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function LogsHistory() {
  const [searchDate, setSearchDate] = useState('2025-11-14');

  const feedLogs = [
    { time: '08:00:00', granja: 'Granja A', amount: 45, status: 'success', chickens: 650 },
    { time: '08:00:30', granja: 'Granja B', amount: 42, status: 'success', chickens: 580 },
    { time: '08:01:00', granja: 'Granja C', amount: 46, status: 'success', chickens: 600 },
    { time: '08:01:30', granja: 'Granja D', amount: 47, status: 'success', chickens: 620 },
    { time: '12:00:00', granja: 'Granja A', amount: 50, status: 'success', chickens: 650 },
    { time: '12:00:30', granja: 'Granja B', amount: 48, status: 'success', chickens: 580 },
    { time: '12:01:00', granja: 'Granja C', amount: 52, status: 'success', chickens: 600 },
    { time: '12:01:30', granja: 'Granja D', amount: 55, status: 'success', chickens: 620 },
  ];

  const lightLogs = [
    { time: '06:00:00', action: 'Ligar', granja: 'Todas', status: 'success', consumption: 12 },
    { time: '20:00:00', action: 'Desligar', granja: 'Todas', status: 'success', consumption: 0 },
    { time: '06:00:00', action: 'Ligar', granja: 'Granja A', status: 'success', consumption: 3 },
    { time: '06:00:00', action: 'Ligar', granja: 'Granja B', status: 'success', consumption: 3 },
    { time: '06:00:00', action: 'Ligar', granja: 'Granja C', status: 'success', consumption: 3 },
    { time: '06:00:00', action: 'Ligar', granja: 'Granja D', status: 'success', consumption: 3 },
  ];

  const systemLogs = [
    { time: '06:00:00', event: 'Sistema iniciado', type: 'info', details: 'Modo automático ativado' },
    { time: '08:00:00', event: 'Distribuição de ração iniciada', type: 'info', details: 'Todas as granjas' },
    { time: '08:02:00', event: 'Distribuição de ração concluída', type: 'success', details: '180 kg distribuídos' },
    { time: '12:00:00', event: 'Distribuição de ração iniciada', type: 'info', details: 'Todas as granjas' },
    { time: '12:02:00', event: 'Distribuição de ração concluída', type: 'success', details: '205 kg distribuídos' },
    { time: '14:30:00', event: 'Alerta de estoque baixo', type: 'warning', details: 'Granja B - 78%' },
    { time: '20:00:00', event: 'Luzes desligadas automaticamente', type: 'success', details: 'Todas as granjas' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Logs e Histórico</h1>
        <p className="text-gray-600 mt-1">Visualize todos os eventos e ações do sistema</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Filtros</CardTitle>
              <CardDescription>Selecione a data para visualizar os logs</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <Input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="w-auto"
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feed">
            <UtensilsCrossed className="h-4 w-4 mr-2" />
            Alimentação
          </TabsTrigger>
          <TabsTrigger value="lights">
            <Lightbulb className="h-4 w-4 mr-2" />
            Iluminação
          </TabsTrigger>
          <TabsTrigger value="system">
            <AlertCircle className="h-4 w-4 mr-2" />
            Sistema
          </TabsTrigger>
        </TabsList>

        {/* Feed Logs */}
        <TabsContent value="feed">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Distribuição de Ração</CardTitle>
              <CardDescription>Histórico completo de todas as distribuições</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-3">
                  {feedLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                          <UtensilsCrossed className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-gray-900">{log.granja}</p>
                            <Badge variant="outline" className="text-xs">
                              {log.chickens} galinhas
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {log.amount} kg distribuídos às {log.time}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Sucesso
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Light Logs */}
        <TabsContent value="lights">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Iluminação</CardTitle>
              <CardDescription>Histórico de ativação e desativação das luzes</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-3">
                  {lightLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                            log.action === 'Ligar' ? 'bg-amber-100' : 'bg-blue-100'
                          }`}
                        >
                          <Lightbulb
                            className={`h-5 w-5 ${
                              log.action === 'Ligar' ? 'text-amber-600' : 'text-blue-600'
                            }`}
                          />
                        </div>
                        <div>
                          <p className="text-gray-900">{log.action} - {log.granja}</p>
                          <p className="text-sm text-gray-500">
                            {log.time} - Consumo: {log.consumption} kWh
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Sucesso
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Logs */}
        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>Registro do Sistema</CardTitle>
              <CardDescription>Eventos gerais e alertas do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-3">
                  {systemLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                            log.type === 'success'
                              ? 'bg-green-100'
                              : log.type === 'warning'
                              ? 'bg-amber-100'
                              : 'bg-blue-100'
                          }`}
                        >
                          {log.type === 'success' ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertCircle
                              className={`h-5 w-5 ${
                                log.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                              }`}
                            />
                          )}
                        </div>
                        <div>
                          <p className="text-gray-900">{log.event}</p>
                          <p className="text-sm text-gray-500">
                            {log.time} - {log.details}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          log.type === 'success'
                            ? 'bg-green-50 text-green-700 border-green-200'
                            : log.type === 'warning'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }
                      >
                        {log.type === 'success'
                          ? 'Sucesso'
                          : log.type === 'warning'
                          ? 'Aviso'
                          : 'Info'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
