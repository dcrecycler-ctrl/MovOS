-- locations must exist before vehicles references it
create table locations (
  id   uuid primary key default gen_random_uuid(),
  name text not null
);

-- contracts must exist before vehicles references it
create table contracts (
  id         uuid primary key default gen_random_uuid(),
  type       text not null,
  start_date timestamp with time zone not null,
  end_date   timestamp with time zone
);

create table vehicles (
  id          uuid primary key default gen_random_uuid(),
  status      text not null,
  location_id uuid not null references locations(id),
  contract_id uuid references contracts(id),
  created_at  timestamp with time zone default now()
);

-- indexes on foreign keys
create index on vehicles(location_id);
create index on vehicles(contract_id);
