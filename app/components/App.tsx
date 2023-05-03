"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/table.module.css";
import FileInputButton from "./FileInputButton";

const App = () => {
  const [data, setData] = useState([]);
  const emptyData = ["-", "-", "-", "-"];
  // weightages
  const [assignmentWeightage, setAssignmentWeightage] = useState(20);
  const [quizWeightage, setQuizWeightage] = useState(20);
  const [midTermWeightage, setMidTermWeightage] = useState(20);
  const [finalTermWeightage, setFinalTermWeightage] = useState(40);
  const [labWeightage, setLabWeightage] = useState(0);
  const [CPWeightage, setCPWeightage] = useState(0);
  const [isWeightageCorrect, setIsWeightageCorrect] = useState(true);

  const checkWeightage = () => {
    const totalWeightage =
      assignmentWeightage +
      quizWeightage +
      midTermWeightage +
      finalTermWeightage +
      labWeightage +
      CPWeightage;

    if (totalWeightage != 100) {
      setIsWeightageCorrect(false);
    } else {
      setIsWeightageCorrect(true);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Result Calculator</h1>
      <div>
        {!isWeightageCorrect && (
          <h3 className={styles.message}>
            Total weightage is not 100%. Kindly fix it otherwise you will get
            incorrect results.
          </h3>
        )}
      </div>
      <table className={styles.table} id="myTable">
        {/* headings */}
        <tr>
          <th colSpan={2}>
            <button className={styles.button} onClick={checkWeightage}>
              Confirm Weightage
            </button>
          </th>

          <th colSpan={2}>
            Assignments
            <select
              name="AssignmentWeightage"
              id=""
              onChange={(event) =>
                setAssignmentWeightage(parseInt(event.target.value))
              }
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20" selected>
                20
              </option>
            </select>
          </th>
          <th colSpan={2}>
            Quizzes
            <select
              name="QuizWeightage"
              id=""
              onChange={(event) =>
                setQuizWeightage(parseInt(event.target.value))
              }
            >
              <option value="15">15</option>
              <option value="20" selected>
                20
              </option>
            </select>
          </th>
          <th colSpan={2}>
            MidTerm
            <select
              name="MidTermWeightage"
              id=""
              onChange={(event) =>
                setMidTermWeightage(parseInt(event.target.value))
              }
            >
              <option value="15">15</option>
              <option value="20" selected>
                20
              </option>
              <option value="25">25</option>
            </select>
          </th>
          <th colSpan={2}>
            FinalTerm
            <select
              name="FinalTermWeightage"
              id=""
              onChange={(event) =>
                setFinalTermWeightage(parseInt(event.target.value))
              }
            >
              <option value="40" selected>
                40
              </option>
              <option value="45">45</option>
            </select>
          </th>
          <th colSpan={2}>
            Lab
            <select
              name="LabWeightage"
              id=""
              onChange={(event) =>
                setLabWeightage(parseInt(event.target.value))
              }
            >
              <option value="0" selected>
                0
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </th>
          <th colSpan={2}>
            CP
            <select
              name="CP"
              id=""
              onChange={(event) => setCPWeightage(parseInt(event.target.value))}
            >
              <option value="0" selected>
                0
              </option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </th>
          <th colSpan={2}>Result</th>
        </tr>
        <tr>
          <th colSpan={2}>Reg #</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Obt Marks </th> <th>Total Marks</th>
          <th>Percentage</th> <th>Grade</th>
        </tr>
        {data.length !== 0 ? (
          data.map((item, index) => {
            const assignment = item.Assignment
              ? item.Assignment.split("o")
              : [];
            const quiz = item.Quiz ? item.Quiz.split("o") : [];
            const midTerm = item.Midterm ? item.Midterm.split("o") : [];
            const finalTerm = item.Finalterm ? item.Finalterm.split("o") : [];
            const lab = item.Lab ? item.Lab.split("o") : [];
            const CP = item.CP ? item.CP.split("o") : [];

            const totalPercentage = parseFloat(
              (
                (item.Quiz ? parseInt(quiz[0]) / parseInt(quiz[1]) : 0) *
                  quizWeightage +
                (item.Assignment
                  ? parseInt(assignment[0]) / parseInt(assignment[1])
                  : 0) *
                  assignmentWeightage +
                (item.Midterm
                  ? parseInt(midTerm[0]) / parseInt(midTerm[1])
                  : 0) *
                  midTermWeightage +
                (item.Finalterm
                  ? parseInt(finalTerm[0]) / parseInt(finalTerm[1])
                  : 0) *
                  finalTermWeightage +
                (item.Lab ? parseInt(lab[0]) / parseInt(lab[1]) : 0) *
                  labWeightage +
                (item.CP ? parseInt(CP[0]) / parseInt(CP[1]) : 0) * CPWeightage
              ).toFixed(2)
            );

            const grade =
              totalPercentage >= 86
                ? "A"
                : totalPercentage >= 82
                ? "A-"
                : totalPercentage >= 78
                ? "B+"
                : totalPercentage >= 74
                ? "B"
                : totalPercentage >= 70
                ? "B-"
                : totalPercentage >= 66
                ? "C+"
                : totalPercentage >= 62
                ? "C"
                : totalPercentage >= 58
                ? "C-"
                : totalPercentage >= 54
                ? "D+"
                : totalPercentage >= 50
                ? "D"
                : "F";
            return (
              <>
                <tr key={index}>
                  <td colSpan={2}>{item.RegNumber}</td>
                  <td>{assignment && assignment[0]}</td>{" "}
                  <td>{assignment && assignment[1]}</td>
                  <td>{quiz && quiz[0]}</td> <td>{quiz && quiz[1]}</td>
                  <td>{midTerm && midTerm[0]}</td>{" "}
                  <td>{midTerm && midTerm[1]}</td>
                  <td>{finalTerm && finalTerm[0]}</td>{" "}
                  <td>{finalTerm && finalTerm[1]}</td>
                  <td>{lab && lab[0]}</td> <td>{lab && lab[1]}</td>
                  <td>{CP && CP[0]}</td> <td>{CP && CP[1]}</td>
                  <td>{totalPercentage}</td>
                  <td>{grade}</td>
                </tr>
              </>
            );
          })
        ) : (
          <>
            {emptyData.map((item, index) => (
              <tr key={index}>
                <td className={styles.empty} colSpan={2}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td> <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td> <td className={styles.empty}></td>
                <td className={styles.empty}></td> <td className={styles.empty}></td>
                <td className={styles.empty}></td>
                <td className={styles.empty}></td>
              </tr>
            ))}
          </>
        )}
      </table>

      <FileInputButton data={data} setData={setData} />
    </main>
  );
};

export default App;
