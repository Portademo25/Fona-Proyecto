import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
  const user = await this.userRepository.findOne({ 
    where: { username }, 
    select: ['id', 'username', 'password', 'name'] 
  });

  if (!user) return null;

  // FIX DE COMPATIBILIDAD LARAVEL -> NESTJS
  // Reemplazamos el prefijo de PHP ($2y$) por el de Node ($2b$)
  const dbHash = user.password.replace(/^\$2y\$/, '$2b$');

  const isMatch = await bcrypt.compare(pass, dbHash);
  
  if (isMatch) {
    const { password, ...result } = user;
    return { ...result, role: 'Funcionario' }; 
  }

  this.logger.warn(`Contraseña incorrecta para ${username}.`);
  return null;
}

  async login(user: any) {
  if (!user) return null; // Seguridad extra

  const payload = { 
    username: user.username, 
    sub: user.id, 
    role: user.role || 'Funcionario' 
  };

  return {
    access_token: this.jwtService.sign(payload),
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role || 'Funcionario'
    }
  };
  }
}