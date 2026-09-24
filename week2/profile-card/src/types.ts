// 객체에 필요한 항목과 각 값의 타입입니다.
export type SkillStatus = "learning" | "done";

export interface Skill {
  name: string;
  status: SkillStatus;
}

export interface Profile {
  name: string;
  initials: string;
  bio: string;
  github: string;
  skills: Skill[];
}
