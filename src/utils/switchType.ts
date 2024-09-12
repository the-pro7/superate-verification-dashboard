import {
  IBrandVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";

// Type guard to check if the item is of type IBrandVerificationType

export default function isBrandVerification(
  item: IBrandVerificationType | IInfluencerVerificationType
): item is IBrandVerificationType {
  return (item as IBrandVerificationType)?.full_legal_name !== undefined;
}
