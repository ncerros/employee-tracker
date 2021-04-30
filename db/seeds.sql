USE tracker_DB;

--===============Seed data department=============
INSERT INTO department
    (name)
VALUES
    ("Human Resources"),
    ("Quality&Control"),
    ("Engineering"),
    ("Accounting"),
    ("Sales");

--==============Seed data role===================
INSERT INTO role
    (title, salary, department_id)
VALUES
("manager", 99500.00, 2),
("engineer", 95000, 3),
("accountant", 65500, 4),
("recruiter", 54500, 1),
("sales person", 77650, 5);

--==============Seed data employee=================
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
("Jim", "Carrey", 1, NULL),
("Adam", "Sandler", 1, 1),
("Wanda", "Sykes", 3, 2),
("Kevin", "Hart", 5, 2);