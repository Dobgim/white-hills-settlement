import {
  ArrowLeftRight,
  FileText,
  Globe,
  Landmark,
  Scale,
  ShieldCheck,
  Smartphone,
  Target,
  WalletCards,
  Zap,
} from 'lucide-react'

const map = {
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
}

export default function Icon({ name, ...props }) {
  const C = map[name] ?? FileText
  return <C {...props} />
}
