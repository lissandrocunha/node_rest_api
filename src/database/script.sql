create schema blog;

create table blog.post{
    id serial primary key,
    title next not null,
    content text not null,
    date timestamp default now()
}