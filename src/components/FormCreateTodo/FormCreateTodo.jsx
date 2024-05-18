import { useContext } from 'react';

import { AppContext } from '../../context';

import styles from './formCreateTodo.module.css';

export const FormCreateTodo = () => {
	const { createTodo, isCreating } = useContext(AppContext);

	return (
		<form onSubmit={createTodo} className={styles.createTodo__form}>
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
