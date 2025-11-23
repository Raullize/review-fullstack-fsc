"use client";

import { useRouter } from "next/navigation";

export default function ViewDetailsButton({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/products/${productId}`)}
      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
    >
      Ver detalhes
    </button>
  );
}
