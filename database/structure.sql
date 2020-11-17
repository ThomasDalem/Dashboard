CREATE TABLE public."user" (
    id SERIAL,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_admin boolean DEFAULT false,
    CONSTRAINT user_pk PRIMARY KEY(id)
);
