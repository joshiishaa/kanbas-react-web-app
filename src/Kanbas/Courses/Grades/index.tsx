
import { assignments, enrollments, grades, users } from "../../Database";
import { FaCog, FaFilter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./index.css";
import "./style.css"
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className = "container" > <button type="button">Import</button>
                        <select>
                            <option value="VAL1">Export</option>
                         </select>
                        <button type="button"><FaCog/></button></div>
                           
                    <br/>
                 <form id="student-fields">
                    <div className="row">
                        <div className="col">
                            <label ><h3>Student Names</h3></label>
                        </div>
                        <div className="col">
                            <label><h3>Assignment Names</h3></label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                            <input className="form-control" id="student-name" placeholder="Search students"/>
                        </div>
                        <div className="col">
                            <input className="form-control"  id="student-name" placeholder="Search assignments"/>
                        </div>
                      </div>
                        
                    
                     </form>
                     <br/>
                     <button type="button"><FaFilter/>Apply Filters</button>
                <br/>
                <br/>
      <div className="table-responsive table-striped">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

