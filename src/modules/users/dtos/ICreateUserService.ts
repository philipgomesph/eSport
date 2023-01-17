export interface IRequestCreateUser {
  name: string;
  cpf: string;
  rg: string;
  foto: string;
  email: string;
  cell: string;
}

export interface IResponseCreatedUser {
  name: string;
  cpf: string;
  rg: string;
  foto: string;
  email: string;
  cell: string;
}

export interface IResponseCreateUserTournament {
  nameTournamentPlayed?: string | null;
  nameTournamentWon?: string | null;
  nameTournamentSecond?: string | null;
  nameTournamentThird?: string | null;
  nameTournamentOrganized?: string | null;
}
export interface IResponseCreateUser {
  user: IResponseCreatedUser;
  club?: string | null;
  tournament?: IResponseCreateUserTournament[] | null;
}
