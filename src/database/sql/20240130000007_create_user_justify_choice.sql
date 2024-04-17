CREATE TABLE public.user_justify_choice (
	id_user int4 NULL,
	response text NULL,
	id_choice_justify_choice int4 null,
	FOREIGN KEY (id_choice_justify_choice) REFERENCES public.choice_justify_choice(id),
	FOREIGN KEY (id_user) REFERENCES public.users__registers(id)
);