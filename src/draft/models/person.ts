class Person {
  constructor(private firstName: string, private lastName: string, private patronymic: string) {}

  private async getFullname() {
    return `${this.lastName} ${this.firstName} ${this.patronymic}`
  }

  //private async setSex(sex: string): string {
  //    return sex
  //}

  private age(dateString: string): number {
    const birthday: number = +new Date(dateString)
    return ~~((Date.now() - birthday) / 31557600000)
  }
}
