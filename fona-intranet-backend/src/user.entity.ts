import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // Si en la DB se llama 'email', ponlo en el nombre de la columna:
  @Column({ name: 'email' }) 
  username: string;

  @Column()
  password: string;

  // Si el nombre real es 'nombre_usuario', mapealo igual:
  @Column({ name: 'name', nullable: true })
  name: string;

 // @Column({ nullable: true })
 // role: string;
}