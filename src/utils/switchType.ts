import {
  IModeratorVerificationType,
  IInfluencerVerificationType,
} from "@/types/app-type";

// Type guard to check if the item is of type IModeratorVerificationType

export default function isModeratorVerification(
  item: IModeratorVerificationType | IInfluencerVerificationType
): item is IModeratorVerificationType {
  return (item as IModeratorVerificationType)?.full_legal_name !== undefined;
}