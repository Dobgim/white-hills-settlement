import {
  AlertTriangle,
  ArrowLeftRight,
  Clock,
  CreditCard,
  FileText,
  Globe,
  Landmark,
  Repeat,
  Scale,
  ShieldCheck,
  Smartphone,
  Target,
  WalletCards,
  Zap,
} from 'lucide-react'

const map = {
  card: CreditCard,
  wallet: WalletCards,
  landmark: Landmark,
  arrows: ArrowLeftRight,
  scale: Scale,
  file: FileText,
  zap: Zap,
  target: Target,
  shield: ShieldCheck,
  globe: Globe,
  phone: Smartphone,
  repeat: Repeat,
  alert: AlertTriangle,
  clock: Clock,
}

export default function Icon({ name, ...props }) {
  const C = map[name] ?? FileText
  return <C {...props} />
}
