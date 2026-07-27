export interface Question {
  id: string;
  subject: 'OS' | 'DBMS' | 'OOPS';
  question: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const questions: Question[] = [

  // =========================================================
  // OPERATING SYSTEMS — 40 QUESTIONS
  // =========================================================

  {
    id: 'os-1',
    subject: 'OS',
    question: 'What is an Operating System and what are its main responsibilities?',
    difficulty: 'Easy'
  },
  {
    id: 'os-2',
    subject: 'OS',
    question: 'What is the difference between a program and a process?',
    difficulty: 'Easy'
  },
  {
    id: 'os-3',
    subject: 'OS',
    question: 'What is the difference between a process and a thread?',
    difficulty: 'Easy'
  },
  {
    id: 'os-4',
    subject: 'OS',
    question: 'What are the different states of a process?',
    difficulty: 'Easy'
  },
  {
    id: 'os-5',
    subject: 'OS',
    question: 'What is a Process Control Block (PCB) and what information does it store?',
    difficulty: 'Medium'
  },
  {
    id: 'os-6',
    subject: 'OS',
    question: 'What is context switching and why is it considered an overhead?',
    difficulty: 'Medium'
  },
  {
    id: 'os-7',
    subject: 'OS',
    question: 'What is the difference between user-level threads and kernel-level threads?',
    difficulty: 'Medium'
  },
  {
    id: 'os-8',
    subject: 'OS',
    question: 'What is the difference between concurrency and parallelism?',
    difficulty: 'Medium'
  },
  {
    id: 'os-9',
    subject: 'OS',
    question: 'What is the difference between multitasking, multithreading, and multiprocessing?',
    difficulty: 'Medium'
  },
  {
    id: 'os-10',
    subject: 'OS',
    question: 'What is CPU scheduling and why is it required?',
    difficulty: 'Easy'
  },
  {
    id: 'os-11',
    subject: 'OS',
    question: 'What is the difference between preemptive and non-preemptive scheduling?',
    difficulty: 'Easy'
  },
  {
    id: 'os-12',
    subject: 'OS',
    question: 'Explain FCFS CPU scheduling. What is the convoy effect?',
    difficulty: 'Medium'
  },
  {
    id: 'os-13',
    subject: 'OS',
    question: 'Explain SJF and SRTF scheduling. How are they different?',
    difficulty: 'Medium'
  },
  {
    id: 'os-14',
    subject: 'OS',
    question: 'How does Round Robin scheduling work? What is the role of time quantum?',
    difficulty: 'Medium'
  },
  {
    id: 'os-15',
    subject: 'OS',
    question: 'What are arrival time, burst time, completion time, turnaround time, waiting time, and response time?',
    difficulty: 'Medium'
  },
  {
    id: 'os-16',
    subject: 'OS',
    question: 'What is starvation and how does aging prevent it?',
    difficulty: 'Medium'
  },
  {
    id: 'os-17',
    subject: 'OS',
    question: 'What is a race condition? Give an example.',
    difficulty: 'Medium'
  },
  {
    id: 'os-18',
    subject: 'OS',
    question: 'What is a critical section?',
    difficulty: 'Easy'
  },
  {
    id: 'os-19',
    subject: 'OS',
    question: 'What conditions should a correct solution to the critical section problem satisfy?',
    difficulty: 'Medium'
  },
  {
    id: 'os-20',
    subject: 'OS',
    question: 'What is a semaphore and why is it used?',
    difficulty: 'Medium'
  },
  {
    id: 'os-21',
    subject: 'OS',
    question: 'What is the difference between a binary semaphore and a counting semaphore?',
    difficulty: 'Medium'
  },
  {
    id: 'os-22',
    subject: 'OS',
    question: 'What is the difference between a mutex and a semaphore?',
    difficulty: 'Medium'
  },
  {
    id: 'os-23',
    subject: 'OS',
    question: 'Explain the Producer-Consumer problem.',
    difficulty: 'Medium'
  },
  {
    id: 'os-24',
    subject: 'OS',
    question: 'What is deadlock?',
    difficulty: 'Easy'
  },
  {
    id: 'os-25',
    subject: 'OS',
    question: 'What are the four necessary conditions for deadlock?',
    difficulty: 'Medium'
  },
  {
    id: 'os-26',
    subject: 'OS',
    question: 'What is the difference between deadlock prevention and deadlock avoidance?',
    difficulty: 'Medium'
  },
  {
    id: 'os-27',
    subject: 'OS',
    question: "How does Banker's Algorithm help in deadlock avoidance?",
    difficulty: 'Hard'
  },
  {
    id: 'os-28',
    subject: 'OS',
    question: 'What is the difference between deadlock and starvation?',
    difficulty: 'Medium'
  },
  {
    id: 'os-29',
    subject: 'OS',
    question: 'What is paging and why is it used?',
    difficulty: 'Easy'
  },
  {
    id: 'os-30',
    subject: 'OS',
    question: 'What is the difference between a page and a frame?',
    difficulty: 'Easy'
  },
  {
    id: 'os-31',
    subject: 'OS',
    question: 'What is a page table and why is it required?',
    difficulty: 'Medium'
  },
  {
    id: 'os-32',
    subject: 'OS',
    question: 'What is a TLB and how does it improve memory access time?',
    difficulty: 'Medium'
  },
  {
    id: 'os-33',
    subject: 'OS',
    question: 'What is virtual memory and why is it needed?',
    difficulty: 'Medium'
  },
  {
    id: 'os-34',
    subject: 'OS',
    question: 'What is demand paging?',
    difficulty: 'Medium'
  },
  {
    id: 'os-35',
    subject: 'OS',
    question: 'What is a page fault and how does the OS handle it?',
    difficulty: 'Medium'
  },
  {
    id: 'os-36',
    subject: 'OS',
    question: 'What is thrashing and why does it occur?',
    difficulty: 'Medium'
  },
  {
    id: 'os-37',
    subject: 'OS',
    question: 'Compare FIFO, LRU, and Optimal page replacement algorithms.',
    difficulty: 'Medium'
  },
  {
    id: 'os-38',
    subject: 'OS',
    question: "What is Belady's anomaly?",
    difficulty: 'Medium'
  },
  {
    id: 'os-39',
    subject: 'OS',
    question: 'What is the difference between internal and external fragmentation?',
    difficulty: 'Easy'
  },
  {
    id: 'os-40',
    subject: 'OS',
    question: 'What is the difference between paging and segmentation?',
    difficulty: 'Medium'
  },


  // =========================================================
  // DBMS — 40 QUESTIONS
  // =========================================================

  {
    id: 'dbms-1',
    subject: 'DBMS',
    question: 'What is a DBMS and why is it preferred over a traditional file system?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-2',
    subject: 'DBMS',
    question: 'What is the difference between DBMS and RDBMS?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-3',
    subject: 'DBMS',
    question: 'What is the difference between a primary key and a unique key?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-4',
    subject: 'DBMS',
    question: 'What is a foreign key and why is it used?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-5',
    subject: 'DBMS',
    question: 'What are super keys, candidate keys, primary keys, and alternate keys?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-6',
    subject: 'DBMS',
    question: 'What is a composite key?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-7',
    subject: 'DBMS',
    question: 'What is referential integrity?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-8',
    subject: 'DBMS',
    question: 'What is database normalization and why is it required?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-9',
    subject: 'DBMS',
    question: 'Explain First Normal Form (1NF).',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-10',
    subject: 'DBMS',
    question: 'Explain Second Normal Form (2NF).',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-11',
    subject: 'DBMS',
    question: 'Explain Third Normal Form (3NF).',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-12',
    subject: 'DBMS',
    question: 'What is BCNF and how is it different from 3NF?',
    difficulty: 'Hard'
  },
  {
    id: 'dbms-13',
    subject: 'DBMS',
    question: 'What is a functional dependency?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-14',
    subject: 'DBMS',
    question: 'What are partial dependency and transitive dependency?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-15',
    subject: 'DBMS',
    question: 'What is denormalization and why might we use it?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-16',
    subject: 'DBMS',
    question: 'What is a transaction in DBMS?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-17',
    subject: 'DBMS',
    question: 'Explain the ACID properties of a transaction.',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-18',
    subject: 'DBMS',
    question: 'What are the different states of a transaction?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-19',
    subject: 'DBMS',
    question: 'What is a schedule? What is the difference between serial and non-serial schedules?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-20',
    subject: 'DBMS',
    question: 'What is serializability and why is it important?',
    difficulty: 'Hard'
  },
  {
    id: 'dbms-21',
    subject: 'DBMS',
    question: 'What is conflict serializability?',
    difficulty: 'Hard'
  },
  {
    id: 'dbms-22',
    subject: 'DBMS',
    question: 'What is concurrency control and why is it needed?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-23',
    subject: 'DBMS',
    question: 'What is a dirty read?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-24',
    subject: 'DBMS',
    question: 'What is a non-repeatable read?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-25',
    subject: 'DBMS',
    question: 'What is a phantom read?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-26',
    subject: 'DBMS',
    question: 'What are the different transaction isolation levels?',
    difficulty: 'Hard'
  },
  {
    id: 'dbms-27',
    subject: 'DBMS',
    question: 'What is Two-Phase Locking (2PL)? Explain its growing and shrinking phases.',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-28',
    subject: 'DBMS',
    question: 'What is the difference between shared locks and exclusive locks?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-29',
    subject: 'DBMS',
    question: 'How can deadlock occur between database transactions?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-30',
    subject: 'DBMS',
    question: 'What is indexing and why does an index make queries faster?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-31',
    subject: 'DBMS',
    question: 'What is the difference between clustered and non-clustered indexes?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-32',
    subject: 'DBMS',
    question: 'Why are B+ Trees commonly used for database indexing?',
    difficulty: 'Hard'
  },
  {
    id: 'dbms-33',
    subject: 'DBMS',
    question: 'What are the disadvantages or costs of creating indexes?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-34',
    subject: 'DBMS',
    question: 'Explain INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-35',
    subject: 'DBMS',
    question: 'What is the difference between WHERE and HAVING?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-36',
    subject: 'DBMS',
    question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
    difficulty: 'Medium'
  },
  {
    id: 'dbms-37',
    subject: 'DBMS',
    question: 'What is the difference between UNION and UNION ALL?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-38',
    subject: 'DBMS',
    question: 'What is a database view and why is it used?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-39',
    subject: 'DBMS',
    question: 'What is the difference between SQL and MySQL?',
    difficulty: 'Easy'
  },
  {
    id: 'dbms-40',
    subject: 'DBMS',
    question: 'What is the difference between SQL and NoSQL databases?',
    difficulty: 'Medium'
  },


  // =========================================================
  // OOPS / C++ — 40 QUESTIONS
  // =========================================================

  {
    id: 'oop-1',
    subject: 'OOPS',
    question: 'What is Object-Oriented Programming and why do we use it?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-2',
    subject: 'OOPS',
    question: 'What is the difference between a class and an object?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-3',
    subject: 'OOPS',
    question: 'What are the four pillars of OOPS?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-4',
    subject: 'OOPS',
    question: 'What is encapsulation?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-5',
    subject: 'OOPS',
    question: 'What is abstraction?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-6',
    subject: 'OOPS',
    question: 'What is the difference between abstraction and encapsulation?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-7',
    subject: 'OOPS',
    question: 'What is inheritance and why is it used?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-8',
    subject: 'OOPS',
    question: 'What are the different types of inheritance?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-9',
    subject: 'OOPS',
    question: 'What is polymorphism?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-10',
    subject: 'OOPS',
    question: 'What is the difference between compile-time and runtime polymorphism?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-11',
    subject: 'OOPS',
    question: 'What is function overloading?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-12',
    subject: 'OOPS',
    question: 'What is function overriding?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-13',
    subject: 'OOPS',
    question: 'What is the difference between function overloading and function overriding?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-14',
    subject: 'OOPS',
    question: 'What is static binding and dynamic binding?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-15',
    subject: 'OOPS',
    question: 'What is a virtual function and why do we need it?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-16',
    subject: 'OOPS',
    question: 'How do virtual functions enable runtime polymorphism in C++?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-17',
    subject: 'OOPS',
    question: 'What is a pure virtual function?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-18',
    subject: 'OOPS',
    question: 'What is an abstract class?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-19',
    subject: 'OOPS',
    question: 'Can we create an object of an abstract class? Why or why not?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-20',
    subject: 'OOPS',
    question: 'At a high level, how do vtable and vptr support virtual functions in C++?',
    difficulty: 'Hard'
  },
  {
    id: 'oop-21',
    subject: 'OOPS',
    question: 'What is a constructor and why is it used?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-22',
    subject: 'OOPS',
    question: 'What are the different types of constructors in C++?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-23',
    subject: 'OOPS',
    question: 'What is a copy constructor and when is it called?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-24',
    subject: 'OOPS',
    question: 'Why does a copy constructor take its argument by reference rather than by value?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-25',
    subject: 'OOPS',
    question: 'What is the difference between a copy constructor and a copy assignment operator?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-26',
    subject: 'OOPS',
    question: 'What is the difference between shallow copy and deep copy?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-27',
    subject: 'OOPS',
    question: 'What is a destructor and when is it called?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-28',
    subject: 'OOPS',
    question: 'Why should a base class destructor sometimes be virtual?',
    difficulty: 'Hard'
  },
  {
    id: 'oop-29',
    subject: 'OOPS',
    question: 'Can a constructor be virtual in C++? Why or why not?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-30',
    subject: 'OOPS',
    question: 'What are public, private, and protected access modifiers?',
    difficulty: 'Easy'
  },
  {
    id: 'oop-31',
    subject: 'OOPS',
    question: 'What is the diamond problem in multiple inheritance?',
    difficulty: 'Hard'
  },
  {
    id: 'oop-32',
    subject: 'OOPS',
    question: 'How does virtual inheritance solve the diamond problem in C++?',
    difficulty: 'Hard'
  },
  {
    id: 'oop-33',
    subject: 'OOPS',
    question: 'What is object slicing in C++?',
    difficulty: 'Hard'
  },
  {
    id: 'oop-34',
    subject: 'OOPS',
    question: 'What is the difference between association, aggregation, and composition?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-35',
    subject: 'OOPS',
    question: 'Why is composition often preferred over inheritance?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-36',
    subject: 'OOPS',
    question: 'What are the SOLID principles?',
    difficulty: 'Medium'
  },
  {
    id: 'oop-37',
    subject: 'OOPS',
    question: 'Explain the Single Responsibility Principle with an example.',
    difficulty: 'Medium'
  },
  {
    id: 'oop-38',
    subject: 'OOPS',
    question: 'Explain the Open/Closed Principle with an example.',
    difficulty: 'Medium'
  },
  {
    id: 'oop-39',
    subject: 'OOPS',
    question: 'Explain the Liskov Substitution Principle with an example.',
    difficulty: 'Hard'
  },
  {
    id: 'oop-40',
    subject: 'OOPS',
    question: 'Explain the Dependency Inversion Principle with an example.',
    difficulty: 'Hard'
  }
];