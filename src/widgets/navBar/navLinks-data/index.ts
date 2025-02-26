import process from '../../../../public/process.svg'
import ended from '../../../../public/endedTasks.svg'
import statistics from '../../../../public/statistics.svg'

export interface iNavLinks {
  to: string;
  title: string;
  icon: string;
}

export const navLinks: iNavLinks[] = [
  {
    to: "/inProcess",
    title: "в процессе",
    icon: process,
  },
  {
    to: "/ended",
    title: "завершенные",
    icon: ended,
  },
  {
    to: "/statistics",
    title: "статистика",
    icon: statistics,
  },
];
