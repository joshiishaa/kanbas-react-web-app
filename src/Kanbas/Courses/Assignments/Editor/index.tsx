import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRocket } from "react-icons/fa";
import "./index.css";
import "./style.css";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
             <br/>
<div className="row form-group">
                        <div className="col">
                              <label>Points</label>
                        </div>
                        <div className="col">
                              <input type = "number" max="100" className="form-control" min = "0" id="assg-points" placeholder="100"/><br/>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col">
                              <label>Assignment Group</label>
                        </div>
                        <div className="col">
                              <select className="form-control" id="assg-group"><option value="VAL1">ASSIGNMENTS</option>
                                    <option value="VAL2">QUIZZES</option>
                                    <option value="VAL3">PROJECTS</option>
                                    <option value="VAL4">EXAMS</option>
                                 </select>
                        </div>
                      </div>
                      <br/>
                      <div className="row form-group">
                        <div className="col">
                              <label>Display Grade as</label>
                        </div>
                        <div className="col">
                              <select className="form-control" id="assg-disp-grade"><option value="VAL1">Percentage</option>
                                    <option value="VAL2">Letter Grade</option>
                                 </select>
                        </div>
                      </div>
                      <br/>
                      <div className="row form-group">
                        <div className="col">
                        </div>
                        <div className="col">
                              <input type="checkbox" value="VAL3"
                            name="check-entry" id="chkbox-media"/>
                      <label >Do not count this assignment towards the final grade</label>
                        </div>
                      </div>
                      <br/>
                      <div className="row form-group">
                        <div className="col">Assign
                        </div>
                        <div className="col border">
                             <div className="container"> <label>Assign to</label>
                              <br/>
                              <input id="assg-to" placeholder="Everyone"/>
                              <br/>
                              <br/>
                              <label> Due </label><br/>
                              <input type="date"
                                    id="assg-due"/>
                                    <br/>
                              <br/>
                              <label> Available from </label><br/>
                              <input type="date"
                                    id="assg-from"/>
                                    <br/>
                                    <br/>
                                    <label >Until </label><br/>
                                    <input type="date"
                                          id="assg-until"/>
                                          <br/>
                                          <br/>
                                        
                        </div>
                      </div>
                      </div>
                    
            
           
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>

    </div>
  );
}
export default AssignmentEditor;

