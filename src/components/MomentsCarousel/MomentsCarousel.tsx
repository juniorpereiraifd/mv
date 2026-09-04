import type { SharedMoment } from '../../data/merchants'
import ReviewCard from '../../pages/RestaurantPage/ReviewCard/ReviewCard'
import './MomentsCarousel.css'

interface MomentsCarouselProps {
  /** Momentos compartilhados da loja – cards do rail (design 68:3911). */
  moments: SharedMoment[]
}

/**
 * MomentsCarousel – rail horizontal de "Momentos compartilhados"
 * (design 68:3911): apenas o rail de ReviewCard, sem título nem link "Ver
 * todos". Rola com snap horizontal quando os cards excedem o container.
 *
 * O rail vive DENTRO da seção "Avaliações" (`#avaliacoes`), como último filho.
 */
export default function MomentsCarousel({ moments }: MomentsCarouselProps) {
  return (
    <div className="moments-carousel__rail">
      {moments.map((moment) => (
        <ReviewCard key={moment.author} moment={moment} />
      ))}
    </div>
  )
}
