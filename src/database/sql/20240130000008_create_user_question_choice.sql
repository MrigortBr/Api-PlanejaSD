CREATE TABLE public.user_question_choice (
	id_user int4 NULL,
	id_question_choice int4 null
	FOREIGN KEY (id_question_choice) REFERENCES public.question_choice(id);
	FOREIGN KEY (id_user) REFERENCES public.users__registers(id);
);