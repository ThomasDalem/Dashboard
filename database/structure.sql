CREATE TABLE public."user" (
    id SERIAL,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    CONSTRAINT user_pk PRIMARY KEY(id)
);

CREATE TABLE weather_widget (
    id SERIAL,
    city VARCHAR(100),
    postal_code VARCHAR(10),
    celcius BOOLEAN DEFAULT true,
    id_user INTEGER,
    CONSTRAINT weather_widget_pk PRIMARY KEY(id),
    CONSTRAINT user_fk FOREIGN KEY (id_user) REFERENCES public."user" (id) MATCH FULL ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE money_converter_widget (
    id SERIAL,
    base_money VARCHAR(5),
    amount INTEGER,
    convert_to_money VARCHAR(5),
    id_user INTEGER,
    CONSTRAINT money_converter_widget_pk PRIMARY KEY(id),
    CONSTRAINT user_fk FOREIGN KEY (id_user) REFERENCES public."user" (id) MATCH FULL ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE github_infos_user_widget (
    id SERIAL,
    username VARCHAR(100),
    id_user INTEGER,
    CONSTRAINT github_infos_user_widget_pk PRIMARY KEY(id),
    CONSTRAINT user_fk FOREIGN KEY (id_user) REFERENCES public."user" (id) MATCH FULL ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE github_search_user_widget (
    id SERIAL,
    username VARCHAR(100),
    id_user INTEGER,
    CONSTRAINT github_search_user_widget_pk PRIMARY KEY(id),
    CONSTRAINT user_fk FOREIGN KEY (id_user) REFERENCES public."user" (id) MATCH FULL ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE github_user_repos_widget (
    id SERIAL,
    username VARCHAR(100),
    id_user INTEGER,
    CONSTRAINT github_user_repos_widget_pk PRIMARY KEY(id),
    CONSTRAINT user_fk FOREIGN KEY (id_user) REFERENCES public."user" (id) MATCH FULL ON DELETE SET NULL ON UPDATE CASCADE
);

