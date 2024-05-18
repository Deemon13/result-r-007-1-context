import { useContext } from 'react';

import { AppContext } from '../../context';

import styles from './filter.module.css';

export const Filter = () => {
	const { filter, handleFilter } = useContext(AppContext);

	return (
		<form className={styles.filter}>
			<div className={styles.filter__container}>
				<label htmlFor="filter" className={styles.filter__label}>
					Искать Todo:
				</label>
				<input
					id="filter"
					type="text"
					name="filter"
					value={filter}
					onChange={e => handleFilter(e)}
					placeholder="Что ищем?"
					className={styles.filter__input}
				/>
			</div>
		</form>
	);
};
