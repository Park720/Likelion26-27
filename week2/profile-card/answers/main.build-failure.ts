import "./style.css";
import type { Profile, Skill } from "./types";
import { mountCard } from "./view";

// STEP 1: 이름, 이니셜, 소개글, GitHub 주소를 내 정보로 바꿉니다.
// skills 배열의 마지막에 스킬 하나를 더 넣어 보세요.
const me: Profile = {
  name: "박준형",
  initials: "JP",
  bio: "게임과 웹을 만드는 개발자를 꿈꿉니다.",
  github: "https://github.com/",
  skills: [
    { name: "HTML", status: "done" },
    { name: "CSS", status: "done" },
    { name: "TypeScript", status: "learnning" },
    { name: "React", status: "learning" },
  ],
};

let onlyLearning = false;

// STEP 2: 각 데이터를 HTML 조각으로 바꾸고, 한 문자열로 합칩니다.
function renderSkills(skills: Skill[]): string {
  return skills
    .map((s) => `<li>${s.name} (${s.status})</li>`)
    .join("");
}

// STEP 3: 조건에 맞는 항목을 새 배열로 반환합니다.
function getLearning(skills: Skill[]): Skill[] {
  return skills.filter((s) => s.status === "learning");
}

function countDone(skills: Skill[]): number {
  return skills.filter((s) => s.status === "done").length;
}

// 아래 render와 버튼 연결은 강사 제공 코드입니다.
// onlyLearning이 바뀌면 직접 render()를 불러 화면을 다시 그립니다.
function render(): void {
  const visible = onlyLearning ? getLearning(me.skills) : me.skills;
  mountCard(me, renderSkills(visible), countDone(me.skills), onlyLearning, () => {
    onlyLearning = !onlyLearning;
    render();
  });
}

render();
