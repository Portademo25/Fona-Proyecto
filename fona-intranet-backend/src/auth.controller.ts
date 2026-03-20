import { Controller, Post, Body, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
@HttpCode(HttpStatus.OK)
async login(@Body() loginDto: any) {
  const user = await this.authService.validateUser(
    loginDto.username, 
    loginDto.password
  );

  // Si no hay usuario, lanzamos el error AQUÍ y no seguimos
  if (!user) {
    throw new UnauthorizedException('Correo o clave incorrectos en SIGH2025');
  }

  // Solo llegamos aquí si el usuario es válido
  return this.authService.login(user);
}
}