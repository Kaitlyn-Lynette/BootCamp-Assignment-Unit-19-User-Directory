import React, {  useState, useEffect } from "react";
import Table from "./Table";
import employees from "../employees";

const SearchBar = () => {
	// eslint-disable-next-line no-unused-vars
	const [defaultState, setDefaultState] = useState({employees: [...employees]});
	const [employeesState, setEmployeesState] = useState({employees: [...employees]});
	const [search, setSearchState] = useState("");
	const [sort, setSortState] = useState(false);

	useEffect(() => {
		setEmployeesState({employees: employees})
	}, []);

	const searchEmployees = (query) => {
		const filteredEmployees = employeesState.employees.filter(
			(employee) => {
				return employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
			}
		);
		return filteredEmployees;
	};

	const handleSortButton = () => {
		const sortEmployees = !sort
		  ? employeesState.employees.sort((a, b) => (a.name > b.name ? 1 : -1))
		  : defaultState.employees;
		  setSortState(!sort);
		  setEmployeesState({employees: sortEmployees})
	  };

	return (
		<div>
			<nav style={styles.navbar} className="navbar navbar-light bg-light">
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search employees"
						aria-label="Search"
						value={search}
						onChange={(e) => setSearchState(e.target.value)}
					/>
				</form>
			</nav>
			<Table 
				employees={searchEmployees(search)}
				handleSortButton={handleSortButton}
				sort={sort}
			/>
		</div>
	);
}

export default SearchBar;

const styles = {
	navbar: {
		margin: 0,
		padding: 30,
		display: "flex",
		justifyContent: "center",
	},
};