# 2주차 강사용 진행 노트

총 60분: Git 15분, 개념 21분, 실습 18분, 마무리 6분. 설치와 최초 실행은 수업 전에 확인합니다.

## 슬라이드 1: TypeScript 첫걸음

[00:00–00:30]
1주차에 만든 흰색 프로필 카드, 이니셜 아바타, 소개글, 주황색 GitHub 버튼을 먼저 보여 줍니다. 오늘은 같은 HTML 구조와 CSS를 재사용하고, 관심사 목록을 학습 스킬 목록으로 확장합니다. 이름과 소개, 스킬 데이터를 TypeScript 객체로 옮기고 map·filter로 화면을 바꿉니다.
수업 전 공지: ZIP의 profile-card를 likelion-study/week2에 넣고 VS Code, Node.js, Git 설치와 npm install, npm run dev, 브라우저 카드 표시까지 확인합니다. 설치만 해보고 끝내지 않도록 안내합니다. 기존 week2/index.ts나 card-practice는 덮어쓰지 않습니다.

## 슬라이드 2: 오늘 우리가 할 것

[00:30–01:00]
총 60분입니다. Git 15분, 개념 21분, 실습 18분, 마무리 6분으로 진행합니다. 함수 설명 2분은 유지하며 비동기·fetch는 4주차로 미룹니다. 학생은 데이터와 map·filter를 직접 수정하고 DOM·이벤트·render 골격은 제공 코드를 읽는 수준으로 한정합니다. 설정 다운로드는 수업 전에 마치고 실습 시간을 확보합니다.

## 슬라이드 3: Git 마무리

[01:00–01:15]
Git은 내 컴퓨터의 버전 기록, GitHub는 원격 저장소라는 구분을 확인합니다. 지난주에 만든 파일을 실제로 연결하고 올리는 것으로 시작합니다. macOS·Windows의 설치 방법은 실습 ZIP README에 있으며, 두 운영체제에서 같은 Git 명령을 사용합니다.

## 슬라이드 4: add · commit · push 복습

[01:15–03:15]
add는 변경 선택, commit은 로컬 기록, push는 원격 전송입니다. git add .의 점은 현재 폴더이며 명령을 저장소 루트에서 실행합니다. 이 세 명령만 입력한다고 자동으로 GitHub 저장소가 만들어지거나 연결되지는 않습니다. 원격 주소 origin 연결과 첫 push가 필요하다는 질문을 먼저 던집니다. 실제 연결 명령은 6번 슬라이드에서 실행합니다.

## 슬라이드 5: 레포 하나에 주차별 폴더 쌓기

[03:15–04:15]
likelion-study 하나에 주차별 폴더를 쌓습니다. 기존 week2/index.ts는 콘솔 예제로 보관합니다. 이전 카드 실습 card-practice가 있어도 이번 profile-card를 별도 폴더로 넣으면 충돌하지 않습니다. 앞으로 npm 명령은 package.json이 있는 profile-card에서, Git 명령은 likelion-study에서 실행합니다. 폴더 중첩을 잘못하지 않았는지 먼저 확인합니다.

## 슬라이드 6: GitHub 저장소 연결과 첫 push

[04:15–15:00]
GitHub에서 README·license·gitignore를 자동 추가하지 않은 빈 likelion-study 저장소를 만듭니다. 이름·이메일·ID는 자신의 정보로 바꿉니다. 터미널은 likelion-study 루트에서 엽니다. remote add의 URL 전체를 한 줄로 입력합니다. 첫 push에서 요구하는 로그인 절차를 완료합니다.
macOS는 기본 터미널, Windows는 PowerShell·Command Prompt·Git Bash에서 같은 Git 명령을 사용할 수 있습니다. 이미 origin을 설정했다면 git remote -v로 확인하고 중복 추가하지 않습니다. 저장소가 이미 연결되어 있으면 add·commit·push만 진행합니다. GitHub에서 week1 파일이 보이는 것까지 확인합니다.
사전 설치: macOS는 VS Code, Node.js LTS, Git 또는 Command Line Tools. Windows는 VS Code, Node.js LTS, Git for Windows. 자세한 순서는 실습 README를 사용합니다.
출처: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

## 슬라이드 7: TypeScript

[15:00–15:15]
TypeScript 개념은 21분입니다. VS Code에 profile-card 폴더를 열어 놓고 src/main.ts와 src/types.ts를 번갈아 보여 줍니다. 편집기에서 TypeScript 언어 모드와 오류 표시를 확인합니다. TypeScript 편집 지원은 VS Code에 기본 포함되며 전역 tsc 설치는 필요 없습니다. 개발 서버를 수업 전에 실행해 둡니다. 예제를 Playground에서 보일 경우 예제마다 초기화합니다.
출처: https://code.visualstudio.com/docs/languages/typescript

## 슬라이드 8: 오타를 실행 전에 발견하기

[15:15–17:00]
독립 예제에서 me.nmae처럼 이름을 틀리게 입력합니다. JavaScript는 없는 속성을 읽으면 undefined를 반환할 수 있습니다. TypeScript는 객체에서 추론한 속성 name과 비교하여 철자 오류를 알려 줍니다. 타입 표기를 직접 쓰지 않아도 추론이 작동함을 보여 줍니다. 코드가 실행됐다는 사실과 의도대로 작성됐다는 사실을 구분합니다. 마지막 빌드 실패 질문의 복선으로 사용합니다.
출처: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## 슬라이드 9: TypeScript의 타입과 실행

[17:00–18:30]
TypeScript는 JavaScript에 타입 정보를 더합니다. 타입 검사와 JavaScript로 변환하는 과정은 별개입니다. 실습의 Vite 개발 서버는 타입 검사를 하지 않습니다. package.json의 build는 tsc && vite build로 준비했으므로 타입 검사 성공 후에 번들을 만듭니다. 이 구분을 이번 실습의 마지막 질문에서 직접 확인합니다. tsc 자체를 지금 설치하거나 추가 명령으로 실행하지 않습니다.
출처: https://vite.dev/guide/features#typescript
출처: https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vanilla-ts/package.json

## 슬라이드 10: 변수와 타입

[18:30–21:00]
타입 표기 : string 등을 값 뒤가 아닌 변수 이름 뒤에 붙인다는 점을 보여 줍니다. 타입을 명시하지 않아도 많은 경우 추론합니다. onlyLearning은 버튼 클릭에 따라 false와 true가 바뀌므로 let으로 선언합니다. 문자열 "true"와 boolean true는 다른 타입입니다. 배열은 같은 타입의 여러 값을 담고 string[]이라고 표현합니다. 프로필 객체도 const로 시작할 것임을 예고합니다.
출처: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## 슬라이드 11: const로 만든 배열인데
push가 됩니다.
const는 못 바꾸는 것 아닌가요?

[21:00–22:00]
30초 생각한 후 손들기 또는 옆 사람과 짧게 상의하게 합니다. const가 값 내부를 전부 고정한다고 이해하는지 확인합니다. 실행 결과는 다음 장에서 공개합니다.

## 슬라이드 12: const는 재할당을 막습니다

[22:00–23:00]
const는 변수에 새 값을 다시 대입하는 것을 막습니다. 객체나 배열 내부 변경을 모두 금지하지는 않습니다. 따라서 names.push는 가능하고 names = [...]는 불가능합니다. 실습의 me는 const로 선언하되 내부 데이터 수정은 가능하며, boolean 상태 onlyLearning은 재할당하므로 let을 씁니다. React에서 상태를 업데이트할 때 새 배열을 만드는 규칙은 다음 주에 별도로 설명합니다.

## 슬라이드 13: 프로필과 스킬의 타입

[23:00–27:00]
왼쪽 Skill과 오른쪽 Profile을 실제 카드에 대응시킵니다. SkillStatus의 |는 둘 중 하나라는 뜻이며 아무 문자열이나 받는 string보다 상태의 오타를 찾기 쉽습니다. Profile은 이름·이니셜·소개·GitHub 주소·스킬 배열을 묶습니다. 1주차 스타터가 사진 대신 이니셜 아바타를 사용했으므로 initials를 이어갑니다. skills: Skill[]은 Skill 객체의 배열입니다. 타입 정의는 제공하고 항목과 값이 어떻게 대응하는지 집중합니다.
bio는 기본 실습에서 필수 string입니다. 먼저 끝난 학생의 선택 확장에서 bio?와 ??를 짝으로 다루며 선택적 접근 ?.는 추가하지 않습니다.
출처: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## 슬라이드 14: 함수의 입력과 출력

[27:00–29:00]
함수 설명 2분을 유지합니다. getLearning은 스킬 배열을 입력받고 스킬 배열을 반환합니다. 괄호 안은 입력, 닫는 괄호 뒤 타입은 출력이며 return이 결과를 돌려줍니다. 호출할 때는 getLearning(me.skills)처럼 실제 값을 넣습니다. 내부 filter는 다음 장에서 풀어 설명하므로 지금은 함수의 입력·출력·호출만 확인합니다. 화살표 함수는 항목 하나를 처리하는 짧은 함수라고 설명하고 두 문법을 여러 예제로 비교하지 않습니다.

## 슬라이드 15: map과 filter로 배열 다루기

[29:00–33:00]
초기 데이터는 HTML·CSS done, TypeScript·React learning으로 총 4개입니다. map은 각 스킬에서 name을 꺼내 문자열 배열을 만들고 filter는 조건에 맞는 Skill 객체를 새 배열에 담습니다. s는 배열의 항목 한 개이며 이름을 다른 것으로 바꾸어도 역할은 같습니다. filter가 원본을 지우는지 질문하고 다음 장으로 넘어갑니다. 실습에서 map은 HTML 문자열, filter는 공부 중 스킬 목록과 완료 개수를 만드는 데 사용합니다.
출처: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
출처: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## 슬라이드 16: 전체 스킬은 4개입니다.
filter로 공부 중 2개를 골랐어요.
원본 배열에는 몇 개가 남을까요?

[33:00–34:00]
4개, 2개 중 무엇인지 생각하게 합니다. learning에는 조건에 맞는 두 Skill 객체가 들어갑니다. 질문은 me.skills 원본 배열의 길이를 묻는다는 점을 확인합니다.

## 슬라이드 17: 원본은 4개, 결과는 2개

[34:00–36:00]
정답은 4개입니다. filter가 반환한 learning은 2개이며 원본 me.skills는 4개로 유지됩니다. filter가 원본 배열에서 스킬을 삭제했다면 전체 보기로 돌아갈 수 없다는 점을 실습 버튼과 연결합니다. 배열의 객체를 깊게 복사한다는 뜻은 아니지만 이 수업에서는 원본 배열의 항목을 지우지 않는다는 사실에 집중합니다.

## 슬라이드 18: 실습: 프로필 카드 확장

[36:00–36:15]
기존 카드 한 장을 이어갑니다. 지난주 CSS만 복사하면 자동으로 같아지는 것이 아니라 view.ts에서 .card, .avatar, .intro, .details, .link 구조도 함께 재사용했다고 설명합니다. 목록을 스킬로 확장하고 완료 개수와 버튼을 추가했습니다. 0–2분 실행, 2–6분 데이터, 6–11분 map, 11–15분 filter와 버튼, 15–18분 오타와 빌드 순서입니다.

## 슬라이드 19: 준비한 프로젝트 실행하기

[36:15–38:00]
설치는 수업 전에 마쳤다는 전제로 실행 2분을 배정합니다. VS Code에서 profile-card 폴더를 열고 Terminal > New Terminal을 선택합니다. package.json이 있는 위치에서 npm run dev를 실행하고 출력된 Local 주소를 엽니다. 보통 localhost:5173이지만 터미널의 실제 주소를 사용합니다. npm install은 최초 설치 때 실행하며 매번 할 필요가 없습니다.
Windows와 macOS에서 npm 명령은 같습니다. 저장 단축키는 Windows Ctrl+S, Mac Cmd+S입니다. VS Code 기본 TypeScript 지원을 사용하며 필수 추가 확장은 없습니다. Node.js 24에서 확인한 자료를 제공합니다. README의 운영체제별 설치 절차를 사전 공지로 사용합니다.
index.html은 script type="module" src="/src/main.ts"를 연결하고, main.ts의 import "./style.css"를 Vite가 처리합니다. 브라우저가 .ts 원본을 그대로 이해하는 것은 아닙니다. node main.ts, 단일 파일 실행 버튼, HTML 더블클릭 또는 일반 Live Server로 실행하지 않습니다.
시작 코드에서 목록은 아직 고정이며 countDone은 0, getLearning은 전체를 반환합니다. 학생이 완성할 부분임을 미리 알려 줍니다.
출처: https://vite.dev/guide/
출처: https://vite.dev/guide/features#typescript

## 슬라이드 20: STEP 1: 내 정보를 데이터로 옮기기

[38:00–42:00]
4분 동안 me의 name, initials, bio, github를 자기 정보로 바꾸고 저장합니다. 1주차 h1과 intro에 적었던 내용이 이제 me 객체에서 옵니다. 기존 클래스는 유지했고 view.ts가 데이터와 HTML을 연결합니다. 배포 코드의 bio는 지난주 문장이고 슬라이드는 학생이 바꿀 수 있는 문장 예시입니다. GitHub 주소는 자신의 전체 HTTPS 주소로 바꿉니다.
skills 배열에 스킬 하나를 추가하되 status는 learning 또는 done을 사용합니다. 시작 코드의 renderSkills가 고정 HTML을 반환하므로 아직 목록에 다섯 번째가 보이지 않는 것이 정상입니다. 다음 단계에서 map으로 바꾸면 데이터 수에 맞게 목록이 늘어납니다. 새 카드 여러 장을 만드는 과제가 아니라 기존 카드 안의 스킬 목록을 확장하는 과제입니다.
선택 확장: 필수 과제를 마친 뒤 types.ts의 bio를 bio?: string으로 바꾸고 view.ts에서 profile.bio ?? "소개가 아직 없어요"를 사용합니다. ?는 항목 생략 허용, ??는 null 또는 undefined일 때 기본값입니다. 빈 문자열은 기본값으로 바뀌지 않습니다. 자세한 코드는 answers/optional-bio.md에 있습니다. ?.는 이번 범위에 넣지 않습니다.

## 슬라이드 21: STEP 2·3: 목록과 필터 완성하기

[42:00–51:00]
STEP 2는 5분입니다. renderSkills의 고정 HTML return을 map과 join으로 바꿉니다. 백틱 문자열의 ${s.name}, ${s.status}는 값이 들어갈 자리입니다. map이 만든 결과는 문자열 여러 개의 배열이고 join("")이 쉼표 없이 한 문자열로 합칩니다. 이름 데이터 하나 또는 스킬 항목 하나를 바꾸고 저장해 화면에 반영되는지 확인합니다.
STEP 3는 4분입니다. getLearning은 status가 learning인 항목만, countDone은 done인 항목을 고른 뒤 length를 반환하게 합니다. 초기 데이터 기준 전체 4개, 공부 중 2개, 완료 2개입니다. 새 항목을 추가했다면 그 상태에 맞게 개수가 달라집니다. 두 버튼 상태를 왕복해서 확인합니다.
오른쪽 let부터 render까지는 동작의 핵심을 발췌한 코드입니다. 실제로는 main.ts 아래쪽 mountCard에 전달한 클릭 콜백에서 실행합니다. 변경되는 boolean이므로 let을 사용하고, !는 반대 값으로 바꿉니다. render는 함수 이름이며 직접 호출해야 화면을 다시 그립니다. const로 바꾸면 재할당 오류가 납니다.
DOM은 view.ts에 제공했습니다. querySelector 결과가 없을 수 있으므로 if (!app) return으로 확인하고, 버튼이 있을 때 addEventListener를 연결합니다. 화면을 다시 만들면 버튼도 새 요소가 되므로 이벤트도 다시 연결합니다. 이 부분은 따라 쓰게 하지 않고 강사가 짧게 읽어 줍니다.
출처: https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
출처: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

## 슬라이드 22: 빨간 줄이 있는데
카드가 그대로 보입니다.
그럼 TypeScript는 왜 쓰죠?

[51:00–52:00]
실습 시작 후 15분입니다. 세 번째 스킬의 status를 learning에서 learnning으로 바꾸고 저장합니다. VS Code의 빨간 밑줄을 확인하고도 개발 서버의 화면이 보일 수 있음을 보여 줍니다. 30초 생각하게 합니다. Vite는 개발 중 타입 검사를 하지 않고 변환하기 때문입니다. 그러나 오타 항목은 learning과 다르므로 공부 중 필터에서 빠집니다. 화면이 보이는 것과 기능이 올바른 것, 타입이 올바른 것을 함께 확인해야 함을 짚습니다.
출처: https://vite.dev/guide/features#typescript

## 슬라이드 23: 오타가 있으면 빌드가 실패합니다

[52:00–54:00]
개발 서버 터미널은 그대로 두고 새 터미널에서 npm run build를 입력합니다. 이 프로젝트의 package.json은 tsc && vite build이고 tsconfig에는 noEmit: true가 있어 tsc는 타입만 검사합니다. 의도한 오타가 있으면 Type "learnning" is not assignable to type SkillStatus 등의 오류로 tsc가 실패하고 vite build 단계는 실행되지 않습니다. 오류 메시지 세부 문구는 TypeScript 버전에 따라 다를 수 있습니다.
오타를 learning으로 고치고 저장한 뒤 다시 npm run build를 실행해 성공을 확인합니다. 빨간 줄이 있는데도 실행될 수 있는 까닭은 검사와 변환이 별개이기 때문이며, 배포용 빌드 명령에 검사를 넣어 이를 막는다고 정리합니다. Vite 모든 프로젝트가 자동으로 타입 검사하는 것처럼 설명하지 않습니다.
실습 ZIP의 answers/main.build-failure.ts는 실패 예제입니다. 기본 빌드 범위 밖에 있으며 내용을 src/main.ts에 복사하거나 현재 코드의 status 한 곳만 바꿔 재현합니다. 마지막에는 반드시 수정한 정상 코드로 돌아갑니다.
출처: https://vite.dev/guide/features#typescript
출처: https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vanilla-ts/package.json

## 슬라이드 24: 완성한 프로필 카드 GitHub에 저장

[54:00–57:00]
빌드가 통과하고 버튼이 정상 동작하는 것을 확인한 뒤 새 터미널에서 실행합니다. 현재 위치가 week2/profile-card이면 cd ../..로 likelion-study 루트에 이동합니다. 이미 루트라면 cd 명령을 생략합니다. git status로 수정 내용을 확인하고 add·commit·push를 진행합니다. 처음 origin을 연결하고 git push -u origin main까지 마친 상태여야 합니다.
GitHub에서 week2/profile-card/src/main.ts와 관련 파일을 확인합니다. 제공 .gitignore가 node_modules와 dist를 제외합니다. 폴더를 공유한다고 의존성을 함께 올릴 필요는 없습니다. 시작 코드 그대로 빌드만 통과한 것은 완료가 아니므로 프로필 변경·스킬 추가·공부 중 필터·완료 개수를 함께 확인합니다.

## 슬라이드 25: 다음 주에는 같은 카드를 React로

[57:00–60:00]
자가진단: Profile과 Skill의 역할, 함수의 입력과 출력, map과 filter의 차이, let이 필요한 이유를 자기 말로 설명하게 합니다. 완료 기준은 자기 프로필, 스킬 추가 반영, 필터 왕복과 완료 개수, 정상 빌드, GitHub push입니다. 먼저 마친 학생은 bio?와 ??를 적용하는 선택 과제를 진행합니다.
다음 주는 원래 계획대로 Next.js + React입니다. 별도의 Vite React 프로젝트로 바꾸지 않습니다. 동일한 Profile 타입, me 데이터, CSS를 ProfileCard 컴포넌트와 props로 옮깁니다. 오늘의 render 함수와 버튼 코드를 가리키며 우리가 값 변경 후 직접 render를 불렀다고 설명합니다. React에서는 상태 setter가 렌더링을 요청하고 React가 필요한 DOM을 업데이트하는 방법으로 이어집니다. 일반 let 변수의 변경만으로 React가 자동 감지한다고 말하지 않습니다. 카드가 많아져도 데이터에 맞춘 화면 작성 방식을 일관되게 다룰 수 있다는 점을 강조합니다.
구조 분해·스프레드는 React 코드에서 필요한 시점에, 비동기·fetch와 폼은 4주차로 연결합니다.
출처: https://react.dev/learn/render-and-commit

