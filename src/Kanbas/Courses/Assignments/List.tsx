import React, { useState } from "react";
import "./style.css";
import "./index.css";


import  {assignments}  from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaRocket } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";
import { Link } from "react-router-dom";

function AssignmentList() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  //const assignmentList = assignments.filter(
    //(assignment) => assignment.course === courseId);
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
    //const assignmentList = assignments.filter(
      //(assignment) => assignment.course === courseId);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  function dialogDelete(assignmentId: any) {
    const result = window.confirm("Are sure you want to remove this assignment?");
    if (result === true) {
      dispatch(deleteAssignment(assignmentId))
    } 
 }

  return (
    <>
      {<div>
      <button type="button" className="button">Collapse All</button>
    <button type="button" className="button">View Progress</button>
    <select>
      <option value="VAL1"> <FaCheckCircle/> Publish All</option>
   </select>
    <button type="button" className="button red"><FaPlus/> Module</button>
    <button type="button"><FaEllipsisV /></button>
    </div>}
   
        <button
          onClick={() => dispatch(addAssignment({ ...assignment, course: assignmentId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateAssignment(assignment))}>
          Update
        </button>
        <input
          value={assignment.title}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }/>
        <textarea
          value={assignment._id}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, _id: e.target.value }))
          }/>
    
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
              <Link
                   to={`/Kanbas/Courses/${"New course id"}/Assignments/${"new id"}`}>{}<FaPlusCircle className="ms-2" /></Link><FaEllipsisV className="ms-2" />
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
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /> <button
              onClick={() => dialogDelete(assignment._id)}>
              Delete
            </button></span><br></br>
                  due {assignment.due}
              </li>))}
          </ul>
        </li>
      </ul>
      
    </>
  );
}
export default AssignmentList;

