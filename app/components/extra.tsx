"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/table.module.css";
import FileInputButton from "./FileInputButton";

const App = () => {
  let [data, setData] = useState([]);
  const emptyRow = ["-", "-", "-", "-"];

  const [assignmentObt, setAssignmentObt] = useState(0);
  const [quizObt, setQuizObt] = useState(0);
  const [midTermObt, setMidTermObt] = useState(0);
  const [finalTermObt, setFinalTermObt] = useState(0);
  const [assignmentTotal, setAssignmentTotal] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [midTermTotal, setMidTermTotal] = useState(0);
  const [finalTermTotal, setFinalTermTotal] = useState(0);

  // weightages
  const [assignmentWeightage, setAssignmentWeightage] = useState(20);
  const [quizWeightage, setQuizWeightage] = useState(20);
  const [midTermWeightage, setMidTermWeightage] = useState(20);
  const [finalTermWeightage, setFinalTermWeightage] = useState(40);

  // set values for last row
  useEffect(() => {
    let assignmentObt = 0;
    let assignmentTotal = 0;
    let quizObt = 0;
    let quizTotal = 0;
    let midTermObt = 0;
    let midTermTotal = 0;
    let finalTermObt = 0;
    let finalTermTotal = 0;

    assignmentObt += parseInt(
      data[i].Assignments ? data[i].Assignments.split("o")[0] : 0
    );
    assignmentTotal += parseInt(
      data[i].Assignments ? data[i].Assignments.split("o")[1] : 0
    );
    quizObt += parseInt(data[i].Quizzes ? data[i].Quizzes.split("o")[0] : 0);
    quizTotal += parseInt(data[i].Quizzes ? data[i].Quizzes.split("o")[1] : 0);
    midTermObt += parseInt(data[i].Midterm ? data[i].Midterm.split("o")[0] : 0);
    midTermTotal += parseInt(
      data[i].Midterm ? data[i].Midterm.split("o")[1] : 0
    );
    finalTermObt += parseInt(
      data[i].Finalterm ? data[i].Finalterm.split("o")[0] : 0
    );
    finalTermTotal += parseInt(
      data[i].Finalterm ? data[i].Finalterm.split("o")[1] : 0
    );

    setAssignmentObt(assignmentObt);
    setAssignmentTotal(assignmentTotal);
    setQuizObt(quizObt);
    setQuizTotal(quizTotal);
    setMidTermObt(midTermObt);
    setMidTermTotal(midTermTotal);
    setFinalTermObt(finalTermObt);
    setFinalTermTotal(finalTermTotal);
  }, [data]);

  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.heading}>Result Calculator</h1>
        <table className={styles.table} id="myTable">
          {/* headings */}
          <tr>
            <th colSpan={2}>Reg #</th>
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
          </tr>
          <tr>
            <th>Obtained Marks</th> <th>Total Marks</th>
            <th>Obtained Marks</th> <th>Total Marks</th>
            <th>Obtained Marks</th> <th>Total Marks</th>
            <th>Obtained Marks</th> <th>Total Marks</th>
          </tr>
          {data.length !== 0
            ? data.map((item, index) => {
                const assignment = item.Assignments
                  ? item.Assignments.split("o")
                  : [];
                const quiz = item.Quizzes ? item.Quizzes.split("o") : [];
                const midTerm = item.Midterm ? item.Midterm.split("o") : [];
                const finalTerm = item.Finalterm
                  ? item.Finalterm.split("o")
                  : [];
                return (
                  <>
                    <tr key={index}>
                      <td>{assignment[0]}</td>
                      <td>{assignment[1]}</td>
                      <td>{quiz[0]}</td>
                      <td>{quiz[1]}</td>
                      <td>{midTerm[0]}</td>
                      <td>{midTerm[1]}</td>
                      <td>{finalTerm[0]}</td>
                      <td>{finalTerm[1]}</td>
                    </tr>
                  </>
                );
              })
            : emptyRow.map((cell, index) => (
                <tr key={index}>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                  <td>{cell}</td>
                </tr>
              ))}

          {/* last row */}
          {data.length !== 0 && (
            <tr className={styles.lastRow}>
              <td>{assignmentObt}</td>
              <td>{assignmentTotal}</td>
              <td>{quizObt}</td>
              <td>{quizTotal}</td>
              <td>{midTermObt}</td>
              <td>{midTermTotal}</td>
              <td>{finalTermObt}</td>
              <td>{finalTermTotal}</td>
            </tr>
          )}
        </table>
        {/* grade calculation */}
        {data.length !== 0 && (
          <>
            <table className={styles.table} id="myTable">
              <tr>
                <td>
                  <b>Assignments: </b>
                  {(
                    (assignmentObt / assignmentTotal) *
                    assignmentWeightage
                  ).toFixed(2)}
                </td>
                <td>
                  <b>Quizzes: </b>
                  {((quizObt / quizTotal) * quizWeightage).toFixed(2)}
                </td>
                <td>
                  <b>Midterm: </b>
                  {((midTermObt / midTermTotal) * midTermWeightage).toFixed(2)}
                </td>
                <td>
                  <b>FinalTerm: </b>
                  {(
                    (finalTermObt / finalTermTotal) *
                    finalTermWeightage
                  ).toFixed(2)}
                </td>
                <td>
                  <b>Total: </b>
                  {parseInt(
                    (
                      (assignmentObt / assignmentTotal) *
                      assignmentWeightage
                    ).toFixed(2)
                  ) +
                    parseInt(
                      ((quizObt / quizTotal) * quizWeightage).toFixed(2)
                    ) +
                    parseInt(
                      ((midTermObt / midTermTotal) * midTermWeightage).toFixed(
                        2
                      )
                    ) +
                    parseInt(
                      (
                        (finalTermObt / finalTermTotal) *
                        finalTermWeightage
                      ).toFixed(2)
                    )}
                </td>
                <td>
                  <b>Grade: </b>
                  {parseInt(
                    (
                      (assignmentObt / assignmentTotal) *
                      assignmentWeightage
                    ).toFixed(2)
                  ) +
                    parseInt(
                      ((quizObt / quizTotal) * quizWeightage).toFixed(2)
                    ) +
                    parseInt(
                      ((midTermObt / midTermTotal) * midTermWeightage).toFixed(
                        2
                      )
                    ) +
                    parseInt(
                      (
                        (finalTermObt / finalTermTotal) *
                        finalTermWeightage
                      ).toFixed(2)
                    ) >=
                  90
                    ? "A"
                    : parseInt(
                        (
                          (assignmentObt / assignmentTotal) *
                          assignmentWeightage
                        ).toFixed(2)
                      ) +
                        parseInt(
                          ((quizObt / quizTotal) * quizWeightage).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (midTermObt / midTermTotal) *
                            midTermWeightage
                          ).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (finalTermObt / finalTermTotal) *
                            finalTermWeightage
                          ).toFixed(2)
                        ) >=
                      80
                    ? "B"
                    : parseInt(
                        (
                          (assignmentObt / assignmentTotal) *
                          assignmentWeightage
                        ).toFixed(2)
                      ) +
                        parseInt(
                          ((quizObt / quizTotal) * quizWeightage).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (midTermObt / midTermTotal) *
                            midTermWeightage
                          ).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (finalTermObt / finalTermTotal) *
                            finalTermWeightage
                          ).toFixed(2)
                        ) >=
                      70
                    ? "C"
                    : parseInt(
                        (
                          (assignmentObt / assignmentTotal) *
                          assignmentWeightage
                        ).toFixed(2)
                      ) +
                        parseInt(
                          ((quizObt / quizTotal) * quizWeightage).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (midTermObt / midTermTotal) *
                            midTermWeightage
                          ).toFixed(2)
                        ) +
                        parseInt(
                          (
                            (finalTermObt / finalTermTotal) *
                            finalTermWeightage
                          ).toFixed(2)
                        ) >=
                      86
                    ? "D"
                    : "F"}
                </td>
              </tr>
            </table>
          </>
        )}
        <FileInputButton data={data} setData={setData} />
      </main>
    </>
  );
};

export default App;
