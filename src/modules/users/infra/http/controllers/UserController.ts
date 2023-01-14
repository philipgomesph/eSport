import { Request, Response } from "express";
// import { container } from "tsyringe";

export default class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, rg, photo, email, phone } = request.body;

    // criar serviço

    console.log("🟡Passou no controller");
    const user = { Usuario: "Users" };
    return response.status(200).json(user);
  }
}
