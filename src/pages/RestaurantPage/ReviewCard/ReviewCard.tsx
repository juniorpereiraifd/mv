import Icon from '../../../components/Icon/Icon'
import restaurantImage from '../../../assets/card/restaurant.png'
import type { SharedMoment } from '../../../data/merchants'
import './ReviewCard.css'

interface ReviewCardProps {
  moment: SharedMoment
  /** Foto do momento – demo: a foto do restaurante (asset único da app). */
  image?: string
}

/**
 * ReviewCard – card de momento compartilhado (design 68:3912 "Card-Social L"):
 * coluna empilhada com (1) o card de foto 198×264 (só o badge "+N" sobreposto,
 * canto inferior direito), (2) user infos (avatar com iniciais, nome, estrela +
 * nota + tempo) e (3) o texto do comentário com "Ler mais". Nada além do "+N"
 * fica sobreposto à foto.
 */
export default function ReviewCard({ moment, image = restaurantImage }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-card__media">
        <img className="review-card__photo" src={image} alt="" />
        <div className="review-card__top-gradient" aria-hidden="true" />
        <div className="review-card__bottom-gradient" aria-hidden="true" />

        {moment.photoCount ? (
          <span className="review-card__photos">+ {moment.photoCount}</span>
        ) : null}
      </div>

      <div className="review-card__user">
        <span className="review-card__avatar">{moment.initials}</span>
        <div className="review-card__info">
          <span className="review-card__name">{moment.author}</span>
          <div className="review-card__meta">
            <Icon name="star" size={12} />
            <span>{moment.rating}</span>
            <span className="review-card__dot" aria-hidden="true">
              •
            </span>
            <span>{moment.timeAgo}</span>
          </div>
        </div>
      </div>

      <p className="review-card__text">
        {moment.text} <span className="review-card__more">Ler mais</span>
      </p>
    </article>
  )
}
