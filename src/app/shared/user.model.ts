
export interface IUser {
  id?: string,
  username: string,
  name: string,
  email: string,
  group_id: any,
  group_name?: string
}

export interface IGroup {
  id: number,
  name: string
}