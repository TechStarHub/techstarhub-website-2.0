import { CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <div
      className={`w-full h-screen flex flex-col gap-4 items-center justify-center`}
    >
      <span className="text-2xl font-medium">Loading...</span>
      <CircularProgress />
    </div>
  );
}
