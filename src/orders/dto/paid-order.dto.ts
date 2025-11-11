import { IsString, IsUrl, IsUUID } from 'class-validator';

export class OrderPaidDto {
  @IsString()
  stripePaymentId: string;

  @IsString()
  @IsUUID()
  orderId: string;

  @IsString()
	@IsUrl()
  receiptUrl: string;
}
