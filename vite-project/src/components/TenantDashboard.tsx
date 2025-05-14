// src/components/TenantDashboard.tsx
import { tenants } from '../data/tenants';
import ResourceCard from './ResourceCard';

export default function TenantDashboard({ tenantId }: any) {
  const tenant = tenants.find((t) => t.id === tenantId);
  if (!tenant) return <div>No tenant found</div>;

  return (
    <div>
      <h2>{tenant.name} Resource Overview</h2>
      <ResourceCard label="CPU" used={tenant.cpuUsed} limit={tenant.cpuLimit} />
      <ResourceCard label="Memory" used={tenant.memoryUsed} limit={tenant.memoryLimit} />
      <ResourceCard label="Pods" used={tenant.podsRunning} limit={tenant.maxPods} />
    </div>
  );
}
