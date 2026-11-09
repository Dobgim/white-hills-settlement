import { ArrowLeftRight, FileText, Landmark, Scale, WalletCards } from 'lucide-react'

const map = {
  wallet: WalletCards,
  landmark: Landmark,
  arrows: ArrowLeftRight,
  scale: Scale,
  file: FileText,
}

export default function Icon({ name, ...props }) {
  const C = map[name] ?? FileText
  return <C {...props} />
}
