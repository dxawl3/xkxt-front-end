export class AppBackEndUrl {
  // 后端服务主机地址
  static backEndHost = 'http://localhost:8080';

  // RESTful (/student/**)
  static studentLogin = AppBackEndUrl.backEndHost + '/student/login';
  static studentChangePassword = AppBackEndUrl.backEndHost + '/student/change_password';
  static studentSelectSubject = AppBackEndUrl.backEndHost + '/student/select_subject';
  static studentGetAllSubject = AppBackEndUrl.backEndHost + '/student/get_all_subject';

  // RESTful (/teacher/**)

}
