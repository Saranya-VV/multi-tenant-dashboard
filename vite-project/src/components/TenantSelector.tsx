// src/components/TenantSelector.tsx
import { tenants } from '../data/tenants';

export default function TenantSelector({ selected, onChange }: any) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {tenants.map((tenant) => (
        <option key={tenant.id} value={tenant.id}>
          {tenant.name}
        </option>
      ))}
    </select>
  );
}
