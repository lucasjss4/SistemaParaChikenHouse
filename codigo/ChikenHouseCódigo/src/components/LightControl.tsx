import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Lightbulb, Sun, Moon, Clock, Power } from 'lucide-react';
import { Badge } from './ui/badge';

export function LightControl() {
  const [autoMode, setAutoMode] = useState(true);
  const [lightOn, setLightOn] = useState(true);
  const [turnOnTime, setTurnOnTime] = useState('06:00');
  const [turnOffTime, setTurnOffTime] = useState('20:00');

  const granjas = [
    { id: 1, name: 'Granja A', lights: 3, status: 'on', brightness: 100 },
    { id: 2, name: 'Granja B', lights: 3, status: 'on', brightness: 100 },
    { id: 3, name: 'Granja C', lights: 3, status: 'on', brightness: 100 },
    { id: 4, name: 'Granja D', lights: 3, status: 'on', brightness: 100 },
  ];

  const handleSaveSchedule = () => {
    alert(`Horários salvos!\nLigar: ${turnOnTime}\nDesligar: ${turnOffTime}`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Controle de Iluminação</h1>
        <p className="text-gray-600 mt-1">Gerencie a iluminação artificial das granjas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Control Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Configuração de Horários</CardTitle>
            <CardDescription>
              Configure os horários de ligar e desligar as luzes automaticamente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Power className="h-5 w-5 text-gray-600" />
                <div>
                  <Label>Modo Automático</Label>
                  <p className="text-xs text-gray-500">Controle baseado em horários programados</p>
                </div>
              </div>
              <Switch checked={autoMode} onCheckedChange={setAutoMode} />
            </div>

            {autoMode && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="turnOn" className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-amber-600" />
                    Horário de Ligar
                  </Label>
                  <Input
                    id="turnOn"
                    type="time"
                    value={turnOnTime}
                    onChange={(e) => setTurnOnTime(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Luzes acenderão automaticamente</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="turnOff" className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-blue-600" />
                    Horário de Desligar
                  </Label>
                  <Input
                    id="turnOff"
                    type="time"
                    value={turnOffTime}
                    onChange={(e) => setTurnOffTime(e.target.value)}
                  />
                  <p className="text-xs text-gray-500">Luzes apagarão automaticamente</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button onClick={handleSaveSchedule} className="w-full md:w-auto">
                Salvar Configurações
              </Button>
            </div>

            {!autoMode && (
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-3">
                  <Lightbulb className={lightOn ? 'h-6 w-6 text-amber-600' : 'h-6 w-6 text-gray-400'} />
                  <div>
                    <p className="text-gray-900">Controle Manual</p>
                    <p className="text-xs text-gray-600">Ligar/desligar todas as luzes</p>
                  </div>
                </div>
                <Switch checked={lightOn} onCheckedChange={setLightOn} />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status Atual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
              <Lightbulb className="h-12 w-12 text-amber-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600">Modo</p>
              <p className="text-gray-900">{autoMode ? 'Automático' : 'Manual'}</p>
              <Badge className="mt-3 bg-green-600">Todas Ativas</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Próxima Ação</span>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-900">20:00</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Consumo Hoje</span>
                <span className="text-gray-900">145 kWh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total de Lâmpadas</span>
                <span className="text-gray-900">12 unidades</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Granjas Status */}
      <Card>
        <CardHeader>
          <CardTitle>Status por Granja</CardTitle>
          <CardDescription>Visualize o status de iluminação de cada granja</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {granjas.map((granja) => (
              <div key={granja.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900">{granja.name}</h3>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Lâmpadas</span>
                    <span className="text-gray-900">{granja.lights}/3</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Intensidade</span>
                    <span className="text-gray-900">{granja.brightness}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-600 h-2 rounded-full"
                      style={{ width: `${granja.brightness}%` }}
                    />
                  </div>
                </div>
                <Badge variant="outline" className="w-full justify-center bg-green-50 text-green-700 border-green-200">
                  Funcionando
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
