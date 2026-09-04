import reservasUrl from '../../assets/categories/reservas.png'
import brindarUrl from '../../assets/categories/brindar.png'
import kidsUrl from '../../assets/categories/kids.png'
import romanticoUrl from '../../assets/categories/romantico.png'
import cafesUrl from '../../assets/categories/cafes.png'
import saudavelUrl from '../../assets/categories/saudavel.png'
import './MerchantRail.css'

export interface CategoryItem {
  /** Rótulo da categoria, exibido sob o círculo. */
  label: string
  /** Ilustração 40×40 exibida dentro do círculo de 56px. */
  image: string
}

/**
 * Categorias do rail "Categorias" (Figma node 2:8356) – Reservas, Pra brindar,
 * Espaço Kids, Romântico, Cafés, Ao ar livre e Saudável. "Ao ar livre" reusa a
 * mesma ilustração de "Reservas", como no design.
 */
const CATEGORIES: CategoryItem[] = [
  { label: 'Reservas', image: reservasUrl },
  { label: 'Pra brindar', image: brindarUrl },
  { label: 'Espaço Kids', image: kidsUrl },
  { label: 'Romântico', image: romanticoUrl },
  { label: 'Cafés', image: cafesUrl },
  { label: 'Ao ar livre', image: reservasUrl },
  { label: 'Saudável', image: saudavelUrl },
]

export interface MerchantRailProps {
  /** Categorias a exibir; usa o conjunto do design por padrão. */
  items?: CategoryItem[]
}

/**
 * MerchantRail – trilho horizontal de categorias ("Categorias", Figma 2:8356).
 * Cada item é um círculo de 56px com fundo neutro (#f5f5f5) contendo a
 * ilustração 40×40 da categoria e, abaixo, o rótulo de 10px em destaque.
 * Rola horizontalmente quando o trilho excede a largura do container.
 */
export default function MerchantRail({ items = CATEGORIES }: MerchantRailProps) {
  return (
    <div className="merchant-rail">
      {items.map((item) => (
        <div key={item.label} className="merchant-rail__item">
          <div className="merchant-rail__thumb" role="img" aria-label={item.label}>
            <img className="merchant-rail__img" src={item.image} alt="" />
          </div>
          <span className="merchant-rail__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
