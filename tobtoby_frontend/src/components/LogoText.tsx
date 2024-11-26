interface LogoTextProps {
  name: string;
  src: string;
}

export default function LogoText(props: LogoTextProps) {
  return (
    <div class="flex h-fit w-32 shrink-0 grow basis-1/3 flex-col items-center justify-end text-xl text-gray-600 md:basis-1/4">
      <img
        src={props.src}
        alt={props.name}
        class="h-20 max-w-16 object-contain md:max-w-20"
      />
      <p class="max-w-28 text-center text-lg">{props.name}</p>
    </div>
  );
}
