import { useDraggable } from "@dnd-kit/core";
import styles from "./DraggableCard.module.scss";
const { DateTime } = require("luxon");

function DraggableCard(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
  });
  const style =  {
        transform: transform?`translate3d(${transform.x}px, ${transform.y}px, 0)`:undefined,
        scale:transform? "1.1":undefined,
      }

  // const size = props.size === "min" ? { height: 40+'px' } : { height: "fit-content" };

  return (
    <div
      className={styles.card}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    onClick={props.onClick}>
      <h2 className={styles.card__title}>
        <span className={styles.card__number}>#{props.task.id}</span> {props.task.title}
      </h2>
      <p>{props.task.description}</p>
      <p>Created {DateTime.fromSeconds(+props.task.created).setLocale("ru").toLocaleString()}</p>
      <p>Deadline {DateTime.fromSeconds(+props.task.deadline).setLocale("ru").toLocaleString()}</p>
      <p>In work {Math.round(DateTime.now().diff(DateTime.fromSeconds(+props.task.created), "days").days)} days</p>
      <p
        style={{
          color: props.task.priority === "low" ? "green" : props.task.priority === "middle" ? "orange" : "red",
        }}>
        Priority: {props.task.priority}
      </p>
    </div>
  );
}

export default DraggableCard;
