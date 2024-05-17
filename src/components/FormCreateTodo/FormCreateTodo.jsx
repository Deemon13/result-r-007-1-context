import PropTypes from 'prop-types';

import styles from './formCreateTodo.module.css';

export const FormCreateTodo = ({ onSubmit, isCreating }) => {
	return (
		<form onSubmit={onSubmit} className={styles.createTodo__form}>
			<div className={styles.createTodo__container}>
				<label htmlFor="todo" className={styles.createTodo__label}>
					Добавление задачи:
				</label>
				<input
					id="todo"
					disabled={isCreating}
					type="text"
					name="todo"
					placeholder="Введите здесь текст задачи..."
					className={styles.createTodo__input}
				/>
				<button
					disabled={isCreating}
					type="submit"
					className={styles.createTodo__submit}
				>
					Создать задачу
				</button>
			</div>
		</form>
	);
};

FormCreateTodo.propTypes = {
	onSubmit: PropTypes.func,
	isCreating: PropTypes.bool,
};
