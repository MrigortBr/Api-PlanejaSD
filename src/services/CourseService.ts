import {
  CourseResponseType,
  CourseType,
  RequisitionCourseResponseType,
  RequisitionCoursesResponseType,
} from '../entities/Courses';
import { errors } from '../entities/errors';
import { listAll, listById } from '../repositories/CoursesRepository';

export function buildResponseAllCourse(
  courses: CourseType[],
): RequisitionCoursesResponseType {
  const response: RequisitionCoursesResponseType = { code: 200, courses: [] };

  for (const course of courses) {
    const newCourse: CourseResponseType = {
      course: course,
      questions: `${process.env.DOMAIN}courses/${course.id}/questions`,
      link: `${process.env.DOMAIN}courses/${course.id}`,
    };

    response.courses.push(newCourse);
  }

  return response;
}

export function buildResponseCourse(
  course: CourseType,
): RequisitionCourseResponseType {
  const newCourse: CourseResponseType = {
    course: course,
    questions: `${process.env.DOMAIN}courses/${course.id}/questions`,
  };

  const response: RequisitionCourseResponseType = {
    code: 200,
    course: newCourse,
  };
  return response;
}

export function listAllCoursesService(): Promise<RequisitionCoursesResponseType> {
  return new Promise<RequisitionCoursesResponseType>(
    async (resolve, reject) => {
      listAll()
        .then(async (response) => {
          if (response.length == 0) {
            throw new Error('NoCourses');
          }
          const result = await buildResponseAllCourse(response);
          resolve(result);
        })
        .catch((error) => {
          if (error.message == '' || error.message.search('"dev"') > 0) {
            reject(errors[error.code]);
          }
          reject(errors[error.message]);
        });
    },
  );
}

export function listCoursesService(
  courseId: number,
): Promise<RequisitionCourseResponseType> {
  return new Promise<RequisitionCourseResponseType>(async (resolve, reject) => {
    if (courseId > 0) {
      listById(courseId)
        .then((response) => {
          if (response.length == 0) {
            throw new Error('NoCourse');
          }
          const result = buildResponseCourse(response[0]);

          resolve(result);
        })
        .catch((error) => {
          if (error.message == '') {
            reject(errors[error.code]);
          }
          reject(errors[error.message]);
        });
    } else {
      reject(errors['ParametersInvalid']);
    }
  });
}
