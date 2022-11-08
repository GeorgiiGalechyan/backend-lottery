// import argon2 from 'argon2'

class UserAccount {
  constructor(
    private email: string,
    private pass: string,
    private regDate: string = new Date().toLocaleString()
  ) /*private hashPass = async ()  => {
      try {
        const hash:string = await argon2.hash(this.pass);
      } catch (err) {
        //...
      }
    }*/
  {}
}
