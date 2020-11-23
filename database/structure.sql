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
