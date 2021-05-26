import {
   Entity, 
   Column,
   PrimaryColumn,
   CreateDateColumn,
   ManyToOne,
   JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Fundraising } from './Fundraising';
import { User } from './User';
@Entity("transactions")
class Transactions {
   @PrimaryColumn()
   id:string;

   @ManyToOne(() => User)
   @JoinColumn({name:"user_id"})
   user:User;

   @Column()
   user_id:string;

   @ManyToOne(() => Fundraising)
   @JoinColumn({name: "fundraising_id"})
   fundraising:Fundraising;

   @Column()
   fundraising_id:string;

   @Column()
   value_donated: number;

   @CreateDateColumn()
   created_at:Date;

   constructor(){
      if(!this.id) this.id = uuid();
  }
}

export {Transactions}