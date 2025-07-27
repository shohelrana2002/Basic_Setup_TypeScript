import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service  function  to send
    const result = await StudentServices.createStudentIntoDB(studentData);
    //    send response
    res.status(200).json({
      success: true,
      message: 'student Created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Student Find SuccessFully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student Find SuccessFully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudentData,
};
