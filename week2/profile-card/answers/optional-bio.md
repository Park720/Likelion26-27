# 선택 확장: 소개글을 생략해도 되는 카드

본 실습과 빌드를 마친 학생만 진행합니다.

1. `src/types.ts`에서 `bio: string`을 `bio?: string`으로 바꿉니다.
2. `src/view.ts`의 소개글 대입을 아래와 같이 바꿉니다.

```ts
if (intro) intro.textContent = profile.bio ?? "소개가 아직 없어요";
```

3. `src/main.ts`의 `me`에서 `bio` 한 줄을 지운 뒤 저장합니다.
4. 화면에 기본 소개글이 보이는지, `npm run build`가 통과하는지 확인합니다.

`?`는 해당 항목을 생략할 수 있다는 뜻입니다. `??`는 값이 `null` 또는 `undefined`일 때 오른쪽 기본값을 사용합니다. 빈 문자열 `""`은 기본값으로 바뀌지 않습니다. `?.` 문법은 이번 실습에 추가하지 않습니다.
