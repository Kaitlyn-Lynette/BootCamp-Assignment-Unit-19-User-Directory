import React from "react";

export default ({ employees }) => {
	return (
		<tbody>
			{employees
				.map((employee) => (
					<tr key={employee.id}>
						<td>
							<img
								style={styles.image}
								src={employee.image}
								alt="avatar"
							/>
						</td>
						<td>{employee.name}</td>
						<td>{employee.phone}</td>
						<td>
							<a href={`mailto: ${employee.email}`}>{employee.email}</a>
						</td>
						<td>{employee.dob}</td>
					</tr>
				))}
		</tbody>
	);
};

const styles = {
	image: {
		width: 50,
		height: 50,
		borderRadius: 7,
	},
};