### 시작전

```bash
node --version
npm --version
git --version
npm install
npm run dev
```

## 파일 안내

| 파일 | 역할 |
| --- | --- |
| `src/main.ts` | 학생이 수정할 프로필 데이터, map·filter 함수, 제공 render 연결 |
| `src/types.ts` | Profile, Skill, SkillStatus 타입 |
| `src/view.ts` | 강사 제공 HTML·DOM·클릭 이벤트 연결 |
| `src/style.css` | 1주차 CSS와 완료 개수·필터 버튼 스타일 |
| `index.html` | #app과 /src/main.ts 연결 |
| `answers/main.ts` | 완성 코드. 내용을 src/main.ts에 복사해서 비교 가능 |
| `answers/main.build-failure.ts` | 의도적으로 status를 잘못 쓴 완성 코드 |

### STEP 1

```ts
function renderSkills(skills: Skill[]): string {
  return skills
    .map((s) => `<li>${s.name} (${s.status})</li>`)
    .join("");
}
```

백틱 안의 `${s.name}`은 값이 들어갈 자리입니다. map은 각 데이터를 HTML 조각으로 바꾸고, join("")은 배열의 조각을 구분자 없이 한 문자열로 합칩니다. 기존 .card, .avatar, .intro, .details, .link 구조는 view.ts에서 재사용합니다.

### STEP 2

```ts
function getLearning(skills: Skill[]): Skill[] {
  return skills.filter((s) => s.status === "learning");
}

function countDone(skills: Skill[]): number {
  return skills.filter((s) => s.status === "done").length;
}
```

초기 데이터 기준 전체 4개, 공부 중 2개, 완료 2개입니다. 스킬을 추가했다면 자신의 데이터에 맞게 셉니다. `filter`는 원본 배열에서 항목을 지우지 않습니다. `let onlyLearning`은 버튼 클릭 때마다 반대 값으로 바뀌며, 제공 코드가 `render()`를 직접 호출합니다. `const`로 바꾸면 재할당 부분에 오류가 납니다.

## 돌발 질문 ③: 화면은 보이는데 타입은 틀릴 수 있을까?

1. 세 번째 스킬의 `status: "learning"`을 `status: "learnning"`으로 바꾸고 저장합니다.
2. VS Code에서 빨간 밑줄을 확인합니다. 개발 서버에서는 화면이 계속 보일 수 있습니다. 오타 항목은 `"learning"`과 다르므로 공부 중 필터에서 빠집니다.
3. 새 터미널을 열고 `profile-card`에서 실행합니다.

```bash
npm run build
```

빌드가 타입 검사 단계에서 실패합니다. package.json에 다음 명령을 준비했습니다.

```json
"build": "tsc && vite build"
```

`tsc`가 성공해야 `vite build`가 실행됩니다. tsconfig의 `noEmit: true` 때문에 tsc는 타입만 검사합니다. Vite의 dev 서버나 vite build 자체가 타입을 검사하는 것은 아닙니다.

4. 오타를 `"learning"`으로 고치고 저장한 뒤 다시 `npm run build`를 실행합니다. 성공하면 dist 폴더를 만듭니다. 완료 코드와 실패 코드는 answers에서 비교할 수 있습니다.

## GitHub에 올리기

저장소를 처음 연결할 때는 GitHub에서 `likelion-study` 이름의 빈 저장소를 만듭니다. README, .gitignore, license 자동 추가를 선택하지 않습니다. 아래는 **likelion-study 루트**에서 실행합니다. 이름, 이메일, ID와 주소는 자신의 정보로 바꿉니다.

```bash
git config --global user.name "내 이름"
git config --global user.email "가입이메일"
git init
git add .
git commit -m "week1: 프로필 카드"
git branch -M main
git remote add origin https://github.com/ID/likelion-study.git
git push -u origin main
```

Mac과 Windows 명령은 같습니다. 첫 push에서 로그인 절차를 완료합니다. 이미 origin이 있으면 `git remote -v`로 주소를 확인하고 다시 추가하지 않습니다.

수업 앞부분에서 연결을 끝냈다면 실습 후 아래만 실행합니다. 현재 위치가 `week2/profile-card`일 때 `cd ../..`가 저장소 루트로 이동합니다.

```bash
cd ../..
git status
git add .
git commit -m "week2: TS 프로필 카드"
git push
```

