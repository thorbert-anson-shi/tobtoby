import { createSignal, onMount } from "solid-js";

interface TypewriterTextProps {
  wordList: string[];
}
export default function TypewriterText({ wordList }: TypewriterTextProps) {
  const [window, setWindow] = createSignal<string>("");

  onMount(async () => {
    for (let word of wordList) {
      for (let wordlet of getNextState(0, word)) {
        setWindow(wordlet);
        if (wordlet == wordList[wordList.length - 1]) {
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
  });

  return <>{window()}</>;
}

function* getNextState(
  state: number,
  word: string,
): Generator<string, void, unknown> {
  if (state >= word.length * 2) {
    return;
  }

  if (state < word.length) {
    yield word.substring(0, state);
  } else if (state > word.length) {
    yield word.substring(0, 2 * word.length - state - 1);
  } else {
    for (let i = 0; i < 5; i++) {
      yield word;
    }
  }

  yield* getNextState(state + 1, word);
}
