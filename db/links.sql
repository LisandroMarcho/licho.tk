create table
    links (
        id int auto_increment,
        shortUrl varchar(20) not null,
        sourceUrl text not null,
        createdAt datetime default now() not null,
        clicks int default 0 not null,
        constraint links_pk primary key (id)
    );

create unique index links_shortUrl_uindex on links (shortUrl desc);