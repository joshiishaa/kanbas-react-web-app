import React from "react";

import { Link, useParams } from "react-router-dom";import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRocket } from "react-icons/fa";
import { assignments } from "../../Database";
import "./index.css";
import "./style.css";
import AssignmentList from "./List";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <AssignmentList/>
    </>
);}
export default Assignments;

