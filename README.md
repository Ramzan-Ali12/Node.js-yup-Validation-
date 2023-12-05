# Node.js-yup-Validation-
## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Models](#models)
- [CRUD Operations](#crud-operations)
- [Yup Validation](#yup-validation)
- [Sorting records](#sorting-records)
- [Filtering records](#filtering-records)
- [Populating records](#populating-records)
- [Usage](#usage)
## Overview
#### This Node.js REST API project, leveraging MongoDB, serves as a robust backend solution with three interconnected models: Departments, Faculty, and Students. Facilitating seamless CRUD operations, the API ensures data integrity through comprehensive Yup validation during creation, updating, and viewing processes. The implementation of dynamic sorting logic allows users to arrange records by creation date or name, providing flexibility. Additionally, the API supports filtering of student records based on their status and adds a populate method on students and faculty.
## Installation

### To run the project locally, follow these steps:

#### 1. Clone the repository.
#### 2. Install dependencies using `npm install`.
#### 3. Set up your MongoDB database.
#### 4. Configure environment variables.
#### 5. Run the application using `npm start`.
## Models
## 1. Departments
#### The Department's model is centered around a single field, and department name, serving as a container for department information.

## 2. Faculty
#### The Faculty model encompasses key fields such as name, subject, and an array of departments referencing the Department's model. This structure establishes a connection between faculty members and their affiliated departments.

## 3. Students
#### The Students model captures essential details like name, age, status, and a departmentIds referencing the Department's model. This model enables the association of students with specific departments, facilitating organized data representation.
## CRUD Operations
### Departments
#### Create an Endpoint to add a new department with a specified department name.
#### Read: Retrieve department details by ID or list all departments.
#### Update: Modify the department name of an existing department using its ID.
#### Delete: Remove a department and its associated records based on the provided ID.
### Faculty
#### Create: Add a new faculty member by specifying a name, subject, and an array of departmentIds.
#### Read: Retrieve faculty details by ID or list all faculty members.
#### Update: Modify the information of an existing faculty member using their ID.

#### Delete: Remove a faculty member based on the provided ID.
### Students
#### Create: Endpoint to create a new student record with name, age, status, and a departmentId.
#### Read: Retrieve student details by ID or list all students. Filtering based on status is supported.
#### Update: Modify the information of an existing student using their ID.
#### Delete: Remove a student based on the provided ID.
## Yup Validation
#### Creation: Yup validation is applied during the creation of records for Departments, Faculty, and Students, ensuring that incoming data adheres to predefined rules and maintains data integrity.

#### Updating: The updating process for all models includes Yup validation to validate and enforce consistency in the modified data, preventing the introduction of erroneous information.

#### Viewing by ID: Validation on viewById in params ID is implemented using Yup, ensuring that the provided ID follows the expected format and preventing potential errors in the retrieval process.

#### Deletion: Yup validation is integrated into the deletion process for all models, validating the provided ID before executing the delete operation. This additional layer of validation ensures the deletion of accurate and properly formatted records, contributing to the overall data reliability.
## Sorting records
#### Dynamic sorting logic is implemented to enhance flexibility. Users can sort records based on "createdAt" in ascending or descending order by specifying the sortBy parameter with the value "createdAt" and the sortOn parameter with "asc" or "desc." Additionally, records can be sorted alphabetically by name field.
## Filtering records
#### The API supports filtering for the Students model based on the status parameter (true or false). Users can retrieve records that match a specific status, allowing for targeted data retrieval. Additionally, filtering based on the name field is implemented using regex, enabling users to retrieve specific records by providing a partial or complete name
## Populating records
#### A populating method is integrated to facilitate the population of the database collection by passing reference models. This ensures that related data from other models is seamlessly included, enhancing the completeness and coherence of the stored information.
## Usage

1. **Create Records**: Use appropriate endpoints to create records for Departments, Faculty, and Students.
2. **Read Records**: Retrieve records by ID or use sorting and filtering options.
3. **Update Records**: Update existing records for Departments, Faculty, and Students.
4. **Delete Records**: Delete records using the respective endpoints.






