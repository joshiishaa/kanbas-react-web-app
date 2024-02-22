import ModuleList from "../Modules/List";
import CourseStatus from "./Status";


function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div>
        <CourseStatus />
      </div>
    </div>
  );
}
export default Home;

