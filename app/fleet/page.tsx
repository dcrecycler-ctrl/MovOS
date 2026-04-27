import { supabase } from "@/lib/db/supabase";

export default async function FleetPage() {
  const { data: vehicles, error } = await supabase
    .from("vehicles")
    .select("id, status");

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Fleet</h1>

      {error && (
        <p className="text-red-500">Failed to load vehicles: {error.message}</p>
      )}

      {!error && vehicles && vehicles.length === 0 && (
        <p className="text-gray-500">No vehicles found.</p>
      )}

      {!error && vehicles && vehicles.length > 0 && (
        <ul className="space-y-2">
          {vehicles.map((vehicle) => (
            <li
              key={vehicle.id}
              className="flex items-center gap-4 rounded border px-4 py-3"
            >
              <span className="font-mono text-xs text-gray-400">{vehicle.id}</span>
              <span className="text-sm font-medium capitalize">{vehicle.status}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
