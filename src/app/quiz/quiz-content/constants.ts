export const ANSWER_ERROR_MESSAGES = {
  empty: '음, 이름 없이 정답을 맞히긴 어렵겠는걸?',
  invalid: '포켓몬 이름은 한글로 적어보게.'
};

export const QUIZ_STATUS_MESSAGES = {
  initial: '오늘의 포켓몬은 뭘까~요?',
  correct: '제법이군! 자네, 포켓몬 마스터가 되어볼텐가?',
  incorrect: (life: number) => `아쉽구먼.. 기회는 ${life}번 남았다고! 신중히 풀어보게.`,
  gameOver: (answer: string) =>
    `허허, 아직 수련이 더 필요하겠군. 정답은 ${answer}! 다시 도전하겠나?`
};
