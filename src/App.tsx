import { CategoryPills } from "./components/CategoryPills"
import { PageHeader } from "./layouts/PageHeader"
import { categories, videos } from "./data/home"
import { useState } from "react"
import { VideoGridItem } from "./components/VideoGridItem"
import { Sidebar } from "./layouts/Sidebar"
import { SidebarProvider } from "./contexts/SidebarContext"

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searchValue, setSearchValue] = useState("")

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader searchValue={searchValue} setSearch={setSearchValue} />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.filter(vid => {
                if (selectedCategory === "All" && searchValue === "") return true
                if (searchValue !== "") {
                  return vid.title.toLowerCase().includes(searchValue.toLowerCase())
                }
                return vid.categories.map(i => i.toLowerCase()).includes(selectedCategory.toLowerCase())
              }).map(video => {
                return (
                  <VideoGridItem key={video.id} {...video} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}