import {
  IRequestCreateUser,
  IResponseCreateUser,
  IResponseCreateUserTournament,
} from "../dtos/ICreateUserService";

export default class CreateUserService {
  public async execute({
    name,
    cpf,
    rg,
    foto,
    email,
    cell,
  }: IRequestCreateUser): Promise<IResponseCreateUser> {
    console.log("🟡 Entrou no serviço de Criação");

    const userData = { name, cpf, rg, foto, email, cell };

    const userCreated: IResponseCreateUser = {
      user: userData,
      club: "GS",
    };

    return userCreated;
  }
}
