import connection from '../database/connection';
import { CourseType } from '../entities/Courses';

export async function listAll(): Promise<CourseType[]> {
  return new Promise<CourseType[]>(async (resolve, reject) => {
    try {
      const result: CourseType[] = await connection.select('*').from('courses');
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export async function listById(id: number): Promise<CourseType> {
  return new Promise<CourseType>(async (resolve, reject) => {
    try {
      const result: CourseType[] = await connection
        .select('*')
        .from('courses')
        .where({ id: id });
      resolve(result[0]);
    } catch (error) {
      reject(error);
    }
  });
}
