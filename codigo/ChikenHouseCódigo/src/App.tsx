import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { LightControl } from "./components/LightControl";
import { FeedControl } from "./components/FeedControl";
import { LogsHistory } from "./components/LogsHistory";
import { Reports } from "./components/Reports";
import { Alerts } from "./components/Alerts";
import { Button } from "./components/ui/button";
import {
  Home,
  Lightbulb,
  UtensilsCrossed,
  ScrollText,
  FileText,
  Bell,
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const navigation = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "lights", label: "Iluminação", icon: Lightbulb },
    { id: "feed", label: "Alimentação", icon: UtensilsCrossed },
    { id: "logs", label: "Logs", icon: ScrollText },
    { id: "reports", label: "Relatórios", icon: FileText },
    { id: "alerts", label: "Alertas", icon: Bell },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "lights":
        return <LightControl />;
      case "feed":
        return <FeedControl />;
      case "logs":
        return <LogsHistory />;
      case "reports":
        return <Reports />;
      case "alerts":
        return <Alerts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-amber-600">Chicken House</h1>
          <p className="text-gray-500 text-sm mt-1">
            Sistema de Gerenciamento IoT
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={
                  currentPage === item.id
                    ? "secondary"
                    : "ghost"
                }
                className="w-full justify-start"
                onClick={() => setCurrentPage(item.id)}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-amber-50 p-3 rounded-lg">
            <p className="text-sm text-amber-800">
              Sistema Ativo
            </p>
            <p className="text-xs text-amber-600 mt-1">
              Todos os sensores conectados
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}