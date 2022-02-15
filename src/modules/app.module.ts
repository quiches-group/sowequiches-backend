import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import config from '../config';
import { AuthenticationController } from '../controllers/authentication.controller';
import { AuthenticationService } from '../services/authentication.service';
import { MongoModule } from './mondo.module';
import { OrganizationController } from '../controllers/organization.controller';
import { OrganizationService } from '../services/organization.service';
import { AWSService } from '../services/aws.service';
import { FileController } from '../controllers/file.controller';
import { GroupController } from '../controllers/group.controller';
import { GroupService } from '../services/group.service';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUrl), MongoModule],
  providers: [
    AuthenticationService,
    OrganizationService,
    GroupService,
    AWSService,
  ],
  controllers: [
    AppController,
    AuthenticationController,
    OrganizationController,
    GroupController,
    FileController,
  ],
  providers: [AppService, AuthenticationService, OrganizationService],
})
export class AppModule {}
