CREATE TABLE public.courses (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	image bytea NULL,
	CONSTRAINT courses_pkey PRIMARY KEY (id)
);