export type VehicleStatus = "active" | "inactive" | "maintenance" | "unknown";

export type Vehicle = {
  id: string;
  plate: string;
  status: VehicleStatus;
  createdAt: string;
  updatedAt: string;
};

export type Fleet = {
  id: string;
  name: string;
  vehicles: Vehicle[];
};
