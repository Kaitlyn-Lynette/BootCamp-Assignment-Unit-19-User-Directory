
import React from "react";
import ListItem from "./ListItem";

export default ({ employees, handleSortButton, sort }) => {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name 
						<span>
							<i className={sort ? "fa fa-sort-alpha-asc" : "fa fa-sort-alpha-desc"} onClick={handleSortButton}></i>
						</span>
					</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<ListItem employees={employees} />
		</table>
	);
};