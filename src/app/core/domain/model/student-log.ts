export class StudentLog {
  title: string;
  date: Date;
  content: string;


  constructor(title: string, date: Date, content: string) {
    this.title = title;
    this.date = date;
    this.content = content;
  }
}
