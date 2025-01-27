import ProjectItem from "./project-item"
export const Projects=()=>(
      <div className="space-y-8 px-4 py-20 sm:px-0">
        <ProjectItem
          title="Projex"
          description="A project management kanban board to make your life easier"
          image="/projex.jpg"
          imageAlt="projex-mockup"
          direction="ltr"
        />
        <ProjectItem
          title="Habit streaks"
          description="Never miss 2 habits in a row with a github style habit tracker"
          image="/habit-streaks.jpg"
          imageAlt="habit-streaks-mockup"
          direction="rtl"
        />
        <ProjectItem
          title="Yt summerizer"
          description="Summerize youtube videos with ease"
          image="/habit-streaks.jpg"
          imageAlt="habit-streaks-mockup"
          direction="ltr"
      isBuilding
        />
      </div>
)

