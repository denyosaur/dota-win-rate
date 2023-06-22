import { getAndPostHeroes } from "@/lib/getAndPostHeroes";

import DashboardComponent from '@/components/DashboardComponent';

const Page = () => {


  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <DashboardComponent />
    </div>
  )
}

export default Page;