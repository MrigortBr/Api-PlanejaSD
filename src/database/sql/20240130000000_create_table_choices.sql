CREATE TABLE public.choices (
	id serial4 NOT NULL,
	title varchar(255) NOT NULL,
	score int4 NOT NULL,
	CONSTRAINT choices_pkey PRIMARY KEY (id)
);