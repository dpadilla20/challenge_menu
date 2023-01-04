import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Layout from './Layout';
import Users from '../routes/Users';
import UsersList from '../routes/UsersList';
import UsersReport from '../routes/UsersReport';
import ClientList from '../routes/ClientReport';
import ClientReport from '../routes/ClientList';
import Clients from '../routes/Clients';
import Locals from '../routes/Locals';
import LocalsList from '../routes/LocalsList';
import LocalsReport from '../routes/LocalsReport';
import Sales from '../routes/Sales';
import SalesList from '../routes/SalesList';
import SalesReport from '../routes/SalesReport';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="usuario-listado" element={<UsersList />} />
          <Route path="usuario-reporte" element={<UsersReport />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="cliente-listado" element={<ClientList />} />
          <Route path="cliente-reporte" element={<ClientReport />} />
          <Route path="locales" element={<Locals />} />
          <Route path="locales-listado" element={<LocalsList />} />
          <Route path="locales-reportes" element={<LocalsReport />} />
          <Route path="ventas" element={<Sales />} />
          <Route path="ventas-listado" element={<SalesList />} />
          <Route path="ventas-reportes" element={<SalesReport />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;