import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artical } from '../models/artical';
import { ArticalsController } from './articals.controller';
import { ArticalsService } from './articals.service';

@Module({
  imports:[TypeOrmModule.forFeature([Artical])],
  controllers:[ArticalsController],
  providers: [ArticalsService],
  exports:[ArticalsService]
})
export class ArticalsModule {}
