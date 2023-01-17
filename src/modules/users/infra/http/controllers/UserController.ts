import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "../../../services/CreateUserService";

export default class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, cpf, rg, foto, email, cell } = request.body;

    const userToCreate = container.resolve(CreateUserService);

    const userCreated = await userToCreate.execute({
      name,
      cpf,
      rg,
      foto,
      email,
      cell,
    });

    return response.status(200).json(userCreated);
  }
}
