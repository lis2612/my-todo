import { useDraggable } from "@dnd-kit/core";
import styles from "./DraggableCard.module.scss";

function DraggableCard(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        scale: "1.1",
      }
    : undefined;

  return (
    <div
      className={styles.card}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}>
      <h2 className={styles.card__title}>{props.task.title}</h2>
      <p>{props.task.description}</p>
    </div>
  );
}

export default DraggableCard;
