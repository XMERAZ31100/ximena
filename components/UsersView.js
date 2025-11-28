function UsersView({ user }) {
  try {
    const [users, setUsers] = React.useState([
      { id: 1, name: 'Maria Rodriguez', email: 'maria@system.com', role: 'superuser', status: 'Activo' },
      { id: 2, name: 'Ana Martinez', email: 'ana@system.com', role: 'superuser', status: 'Activo' },
      { id: 3, name: 'Sofia Garcia', email: 'sofia@system.com', role: 'admin', status: 'Activo' },
      { id: 4, name: 'Lucia Fernandez', email: 'lucia@system.com', role: 'admin', status: 'Inactivo' },
      { id: 5, name: 'Carmen Lopez', email: 'carmen@system.com', role: 'user', status: 'Activo' },
      { id: 6, name: 'Elena Sanchez', email: 'elena@system.com', role: 'user', status: 'Activo' }
    ]);

    const getRoleBadge = (role) => {
      const colors = {
        superuser: 'bg-purple-100 text-purple-700',
        admin: 'bg-blue-100 text-blue-700',
        user: 'bg-green-100 text-green-700'
      };
      return colors[role] || 'bg-gray-100 text-gray-700';
    };

    return (
      <div className="space-y-6" data-name="users-view" data-file="components/UsersView.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--text-dark)]">Gestión de Usuarios</h2>
          <button className="bg-[var(--primary-color)] hover:bg-[var(--dark-pink)] text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
            <div className="icon-user-plus text-lg"></div>
            Agregar Usuario
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--secondary-color)]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-dark)]">Nombre</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-dark)]">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-dark)]">Rol</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-dark)]">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-dark)]">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={u.id} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-light)]'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center">
                        <div className="icon-user text-white text-sm"></div>
                      </div>
                      <span className="font-medium text-[var(--text-dark)]">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getRoleBadge(u.role)}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      u.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 transition-all">
                        <div className="icon-edit text-blue-600"></div>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-all">
                        <div className="icon-trash-2 text-red-600"></div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsersView error:', error);
    return null;
  }
}