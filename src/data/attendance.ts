import { Bolt, Check, Members } from "@/components/ui/icons";
import type { IconType } from "@/types";

interface CheckInStep {
  label: string;
  detail: string;
  icon: IconType;
}

export const checkInSteps: CheckInStep[] = [
  { label: "Member ID", detail: "LIQ · 4821", icon: Members },
  { label: "Member recognized", detail: "Ananya R.", icon: Members },
  { label: "Attendance recorded", detail: "09:14 · Strength", icon: Check },
  { label: "Welcome back", detail: "Have a good session", icon: Bolt },
];
