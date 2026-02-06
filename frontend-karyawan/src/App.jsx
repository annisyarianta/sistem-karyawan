import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    nip: "",
    jabatan: "",
    alamat: "",
    noTelp: "",
  });

  const fetchData = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    setForm({ nama: "", nik: "", nip: "", jabatan: "", alamat: "", noTelp: "" });
    fetchData();
  };

  const handleDelete = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchData();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Data Karyawan</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Nama" value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })} />
        <input placeholder="NIK" value={form.nik} onChange={e => setForm({ ...form, nik: e.target.value })} />
        <input placeholder="NIP" value={form.nip} onChange={e => setForm({ ...form, nip: e.target.value })} />
        <input placeholder="Jabatan" value={form.jabatan} onChange={e => setForm({ ...form, jabatan: e.target.value })} />
        <input placeholder="Alamat" value={form.alamat} onChange={e => setForm({ ...form, alamat: e.target.value })} />
        <input placeholder="No Telp" value={form.noTelp} onChange={e => setForm({ ...form, noTelp: e.target.value })} />
        <button type="submit">Tambah</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIK</th>
            <th>NIP</th>
            <th>Jabatan</th>
            <th>Alamat</th>
            <th>No Telp</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.nama}</td>
              <td>{e.nik}</td>
              <td>{e.nip}</td>
              <td>{e.jabatan}</td>
              <td>{e.alamat}</td>
              <td>{e.noTelp}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
