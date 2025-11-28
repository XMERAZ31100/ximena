const STATIC_USERS = [
  {
    username: 'super_maria',
    password: 'super123',
    fullName: 'Maria Rodriguez',
    email: 'maria@system.com',
    role: 'superuser',
    version: 'v1.0'
  },
  {
    username: 'super_ana',
    password: 'super456',
    fullName: 'Ana Martinez',
    email: 'ana@system.com',
    role: 'superuser',
    version: 'v1.0'
  },
  {
    username: 'admin_sofia',
    password: 'admin123',
    fullName: 'Sofia Garcia',
    email: 'sofia@system.com',
    role: 'admin',
    version: 'v1.0'
  },
  {
    username: 'admin_lucia',
    password: 'admin456',
    fullName: 'Lucia Fernandez',
    email: 'lucia@system.com',
    role: 'admin',
    version: 'v1.0'
  },
  {
    username: 'user_carmen',
    password: 'user123',
    fullName: 'Carmen Lopez',
    email: 'carmen@system.com',
    role: 'user',
    version: 'v1.0'
  },
  {
    username: 'user_elena',
    password: 'user456',
    fullName: 'Elena Sanchez',
    email: 'elena@system.com',
    role: 'user',
    version: 'v1.0'
  }
];

function authenticateUser(username, password) {
  const user = STATIC_USERS.find(u => 
    u.username === username && u.password === password
  );
  
  if (user) {
    return {
      id: user.username,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      version: user.version
    };
  }
  
  return null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}