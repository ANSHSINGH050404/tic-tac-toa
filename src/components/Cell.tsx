type Props = {
  value: string | null;
  onClick: () => void;
};

export default function Cell({ value, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 border text-2xl font-bold"
    >
      {value}
    </button>
  );
}