import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertTriangle, AlertCircle, Info, CheckCircle, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

export function Alerts() {
  const activeAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Nível de ração baixo - Granja B',
      description: 'O nível de ração está em 78%. Recomenda-se reabastecimento.',
      time: '14:30',
      granja: 'Granja B',
      priority: 'medium',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Sensor de temperatura elevada',
      description: 'Temperatura acima do normal na Granja C (28°C).',
      time: '13:15',
      granja: 'Granja C',
      priority: 'medium',
    },
  ];

  const resolvedAlerts = [
    {
      id: 3,
      type: 'success',
      title: 'Manutenção concluída - Sistema de iluminação',
      description: 'Manutenção preventiva das lâmpadas da Granja A concluída com sucesso.',
      time: '11:00',
      granja: 'Granja A',
      resolvedBy: 'João Silva',
    },
    {
      id: 4,
      type: 'success',
      title: 'Reabastecimento de ração',
      description: 'Estoque de ração reabastecido. Nível atual: 95%.',
      time: '09:30',
      granja: 'Todas',
      resolvedBy: 'Maria Santos',
    },
    {
      id: 5,
      type: 'success',
      title: 'Falha de conexão resolvida',
      description: 'Conexão com sensor IoT da Granja D restabelecida.',
      time: 'Ontem 18:45',
      granja: 'Granja D',
      resolvedBy: 'Sistema',
    },
  ];

  const systemNotifications = [
    {
      id: 6,
      type: 'info',
      title: 'Próxima manutenção programada',
      description: 'Manutenção preventiva agendada para amanhã às 08:00.',
      time: 'Hoje',
    },
    {
      id: 7,
      type: 'info',
      title: 'Atualização de software disponível',
      description: 'Nova versão do sistema de gerenciamento disponível.',
      time: 'Hoje',
    },
  ];

  const handleResolveAlert = (id: number) => {
    alert(`Alerta ${id} marcado como resolvido!`);
  };

  const handleDismissAlert = (id: number) => {
    alert(`Alerta ${id} dispensado.`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Alertas e Notificações</h1>
        <p className="text-gray-600 mt-1">Monitore falhas e eventos importantes do sistema</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alertas Ativos</p>
                <p className="text-gray-900 mt-1">{activeAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolvidos Hoje</p>
                <p className="text-gray-900 mt-1">2</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Críticos</p>
                <p className="text-gray-900 mt-1">0</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Notificações</p>
                <p className="text-gray-900 mt-1">{systemNotifications.length}</p>
              </div>
              <Info className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Alertas Ativos
            </CardTitle>
            <CardDescription>Requerem atenção imediata</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {activeAlerts.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <p>Nenhum alerta ativo</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-1">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-gray-900">{alert.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {alert.granja}
                              </Badge>
                              <span className="text-xs text-gray-500">{alert.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDismissAlert(alert.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          onClick={() => handleResolveAlert(alert.id)}
                          className="flex-1"
                        >
                          Resolver
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Resolved Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Alertas Resolvidos
            </CardTitle>
            <CardDescription>Histórico de resoluções recentes</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {resolvedAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border-l-4 border-green-500 bg-green-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-gray-900">{alert.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Badge variant="outline" className="text-xs bg-white">
                            {alert.granja}
                          </Badge>
                          <span className="text-xs text-gray-500">{alert.time}</span>
                          <span className="text-xs text-gray-500">• Por: {alert.resolvedBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* System Notifications */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Notificações do Sistema
          </CardTitle>
          <CardDescription>Informações gerais e atualizações</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {systemNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" onClick={() => handleDismissAlert(notification.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
