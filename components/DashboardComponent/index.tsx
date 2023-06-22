'use client'
import { getAndPostHeroes } from '@/lib/getAndPostHeroes';
import { getAndPostMatches } from '@/lib/getAndPostMatches';
import { postWinRates } from '@/lib/postWinRates';

const DashboardComponent = () => {


  return (
    <div className="flex justify-center items-center flex-col h-full w-full">
      <button className="bg-zinc-500 h-10 w-36 rounded mb-10" onClick={getAndPostHeroes}>
        Update Heroes
      </button>
      <button className="bg-zinc-500 h-10 w-36 rounded mb-10" onClick={getAndPostMatches}>
        Update Matches
      </button>
      <button className="bg-zinc-500 h-10 w-36 rounded mb-10" onClick={postWinRates}>
        Update Win Rates
      </button>
    </div>
  )
}

export default DashboardComponent;