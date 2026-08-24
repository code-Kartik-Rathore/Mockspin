export interface Question {
  id: string;
  subject: 'OS' | 'DBMS' | 'OOPS' | 'IIT_Ropar' | 'Zebpay' | 'Achievements' | 'Skills' | 'MedConnect' | 'SupportDesk' | 'Resume';
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
  },

  // =========================================================
  // IIT ROPAR INTERNSHIP
  // =========================================================
  {
    id: 'iit-1',
    subject: 'IIT_Ropar',
    question: 'Tell me about your internship at IIT Ropar.',
    difficulty: 'Easy'
  },
  {
    id: 'iit-2',
    subject: 'IIT_Ropar',
    question: 'How did you get selected for the IIT Ropar Winter Internship?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-3',
    subject: 'IIT_Ropar',
    question: 'What did you learn during your internship?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-4',
    subject: 'IIT_Ropar',
    question: 'What was your overall role during the internship?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-5',
    subject: 'IIT_Ropar',
    question: 'What was the most challenging part of the internship?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-6',
    subject: 'IIT_Ropar',
    question: 'What was your biggest learning from this internship?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-7',
    subject: 'IIT_Ropar',
    question: 'How was this internship different from your academic projects?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-8',
    subject: 'IIT_Ropar',
    question: 'Did you work individually or as part of a team?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-9',
    subject: 'IIT_Ropar',
    question: 'How did you approach learning new technologies during the internship?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-10',
    subject: 'IIT_Ropar',
    question: 'What was the most interesting problem you worked on?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-11',
    subject: 'IIT_Ropar',
    question: 'What was one mistake you made during the internship and what did you learn from it?',
    difficulty: 'Hard'
  },
  {
    id: 'iit-12',
    subject: 'IIT_Ropar',
    question: 'If you could redo the internship, what would you do differently?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-13',
    subject: 'IIT_Ropar',
    question: 'Why did you use the MERN stack?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-14',
    subject: 'IIT_Ropar',
    question: 'Explain the overall architecture of the applications you built.',
    difficulty: 'Medium'
  },
  {
    id: 'iit-15',
    subject: 'IIT_Ropar',
    question: 'How does data flow through a MERN application?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-16',
    subject: 'IIT_Ropar',
    question: 'How do your frontend and backend communicate?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-17',
    subject: 'IIT_Ropar',
    question: 'How did you design your APIs?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-18',
    subject: 'IIT_Ropar',
    question: 'How did you handle errors in your applications?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-19',
    subject: 'IIT_Ropar',
    question: 'How did you validate user input?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-20',
    subject: 'IIT_Ropar',
    question: 'How did you structure your backend?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-21',
    subject: 'IIT_Ropar',
    question: 'Why did you choose MongoDB?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-22',
    subject: 'IIT_Ropar',
    question: 'What challenges did you face while working with MongoDB?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-23',
    subject: 'IIT_Ropar',
    question: 'How would you scale a MERN application?',
    difficulty: 'Hard'
  },
  {
    id: 'iit-24',
    subject: 'IIT_Ropar',
    question: 'Tell me about KrishiRoute.',
    difficulty: 'Easy'
  },
  {
    id: 'iit-25',
    subject: 'IIT_Ropar',
    question: 'What problem does KrishiRoute solve?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-26',
    subject: 'IIT_Ropar',
    question: 'Why did you build KrishiRoute?',
    difficulty: 'Easy'
  },
  {
    id: 'iit-27',
    subject: 'IIT_Ropar',
    question: 'How does KrishiRoute recommend the most profitable mandi?',
    difficulty: 'Hard'
  },
  {
    id: 'iit-28',
    subject: 'IIT_Ropar',
    question: 'What factors are considered when calculating profitability?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-29',
    subject: 'IIT_Ropar',
    question: 'How did you use live Agmarknet data?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-30',
    subject: 'IIT_Ropar',
    question: 'How did you handle real-world market data?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-31',
    subject: 'IIT_Ropar',
    question: 'Why did you use OSRM?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-32',
    subject: 'IIT_Ropar',
    question: 'What role does route optimization play in KrishiRoute?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-33',
    subject: 'IIT_Ropar',
    question: 'How did geocoding help your application?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-34',
    subject: 'IIT_Ropar',
    question: 'How did you calculate transportation costs?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-35',
    subject: 'IIT_Ropar',
    question: 'How did you compare different mandis?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-36',
    subject: 'IIT_Ropar',
    question: 'What happens if the market data is unavailable?',
    difficulty: 'Hard'
  },
  {
    id: 'iit-37',
    subject: 'IIT_Ropar',
    question: 'What were the biggest challenges while building KrishiRoute?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-38',
    subject: 'IIT_Ropar',
    question: 'How would you improve KrishiRoute?',
    difficulty: 'Medium'
  },
  {
    id: 'iit-39',
    subject: 'IIT_Ropar',
    question: 'How would you scale KrishiRoute for thousands of farmers?',
    difficulty: 'Hard'
  },
  {
    id: 'iit-40',
    subject: 'IIT_Ropar',
    question: 'What additional features would you add to KrishiRoute?',
    difficulty: 'Medium'
  },

  // =========================================================
  // ZEBPAY INTERNSHIP
  // =========================================================
  {
    id: 'zebpay-1',
    subject: 'Zebpay',
    question: 'Tell me about your internship at Zebpay.',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-2',
    subject: 'Zebpay',
    question: 'What exactly did you work on at Zebpay?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-3',
    subject: 'Zebpay',
    question: 'What was your role as a Tech Intern?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-4',
    subject: 'Zebpay',
    question: 'Were you working on a production application?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-5',
    subject: 'Zebpay',
    question: 'How was working on a production codebase different from your personal projects?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-6',
    subject: 'Zebpay',
    question: 'What was the most challenging task you worked on?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-7',
    subject: 'Zebpay',
    question: 'Tell me about a difficult bug you encountered.',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-8',
    subject: 'Zebpay',
    question: 'How did you debug issues in the existing codebase?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-9',
    subject: 'Zebpay',
    question: 'How did you collaborate with other developers?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-10',
    subject: 'Zebpay',
    question: "How did you ensure that your changes didn't break existing functionality?",
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-11',
    subject: 'Zebpay',
    question: 'What did you learn from working in a professional development environment?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-12',
    subject: 'Zebpay',
    question: 'What was your biggest contribution to Zebpay?',
    difficulty: 'Hard'
  },
  {
    id: 'zebpay-13',
    subject: 'Zebpay',
    question: 'Why did you use Next.js?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-14',
    subject: 'Zebpay',
    question: 'Why use Next.js instead of plain React?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-15',
    subject: 'Zebpay',
    question: 'What rendering approach did you use?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-16',
    subject: 'Zebpay',
    question: 'What is the difference between client-side and server-side rendering?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-17',
    subject: 'Zebpay',
    question: 'What causes unnecessary re-renders in React?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-18',
    subject: 'Zebpay',
    question: 'How can React performance be improved?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-19',
    subject: 'Zebpay',
    question: 'How does Next.js handle routing?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-20',
    subject: 'Zebpay',
    question: 'What are reusable components and why are they useful?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-21',
    subject: 'Zebpay',
    question: 'How did you design modular components?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-22',
    subject: 'Zebpay',
    question: 'What makes a good reusable component?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-23',
    subject: 'Zebpay',
    question: 'How did you handle responsive design?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-24',
    subject: 'Zebpay',
    question: 'How did you ensure accessibility?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-25',
    subject: 'Zebpay',
    question: 'What does accessibility mean in a web application?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-26',
    subject: 'Zebpay',
    question: 'You mentioned improving client-side rendering. What exactly did you improve?',
    difficulty: 'Hard'
  },
  {
    id: 'zebpay-27',
    subject: 'Zebpay',
    question: 'How did you identify rendering problems?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-28',
    subject: 'Zebpay',
    question: 'What causes slow rendering in a React application?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-29',
    subject: 'Zebpay',
    question: 'How can unnecessary renders be reduced?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-30',
    subject: 'Zebpay',
    question: 'How would you optimize a page that feels slow?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-31',
    subject: 'Zebpay',
    question: 'How would you measure frontend performance?',
    difficulty: 'Hard'
  },
  {
    id: 'zebpay-32',
    subject: 'Zebpay',
    question: 'What did you mean by smoother user interactions and navigation?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-33',
    subject: 'Zebpay',
    question: 'Why did you use TypeScript?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-34',
    subject: 'Zebpay',
    question: 'What advantages did TypeScript provide in your project?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-35',
    subject: 'Zebpay',
    question: 'TypeScript vs JavaScript?',
    difficulty: 'Easy'
  },
  {
    id: 'zebpay-36',
    subject: 'Zebpay',
    question: 'How does TypeScript improve maintainability?',
    difficulty: 'Medium'
  },
  {
    id: 'zebpay-37',
    subject: 'Zebpay',
    question: 'How did you use TypeScript while building reusable components?',
    difficulty: 'Medium'
  },

  // =========================================================
  // ACHIEVEMENTS
  // =========================================================
  {
    id: 'ach-1',
    subject: 'Achievements',
    question: 'Tell me about the Code Slush Hackathon.',
    difficulty: 'Easy'
  },
  {
    id: 'ach-2',
    subject: 'Achievements',
    question: 'What did you build during Code Slush?',
    difficulty: 'Easy'
  },
  {
    id: 'ach-3',
    subject: 'Achievements',
    question: 'What was your role in the team?',
    difficulty: 'Easy'
  },
  {
    id: 'ach-4',
    subject: 'Achievements',
    question: 'How did you divide the work among team members?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-5',
    subject: 'Achievements',
    question: 'What was the biggest challenge during the hackathon?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-6',
    subject: 'Achievements',
    question: 'How did you solve that challenge?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-7',
    subject: 'Achievements',
    question: 'What made your project stand out?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-8',
    subject: 'Achievements',
    question: 'Why do you think your team won?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-9',
    subject: 'Achievements',
    question: 'What did you learn from winning the hackathon?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-10',
    subject: 'Achievements',
    question: 'What would you improve if you built the project again?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-11',
    subject: 'Achievements',
    question: 'Tell me about the Executive 3.0 Hackathon.',
    difficulty: 'Easy'
  },
  {
    id: 'ach-12',
    subject: 'Achievements',
    question: 'What was your contribution there?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-13',
    subject: 'Achievements',
    question: 'What was different between Code Slush and Executive 3.0?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-14',
    subject: 'Achievements',
    question: 'What did you learn from finishing runner-up?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-15',
    subject: 'Achievements',
    question: 'How do you perform under tight deadlines?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-16',
    subject: 'Achievements',
    question: 'You have solved 1,200+ problems. How did you reach that number?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-17',
    subject: 'Achievements',
    question: 'Which platforms do you regularly use?',
    difficulty: 'Easy'
  },
  {
    id: 'ach-18',
    subject: 'Achievements',
    question: 'How has competitive programming helped you as a developer?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-19',
    subject: 'Achievements',
    question: 'What is your approach when you encounter a completely unfamiliar problem?',
    difficulty: 'Hard'
  },
  {
    id: 'ach-20',
    subject: 'Achievements',
    question: 'Tell me about your best contest performance.',
    difficulty: 'Medium'
  },
  {
    id: 'ach-21',
    subject: 'Achievements',
    question: 'What does your LeetCode Knight rating mean?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-22',
    subject: 'Achievements',
    question: 'What does your Codeforces Pupil rating mean?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-23',
    subject: 'Achievements',
    question: 'What does your CodeChef rating represent?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-24',
    subject: 'Achievements',
    question: 'How do you prepare for coding contests?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-25',
    subject: 'Achievements',
    question: 'How do you balance competitive programming with development?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-26',
    subject: 'Achievements',
    question: 'Tell me about your JEE Main performance.',
    difficulty: 'Easy'
  },
  {
    id: 'ach-27',
    subject: 'Achievements',
    question: 'How did you achieve a 98.58 percentile?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-28',
    subject: 'Achievements',
    question: 'How did you score 100/100 in Mathematics and Chemistry?',
    difficulty: 'Hard'
  },
  {
    id: 'ach-29',
    subject: 'Achievements',
    question: 'What does your academic performance tell me about you?',
    difficulty: 'Medium'
  },
  {
    id: 'ach-30',
    subject: 'Achievements',
    question: 'How did you manage academics along with coding and development?',
    difficulty: 'Medium'
  },

  // =========================================================
  // TECHNICAL SKILLS
  // =========================================================
  {
    id: 'skill-1',
    subject: 'Skills',
    question: 'Why React?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-2',
    subject: 'Skills',
    question: 'What are the main advantages of React?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-3',
    subject: 'Skills',
    question: 'Props vs state?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-4',
    subject: 'Skills',
    question: 'What are React hooks?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-5',
    subject: 'Skills',
    question: 'Explain useEffect.',
    difficulty: 'Medium'
  },
  {
    id: 'skill-6',
    subject: 'Skills',
    question: 'When does a React component re-render?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-7',
    subject: 'Skills',
    question: 'How do you manage state in React?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-8',
    subject: 'Skills',
    question: 'What is the virtual DOM?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-9',
    subject: 'Skills',
    question: 'How do you optimize React performance?',
    difficulty: 'Hard'
  },
  {
    id: 'skill-10',
    subject: 'Skills',
    question: 'Why Next.js?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-11',
    subject: 'Skills',
    question: 'React vs Next.js?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-12',
    subject: 'Skills',
    question: 'SSR vs CSR?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-13',
    subject: 'Skills',
    question: 'What are Server Components?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-14',
    subject: 'Skills',
    question: 'How does routing work in Next.js?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-15',
    subject: 'Skills',
    question: 'When would you prefer Next.js over React?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-16',
    subject: 'Skills',
    question: 'Why Node.js?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-17',
    subject: 'Skills',
    question: 'How does the Node.js event loop work?',
    difficulty: 'Hard'
  },
  {
    id: 'skill-18',
    subject: 'Skills',
    question: 'What does non-blocking I/O mean?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-19',
    subject: 'Skills',
    question: 'Why is Node.js suitable for backend applications?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-20',
    subject: 'Skills',
    question: 'What is Express.js?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-21',
    subject: 'Skills',
    question: 'What is middleware?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-22',
    subject: 'Skills',
    question: 'How does request handling work in Express?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-23',
    subject: 'Skills',
    question: 'How do you handle errors in Express?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-24',
    subject: 'Skills',
    question: 'How would you structure a large Express application?',
    difficulty: 'Hard'
  },
  {
    id: 'skill-25',
    subject: 'Skills',
    question: 'MongoDB vs MySQL?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-26',
    subject: 'Skills',
    question: 'When would you choose MongoDB over MySQL?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-27',
    subject: 'Skills',
    question: 'When would you choose MySQL over MongoDB?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-28',
    subject: 'Skills',
    question: 'What is an index?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-29',
    subject: 'Skills',
    question: 'Why are indexes useful?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-30',
    subject: 'Skills',
    question: 'What is normalization?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-31',
    subject: 'Skills',
    question: 'When would you denormalize data?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-32',
    subject: 'Skills',
    question: 'How do transactions work?',
    difficulty: 'Hard'
  },
  {
    id: 'skill-33',
    subject: 'Skills',
    question: 'What are MongoDB aggregations?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-34',
    subject: 'Skills',
    question: 'What is the difference between embedding and referencing in MongoDB?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-35',
    subject: 'Skills',
    question: 'JavaScript vs TypeScript?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-36',
    subject: 'Skills',
    question: 'What are promises?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-37',
    subject: 'Skills',
    question: 'What is async/await?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-38',
    subject: 'Skills',
    question: 'What is the event loop?',
    difficulty: 'Hard'
  },
  {
    id: 'skill-39',
    subject: 'Skills',
    question: 'What is a closure?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-40',
    subject: 'Skills',
    question: 'What is hoisting?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-41',
    subject: 'Skills',
    question: 'let vs const vs var?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-42',
    subject: 'Skills',
    question: 'What is the difference between synchronous and asynchronous code?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-43',
    subject: 'Skills',
    question: 'Why is TypeScript useful in large projects?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-44',
    subject: 'Skills',
    question: 'What is Git?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-45',
    subject: 'Skills',
    question: 'Git vs GitHub?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-46',
    subject: 'Skills',
    question: 'git pull vs git fetch?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-47',
    subject: 'Skills',
    question: 'What is a merge conflict?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-48',
    subject: 'Skills',
    question: 'How do you resolve merge conflicts?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-49',
    subject: 'Skills',
    question: 'Merge vs rebase?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-50',
    subject: 'Skills',
    question: 'What is a pull request?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-51',
    subject: 'Skills',
    question: 'Why do you use Postman?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-52',
    subject: 'Skills',
    question: 'How do you test an API using Postman?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-53',
    subject: 'Skills',
    question: 'What are environment variables in Postman?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-54',
    subject: 'Skills',
    question: 'What is deployment?',
    difficulty: 'Easy'
  },
  {
    id: 'skill-55',
    subject: 'Skills',
    question: 'Vercel vs Render?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-56',
    subject: 'Skills',
    question: 'What problems can occur while deploying a full-stack application?',
    difficulty: 'Medium'
  },
  {
    id: 'skill-57',
    subject: 'Skills',
    question: 'How do environment variables work during deployment?',
    difficulty: 'Medium'
  },

  // =========================================================
  // MEDCONNECT
  // =========================================================
  {
    id: 'med-1',
    subject: 'MedConnect',
    question: 'Tell me about MedConnect.',
    difficulty: 'Easy'
  },
  {
    id: 'med-2',
    subject: 'MedConnect',
    question: 'What problem does MedConnect solve?',
    difficulty: 'Easy'
  },
  {
    id: 'med-3',
    subject: 'MedConnect',
    question: 'Why did you build MedConnect?',
    difficulty: 'Easy'
  },
  {
    id: 'med-4',
    subject: 'MedConnect',
    question: 'Explain the overall architecture.',
    difficulty: 'Medium'
  },
  {
    id: 'med-5',
    subject: 'MedConnect',
    question: 'What was your contribution?',
    difficulty: 'Easy'
  },
  {
    id: 'med-6',
    subject: 'MedConnect',
    question: 'What was the most challenging part?',
    difficulty: 'Medium'
  },
  {
    id: 'med-7',
    subject: 'MedConnect',
    question: 'What was the biggest technical decision you made?',
    difficulty: 'Hard'
  },
  {
    id: 'med-8',
    subject: 'MedConnect',
    question: 'What would you improve if you rebuilt it?',
    difficulty: 'Medium'
  },
  {
    id: 'med-9',
    subject: 'MedConnect',
    question: 'How did you implement JWT-based authentication?',
    difficulty: 'Medium'
  },
  {
    id: 'med-10',
    subject: 'MedConnect',
    question: 'What is the difference between authentication and authorization?',
    difficulty: 'Easy'
  },
  {
    id: 'med-11',
    subject: 'MedConnect',
    question: 'How did you implement role-based access control?',
    difficulty: 'Medium'
  },
  {
    id: 'med-12',
    subject: 'MedConnect',
    question: 'What roles exist in your application?',
    difficulty: 'Easy'
  },
  {
    id: 'med-13',
    subject: 'MedConnect',
    question: 'How does the server verify a JWT?',
    difficulty: 'Medium'
  },
  {
    id: 'med-14',
    subject: 'MedConnect',
    question: 'What happens when an unauthorized user tries to access an endpoint?',
    difficulty: 'Medium'
  },
  {
    id: 'med-15',
    subject: 'MedConnect',
    question: 'How does appointment scheduling work?',
    difficulty: 'Medium'
  },
  {
    id: 'med-16',
    subject: 'MedConnect',
    question: 'How did you prevent two users from booking the same slot?',
    difficulty: 'Hard'
  },
  {
    id: 'med-17',
    subject: 'MedConnect',
    question: 'Explain the payment flow using Razorpay.',
    difficulty: 'Medium'
  },
  {
    id: 'med-18',
    subject: 'MedConnect',
    question: 'Why did you use webhooks?',
    difficulty: 'Medium'
  },
  {
    id: 'med-19',
    subject: 'MedConnect',
    question: 'What is HMAC verification?',
    difficulty: 'Hard'
  },
  {
    id: 'med-20',
    subject: 'MedConnect',
    question: "What happens if payment succeeds but your server doesn't receive the expected request?",
    difficulty: 'Hard'
  },
  {
    id: 'med-21',
    subject: 'MedConnect',
    question: 'Why did you use FastAPI?',
    difficulty: 'Medium'
  },
  {
    id: 'med-22',
    subject: 'MedConnect',
    question: 'Why did you separate the AI functionality into a microservice?',
    difficulty: 'Hard'
  },
  {
    id: 'med-23',
    subject: 'MedConnect',
    question: 'How does the medical report analysis work?',
    difficulty: 'Medium'
  },
  {
    id: 'med-24',
    subject: 'MedConnect',
    question: 'Why did you use Gemini 2.5 Flash?',
    difficulty: 'Medium'
  },
  {
    id: 'med-25',
    subject: 'MedConnect',
    question: 'How does your Node.js backend communicate with FastAPI?',
    difficulty: 'Medium'
  },
  {
    id: 'med-26',
    subject: 'MedConnect',
    question: 'How did you handle the AI response?',
    difficulty: 'Medium'
  },
  {
    id: 'med-27',
    subject: 'MedConnect',
    question: 'What happens if the AI service fails?',
    difficulty: 'Medium'
  },
  {
    id: 'med-28',
    subject: 'MedConnect',
    question: 'How does video calling work in your application?',
    difficulty: 'Medium'
  },
  {
    id: 'med-29',
    subject: 'MedConnect',
    question: 'Why did you use WebRTC?',
    difficulty: 'Hard'
  },
  {
    id: 'med-30',
    subject: 'MedConnect',
    question: 'Why did you need Socket.io?',
    difficulty: 'Medium'
  },
  {
    id: 'med-31',
    subject: 'MedConnect',
    question: 'What is the difference between WebRTC and Socket.io?',
    difficulty: 'Medium'
  },
  {
    id: 'med-32',
    subject: 'MedConnect',
    question: 'How does messaging work?',
    difficulty: 'Easy'
  },
  {
    id: 'med-33',
    subject: 'MedConnect',
    question: "What happens if a user's connection drops?",
    difficulty: 'Medium'
  },
  {
    id: 'med-34',
    subject: 'MedConnect',
    question: 'Why did you use Cloudinary?',
    difficulty: 'Easy'
  },
  {
    id: 'med-35',
    subject: 'MedConnect',
    question: 'How did you securely store documents?',
    difficulty: 'Medium'
  },
  {
    id: 'med-36',
    subject: 'MedConnect',
    question: 'How did you generate PDF prescriptions?',
    difficulty: 'Medium'
  },
  {
    id: 'med-37',
    subject: 'MedConnect',
    question: 'How did you protect sensitive medical documents?',
    difficulty: 'Hard'
  },

  // =========================================================
  // SUPPORTDESK.AI
  // =========================================================
  {
    id: 'support-1',
    subject: 'SupportDesk',
    question: 'Tell me about SupportDesk.AI.',
    difficulty: 'Easy'
  },
  {
    id: 'support-2',
    subject: 'SupportDesk',
    question: 'What problem does it solve?',
    difficulty: 'Easy'
  },
  {
    id: 'support-3',
    subject: 'SupportDesk',
    question: 'Why did you build it?',
    difficulty: 'Easy'
  },
  {
    id: 'support-4',
    subject: 'SupportDesk',
    question: 'Explain the architecture.',
    difficulty: 'Medium'
  },
  {
    id: 'support-5',
    subject: 'SupportDesk',
    question: 'What was your contribution?',
    difficulty: 'Easy'
  },
  {
    id: 'support-6',
    subject: 'SupportDesk',
    question: 'What was the most challenging part?',
    difficulty: 'Medium'
  },
  {
    id: 'support-7',
    subject: 'SupportDesk',
    question: 'What would you improve in the project?',
    difficulty: 'Medium'
  },
  {
    id: 'support-8',
    subject: 'SupportDesk',
    question: 'How does automatic ticket classification work?',
    difficulty: 'Medium'
  },
  {
    id: 'support-9',
    subject: 'SupportDesk',
    question: 'How does the system determine ticket priority?',
    difficulty: 'Medium'
  },
  {
    id: 'support-10',
    subject: 'SupportDesk',
    question: 'How does ticket routing work?',
    difficulty: 'Medium'
  },
  {
    id: 'support-11',
    subject: 'SupportDesk',
    question: 'Why did you use Llama 3.3 through Groq?',
    difficulty: 'Medium'
  },
  {
    id: 'support-12',
    subject: 'SupportDesk',
    question: 'Why did you choose an AI-based approach?',
    difficulty: 'Medium'
  },
  {
    id: 'support-13',
    subject: 'SupportDesk',
    question: 'What happens if the AI classifies a ticket incorrectly?',
    difficulty: 'Medium'
  },
  {
    id: 'support-14',
    subject: 'SupportDesk',
    question: 'How would you improve the accuracy of the classification?',
    difficulty: 'Hard'
  },
  {
    id: 'support-15',
    subject: 'SupportDesk',
    question: 'Why did you use Inngest?',
    difficulty: 'Medium'
  },
  {
    id: 'support-16',
    subject: 'SupportDesk',
    question: 'What do you mean by event-driven architecture?',
    difficulty: 'Medium'
  },
  {
    id: 'support-17',
    subject: 'SupportDesk',
    question: 'Why did you make ticket processing asynchronous?',
    difficulty: 'Hard'
  },
  {
    id: 'support-18',
    subject: 'SupportDesk',
    question: 'What happens when an asynchronous job fails?',
    difficulty: 'Medium'
  },
  {
    id: 'support-19',
    subject: 'SupportDesk',
    question: 'Why not process everything synchronously?',
    difficulty: 'Medium'
  },
  {
    id: 'support-20',
    subject: 'SupportDesk',
    question: 'What advantages did this architecture provide?',
    difficulty: 'Medium'
  },
  {
    id: 'support-21',
    subject: 'SupportDesk',
    question: 'How does moderator assignment work?',
    difficulty: 'Medium'
  },
  {
    id: 'support-22',
    subject: 'SupportDesk',
    question: 'What do you mean by skill matching?',
    difficulty: 'Easy'
  },
  {
    id: 'support-23',
    subject: 'SupportDesk',
    question: 'How does the system decide which moderator should receive a ticket?',
    difficulty: 'Medium'
  },
  {
    id: 'support-24',
    subject: 'SupportDesk',
    question: 'What happens when no moderator has the required skill?',
    difficulty: 'Medium'
  },
  {
    id: 'support-25',
    subject: 'SupportDesk',
    question: 'How would you improve the assignment algorithm?',
    difficulty: 'Hard'
  },
  {
    id: 'support-26',
    subject: 'SupportDesk',
    question: 'How did you implement JWT authentication?',
    difficulty: 'Medium'
  },
  {
    id: 'support-27',
    subject: 'SupportDesk',
    question: 'How did you protect different user roles?',
    difficulty: 'Medium'
  },
  {
    id: 'support-28',
    subject: 'SupportDesk',
    question: 'How did you implement email notifications?',
    difficulty: 'Easy'
  },
  {
    id: 'support-29',
    subject: 'SupportDesk',
    question: 'What happens if sending an email fails?',
    difficulty: 'Medium'
  },
  {
    id: 'support-30',
    subject: 'SupportDesk',
    question: 'How would you make email notifications reliable?',
    difficulty: 'Hard'
  },

  // =========================================================
  // RESUME / GENERAL
  // =========================================================
  {
    id: 'res-1',
    subject: 'Resume',
    question: 'Tell me about yourself.',
    difficulty: 'Easy'
  },
  {
    id: 'res-2',
    subject: 'Resume',
    question: 'Walk me through your resume.',
    difficulty: 'Easy'
  },
  {
    id: 'res-3',
    subject: 'Resume',
    question: 'Tell me about your journey from college to becoming a full-stack developer.',
    difficulty: 'Medium'
  },
  {
    id: 'res-4',
    subject: 'Resume',
    question: 'Which project are you most proud of?',
    difficulty: 'Easy'
  },
  {
    id: 'res-5',
    subject: 'Resume',
    question: 'Which internship taught you the most?',
    difficulty: 'Easy'
  },
  {
    id: 'res-6',
    subject: 'Resume',
    question: 'Which project was the most challenging?',
    difficulty: 'Medium'
  },
  {
    id: 'res-7',
    subject: 'Resume',
    question: 'Which technology are you most comfortable with?',
    difficulty: 'Easy'
  },
  {
    id: 'res-8',
    subject: 'Resume',
    question: 'Which technology are you currently trying to improve?',
    difficulty: 'Easy'
  },
  {
    id: 'res-9',
    subject: 'Resume',
    question: 'Why did you choose Computer Science?',
    difficulty: 'Easy'
  },
  {
    id: 'res-10',
    subject: 'Resume',
    question: 'Why software development?',
    difficulty: 'Easy'
  },
  {
    id: 'res-11',
    subject: 'Resume',
    question: 'Why should we hire you?',
    difficulty: 'Medium'
  },
  {
    id: 'res-12',
    subject: 'Resume',
    question: 'What are your strengths?',
    difficulty: 'Easy'
  },
  {
    id: 'res-13',
    subject: 'Resume',
    question: 'What is one weakness you are working on?',
    difficulty: 'Medium'
  },
  {
    id: 'res-14',
    subject: 'Resume',
    question: 'Tell me about a time you faced a technical failure.',
    difficulty: 'Medium'
  },
  {
    id: 'res-15',
    subject: 'Resume',
    question: 'Tell me about a time you worked under pressure.',
    difficulty: 'Medium'
  },
  {
    id: 'res-16',
    subject: 'Resume',
    question: 'Tell me about a disagreement with a teammate.',
    difficulty: 'Medium'
  },
  {
    id: 'res-17',
    subject: 'Resume',
    question: 'How do you prioritize when you have multiple tasks?',
    difficulty: 'Easy'
  },
  {
    id: 'res-18',
    subject: 'Resume',
    question: "How do you learn a technology you don't know?",
    difficulty: 'Medium'
  },
  {
    id: 'res-19',
    subject: 'Resume',
    question: 'What kind of software engineer do you want to become?',
    difficulty: 'Medium'
  },
  {
    id: 'res-20',
    subject: 'Resume',
    question: 'What are you looking for in your first full-time role?',
    difficulty: 'Easy'
  },
  {
    id: 'res-21',
    subject: 'Resume',
    question: 'You have worked with both Next.js and React. When would you choose one over the other?',
    difficulty: 'Medium'
  },
  {
    id: 'res-22',
    subject: 'Resume',
    question: 'You have used both MongoDB and MySQL. How do you decide which database to use?',
    difficulty: 'Medium'
  },
  {
    id: 'res-23',
    subject: 'Resume',
    question: 'You have worked on both AI-based and traditional applications. Which area interests you more?',
    difficulty: 'Medium'
  },
  {
    id: 'res-24',
    subject: 'Resume',
    question: 'Which project best demonstrates your engineering ability?',
    difficulty: 'Medium'
  },
  {
    id: 'res-25',
    subject: 'Resume',
    question: 'Which internship best prepared you for an SDE role?',
    difficulty: 'Medium'
  },
  {
    id: 'res-26',
    subject: 'Resume',
    question: 'You have won hackathons and solved 1,200+ problems. How have these experiences influenced your development skills?',
    difficulty: 'Medium'
  },
  {
    id: 'res-27',
    subject: 'Resume',
    question: "What is one technology on your resume that you haven't used extensively?",
    difficulty: 'Medium'
  },
  {
    id: 'res-28',
    subject: 'Resume',
    question: 'If I ask you to remove one project from your resume, which one would you remove and why?',
    difficulty: 'Hard'
  },
  {
    id: 'res-29',
    subject: 'Resume',
    question: 'Which claim on your resume are you most confident defending technically?',
    difficulty: 'Hard'
  },
  {
    id: 'res-30',
    subject: 'Resume',
    question: 'If I choose any project from your resume and start asking deep technical questions, which one would you prefer?',
    difficulty: 'Hard'
  }
];