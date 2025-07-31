'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BiErrorCircle, BiHeart, BiSolidHeart } from 'react-icons/bi';

import { fetchPokemonDetail } from '@/api/pokemon';
import { ANSWER_ERROR_MESSAGES, QUIZ_STATUS_MESSAGES } from '@/app/quiz/quiz-content/constants';
import {
  buttonGroup,
  catchPokemonButton,
  countNumber,
  lifeGauge,
  loadingMessage,
  pokemonImage,
  questionArea,
  questionImageBox,
  questionText,
  quizCount,
  quizForm,
  quizInputBox,
  quizInputError,
  statusBar
} from '@/app/quiz/quiz-content/index.css';
import Input from '@/components/common/input';
import Pokeball from '@/components/common/pokeball';
import Tooltip from '@/components/common/tooltip';
import { POKEMON_IMAGE_BASE_URL } from '@/constants/api';
import { POKEMON_DETAIL_QUERY_KEY } from '@/constants/pokemons';
import { useDialogActions } from '@/stores/dialog';
import { useFavoritesActions, useFavoritesContext } from '@/stores/favorites';
import { usePokemonsContext } from '@/stores/pokemons';
import { button } from '@/styles/actions.css';
import { icons, vars } from '@/styles/vars.css';

export default function QuizContent() {
  const { total } = usePokemonsContext();
  const { favorites } = useFavoritesContext();
  const { openConfirm } = useDialogActions();
  const { addFavorite } = useFavoritesActions();
  const [randomId, setRandomId] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [life, setLife] = useState(5);
  const [quizStatus, setQuizStatus] = useState(QUIZ_STATUS_MESSAGES.initial);
  const [answer, setAnswer] = useState('');
  const [answerError, setAnswerError] = useState('');
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const router = useRouter();

  const { data, isError } = useQuery({
    queryKey: POKEMON_DETAIL_QUERY_KEY(`${randomId}`),
    queryFn: fetchPokemonDetail,
    enabled: isLoaded && randomId > 0,
    select: data => ({
      id: data.id,
      name: data.name,
      isLegendary: data.isLegendary,
      isMythical: data.isMythical,
      description: data.description
    })
  });

  const isFinished =
    quizStatus === QUIZ_STATUS_MESSAGES.correct ||
    quizStatus === QUIZ_STATUS_MESSAGES.gameOver(data?.name || '');

  const isFavorite =
    Array.isArray(favorites) && favorites.some(favorite => favorite.id === randomId);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[ㄱ-ㅎ가-힣]*$/.test(newValue)) {
      setAnswerError('');
      setAnswer(newValue);
    } else {
      setAnswerError(ANSWER_ERROR_MESSAGES.invalid);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!answer) {
      setAnswerError(ANSWER_ERROR_MESSAGES.empty);
      return;
    }

    setAnswerError('');
    setAnswer('');

    const newLife = Math.max(life - 1, 0);
    setLife(newLife);
    setQuizStatus(
      answer === data?.name
        ? QUIZ_STATUS_MESSAGES.correct
        : newLife > 0
          ? QUIZ_STATUS_MESSAGES.incorrect(newLife)
          : QUIZ_STATUS_MESSAGES.gameOver(data?.name || '')
    );

    if (answer === data?.name) {
      setCount(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else if (!newLife) {
      setCount(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleSkip = () => {
    setAnswerError('');
    setAnswer('');
    setQuizStatus(QUIZ_STATUS_MESSAGES.gameOver(data?.name || ''));
    setCount(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
  };

  const handleReset = () => {
    setRandomId(Math.floor(Math.random() * total) + 1);
    setIsLoaded(false);
    setAnswerError('');
    setAnswer('');
    setLife(5);
    setQuizStatus(QUIZ_STATUS_MESSAGES.initial);
  };

  const catchPokemon = async () => {
    addFavorite({
      id: randomId,
      name: data?.name || '',
      category: data?.isLegendary ? 'legendary' : data?.isMythical ? 'mythical' : null
    });
    const confirmed = await openConfirm({
      title: `${data?.name}, 넌 내 거야!`,
      content: '방금 잡은 포켓몬을 확인하러 갈까요?',
      cancelLabel: '계속 퀴즈풀기',
      confirmLabel: '확인하러 가기'
    });

    if (!confirmed) return;
    router.push(`/favorites`);
  };

  useEffect(() => {
    if (!data || isError) setRandomId(Math.floor(Math.random() * total) + 1);
  }, [data, isError, total]);

  return (
    <div>
      <div className={statusBar}>
        <div className={lifeGauge}>
          {Array.from({ length: 5 }).map((_, index) =>
            index < life ? (
              <BiSolidHeart
                key={index}
                color={vars.colors.primary}
                size={icons.size.md}
              />
            ) : (
              <BiHeart
                key={index}
                color={vars.colors.primary}
                size={icons.size.md}
              />
            )
          )}
        </div>
        <div className={quizCount}>
          오답 <span className={countNumber}>{count.incorrect}</span> | 정답{' '}
          <span className={countNumber}>{count.correct}</span>
        </div>
      </div>
      <div className={questionArea}>
        <div className={questionImageBox}>
          {!(isLoaded && data) && (
            <div className={loadingMessage}>
              <p>후후.. 오늘의 포켓몬을 뭘로 할지 꽤 고민되는구먼!</p>
            </div>
          )}
          <Image
            src={`${POKEMON_IMAGE_BASE_URL}/${randomId}.png`}
            alt={data?.name || ''}
            width={0}
            height={0}
            sizes="100vw"
            className={pokemonImage}
            style={{
              filter: isFinished ? 'none' : 'brightness(0) contrast(200%)',
              opacity: isLoaded && data ? 1 : 0
            }}
            onError={() => setRandomId(Math.floor(Math.random() * total) + 1)}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <h3 className={questionText}>{quizStatus}</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className={quizForm}
      >
        <div className={quizInputBox}>
          <Input
            placeholder={'포켓몬 이름을 입력하세요.'}
            disabled={!data || isFinished}
            value={answer}
            onChange={handleChange}
            end={
              <Tooltip
                content={data?.description || ''}
                placement="top-end"
                disabled={!data || isFinished}
              >
                힌트
              </Tooltip>
            }
          />
          {answerError && (
            <small className={quizInputError}>
              <BiErrorCircle
                size={icons.size.sm}
                color={vars.colors.primary}
              />{' '}
              {answerError}
            </small>
          )}
        </div>
        <div className={buttonGroup}>
          {isFinished ? (
            <>
              <Link
                href={`/${randomId}`}
                className={`${button.md} outline`}
              >
                도감보기
              </Link>
              <button
                type="button"
                className={button.md}
                disabled={!data}
                onClick={handleReset}
              >
                다음퀴즈
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={`${button.md} outline`}
                disabled={!data}
                onClick={handleSkip}
              >
                포기하기
              </button>
              <button
                type="submit"
                className={button.md}
                disabled={!data}
              >
                답안제출
              </button>
            </>
          )}
        </div>
      </form>
      {isFinished && !isFavorite && (
        <button
          type="button"
          className={`${button.lg} ${catchPokemonButton}`}
          onClick={catchPokemon}
          disabled={!data}
        >
          <Pokeball size={30} />
          몬스터볼 던지기
        </button>
      )}
    </div>
  );
}
