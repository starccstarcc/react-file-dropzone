import { memo, useMemo } from "react";

export const SelectedFileCard = memo(
  ({
    name = "",
    fileSize = 0,
    onRemove
  }: {
    name: string;
    fileSize: number;
    onRemove: () => void;
  }) => {
    const formatByteToKBText = (value: number): string => {
      const calcValue = value / 1024;
      const roundedCalcValue = calcValue.toFixed(1);
      return `${roundedCalcValue}KB`;
    };

    const fileSizeKB = useMemo(() => {
      return formatByteToKBText(fileSize);
    }, [fileSize]);

    return (
      <div className="accepting-file-card">
        <div className="accepting-file-card-texts">
          <p>・</p>
          <p>{name}</p>
          <p>/</p>
          <p>{fileSizeKB}</p>
        </div>
        <button
          className="button-accepting-file-card-remove"
          type="button"
          onClick={onRemove}
        >
          <span>✕</span>
        </button>
      </div>
    );
  }
);
SelectedFileCard.displayName = "SelectedFileCard";
