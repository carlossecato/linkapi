import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
    private conection: Connection
  ) {}


  async create(createJobDto: CreateJobDto): Promise<CreateJobDto> {
    return await this.jobsRepository.save(createJobDto);
  }

  async findAll(): Promise<Job[]> {
    return await this.jobsRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    return this.jobsRepository.findOne(id);
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
