# Software Engineer Candidate technical challenge

Using technology that you are comfortable with, design and deliver a solution that meets the following user stories, incorporating the supplied data.  Please submit your code via a link to a Git repository.

intelliHR uses a combination of Postgres, Laravel, NodeJS, GraphQL, React and Typescript.

---

### Aperture Science Enrichment Centre requires a new management system to conduct exciting new tests! Tests are questionnaires completed by (willing) human subjects, how exciting!

Testing is the future, and the future starts with you.

### Users

GLaDOS - Manages tests and test subjects

Subject(s) - Human testing subject

Facility Manager - Person who maintains/deploys the management system

### User stories
| ID | Story Description                                                                                                             | Priority    | ETA                                                                   |
|----|-------------------------------------------------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------|
| 1  | As GLaDOS, I can log in to the application                                                                                    | Must have   | DONE                                |
| 2  | As a Subject, I can log in to the application                                                                                 | Must have   | DONE                           |
| 3  | As GLaDOS, I can edit the questions in the questionnaire                                                                      | Could have  | backend done/frontend 1h                                                                        |
| 4  | As a Subject, I can submit testing data (questionnaires)                                                                      | Must have   | backend done/frontend 1.5h      Testing data based on stored testing parameters |
| 5  | As GLaDOS, I can view all test subjects' data                                                                                 | Must have   | DONE                                                                        |
| 6  | As a Subject, I can only view my own testing data (historical   questionnaire submissions)                                    | Must have   | backend done/frontend .5h                                                                        |
| 7  | As GLaDOS, I can ~~capture~~ register new test subjects                                                                       | Should have | DONE                                   |
| 8  | As GLaDOS, I can filter and sort test subjects based on their metadata                                                        | Should have | DONE                                                                        |
| 9  | As a facility manager, I can retrieve the Subject Number of the subject   that has submitted the most data and is still alive | Could have  | 2h                                |
| 10 | As a facility manager, I can test the new testing management system (unit   tests)                                            | Could have  | 3h                                                                        |
| 11 | As a facility manager, I can deploy the new system in a docker container                                                      | Could have  | 3h                                                                        |

You should restrict your submission to around 3 hours of work.  If you do not complete all stories in this time, please also submit an estimation of the time required to complete the remainders (and any related notes/approach you think would be helpful).

### Demo Data

Demo data can be found in adjacent file, data.json.

You may alter, delete, or add to this data in any way you see fit. It is only included here as a convenience to get you started.  It should not be taken as structure or requirement at all.
