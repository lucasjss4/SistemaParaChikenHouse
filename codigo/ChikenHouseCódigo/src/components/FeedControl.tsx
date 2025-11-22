import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { UtensilsCrossed, Scale, Calculator, Clock } from 'lucide-react';
import { Badge } from './ui/badge';

export function FeedControl() {
  const [totalChickens, setTotalChickens] = useState('2450');
  const [averageWeight, setAverageWeight] = useState('1.8');
  const [feedingsPerDay, setFeedingsPerDay] = useState('3');
  const [calculatedFeed, setCalculatedFeed] = useState<number | null>(null);

  const calculateFeed = () => {
    // Fórmula: (número de galinhas * peso médio * 0.1) / número de refeições
    const chickens = parseInt(totalChickens);
    const weight = parseFloat(averageWeight);
    const feedings = parseInt(feedingsPerDay);
    const feedPerMeal = (chickens * weight * 0.1) / feedings;
    setCalculatedFeed(Math.round(feedPerMeal * 100) / 100);
  };

  const scheduledFeedings = [
    { time: '08:00', status: 'completed', amount: 180 },
    { time: '12:00', status: 'completed', amount: 205 },
    { time: '18:00', status: 'pending', amount: 195 },
  ];

  const granjaStatus = [
    { name: 'Granja A', feedLevel: 85, lastFed: '12:00', chickens: 650 },
    { name: 'Granja B', feedLevel: 78, lastFed: '12:00', chickens: 580 },
    { name: 'Granja C', feedLevel: 92, lastFed: '12:00', chickens: 600 },
    { name: 'Granja D', feedLevel: 88, lastFed: '12:00', chickens: 620 },
  ];

  const handleDistributeFeed = () => {
    alert('Distribuição de ração iniciada em todas as granjas!');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1>Controle de Alimentação</h1>
        <p className="text-gray-600 mt-1">Calcule e gerencie a distribuição de ração</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Calculator */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Calculadora de Ração</CardTitle>
            <CardDescription>
              Calcule a quantidade necessária de ração baseada nos parâmetros da granja
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chickens" className="flex items-center gap-2">
                  <UtensilsCrossed className="h-4 w-4 text-gray-600" />
                  Total de Galinhas
                </Label>
                <Input
                  id="chickens"
                  type="number"
                  value={totalChickens}
                  onChange={(e) => setTotalChickens(e.target.value)}
                  placeholder="2450"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight" className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-gray-600" />
                  Peso Médio (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  value={averageWeight}
                  onChange={(e) => setAverageWeight(e.target.value)}
                  placeholder="1.8"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedings" className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  Refeições/Dia
                </Label>
                <Input
                  id="feedings"
                  type="number"
                  value={feedingsPerDay}
                  onChange={(e) => setFeedingsPerDay(e.target.value)}
                  placeholder="3"
                />
              </div>
            </div>

            <Button onClick={calculateFeed} className="w-full md:w-auto">
              <Calculator className="mr-2 h-4 w-4" />
              Calcular Quantidade
            </Button>

            {calculatedFeed !== null && (
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <p className="text-sm text-gray-600 mb-2">Quantidade Recomendada por Refeição</p>
                <p className="text-green-900">{calculatedFeed} kg</p>
                <p className="text-sm text-gray-600 mt-3">
                  Total diário: <span className="text-gray-900">{(calculatedFeed * parseInt(feedingsPerDay)).toFixed(2)} kg</span>
                </p>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button onClick={handleDistributeFeed} variant="default" className="w-full md:w-auto">
                Distribuir Ração Agora
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Stock */}
        <Card>
          <CardHeader>
            <CardTitle>Estoque Atual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <UtensilsCrossed className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600">Disponível</p>
              <p className="text-gray-900">4,200 kg</p>
              <Badge className="mt-3 bg-green-600">Adequado</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Consumo Hoje</span>
                <span className="text-gray-900">385 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Média Diária</span>
                <span className="text-gray-900">441 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Duração Estimada</span>
                <span className="text-gray-900">9.5 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Feedings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Horários Programados</CardTitle>
            <CardDescription>Distribuições de ração do dia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scheduledFeedings.map((feeding, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-gray-900">{feeding.time}</p>
                      <p className="text-xs text-gray-500">{feeding.amount} kg</p>
                    </div>
                  </div>
                  {feeding.status === 'completed' ? (
                    <Badge className="bg-green-600">Concluído</Badge>
                  ) : (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Pendente
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status por Granja</CardTitle>
            <CardDescription>Nível de ração nos alimentadores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {granjaStatus.map((granja, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-900">{granja.name}</h3>
                    <Badge
                      variant="outline"
                      className={
                        granja.feedLevel > 80
                          ? 'bg-green-50 text-green-700 border-green-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }
                    >
                      {granja.feedLevel}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        granja.feedLevel > 80 ? 'bg-green-600' : 'bg-amber-600'
                      }`}
                      style={{ width: `${granja.feedLevel}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{granja.chickens} galinhas</span>
                    <span>Última alimentação: {granja.lastFed}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
