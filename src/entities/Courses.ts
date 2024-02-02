export type CourseType = {
  id: number;
  name: string;
  image: Buffer | null;
};

export type CourseResponseType = {
  course: CourseType;
  questions: string;
  link?: string;
};

export type RequisitionCoursesResponseType = {
  courses: CourseResponseType[];
  code: 200;
};

export type RequisitionCourseResponseType = {
  course: CourseResponseType;
  code: 200;
};
