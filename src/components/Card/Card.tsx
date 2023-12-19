import Avatar from '../ui/Avatar/Avatar';
import Typography from '../ui/Typography/Typography';
import { shortText, isLongText } from '../../../utils/utils';
import './Card.scss';
import Tooltip from '../ui/Tooltip/Tooltip';
import { memo } from 'react';

interface CardProps {
  name: string;
  skill: string;
  email: string;
  phone: string;
  src: string;
}

const Card = memo(function Card({ name, skill, email, phone, src }: CardProps) {
  return (
    <article className="card">
      <Avatar src={src} alt={name} />

      <Typography variant="body1" component="h4">
        {isLongText(name) ? <Tooltip>{name}</Tooltip> : name}
      </Typography>

      <div className="card__info">
        <Typography variant="body1" component="p">
          {isLongText(skill) ? <Tooltip>{skill}</Tooltip> : skill}
        </Typography>
        <Typography variant="body1" component="p">
          {isLongText(email) ? <Tooltip>{email}</Tooltip> : email}
        </Typography>
        <Typography variant="body1" component="p">
          {isLongText(phone) ? <Tooltip>{phone}</Tooltip> : phone}
        </Typography>
      </div>
    </article>
  );
});

export default Card;
