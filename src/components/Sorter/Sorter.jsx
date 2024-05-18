import { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../../context';

import styles from './sorter.module.css';

export const Sorter = ({ title }) => {
	const { handleSort, filter } = useContext(AppContext);

	return (
		<div className={styles.sorter__container}>
			<button
				type="button"
				onClick={handleSort}
				disabled={filter}
				className={styles.sorter}
			>
				{title}
			</button>
		</div>
	);
};

Sorter.propTypes = {
	title: PropTypes.string,
};
