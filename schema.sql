--schema.sql--
create table worst_tv_shows (
    id serial primary key,
    show_name varchar(300),
    station varchar(300),
    year_start integer,
    year_end integer
);