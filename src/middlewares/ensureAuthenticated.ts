import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
 
  if (!authHeader) {
    throw new AppError('Token missing.', 401);
  }

  const [_, token] = authHeader.split(' ');
 
  try {
    const { sub: userId } = verify(token, '15b1c269e2207484d60e5f460eb76119') as IPayload;
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);
    
    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    next();
  } catch {
    throw new AppError('Invalid token!', 401);   
  }
}