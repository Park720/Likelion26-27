# LIKELION US · 2주차 프로필 카드 실습

1주차의 흰색 카드, 이니셜 아바타, 소개글, GitHub 버튼과 CSS 클래스를 이어서 사용합니다. 기존 관심사 목록은 학습 스킬 목록으로 확장하고 완료 개수와 필터 버튼을 더합니다. 오늘은 `src/main.ts`의 데이터와 함수 세 곳을 수정합니다.

## 수업 전에 준비하기

ZIP을 풀고 **profile-card 폴더 자체**를 `likelion-study/week2/`에 넣습니다. 기존 `week1`, `week2/index.ts`, `week2/card-practice`는 그대로 둡니다. 새 실습은 `week2/profile-card`입니다.

### macOS

1. [VS Code](https://code.visualstudio.com/download)의 Mac 버전을 내려받아 Applications로 옮깁니다. Apple Silicon과 Intel 중 자신의 Mac에 맞는 버전을 고릅니다.
2. [Node.js](https://nodejs.org/en/download)의 LTS 설치 파일을 설치합니다. 이 자료는 Node.js 24에서 확인했습니다.
3. 터미널에서 `git --version`을 확인합니다. Git이 없으면 `xcode-select --install`로 Command Line Tools를 설치합니다.
4. 설치 후 VS Code를 다시 엽니다.

### Windows

1. [VS Code](https://code.visualstudio.com/download)의 Windows 설치 파일을 실행합니다.
2. [Node.js](https://nodejs.org/en/download)의 LTS 설치 파일을 실행합니다. 이 자료는 Node.js 24에서 확인했습니다.
3. [Git for Windows](https://git-scm.com/downloads/win)를 설치합니다.
4. 설치 후 VS Code를 다시 엽니다.

### 공통 확인

1. VS Code의 File > Open Folder로 `profile-card`를 엽니다.
2. Terminal > New Terminal을 선택합니다. macOS는 기본 터미널, Windows는 PowerShell 또는 Command Prompt를 씁니다.
3. 아래 명령을 한 줄씩 입력합니다. 위치는 `package.json`이 있는 `profile-card`여야 합니다.

```bash
node --version
npm --version
git --version
npm install
npm run dev
```

지원 Node 버전은 22.12 이상인 22 버전 또는 24 이상입니다. 터미널에 나온 **Local 주소**를 브라우저에서 엽니다. 보통 `http://localhost:5173`이며, 표시된 주소가 다르면 그 주소를 사용합니다. 카드가 보이는 것까지 수업 전에 확인해 다운로드 시간을 확보합니다.

VS Code는 TypeScript 편집 기능을 기본으로 제공합니다. 별도 TypeScript 확장이나 전역 TypeScript 설치는 필요하지 않습니다. 저장은 Mac `Cmd+S`, Windows `Ctrl+S`입니다. 글자가 작으면 Settings에서 Font Size를 조절합니다. 이 프로젝트는 `npm run dev`로 실행합니다. `node main.ts`, 파일 실행 버튼, HTML 더블클릭, Live Server로 실행하는 실습이 아닙니다.

개발 서버 터미널은 켜 둡니다. 빌드나 Git 명령은 새 터미널에서 실행합니다. 개발 서버 종료는 `Ctrl+C`입니다. Windows에서 `npm.ps1` 실행 정책 오류가 나면 터미널 프로필을 Command Prompt로 바꾸고 같은 명령을 실행할 수 있습니다.

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
| `answers/optional-bio.md` | bio?와 ?? 선택 확장 |

`answers`는 기본 빌드 검사 범위 밖에 있습니다. 실행해 보려면 파일의 내용을 **src/main.ts에 복사**합니다. 해당 파일 이름을 바꾸거나 직접 Node로 실행하지 않습니다.

## 18분 실습

| 실습 시간 | 작업 | 완료 확인 |
| --- | --- | --- |
| 0–2분 | 준비한 프로젝트에서 npm run dev | 지난주 스타일의 카드가 보임 |
| 2–6분 | STEP 1: me의 이름·소개·이니셜·GitHub 수정, 스킬 하나 추가 | 이름과 소개가 바뀜. 스킬 목록은 아직 고정 |
| 6–11분 | STEP 2: renderSkills의 return을 map과 join으로 교체 | 추가한 스킬까지 화면에 나타남 |
| 11–15분 | STEP 3: getLearning, countDone 완성 후 버튼 확인 | 공부 중만 보기, 전체 보기, 완료 개수가 맞음 |
| 15–18분 | STEP 4: 일부러 오타, 빌드 실패, 수정 후 빌드 | 오류를 고친 뒤 빌드 성공 |

시작 코드의 고정 목록, 전체를 반환하는 getLearning, 0을 반환하는 countDone은 **완성할 부분**입니다. 시작 화면이 보이고 빌드가 통과해도 실습을 모두 완료한 것은 아닙니다.

### STEP 2

```ts
function renderSkills(skills: Skill[]): string {
  return skills
    .map((s) => `<li>${s.name} (${s.status})</li>`)
    .join("");
}
```

백틱 안의 `${s.name}`은 값이 들어갈 자리입니다. map은 각 데이터를 HTML 조각으로 바꾸고, join("")은 배열의 조각을 구분자 없이 한 문자열로 합칩니다. 기존 .card, .avatar, .intro, .details, .link 구조는 view.ts에서 재사용합니다.

### STEP 3

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

GitHub에서 `week2/profile-card/src/main.ts`를 확인합니다. .gitignore는 node_modules와 dist를 제외합니다. add와 commit은 내 컴퓨터에 기록하며 원격 연결과 push까지 해야 GitHub에 나타납니다.

## 완료 기준과 다음 주

- 내 이름·소개·GitHub 주소를 사용한다.
- 스킬 하나를 추가하면 목록에 나타난다.
- 공부 중만 보기와 전체 보기가 동작하고 완료 개수가 맞는다.
- 고친 코드의 npm run build가 통과하고 GitHub에 올라간다.

먼저 끝났다면 answers/optional-bio.md를 따라 소개글 생략과 기본값을 확인합니다. 구조 분해, 스프레드, 비동기, 제네릭은 오늘의 필수 범위에 넣지 않습니다.

3주차에는 이 Profile 데이터와 CSS를 Next.js 프로젝트의 React ProfileCard, props로 옮깁니다. 오늘은 값을 바꾼 뒤 render를 직접 불렀습니다. React에서는 state setter가 렌더링을 요청하고 React가 필요한 DOM을 업데이트하는 방식을 배웁니다. 일반 let 변수를 바꾸기만 하면 React가 감지하는 것은 아닙니다. 비동기·fetch는 4주차로 연결합니다.

참고: https://vite.dev/guide/features#typescript · https://react.dev/learn/render-and-commit
