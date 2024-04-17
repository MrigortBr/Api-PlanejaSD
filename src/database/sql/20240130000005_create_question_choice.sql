CREATE TABLE public.question_choice (
	id serial4 NOT NULL,
	id_question int4 NULL,
	id_choice int4 NULL,
	CONSTRAINT question_choice_pkey PRIMARY KEY (id),
	CONSTRAINT question_choice_id_choice_fkey FOREIGN KEY (id_choice) REFERENCES public.choices(id),
	CONSTRAINT question_choice_id_question_fkey FOREIGN KEY (id_question) REFERENCES public.questions(id)
);