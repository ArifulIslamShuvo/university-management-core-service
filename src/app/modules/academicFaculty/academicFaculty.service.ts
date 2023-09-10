/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AcademicFaculty } from '@prisma/client';
import { date } from 'zod';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { IacademicFacultyfilterRequest } from './academicFaculty.interface';

const insertIntoDB = async (
  data: AcademicFaculty
): Promise<AcademicFaculty> => {
  console.log(date);
  const result = await prisma.academicFaculty.create({
    data,
  });

  return result;
};

const getAllFromDB = async (
  filters: IacademicFacultyfilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicFaculty[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const result = await prisma.academicFaculty.findMany({
    skip,
    take: limit,
  });
  const total = await prisma.academicFaculty.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
};
