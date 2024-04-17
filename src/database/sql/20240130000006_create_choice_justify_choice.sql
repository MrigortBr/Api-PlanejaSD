CREATE TABLE public.choice_justify_choice (
	id serial4 NOT NULL,
	id_question_choice int4 NULL,
	id_justify_choice int4 NULL,
	CONSTRAINT choice_justify_choice_pkey PRIMARY KEY (id),
	CONSTRAINT choice_justify_choice_id_justify_choice_fkey FOREIGN KEY (id_justify_choice) REFERENCES public.justify_choice(id),
	CONSTRAINT choice_justify_choice_id_question_choice_fkey FOREIGN KEY (id_question_choice) REFERENCES public.question_choice(id)
);