// 화면을 만드는 함수는 강사가 제공한 ui.ts에서 가져옵니다.
import { createCard, mountPage } from "./ui";

// 1. 카드에 들어갈 데이터의 규칙
interface Todo {
  id: number;
  title: string;
  done: boolean;
  memo?: string;
}

// 2. 앞선 콘솔 실습 데이터. 이 배열을 수정하면 카드가 바뀝니다.
const todos: Todo[] = [
  { id: 1, title: "HTML 복습", done: true, memo: "프로필 카드의 구조와 스타일 다시 살펴보기" },
  { id: 2, title: "TS 과제", done: false, memo: "내 프로젝트에 사용할 타입과 데이터 만들기" },
  { id: 3, title: "GitHub push", done: true, memo: "이번 주 학습 기록을 저장소에 올리기" },
];

// 3. filter: 완료된 데이터만 새 배열로 골라냅니다.
function getDone(list: Todo[]): Todo[] {
  return list.filter((todo) => todo.done);
}

// 4. map: 각 데이터를 카드로 바꿉니다. createCard의 내부는 제공 코드입니다.
function createCards(list: Todo[]) {
  return list.map((todo) => createCard(todo));
}

// 5. 제공 코드: 두 목록을 화면과 버튼에 연결합니다.
mountPage(createCards(todos), createCards(getDone(todos)));
