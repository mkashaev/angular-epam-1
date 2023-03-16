import { IUser } from 'src/app/models/user';

export interface ILoginResponseDto {
  successful: boolean;
  result: string;
  user: IUser;
}
