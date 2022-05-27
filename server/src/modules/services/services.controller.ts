import { Controller, Get, Param } from '@nestjs/common';

import services, { Service } from '../../services';

@Controller('services')
export class ServicesController {
  constructor() {}

  @Get()
  async index(): Promise<Service[]> {
    return services;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Service> {
    return services.find((s) => s.id === parseInt(id));
  }
}
