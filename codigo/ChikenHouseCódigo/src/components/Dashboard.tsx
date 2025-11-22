import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AlertCircle, Lightbulb, UtensilsCrossed, Egg, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

export function Dashboard() {
  const stats = [
    {
      title: 'Total de Galinhas',
      value: '2,450',
      change: '+120 este mês',
      icon: Egg,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      title: 'Consumo de Ração Hoje',
      value: '385 kg',
      change: 'Meta: 400kg',
      icon: UtensilsCrossed,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Luzes Ativas',
      value: '12/12',
      change: 'Funcionando normalmente',
      icon: Lightbulb,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Alertas Ativos',
      value: '2',
      change: 'Requer atenção',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ];

  const recentActivities = [
    { time: '08:00', action: 'Luzes ligadas automaticamente', status: 'success' },
    { time: '08:30', action: 'Distribuição de ração - 180kg', status: 'success' },
    { time: '12:00', action: 'Distribuição de ração - 205kg', status: 'success' },
    { time: '14:30', action: 'Alerta: Sensor de ração granja B baixo', status: 'warning' },
    { time: '18:00', action: 'Distribuição de ração planejada', status: 'pending' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do sistema de gerenciamento da granja</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="mt-2 text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="text-sm text-gray-500 min-w-[50px]">{activity.time}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                  </div>
                  {activity.status === 'success' && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Concluído
                    </Badge>
                  )}
                  {activity.status === 'warning' && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Atenção
                    </Badge>
                  )}
                  {activity.status === 'pending' && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Pendente
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status da Granja */}
        <Card>
          <CardHeader>
            <CardTitle>Status das Granjas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Granja A', 'Granja B', 'Granja C', 'Granja D'].map((granja, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{granja}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {index === 1 ? '580 galinhas - Ração: 78%' : `${600 + index * 50} galinhas - Ração: ${85 + index * 3}%`}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${index === 1 ? 'bg-amber-500' : 'bg-green-500'}`} />
                    <span className="text-sm text-gray-600">
                      {index === 1 ? 'Atenção' : 'Normal'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Produção de Ovos</p>
                <p className="text-gray-900">1,850 ovos/dia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-amber-600" />
              <div>
                <p className="text-sm text-gray-600">Consumo de Energia</p>
                <p className="text-gray-900">145 kWh hoje</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Estoque de Ração</p>
                <p className="text-gray-900">4,200 kg disponível</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
