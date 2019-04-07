import { ApiModelProperty } from '@nestjs/swagger';

export class UserResponse {
  // tslint:disable:variable-name
    @ApiModelProperty({description: 'User`s Id in DB'}) user_id: number;
    @ApiModelProperty({description: 'User`s login'}) user_login: string;
    @ApiModelProperty({description: 'User`s created date'}) created_at: Date;
    @ApiModelProperty({description: 'User`s updated date'}) updated_at: Date;
    @ApiModelProperty({description: 'User`s deleted date'}) deleted_at: Date;
}
