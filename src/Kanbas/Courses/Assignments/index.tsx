import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRocket } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import "./style.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <form id="student-fields">
            <input id="student-name" placeholder="Search for assignments"/>
            <button type="button">Group</button>
                    <button type="button">Assignment</button>
                    <select>
                        <option value="VAL1">Edit Assignment Dates</option>
                     </select>
         </form>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaRocket className="fa-green"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span><br></br>
                  due {assignment.due}
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

