import { ICourse } from 'src/app/models/course';

export interface ICoursesResponseDto {
  successful: boolean;
  result: ICourse[];
}

export interface ICourseResponseDto {
  successful: boolean;
  result: ICourse;
}
