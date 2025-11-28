function ReportsView({ user }) {
  try {
    const reports = [
      { id: 1, title: 'Reporte Mensual - Noviembre', date: '27 Nov 2025', status: 'Completado', type: 'Mensual' },
      { id: 2, title: 'Análisis de Usuarios', date: '25 Nov 2025', status: 'En Proceso', type: 'Análisis' },
      { id: 3, title: 'Métricas de Rendimiento', date: '20 Nov 2025', status: 'Completado', type: 'Rendimiento' },
      { id: 4, title: 'Reporte Semanal', date: '18 Nov 2025', status: 'Completado', type: 'Semanal' },
      { id: 5, title: 'Auditoría de Seguridad', date: '15 Nov 2025', status: 'Pendiente', type: 'Seguridad' }
    ];

    const getStatusColor = (status) => {
      switch(status) {
        case 'Completado': return 'bg-green-100 text-green-700';
        case 'En Proceso': return 'bg-yellow-100 text-yellow-700';
        case 'Pendiente': return 'bg-gray-100 text-gray-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    };

    return (
      <div className="space-y-6" data-name="reports-view" data-file="components/ReportsView.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--text-dark)]">Reportes</h2>
          <button className="bg-[var(--primary-color)] hover:bg-[var(--dark-pink)] text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
            <div className="icon-plus text-lg"></div>
            Nuevo Reporte
          </button>
        </div>

        <div className="grid gap-4">
          {reports.map(report => (
            <div key={report.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-2">{report.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <div className="icon-calendar text-[var(--primary-color)]"></div>
                      {report.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="icon-tag text-[var(--primary-color)]"></div>
                      {report.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-color)] transition-all">
                    <div className="icon-download text-[var(--primary-color)]"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ReportsView error:', error);
    return null;
  }
}