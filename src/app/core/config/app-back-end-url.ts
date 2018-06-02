export class AppBackEndUrl {
  // 后端服务主机地址
  static backEndHost = 'http://localhost:8080';

  // RESTful (/admin/**)
  static adminLogin = AppBackEndUrl.backEndHost + '/admin/login';
  static adminCreatStudent = AppBackEndUrl.backEndHost + '/admin/create_student';
  static adminDeleteStudent = AppBackEndUrl.backEndHost + '/admin/delete_student';
  static adminCreateTeacher = AppBackEndUrl.backEndHost + '/admin/create_teacher';
  static adminDeleteTeacher = AppBackEndUrl.backEndHost + '/admin/delete_teacher';
  static adminPushMessage = AppBackEndUrl.backEndHost + '/admin/push_message';
  static adminGetAllStudent = AppBackEndUrl.backEndHost + '/admin/get_all_student';
  static adminGetAllTeacher = AppBackEndUrl.backEndHost + '/admin/get_all_teacher';
  static adminGetAllSubject = AppBackEndUrl.backEndHost + '/admin/get_all_subject';
  static adminPassSubject = AppBackEndUrl.backEndHost + '/admin/pass_subject';

  // RESTful (/common/**)
  static commonGetAllProfession = AppBackEndUrl.backEndHost + '/common/get_all_profession';
  static commonGetAllCollege = AppBackEndUrl.backEndHost + '/common/get_all_college';
  static commonGetAllMessage = AppBackEndUrl.backEndHost + '/common/get_all_message';

  // RESTful (/student/**)
  static studentLogin = AppBackEndUrl.backEndHost + '/student/login';
  static studentChangePassword = AppBackEndUrl.backEndHost + '/student/change_password';
  static studentSelectSubject = AppBackEndUrl.backEndHost + '/student/select_subject';
  static studentChangeSelectedSubject = AppBackEndUrl.backEndHost + '/student/change_selected_subject';
  static studentGetSubject = AppBackEndUrl.backEndHost + '/student/get_subject';
  static studentPushLog = AppBackEndUrl.backEndHost + '/student/push_log';
  static studentGetLogs = AppBackEndUrl.backEndHost + '/student/get_logs';

  // RESTful (/teacher/**)
  static teacherLogin = AppBackEndUrl.backEndHost + '/teacher/login';
  static teacherChangePassword = AppBackEndUrl.backEndHost + '/teacher/change_password';
  static teacherCreateSubject = AppBackEndUrl.backEndHost + '/teacher/create_subject';
  static teacherDeleteSubject = AppBackEndUrl.backEndHost + '/teacher/delete_subject';
  static teacherUpdateScore = AppBackEndUrl.backEndHost + '/teacher/update_score';
  static teacherGetSubject = AppBackEndUrl.backEndHost + '/teacher/get_subject';
  static teacherAgreeSelect = AppBackEndUrl.backEndHost + '/teacher/agree_select';
}
