import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
 
  if (!authHeader) {
    throw new Error('Token missing.');
  }

  const [_, token] = authHeader.split(' ');
 
  try {
    const { sub: userId } = verify(token, '15b1c269e2207484d60e5f460eb76119') as IPayload;
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);
    
    if (!user) {
      throw new Error('User does not exists!');
    }

    next();
  } catch {
    throw new Error('Invalid token!');   
  }
}