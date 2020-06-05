import faker from "faker";

const employees = [
	{
		id: 1,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: "fake@testo.com",
		dob: "12/10/90",
	},
	{
		id: 2,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "02/23/93",
	},
	{
		id: 3,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "12/31/96",
	},
	{
		id: 4,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "11/01/89",
	},
	{
		id: 5,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "09/28/93",
	},
	{
		id: 6,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "07/27/91",
	},
	{
		id: 7,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "12/13/93",
	},
	{
		id: 8,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "04/17/99",
	},
];

export default employees;