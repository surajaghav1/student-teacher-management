import React from 'react';
import StudentTable from './components/StudentTable';
import TeacherTable from './components/TeacherTable';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student & Teacher Management</h1>
      <StudentTable />
      <hr />
      <TeacherTable />
    </div>
  );
}

export default App;
