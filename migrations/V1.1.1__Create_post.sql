create table post
(
    id int generated always as identity primary key,
    author text not null,
    subscribers bigint not null,
    title text not null,
    "postUrl" text not null,
    "contentData" text not null,
    "imgUrl" text not null,
    published text not null
);
