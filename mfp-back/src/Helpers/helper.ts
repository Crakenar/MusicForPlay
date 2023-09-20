import * as bcrypt from 'bcrypt';
export class Helper {
  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hashSync(password, saltOrRounds);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compareSync(password, hash);
  }
}
