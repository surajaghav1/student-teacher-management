import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', college: '', status: 'active', address: '' });
  const [editingId, setEditingId] = useState(null);

  const getStudents = async () => {
    const res = await axios.get('http://localhost:8000/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:8000/api/students/${editingId}`, form);
    } else {
      await axios.post('http://localhost:8000/api/students', form);
    }
    setForm({ name: '', college: '', status: 'active', address: '' });
    setEditingId(null);
    getStudents();
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditingId(student._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/students/${id}`);
    getStudents();
  };

  return (
    <div>
      <h3>Students</h3>
      <form className="row g-2 mb-3" onSubmit={handleSubmit}>
        <input className="form-control col" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control col" placeholder="College" value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} />
        <input className="form-control col" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        <select className="form-control col" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>active</option>
          <option>inactive</option>
          <option>graduated</option>
        </select>
        <button className="btn btn-primary col-auto">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>College</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu._id}>
              <td>{stu.name}</td>
              <td>{stu.college}</td>
              <td>{stu.address}</td>
              <td>{stu.status}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(stu)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(stu._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
