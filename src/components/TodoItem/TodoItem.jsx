import { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context';

import styles from './todoItem.module.css';

export const TodoItem = ({ userId, title, completed, id }) => {
	const { deleteTodo, requestTochangeTodo, isDeleting } = useContext(AppContext);

	return (
		<div
			className={`${styles.todo__item} ${
				completed ? styles.todo__done : styles.todo__active
			}`}
			id={id}
		>
			<div className={styles.todoInfo__container}>
				<p className={styles.todo__user}>User: {userId}</p>
				<p className={styles.todo__title}>{title}</p>
			</div>

			<div className={styles.todoBTN__container}>
				<button
					className={styles.todo__BTN}
					type="button"
					onClick={() => requestTochangeTodo(id)}
				>
					Изменить
				</button>
				<button
					className={styles.todo__BTN}
					type="button"
					disabled={isDeleting}
					onClick={() => deleteTodo(id)}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

TodoItem.propTypes = {
	userId: PropTypes.number,
	title: PropTypes.string,
	completed: PropTypes.bool,
	id: PropTypes.number,
};
