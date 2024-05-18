import { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context';

import styles from './todoChanger.module.css';

export const TodoChanger = ({ title }) => {
	const { submitChanges } = useContext(AppContext);

	return (
		<form onSubmit={submitChanges} className={styles.todoChanger__form}>
			<div className={styles.todoChanger__container}>
				<label htmlFor="changeTodo" className={styles.todoChanger__label}>
					Изменить Title:
				</label>
				<input
					autoFocus
					id="changeTodo"
					name="changeTodo"
					className={styles.todoChanger__input}
				/>
				<button type="submit" className={styles.todoChanger__submit}>
					{title}
				</button>
			</div>
		</form>
	);
};

TodoChanger.propTypes = {
	title: PropTypes.string,
};
