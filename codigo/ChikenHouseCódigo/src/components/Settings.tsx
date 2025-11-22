import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { Settings as SettingsIcon, Bell, Database, Shield, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [criticalAlertsOnly, setCriticalAlertsOnly] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const handleSaveSettings = () => {
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Configurações</h1>
        <p className="text-gray-600 mt-1">Gerencie as configurações do sistema</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">
            <SettingsIcon className="h-4 w-4 mr-2" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="system">
            <Database className="h-4 w-4 mr-2" />
            Sistema
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="h-4 w-4 mr-2" />
            Usuários
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>Configure os parâmetros básicos da granja</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input id="company" defaultValue="Chicken House" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input id="location" defaultValue="São Paulo, Brasil" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Parâmetros da Granja</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="totalChickens">Total de Galinhas</Label>
                    <Input id="totalChickens" type="number" defaultValue="2450" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avgWeight">Peso Médio (kg)</Label>
                    <Input id="avgWeight" type="number" step="0.1" defaultValue="1.8" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="granjas">Número de Granjas</Label>
                    <Input id="granjas" type="number" defaultValue="4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedingsPerDay">Alimentações por Dia</Label>
                    <Input id="feedingsPerDay" type="number" defaultValue="3" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Horários Padrão</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="lightOn">Ligar Luzes</Label>
                    <Input id="lightOn" type="time" defaultValue="06:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lightOff">Desligar Luzes</Label>
                    <Input id="lightOff" type="time" defaultValue="20:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feeding1">1ª Alimentação</Label>
                    <Input id="feeding1" type="time" defaultValue="08:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feeding2">2ª Alimentação</Label>
                    <Input id="feeding2" type="time" defaultValue="12:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feeding3">3ª Alimentação</Label>
                    <Input id="feeding3" type="time" defaultValue="18:00" />
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveSettings}>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificações</CardTitle>
              <CardDescription>Configure como deseja receber alertas e notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <Label>Notificações por Email</Label>
                  <p className="text-sm text-gray-500">Receber alertas por email</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              {emailNotifications && (
                <div className="ml-4 space-y-2">
                  <Label htmlFor="email">Email para Notificações</Label>
                  <Input id="email" type="email" defaultValue="gestor@chickenhouse.com" />
                </div>
              )}

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <Label>Notificações Push</Label>
                  <p className="text-sm text-gray-500">Receber alertas no navegador</p>
                </div>
                <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <Label>Apenas Alertas Críticos</Label>
                  <p className="text-sm text-gray-500">Notificar apenas falhas graves</p>
                </div>
                <Switch checked={criticalAlertsOnly} onCheckedChange={setCriticalAlertsOnly} />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Tipos de Alertas</h3>
                <div className="space-y-3">
                  {[
                    'Falha na distribuição de ração',
                    'Falha no sistema de iluminação',
                    'Nível de estoque baixo',
                    'Sensor desconectado',
                    'Temperatura fora do padrão',
                    'Manutenção programada',
                  ].map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-900">{alert}</span>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleSaveSettings}>Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>Gerenciamento de dados e segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <Label>Backup Automático</Label>
                  <p className="text-sm text-gray-500">Backup diário às 03:00</p>
                </div>
                <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
              </div>

              <div className="p-4 border border-gray-200 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Último Backup</Label>
                    <p className="text-sm text-gray-500">14/11/2025 03:00</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Fazer Backup Agora
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Armazenamento de Dados</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Logs do Sistema</span>
                    <span className="text-sm text-gray-900">156 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Dados de Sensores</span>
                    <span className="text-sm text-gray-900">842 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Relatórios</span>
                    <span className="text-sm text-gray-900">234 MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12.3%' }} />
                  </div>
                  <p className="text-xs text-gray-500">1.23 GB de 10 GB utilizados</p>
                </div>
                <Button variant="outline">Limpar Dados Antigos</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Conexão IoT</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-900">Sensores de Ração</span>
                    </div>
                    <p className="text-xs text-gray-600">4/4 conectados</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-900">Sistema de Iluminação</span>
                    </div>
                    <p className="text-xs text-gray-600">12/12 lâmpadas ativas</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-900">Sensores de Temperatura</span>
                    </div>
                    <p className="text-xs text-gray-600">4/4 conectados</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-900">Gateway Principal</span>
                    </div>
                    <p className="text-xs text-gray-600">Online</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Settings */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Usuários</CardTitle>
              <CardDescription>Controle de acesso e permissões</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Usuários cadastrados no sistema</p>
                <Button>Adicionar Usuário</Button>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'José Silva', role: 'Gestor', email: 'jose@chickenhouse.com', status: 'active' },
                  { name: 'Maria Santos', role: 'Supervisor', email: 'maria@chickenhouse.com', status: 'active' },
                  { name: 'João Costa', role: 'Técnico', email: 'joao@chickenhouse.com', status: 'active' },
                  { name: 'Ana Oliveira', role: 'Logística', email: 'ana@chickenhouse.com', status: 'active' },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email} • {user.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-600">Ativo</Badge>
                      <Button variant="ghost" size="sm">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-gray-900">Permissões por Função</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 mb-2">Gestor</p>
                    <p className="text-sm text-gray-600">Acesso total ao sistema, incluindo configurações e relatórios</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 mb-2">Supervisor</p>
                    <p className="text-sm text-gray-600">Controle de iluminação, alimentação e visualização de logs</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 mb-2">Técnico</p>
                    <p className="text-sm text-gray-600">Visualização de alertas e status do sistema</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 mb-2">Logística</p>
                    <p className="text-sm text-gray-600">Acesso a relatórios de produção e estoque</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
