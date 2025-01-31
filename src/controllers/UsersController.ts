import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, profile_image } = req.body;
      const usersService = new UsersService();
      const user = await usersService.createUser({ email, profile_image });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({
        erro: error,
        mensagem: "Usuário não cadastrado",
        tentativa: req.body,
      });
    }
  }

  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await new UsersService().getUsers());
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Nenhum usuário encontrado!",
      });
    }
  }

  async getOnlyOneUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const usersService = new UsersService();
      const user = await usersService.getOnlyOneUser({ id });
      return res.json(user);
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário não encontrado!",
      });
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const usersService = new UsersService();
      const user = await usersService.updateUser({ id }, req.body);
      return res.json(user);
    } catch {
      return res.status(400).json({
        error: true,
        mensagem: "Usuário não encontrado!",
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usersService = new UsersService();
      usersService.deleteUser({ id });
      return res.json({
        mensagem: "Deletado com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        erro: true,
        mensagem: error,
      });
    }
  }
}

export default new UsersController();
