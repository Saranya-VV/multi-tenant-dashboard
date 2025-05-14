// src/components/ResourceCard.tsx

export default function ResourceCard({ label, used, limit }: any) {
  const percent = Math.round((used / limit) * 100);
  const statusColor = percent > 90 ? 'red' : percent > 75 ? 'orange' : 'green';

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{label}</h3>
      <p>
        {used} / {limit} ({percent}%)
      </p>
      <div
        style={{
          backgroundColor: '#eee',
          height: '10px',
          borderRadius: '5px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: '100%',
            backgroundColor: statusColor
          }}
        />
      </div>
    </div>
  );
}
