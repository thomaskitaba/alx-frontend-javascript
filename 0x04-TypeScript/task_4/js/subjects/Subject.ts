/// <reference path="./Teacher.ts" />
namespace Subjects {
export class Subject {
    teacher: Subjects.Teacher;
    set (teacher: Subjects.Teacher) {
        this.teacher = teacher;
    }
}
}