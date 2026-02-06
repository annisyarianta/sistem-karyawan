import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EmployeesModule],
  providers: [PrismaService],
})
export class AppModule {}
