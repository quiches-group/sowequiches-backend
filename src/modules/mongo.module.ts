import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { OrganizationRepository } from '../repositories/origanization.repository';
import { Organization, OrganizationSchema } from '../models/organization.model';
import { Group, GroupSchema } from '../models/group.model';
import { GroupRepository } from '../repositories/group.repository';
import { File, FileSchema } from '../models/file.model';
import { FileRepository } from '../repositories/file.repository';
import { TimeSlot, TimeSlotSchema } from '../models/time-slot.model';
import { TimeSlotRepository } from '../repositories/time-slot.repository';
import { AttendanceRepository } from '../repositories/attendance.repository';
import { AttendanceSchema, Attendance } from '../models/attendance.model';
import {
  RefreshToken,
  RefreshTokenSchema,
} from '../models/refresh-token.model';
import { RefreshTokenRepository } from '../repositories/refresh-token.repository';
import { UserDevice, DeviceSchema } from 'src/models/user-device.model';
import { DeviceRepository } from 'src/repositories/user-device.repository';

@Module({
  imports: [
    NestMongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: File.name, schema: FileSchema },
      { name: Group.name, schema: GroupSchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: TimeSlot.name, schema: TimeSlotSchema },
      { name: Attendance.name, schema: AttendanceSchema },
      { name: RefreshToken.name, schema: RefreshTokenSchema },
      { name: UserDevice.name, schema: DeviceSchema },
    ]),
  ],
  providers: [
    UserRepository,
    OrganizationRepository,
    GroupRepository,
    FileRepository,
    TimeSlotRepository,
    AttendanceRepository,
    RefreshTokenRepository,
    DeviceRepository,
  ],
  exports: [
    UserRepository,
    OrganizationRepository,
    GroupRepository,
    FileRepository,
    TimeSlotRepository,
    AttendanceRepository,
    RefreshTokenRepository,
    DeviceRepository,
  ],
})
export class MongoModule {}
