import { useState } from 'react';

import { AppContext } from '../../context';

import {
	FormCreateTodo,
	Loader,
	TodoItem,
	Filter,
	Sorter,
	TodoChanger,
} from '../../components';

import {
	useGetTodos,
	useCreateTodo,
	useDeleteTodo,
	useChangeTodo,
	useSort,
	useFilter,
} from '../../hooks';

import styles from './app.module.css';

export const App = () => {
	const [isChanging, setIsChanging] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [filter, setFilter] = useState('');
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [idForChange, setIdForChange] = useState(null);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { todos, isLoading } = useGetTodos(refreshTodosFlag);
	const { isCreating, createTodo } = useCreateTodo(refreshTodos);
	const { isDeleting, deleteTodo } = useDeleteTodo(refreshTodos, setFilter);
	const { submitChanges } = useChangeTodo(
		idForChange,
		refreshTodos,
		setFilter,
		setIsChanging,
	);
	const { sortBy, sortedTodos, handleSort } = useSort(todos);
	const { handleFilter } = useFilter(todos, filter, setFilteredTodos, setFilter);

	let newId = null;

	const requestTochangeTodo = id => {
		newId = id;
		setIdForChange(newId);
		setIsChanging(true);
	};

	const sliceTitle = title => {
		return title.length > 10 ? title.slice(0, 10) + '...' : title;
	};

	const data = {
		createTodo,
		isCreating,
		handleSort,
		filter,
		submitChanges,
		handleFilter,
		deleteTodo,
		requestTochangeTodo,
		isDeleting,
	};

	return (
		<AppContext.Provider value={data}>
			<div className={styles.app}>
				<FormCreateTodo />
				<Filter />
				<Sorter title="По алфавиту!" />
				<div className={styles.todos}>
					<h2 className={styles.todos__title}>Todo list</h2>
					{isLoading ? (
						<Loader />
					) : (
						(filter ? filteredTodos : sortBy ? sortedTodos : todos).map(
							({ id, userId, title, completed }) => (
								<TodoItem
									key={id}
									userId={userId}
									title={sliceTitle(title)}
									completed={completed}
									id={id}
								/>
							),
						)
					)}
				</div>
				{isChanging && <TodoChanger title="Меняем!" />}
			</div>
		</AppContext.Provider>
	);
};
