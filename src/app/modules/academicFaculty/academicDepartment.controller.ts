import { AcademicFaculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicFacultytService } from './academicDepartment.setvice';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultytService.insertIntoDB(req.body);
  console.log(result);

  sendResponse<AcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created!',
    data: result,
  });
});
export const AcademicFacultyControllet = {
  insertIntoDB,
};
