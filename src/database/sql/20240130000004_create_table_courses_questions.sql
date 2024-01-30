CREATE TABLE public.courses_questions (
	id_question int4 NULL,
	id_course int4 NULL,
	CONSTRAINT courses_questions_id_course_fkey FOREIGN KEY (id_course) REFERENCES public.courses(id),
	CONSTRAINT courses_questions_id_question_fkey FOREIGN KEY (id_question) REFERENCES public.questions(id)
);