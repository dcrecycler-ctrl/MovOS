import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function FleetPage() {
  const { data: vehicles, error } = await supabase
    .from("vehicles")
    .select("*");

  if (error) {
    return <div>Error loading fleet</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>MovOS Fleet</h1>

      {!vehicles || vehicles.length === 0 ? (
        <p>No vehicles found</p>
      ) : (
        <ul>
          {vehicles.map((v: any) => (
            <li key={v.id}>
              {v.id} — {v.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
