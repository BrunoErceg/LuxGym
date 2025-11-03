import Animated from "@animations/Animate";

type CardProps = {
  title?: string;
  description?: string;
  icon?: string;
  animationDelay?: number;
};

function Card({ title, description, icon, animationDelay = 0 }: CardProps) {
  return (
    <Animated delay={animationDelay}>
      <div className="space-y-4">
        <img src={icon} className="size-24" />
        <h3>{title}</h3>
        <p className="text-light-dark">{description}</p>
      </div>
    </Animated>
  );
}

export default Card;
