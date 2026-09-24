/*
 * 강사가 제공하는 화면 연결 코드입니다.
 * 2주차에는 index.ts의 interface, 배열, map, filter에 집중합니다.
 * DOM, 이벤트, 스프레드 문법을 모두 외우거나 다시 작성할 필요는 없습니다.
 */

function getElement(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) throw new Error(`index.html에서 #${id} 요소를 찾을 수 없습니다.`);
  return element;
}

export function createCard(todo: {
  id: number;
  title: string;
  done: boolean;
  memo?: string;
}): HTMLElement {
  const card = document.createElement("article");
  card.className = "card";

  const top = document.createElement("div");
  top.className = "card-top";

  const number = document.createElement("span");
  number.className = "card-number";
  number.textContent = String(todo.id).padStart(2, "0");

  const status = document.createElement("span");
  status.className = todo.done ? "status status-done" : "status status-progress";
  status.textContent = todo.done ? "완료" : "진행 중";

  const title = document.createElement("h2");
  title.textContent = todo.title;

  const memo = document.createElement("p");
  memo.className = "card-memo";
  memo.textContent = todo.memo ?? "나만의 학습 메모를 남겨 보세요.";

  const footer = document.createElement("p");
  footer.className = "card-footer";
  footer.textContent = todo.done ? "오늘도 하나 완성!" : "다음 작은 완성을 향해";

  top.append(number, status);
  card.append(top, title, memo, footer);
  return card;
}

export function mountPage(allCards: HTMLElement[], doneCards: HTMLElement[]): void {
  const list = getElement("cards");
  const allButton = getElement("show-all");
  const doneButton = getElement("show-done");
  const count = getElement("visible-count");
  const empty = getElement("empty-message");

  getElement("summary").textContent = `전체 ${allCards.length}개 · 완료 ${doneCards.length}개`;
  doneButton.textContent = `완료만 보기 (${doneCards.length})`;

  function show(cards: HTMLElement[], completedOnly: boolean): void {
    list.replaceChildren(...cards);
    count.textContent = `${cards.length}개 표시 중`;
    empty.hidden = cards.length > 0;
    empty.textContent = completedOnly ? "완료된 학습이 아직 없어요." : "등록된 학습이 아직 없어요.";
    allButton.setAttribute("aria-pressed", String(!completedOnly));
    doneButton.setAttribute("aria-pressed", String(completedOnly));
  }

  allButton.addEventListener("click", () => show(allCards, false));
  doneButton.addEventListener("click", () => show(doneCards, true));
  show(allCards, false);
}
