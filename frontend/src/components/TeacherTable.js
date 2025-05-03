import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({ name: '', subject: '', school: '', status: 'active', address: '' });
  const [editingId, setEditingId] = useState(null);

  const getTeachers = async () => {
    const res = await axios.get('http://localhost:8000/api/teachers');
    setTeachers(res.data);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:8000/api/teachers/${editingId}`, form);
    } else {
      await axios.post('http://localhost:8000/api/teachers', form);
    }
    setForm({ name: '', subject: '', school: '', status: 'active', address: '' });
    setEditingId(null);
    getTeachers();
  };

  const handleEdit = (teacher) => {
    setForm(teacher);
    setEditingId(teacher._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/teachers/${id}`);
    getTeachers();
  };

  return (
    <div>
      <h3>Teachers</h3>
      <form className="row g-2 mb-3" onSubmit={handleSubmit}>
        <input className="form-control col" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control col" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
        <input className="form-control col" placeholder="School" value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} />
        <input className="form-control col" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        <select className="form-control col" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>active</option>
          <option>inactive</option>
        </select>
        <button className="btn btn-primary col-auto">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>School</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t._id}>
              <td>{t.name}</td>
              <td>{t.subject}</td>
              <td>{t.school}</td>
              <td>{t.address}</td>
              <td>{t.status}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(t)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(t._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
    