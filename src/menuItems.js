export const menuItems = [
    {
      title: 'Home',
      url: '/',
      role: 'admin'
    },
    {
      title: 'Usuarios',
      url: '/usuarios',
      role: ['admin'],
      submenu: [
        {
          title: 'Listado',
          url: 'usuario-listado',
        },
        {
          title: 'Reportes',
          url: 'usuario-reporte',
        },
      ],
    },
    {
      title: 'Clientes',
      url: '/clientes',
      role: ['admin'],
      submenu: [
        {
          title: 'Listado',
          url: 'cliente-listado',
        },
        {
          title: 'Reportes',
          url: 'cliente-reportes',
        },
      ],
    },
    {
      title: 'Locales',
      url: '/locales',
      role: ['admin', 'encargado'],
      submenu: [
        {
          title: 'Listado',
          url: 'locales-listado',
        },
        {
          title: 'Reportes',
          url: 'locales-reportes',
        },
      ],
    },
    {
      title: 'Ventas',
      url: '/ventas',
      role: ['admin', 'cajero', 'encargado'],
      submenu: [
        {
          title: 'Listado',
          url: 'ventas-listado',
        },
        {
          title: 'Reportes',
          url: 'ventas-reportes',
        },
      ],
    },
  ];