interface RatingProps {
  rate: number; // 0 to 5
  count?: number;
}

export default function Rating({ rate, count }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="d-flex align-items-center">
      {stars.map((star) => (
        <span key={star} className="text-warning me-1">
          {rate >= star ? "★" : rate >= star - 0.5 ? "★" : "☆"}
        </span>
      ))}
      {count !== undefined && (
        <span className="text-secondary ms-2">({count})</span>
      )}
    </div>
  );
}
