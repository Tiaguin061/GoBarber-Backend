import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import User from './User';

/**
 * Um usuario tem 1 agendamento (OneToOne)
 * Um usuario tem muitos agendamentos (OneToMany)
 * Muitos usuarios participam de muitos agendamentos, se mais prestadores de serviços pudessem participar do mesmo serviço (ManyToMany)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'provider_id'})
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Appointment;