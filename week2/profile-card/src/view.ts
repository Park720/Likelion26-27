// 강사 제공: 이번 시간에는 DOM 코드를 새로 작성하지 않습니다.
// main.ts에서 받은 데이터와 HTML을 지난주 카드 구조에 연결합니다.
import type { Profile } from "./types";

export function mountCard(
  profile: Profile,
  skillsHTML: string,
  doneCount: number,
  onlyLearning: boolean,
  onToggle: () => void,
): void {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return; // #app이 없는 경우에는 여기서 종료합니다.

  app.innerHTML = `
    <main class="card">
      <div class="avatar" aria-hidden="true"></div>
      <h1></h1>
      <p class="intro"></p>
      <p class="summary">완료 ${doneCount} / ${profile.skills.length}</p>
      <ul class="details" aria-label="학습 스킬">${skillsHTML}</ul>
      <button class="toggle" id="toggle" type="button"
        aria-pressed="${onlyLearning}">
        ${onlyLearning ? "전체 보기" : "공부 중만 보기"}
      </button>
      <a class="link" href="https://github.com/" target="_blank"
        rel="noopener noreferrer">GitHub 방문하기</a>
    </main>
  `;

  const avatar = app.querySelector(".avatar");
  if (avatar) avatar.textContent = profile.initials;
  const name = app.querySelector("h1");
  if (name) name.textContent = profile.name;
  const intro = app.querySelector(".intro");
  if (intro) intro.textContent = profile.bio;
  const link = app.querySelector<HTMLAnchorElement>(".link");
  if (link) link.href = profile.github;

  const toggle = app.querySelector<HTMLButtonElement>("#toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      onToggle();
      // 다시 그리면 버튼도 새 요소가 되므로 키보드 포커스를 이어줍니다.
      const nextToggle = document.querySelector<HTMLButtonElement>("#toggle");
      if (nextToggle) nextToggle.focus();
    });
  }
}
