// src/App.tsx
import  { useState } from 'react';
import TenantSelector from './components/TenantSelector';
import TenantDashboard from './components/TenantDashboard';

function App() {
  const [tenantId, setTenantId] = useState('tenantA');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Multi-Tenant Workload Dashboard</h1>
      <TenantSelector selected={tenantId} onChange={setTenantId} />
      <TenantDashboard tenantId={tenantId} />
    </div>
  );
}

export default App;
