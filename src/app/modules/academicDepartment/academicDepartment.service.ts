import { AcademicDepartment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: AcademicDepartment) => {
  const result = await prisma.academicDepartment.create({
    data,
  });
  return result;
};

export const AcademicDepartmentService = {
  insertIntoDB,
};
