create table post
(
    id int generated always as identity primary key,
    author text,
    subscribers bigint,
    title text,
    "postUrl" text,
    "contentData" text,
    "imgUrl" text,
    published text
);
