/* Creating an interface for students data */

interface Student{
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student{ firstName: 'John', lastName: 'Man', age: 23, location: 'London'  }
const student2: Student{ firstName: 'Mike', lastName: 'Daniel', age: 18, location: 'Lagos'  }

const studentsList: Student[] = [student1, student2];
console.log(studentList)
