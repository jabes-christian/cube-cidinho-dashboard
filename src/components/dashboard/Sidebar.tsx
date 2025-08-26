import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Map, 
  Calendar, 
  Settings, 
  FileText,
  Eye,
  Zap,
  Target,
  Globe,
  LogOut,
  User,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  user: any;
  onLogout: () => void;
  isAdmin: boolean;
}

const menuItems = [
  { id: "dashboard", label: "Performance Digital", icon: BarChart3 },
  { id: "radar", label: "Radar de Monitoramento", icon: Eye },
  { id: "mapeamento", label: "Mapeamento Concorrentes", icon: Users },
  { id: "analise", label: "Análise Posts e Sentimentos", icon: MessageSquare },
  { id: "estrategia", label: "Estratégia Digital", icon: Calendar },
  { id: "insights", label: "Insights Táticos", icon: Zap },
  { id: "projecao", label: "Projeção de Cenários", icon: TrendingUp },
  { id: "pautas", label: "Pautas + Narrativas", icon: FileText },
  { id: "termometro", label: "Termômetro Popular", icon: Target },
  { id: "observatorio", label: "Observatório Social", icon: Globe },
  { id: "base", label: "Base Eleitoral", icon: Map },
];

export function Sidebar({ activeSection, onSectionChange, user, onLogout, isAdmin }: SidebarProps) {
  return (
    <div className="w-80 bg-primary h-screen overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-primary-light">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.svg" alt="Cube Logo" className="w-12 h-auto" />
          <div>
            <h1 className="text-primary-foreground font-bold text-lg">CIDINHO SANTOS</h1>
            <p className="text-primary-light text-sm">Dashboard de Performance</p>
          </div>
        </div>
        
        <div className="bg-primary-light/20 rounded-lg p-3">
          <div className="text-primary-foreground text-sm font-medium mb-1">
            CANDIDATURA GOVERNO MT 2026
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-primary-foreground/10 rounded p-2 text-center">
              <div className="text-primary-foreground font-bold text-wrap">ALCANCE TOTAL</div>
            </div>
            <div className="bg-primary-foreground/10 rounded p-2 text-center">
              <div className="text-primary-foreground font-bold text-wrap">MAIS ENGAJAMENTO</div>
            </div>
            <div className="bg-primary-foreground/10 rounded p-2 text-center">
              <div className="text-primary-foreground font-bold text-wrap">SENTIMENTO POSITIVO</div>
            </div>
            <div className="bg-primary-foreground/10 rounded p-2 text-center">
              <div className="text-primary-foreground font-bold text-wrap">AVALIAÇÃO DE DESEMPENHO</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                "hover:bg-primary-light/20",
                activeSection === item.id 
                  ? "bg-primary-foreground text-primary font-medium" 
                  : "text-primary-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-primary-light">
        <div className="flex items-center gap-3 mb-3 p-3 bg-primary-light/20 rounded-lg">
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            {isAdmin ? <Shield className="h-4 w-4 text-primary-foreground" /> : <User className="h-4 w-4 text-primary-foreground" />}
          </div>
          <div className="flex-1">
            <div className="text-primary-foreground text-sm font-medium">{user?.username}</div>
            <div className="text-primary-light text-xs capitalize">{user?.role}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <button 
            onClick={() => onSectionChange("configuracoes")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground hover:bg-primary-light/20 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span className="text-sm">Configurações</span>
          </button>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm">Sair</span>
          </button>
        </div>
      </div>
    </div>
  );
}
