import { createEffect, createSignal, onCleanup, useContext } from "solid-js";

export default function Cursor() {
  let cursor: HTMLDivElement | undefined;

  function moveCursor(ev: MouseEvent) {
    let x_pos = ev.clientX - 16;
    let y_pos = ev.clientY - 16;

    cursor!.style.transform = `translate3d(${x_pos}px, ${y_pos}px, 0)`;
  }

  createEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    onCleanup(() => {
      window.removeEventListener("mousemove", moveCursor);
    });
  });

  return (
    <>
      <div
        ref={cursor}
        class="pointer-events-none absolute left-0 z-10 size-8 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
