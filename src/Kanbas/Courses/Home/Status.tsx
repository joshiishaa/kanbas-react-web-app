import React, { useState } from "react";
import "./style.css";
import "./index.css";


import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaBan } from "react-icons/fa";
import { useParams } from "react-router";

function CourseStatus()
{
    return (
        <div>
    <div className="button-container">
<button type="button" ><FaBan /> Unpublish</button>
<button type="button" className="green"><FaCheckCircle /> Published</button><br></br>
<button type="button">< FaPlus />Import Existing Content</button><br></br>
<button type="button" ><FaCheckCircle />Import from Commons</button><br></br>
<button type="button" ><FaBan />Choose Homepage</button><br></br>
<button type="button" ><FaCheckCircle />View Course Stream</button><br></br>
<button type="button" ><FaPlusCircle />New Announcement</button><br></br>
<button type="button" >< FaPlus />New Analytics</button><br></br>
<button type="button" ><FaBan />View Course Notifications</button><br></br>
</div>
<br></br>
<h3> To do </h3><br></br>
<hr></hr>
<div className="red-text">
<i className="fas fa-calendar"></i> <u>CS 5610 - Office Hours</u> <br></br>
Feb 8th<br></br>
<i className="fas fa-calendar"></i> <u>CS 5610 - Office Hours</u> <br></br>
Feb 9th<br></br>
<i className="fas fa-calendar"></i> <u>CS 5610 - Office Hours</u> <br></br>
Feb 10th<br></br>
<i className="fas fa-calendar"></i> <u>CS 5610 - Office Hours</u> <br></br>
Feb 11th<br></br>
</div></div>);

}
export default CourseStatus;