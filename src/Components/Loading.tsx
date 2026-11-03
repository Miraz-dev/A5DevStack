const Loading = () => {
  return (
    <div className="flex min-h-[500px] w-full flex-col items-center justify-center gap-5">
      {/* Loading Spinner */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500 border-r-purple-500"></div>

        <div className="absolute inset-2 animate-pulse rounded-full bg-pink-50"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
          Loading Technologies
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Preparing your development stack...
        </p>
      </div>
    </div>
  );
};

export default Loading;
