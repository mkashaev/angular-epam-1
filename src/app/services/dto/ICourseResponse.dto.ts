import { ICourse } from 'src/app/models/course';

export interface ICourseListResponseDto {
  successful: boolean;
  result: ICourse[];
}

export interface ICourseResponseDto {
  successful: boolean;
  result: ICourse;
}
