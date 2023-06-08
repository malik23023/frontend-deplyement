import Head from "./components/Head";
import Attendance from "./components/Attendance";
import UploadMarks from "./components/UploadMarks";
import Attd from "./components/Attd";

function App() {
  return (
    <div className="App">

      <Head/> 
       <Attendance/> 
       <UploadMarks/>
      <Attd/>
    
    </div>
  );
}

export default App;
