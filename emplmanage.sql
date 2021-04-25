drop database if exists employeeData_DB;
create database employeeData_DB;
use employeeData_DB;
create table department (
	departmentID int not null,
    departmentName varchar(30) not null,
    primary key (departmentID)
);
create table role (
	jobID int not null,
    jobTitle varchar(30) not null,
    jobSalary decimal(7, 2) null,
    jobAssignment int not null,
        primary key (jobID)
);

create table employee (
	employeeID int not null auto_increment,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    roleID int not null,
    managerID int null,
    managerRole boolean,
    primary key (employeeID)
);
insert into department(departmentID, departmentName)
values (1,"Engineering"),(2,"Sales"),(3,"Legal"),(4, "Finance");


select * from department;
select * from role;
select * from employee;